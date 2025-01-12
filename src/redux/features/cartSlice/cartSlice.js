import { createSlice } from '@reduxjs/toolkit'

const initialState = [

]


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const existsProduct = state.find((product) => product.id === action.payload.id);
            if (existsProduct) {
                alert("Product already exists")
            } else {
                state.push({
                    id: Date.now(),
                    quantity: 1,
                    ...action.payload,
                })
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload)
        },
        increase: (state, action) => {
            const proudct = state.find((product) => product.id === action.payload);
            if (proudct) {
                proudct.quantity += 1;
            }
        },
        decrease: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            console.log(product)
            if (product && product.quantity>0) {
                product.quantity -= 1;
            }
        },
    }
});


export const { addCart, removeFromCart, increase,decrease } = cartSlice.actions;

export default cartSlice.reducer;