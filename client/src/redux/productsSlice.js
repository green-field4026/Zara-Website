import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value:[],
  error :null,
  loading : false
}

// Generates pending, fulfilled and rejected action types

export const fetchProduct = createAsyncThunk('/products/getAll', async () => {
    const data = await axios.get("http://localhost:1337/products/getAll")
   return data.data
})

export const addProduct = createAsyncThunk('/products/create', async (body) => {
  const data = await axios.post("http://localhost:1337/products/add",body)
 return data.data
})

export const updateProduct = createAsyncThunk('/products/update', async (id,body) => {
  const data = await axios.post(`http://localhost:1337/products/update/${id}`,body)
 return data.data
})


const ProductSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false
      state.value = action.payload
      state.error = ''
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false
      state.value = []
      state.error = action.error.message
    })
  }
})


const createProduct = createSlice({
  name: 'createProduct',
  initialState:{
    value:[],
    error :null,
    loading : false
  },
  extraReducers: builder => {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false
      state.value = action.payload
      state.error = ''
    })
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false
      state.value = []
      state.error = action.error.message
    })
  }
})

const updateOneProduct = createSlice({
  name: 'updateOneProduct',
  initialState:{
    value:{},
    error :null,
    loading : false
  },
  extraReducers: builder => {
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false
      state.value = action.payload
      state.error = ''
    })
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false
      state.value = []
      state.error = action.error.message
    })
  }
})


export default {getProducts:ProductSlice.reducer,addProducts:createProduct.reducer,updateOneProduct:updateOneProduct.reducer}