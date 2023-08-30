import React, { FC, useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { theme } from '~src/theme';

export const AddCategoryModal: FC = () => {
  const [name, setName] = useState('');

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
        onPress={() => {}}
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
