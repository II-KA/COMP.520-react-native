import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Button, Image } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import * as RNFS from 'react-native-fs';
import { theme } from '~src/theme';
import { AddItemModalProps } from '~src/types';
import { closetActions } from '~src/redux/closet/index';

export const AddItemModal: FC<AddItemModalProps> = ({
  navigation,
  route: {
    params: { categoryId },
  },
}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | undefined>(undefined);

  const openImagePicker = async () => {
    const res = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
      presentationStyle: 'popover',
    });
    handleImageResult(res);
  };

  const openCamera = async () => {
    const res = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    });
    handleImageResult(res);
  };

  const handleImageResult = ({
    didCancel,
    errorMessage,
    assets,
  }: ImagePickerResponse) => {
    if (didCancel) return;
    if (errorMessage) console.log('error', errorMessage);
    if (assets) setImage(assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Choose from Gallery" onPress={openImagePicker} />
      </View>
      <View style={styles.button}>
        <Button title="Open Camera" onPress={openCamera} />
      </View>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <View style={styles.button}>
        <Button
          disabled={image === undefined}
          title="Add"
          onPress={async () => {
            const imagePath = `${
              RNFS.DocumentDirectoryPath
            }/${new Date().toISOString()}.jpg`.replace(/:/g, '-');
            await RNFS.copyFile(image!, imagePath);

            dispatch(
              closetActions.addItemToCategory({
                categoryId,
                item: { imagePath },
              }),
            );
            navigation.pop(1);
          }}
          color={theme.colorPurple90}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
  },
  input: {
    fontSize: 16,
  },
  image: {
    height: 300,
    width: 300,
    margin: 10,
  },
});
