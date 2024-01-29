import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { theme } from '~src/theme';
import { AddCategoryModalProps } from '~src/types';
import { closetActions } from '~src/redux/closet/index';

export const AddCategoryModal: FC<AddCategoryModalProps> = ({
  navigation,
  route: {
    params: { parentId },
  },
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('new');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Category name"
        onChangeText={setName}
        value={name}
      />
      <Button
        disabled={name.length === 0}
        title="Add"
        onPress={() => {
          dispatch(closetActions.addCategory({ name, parentId }));
          navigation.pop(1);
        }}
        color={theme.colorPurple90}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
