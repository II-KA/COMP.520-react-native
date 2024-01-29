import React, { FC } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Category } from '~src/types';
import { AppText } from './AppText';
import { useClosetNavigation } from '~src/hooks/useTypedNavigation';
import { theme } from '~src/theme';
import { DeleteIcon } from 'assets/Icons';
import { useDispatch } from 'react-redux';
import { closetActions } from '~src/redux/closet';

export const Categories: FC<{ categories: Category[]; parentId?: string }> = ({
  categories,
  parentId,
}) => {
  const dispatch = useDispatch();
  const homeNavigation = useClosetNavigation();
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <View key={category.name}>
          <Pressable
            onPress={() => homeNavigation.push('CategoryPage', category)}
            style={({ pressed }) => [
              styles.button,
              ...(pressed ? [styles.pressedButton] : []),
            ]}
            android_disableSound={true}>
            {({ pressed }) => <AppText size={12}>{category.name}</AppText>}
          </Pressable>
          <Pressable
            onPress={() =>
              dispatch(
                closetActions.deleteCategory({
                  parentId: parentId,
                  id: category.id,
                }),
              )
            }
            style={({ pressed }) => [
              styles.deleteContainer,
              ...(pressed ? [styles.pressedButton] : []),
            ]}
            android_disableSound={true}>
            <DeleteIcon color="orangered" size={30} />
          </Pressable>
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
    //flexWrap: 'wrap',
    //justifyContent: 'flex-start',
    //alignItems: 'stretch',
    alignContent: 'stretch',
    margin: 15,
  },
  deleteContainer: {
    position: 'absolute',
    right: 0,
    padding: 10,
    borderRadius: 50,
  },
  button: {
    //flexGrow: 1,
    padding: 20,
    //borderWidth: 4,
    //borderStyle: 'solid',
    //borderColor: theme.colorPurple50,
    backgroundColor: theme.colorBlack10,
    borderRadius: 10,
  },
  pressedButton: {
    backgroundColor: theme.colorGrey,
  },
});
