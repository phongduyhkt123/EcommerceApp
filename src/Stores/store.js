import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product/productReducer";
import authenReducer from "./authen/authenReducer";
import cartReducer from "./cart/cartReducer";
import orderReducer from "./order/orderReducer";
import alertReducer from "./alert/alertReducer";
import addressReducer from "./address/addressReducer";
import shippingReducer from "./shipping/shippingReducer";
import signupReducer from "./signup/signupReducer";
import commentReducer from "./comment/commentReducer";

const rootReducer = combineReducers({
  productReducer,
  authenReducer,
  cartReducer,
  orderReducer,
  addressReducer,
  shippingReducer,
  alertReducer,
  signupReducer,
  commentReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
