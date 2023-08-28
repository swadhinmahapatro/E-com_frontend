import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productLoading: false,
  productError: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    ProductFetchStart: (state, action) => {
      state.productLoading = true;
      state.productError = null;
      state.products = [];
    },
    ProductFetchSuccess: (state, action) => {
      state.products = action.payload;
      state.productLoading = false;
      state.productError = null;
    },
    ProdcutFetchError: (state, action) => {
      state.products = [];
      state.productLoading = false;
      state.productError = action.payload;
    },
    resetProductState: () => initialState,
  },
});
export const {
  ProductFetchStart,
  ProductFetchSuccess,
  ProdcutFetchError,
  resetProductState,
} = productSlice.actions;
export default productSlice.reducer;