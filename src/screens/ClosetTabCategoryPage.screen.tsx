import React, { FC } from 'react';
import { StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { Categories } from '~src/components/Categories';
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
      <Button
        title="Add new category"
        onPress={() =>
          rootNavigation.navigate('AddCategoryModal', { parentId: id })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
