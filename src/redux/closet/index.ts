import { createSlice } from '@reduxjs/toolkit';
import { ClosetCategory } from '~src/types';

export interface ClosetState {
  categories: ClosetCategory[];
}

const initialState: ClosetState = {
  // categories: [],
  categories: [
    {
      name: 'tops',
      position: 0,
      categories: [{ name: 'sweaters', position: 0, items: [] }],
    },
    {
      name: 'bottoms',
      position: 1,
      categories: [
        { name: 'pants', position: 0, items: [] },
        { name: 'skirts', position: 1, items: [] },
      ],
    },
    { name: 'dresses', position: 2, items: [] },
  ],
};

export const closetSlice = createSlice({
  name: 'closet',
  initialState,
  reducers: {},
});

// TODO: add actions
export const closetActions = { ...closetSlice.actions };
