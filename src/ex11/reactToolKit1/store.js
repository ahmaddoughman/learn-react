import { configureStore } from '@reduxjs/toolkit'
import bankSlice from './slices/bank-slice'
import productSlice from './slices/product-slice'

export const store = configureStore({
  reducer: {
    bank: bankSlice,
    products: productSlice
  },
})