import { configureStore } from '@reduxjs/toolkit'
import Products from '../redux/productsSlice'
 
export const store = configureStore({
  reducer: {
     ...Products
  },
})