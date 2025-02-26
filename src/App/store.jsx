import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice'
import cartReducer from '../Slices/cartSlice'

export const store = configureStore({
    reducer:{
        userData:userReducer,
        cartData:cartReducer,
    }
})