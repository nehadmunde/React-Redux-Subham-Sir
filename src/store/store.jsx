import { configureStore } from '@reduxjs/toolkit';
import { counerSlice } from '../slices/counterSlice';
export const store = configureStore({
  reducer: {
    counter: counerSlice,
  },
});
