import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cartReducer from "./cartSlice";


export const store = configureStore({
  reducer: {
    dishes,
    cart: cartReducer,
 
  },
})