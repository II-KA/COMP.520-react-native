import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ClosetCategories } from '~src/components/ClosetCategories';
import { CategoryPageProps } from '~src/types';

export const ClosetTabCategoryPage: FC<CategoryPageProps> = ({
  navigation,
  route: {
    params: { name, categories, items },
  },
}) => (categories ? <ClosetCategories categories={categories} /> : null);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
