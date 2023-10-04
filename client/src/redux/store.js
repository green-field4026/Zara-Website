import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../redux/productsSlice'
 
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
})