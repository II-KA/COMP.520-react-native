import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Item } from '~src/types';
import { theme } from '~src/theme';
import { DeleteIcon } from 'assets/Icons';
import { useDispatch } from 'react-redux';
import { closetActions } from '~src/redux/closet';

const DisplayItem: FC<{ item: Item; categoryId: string }> = ({
  item,
  categoryId,
}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const readFile = async () => {
      const res = await RNFS.readFile(item.imagePath, 'base64');
      setImage(res);
    };
    readFile();
  });

  if (!image) return <></>;
  return (
    <>
      <Image
        style={styles.image}
        source={{ uri: `data:image/png;base64,${image}` }}
      />
      <Pressable
        onPress={() =>
          dispatch(closetActions.deleteItemFromCategory({ categoryId, item }))
        }
        style={({ pressed }) => [
          styles.leftButton,
          ...(pressed ? [styles.pressedButton] : []),
        ]}
        android_disableSound={true}>
        <DeleteIcon color={theme.colorOrangeRed} size={28} />
      </Pressable>
    </>
  );
};

export const Items: FC<{ items: Item[]; categoryId: string }> = ({
  items,
  categoryId,
}) => (
  <View style={styles.container}>
    {items.map(item => (
      <View key={item.id}>
        <DisplayItem item={item} categoryId={categoryId} />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  leftButton: {
    position: 'absolute',
    right: 0,
    top: 13,
    padding: 10,
    borderRadius: 50,
  },
  item: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    margin: 10,
  },
  pressedButton: {
    backgroundColor: theme.colorBlack20,
  },
});
