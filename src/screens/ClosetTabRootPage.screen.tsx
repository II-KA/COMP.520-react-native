import React from 'react';
import { useSelector } from 'react-redux';
import { Categories } from '~src/components/Categories';
import { categoriesSelector } from '~src/redux/closet/selectors';

export const ClosetTabRootPage = () => {
  const categories = useSelector(categoriesSelector);
  return <Categories categories={categories} />;
};
