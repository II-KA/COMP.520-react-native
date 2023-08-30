import React from 'react';
import { useSelector } from 'react-redux';
import { ClosetCategories } from '~src/components/ClosetCategories';
import { closetCategoriesSelector } from '~src/redux/closet/selectors';

export const ClosetTabRootPage = () => {
  const categories = useSelector(closetCategoriesSelector);
  return <ClosetCategories categories={categories} />;
};
