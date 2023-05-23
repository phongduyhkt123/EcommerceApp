import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    GET_PRODUCTS: (state) => {
      axios
        .get("http://localhost:8080/api/product")
        .then((res) => {
          state.products.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export const { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } =
  productSlide.actions;

export default productSlide.reducer;
