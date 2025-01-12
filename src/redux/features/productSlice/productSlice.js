import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        productName: "Wireless Mouse",
        category: "Electronics",
        imgUrl: "https://img.freepik.com/free-vector/realistic-box-covered-with-red-silk-cloth-isolated-white-background_1441-2113.jpg?ga=GA1.1.292868682.1704867706&semt=ais_hybrid",
        price: 25.99,
        updatedDate: "2025-01-10"
    },
    {
        id: 2,
        productName: "Yoga Mat",
        category: "Fitness",
        imgUrl: "https://img.freepik.com/free-vector/realistic-box-covered-with-red-silk-cloth-isolated-white-background_1441-2113.jpg?ga=GA1.1.292868682.1704867706&semt=ais_hybrid",
        price: 15.49,
        updatedDate: "2025-01-09"
    },
    {
        productName: "Coffee Maker",
        category: "Kitchen",
        imgUrl: "https://img.freepik.com/free-vector/realistic-box-covered-with-red-silk-cloth-isolated-white-background_1441-2113.jpg?ga=GA1.1.292868682.1704867706&semt=ais_hybrid",
        price: 89.99,
        updatedDate: "2025-01-08"
    },
]


export const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        addProductData: (state, action) => {
            state.push({
                id: state.length > 0 ? state[state.length - 1].id : 1,
                ...action.payload
            })
        }
    }
});


export const { addProductData } = productSlice.actions;

export default productSlice.reducer;