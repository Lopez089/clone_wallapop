import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'Redux-Slice/product'

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});
