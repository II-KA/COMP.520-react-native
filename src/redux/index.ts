import { configureStore } from '@reduxjs/toolkit';
import { closetSlice } from './closet';

export const store = configureStore({
  reducer: { closet: closetSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;
