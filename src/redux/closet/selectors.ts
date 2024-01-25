import { RootState } from '..';
import { Category } from '~src/types';

export const categoriesSelector = (state: RootState): Category[] =>
  state.closet.categories;
