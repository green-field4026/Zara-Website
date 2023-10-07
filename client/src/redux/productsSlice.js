import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  filterd: [],
  error: null,
  loading: false,
};

// Generates pending, fulfilled and rejected action types

export const fetchProduct = createAsyncThunk("/products/getAll", async () => {
  const data = await axios.get("http://localhost:1337/products/getAll");
  return data.data;
});

export const fetchProductByCategory = createAsyncThunk(
  "/products/category",
  async (category) => {
    const data = await axios.get(
      `http://localhost:1337/products/filter/${category}`
    );
    // console.log(data);
    return data.data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchProductByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.filterd = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductByCategory.rejected, (state, action) => {
      state.loading = false;
      state.filterd = [];
      state.error = action.error.message;
    });
  },
});


export default {
  getProducts: ProductSlice.reducer,
};
