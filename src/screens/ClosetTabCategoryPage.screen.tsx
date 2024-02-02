import React, { FC } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Categories } from '~src/components/Categories';
import { Items } from '~src/components/Items';
import { useRootNavigation } from '~src/hooks/useTypedNavigation';
import { categorySelector } from '~src/redux/closet/selectors';
import { CategoryPageProps } from '~src/types';

export const ClosetTabCategoryPage: FC<CategoryPageProps> = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const rootNavigation = useRootNavigation();
  const category = useSelector(categorySelector({ id }));

  if (!category) return null;
  return (
    <>
      {category.categories && (
        <Categories categories={category.categories} parentId={id} />
      )}
      {category.items && (
        <Items items={category.items} categoryId={category.id} />
      )}
      <View style={styles.buttons}>
        {(category.categories === undefined ||
          category.categories.length === 0) && (
          <Button
            title="Add new item"
            onPress={() =>
              rootNavigation.navigate('AddItemModal', { categoryId: id })
            }
          />
        )}
        {(category.items === undefined || category.items.length === 0) && (
          <Button
            title="Add new category"
            onPress={() =>
              rootNavigation.navigate('AddCategoryModal', { parentId: id })
            }
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 'auto',
  },
});
