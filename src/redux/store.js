import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from "../redux/features/productSlice/productSlice"


const store = configureStore({
    reducer: {
        prouct : productSlice
    }
});

export default store;