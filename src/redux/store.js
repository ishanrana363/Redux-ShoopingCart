import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from "../redux/features/productSlice/productSlice"
import cartSlice  from './features/cartSlice/cartSlice';


const store = configureStore({
    reducer: {
        prouct : productSlice,
        cartProduct : cartSlice
    }
});

export default store;