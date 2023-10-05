import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  product: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types

export const fetchProduct = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('http://localhost:1337/products/getAll')
    .then(response => response.data)
})

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
      state.error = ''
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false
      state.product = []
      state.error = action.error.message
    })
  }
})

export default ProductSlice.reducer
