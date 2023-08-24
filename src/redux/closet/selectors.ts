import { RootState } from '..';
import { ClosetCategory } from '~src/types';

export const closetCategoriesSelector = (state: RootState): ClosetCategory[] =>
  state.closet.categories;
