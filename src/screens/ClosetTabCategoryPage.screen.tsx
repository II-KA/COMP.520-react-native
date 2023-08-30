import React, { FC } from 'react';
import { StyleSheet, Button } from 'react-native';
import { ClosetCategories } from '~src/components/ClosetCategories';
import {
  useClosetNavigation,
  useRootNavigation,
} from '~src/hooks/useTypedNavigation';
import { CategoryPageProps } from '~src/types';

export const ClosetTabCategoryPage: FC<CategoryPageProps> = ({
  navigation,
  route: {
    params: { name, categories, items },
  },
}) => {
  const rootNavigation = useRootNavigation();
  if (categories) <ClosetCategories categories={categories} />;
  return (
    <Button
      title="Add new category"
      onPress={() => rootNavigation.navigate('ExampleModal')}
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
