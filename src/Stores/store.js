import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import productReducer from "./productSlide";
import productReducer from "./product/productReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  productReducer,
  loginReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
