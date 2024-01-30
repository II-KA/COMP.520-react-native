import React, { FC, useState } from 'react';
import { StyleSheet, View, Pressable, TextInput } from 'react-native';
import { Category } from '~src/types';
import { AppText } from './AppText';
import { useClosetNavigation } from '~src/hooks/useTypedNavigation';
import { theme } from '~src/theme';
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from 'assets/Icons';
import { useDispatch } from 'react-redux';
import { closetActions } from '~src/redux/closet';

const EditCategory: FC<{
  category: Category;
  onClose: () => void;
}> = ({ onClose, category: { id, name } }) => {
  const dispatch = useDispatch();
  const [editName, setEditName] = useState(name);

  return (
    <>
      <View style={styles.editCategory}>
        <TextInput
          placeholder="Category name"
          onChangeText={setEditName}
          value={editName}
          style={styles.editName}
        />
      </View>
      <Pressable
        onPress={() => {
          dispatch(
            closetActions.updateCategory({
              id,
              name: editName,
            }),
          );
          onClose();
        }}
        style={({ pressed }) => [
          styles.rightButton,
          ...(pressed ? [styles.pressedButton] : []),
        ]}
        android_disableSound={true}>
        <CheckIcon color={theme.colorGrey} size={28} />
      </Pressable>
      <Pressable
        onPress={onClose}
        style={({ pressed }) => [
          styles.leftButton,
          ...(pressed ? [styles.pressedButton] : []),
        ]}
        android_disableSound={true}>
        <CloseIcon color={theme.colorGrey} size={28} />
      </Pressable>
    </>
  );
};

const ViewCategory: FC<{
  category: Category;
  parentId?: string;
  onEditOpen: () => void;
}> = ({ category: { id, name }, parentId, onEditOpen }) => {
  const dispatch = useDispatch();
  const homeNavigation = useClosetNavigation();
  return (
    <>
      <Pressable
        onPress={() => homeNavigation.push('CategoryPage', { id, name })}
        style={({ pressed }) => [
          styles.category,
          ...(pressed ? [styles.pressedButton] : []),
        ]}
        android_disableSound={true}>
        {({ pressed }) => <AppText size={16}>{name}</AppText>}
      </Pressable>
      <Pressable
        onPress={onEditOpen}
        style={({ pressed }) => [
          styles.rightButton,
          ...(pressed ? [styles.pressedButton] : []),
        ]}
        android_disableSound={true}>
        <EditIcon color={theme.colorGrey} size={28} />
      </Pressable>
      <Pressable
        onPress={() => dispatch(closetActions.deleteCategory({ parentId, id }))}
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

export const Categories: FC<{ categories: Category[]; parentId?: string }> = ({
  categories,
  parentId,
}) => {
  const [editOpen, setEditOpen] = useState('');

  return (
    <View style={styles.container}>
      {categories.map(category => (
        <View key={category.id}>
          {editOpen === category.id ? (
            <EditCategory category={category} onClose={() => setEditOpen('')} />
          ) : (
            <ViewCategory
              category={category}
              parentId={parentId}
              onEditOpen={() => setEditOpen(category.id)}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  rightButton: {
    position: 'absolute',
    right: 40,
    top: 13,
    padding: 10,
    borderRadius: 50,
  },
  leftButton: {
    position: 'absolute',
    right: 0,
    top: 13,
    padding: 10,
    borderRadius: 50,
  },
  category: {
    padding: 20,
    backgroundColor: theme.colorBlack10,
    borderRadius: 10,
    marginTop: 10,
  },
  editCategory: {
    padding: 20,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: theme.colorBlack10,
    borderRadius: 10,
    marginTop: 10,
  },
  editName: {
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
  pressedButton: {
    backgroundColor: theme.colorBlack20,
  },
});
