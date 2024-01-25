import React, { FC } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Categories } from '~src/components/Categories';
import { useRootNavigation } from '~src/hooks/useTypedNavigation';
import { CategoryPageProps } from '~src/types';

export const ClosetTabCategoryPage: FC<CategoryPageProps> = ({
  navigation,
  route: {
    params: { id, name, categories, items },
  },
}) => {
  const rootNavigation = useRootNavigation();
  if (categories) return <Categories categories={categories} />;
  return (
    <Button
      title="Add new category"
      onPress={() =>
        rootNavigation.navigate('AddCategoryModal', { parentId: id })
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
