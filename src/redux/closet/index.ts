import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '~src/types';

export interface ClosetState {
  categories: Category[];
}

const initialState: ClosetState = {
  // categories: [],
  categories: [
    {
      id: 'a',
      name: 'tops',
      position: 0,
      categories: [{ id: 'ab', name: 'sweaters', position: 0 }],
    },
    {
      id: 'abc',
      name: 'bottoms',
      position: 1,
      categories: [
        { id: 'abcd', name: 'pants', position: 0 },
        { id: 'abcde', name: 'skirts', position: 1 },
      ],
    },
    { id: 'abcdef', name: 'dresses', position: 2 },
  ],
};

export const closetSlice = createSlice({
  name: 'closet',
  initialState,
  reducers: {
    addCategory: (
      state,
      action: PayloadAction<{ name: string; parentId?: string }>,
    ) => {
      const { parentId, name } = action.payload;
      const newCategory = { id: uuidv4(), name, position: 0 };
      if (!parentId) state.categories = [newCategory];
      else {
        const add = (category: Category) => ({
          ...category,
          categories: !category.categories
            ? [newCategory]
            : [
                ...category.categories,
                {
                  ...newCategory,
                  position: category.categories.length,
                },
              ],
        });

        state.categories = state.categories.map(
          executeActionOnCategory({ id: parentId, action: add }),
        );
      }
    },
    deleteCategory: (
      state,
      action: PayloadAction<{ parentId?: string; id: string }>,
    ) => {
      const { parentId, id } = action.payload;
      if (!parentId)
        state.categories = state.categories.filter(c => c.id !== id);
      else {
        const remove = (category: Category) => ({
          ...category,
          categories: category.categories?.filter(c => c.id !== id),
        });

        state.categories = state.categories.map(
          executeActionOnCategory({ id: parentId, action: remove }),
        );
      }
    },
    updateCategory: (
      state,
      action: PayloadAction<{ id: string; name?: string; position?: number }>,
    ) => {
      const { id, name, position } = action.payload;
      const modify = (category: Category) => ({
        ...category,
        ...(name && { name }),
        ...(position && { position }),
      });

      state.categories = state.categories.map(
        executeActionOnCategory({ id, action: modify }),
      );
    },
  },
});

const executeActionOnCategory =
  ({ id, action }: { id: string; action: (category: Category) => Category }) =>
  (category: Category): Category => {
    if (category.id === id) return action(category);
    return {
      ...category,
      categories: category.categories?.map(
        executeActionOnCategory({ id, action }),
      ),
    };
  };

export const closetActions = { ...closetSlice.actions };
