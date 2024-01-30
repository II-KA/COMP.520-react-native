import { RootState } from '..';
import { Category } from '~src/types';

export const categoriesSelector = (state: RootState): Category[] =>
  state.closet.categories;

export const categorySelector =
  ({ id }: { id: string }) =>
  (state: RootState): Category | undefined => {
    const result = state.closet.categories
      .map(findCategory(id))
      .filter(c => c !== undefined) as Category[];
    return result.length === 1 ? result[0] : undefined;
  };

const findCategory =
  (id: string) =>
  (category: Category): Category | undefined => {
    if (category.id === id) return category;
    const result = category.categories
      ?.map(findCategory(id))
      .filter(c => c !== undefined) as Category[] | undefined;
    return result && result.length === 1 ? result[0] : undefined;
  };
