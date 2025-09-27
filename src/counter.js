
import { createSlice } from "@reduxjs/toolkit"

const initialState = { items: [] };

const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find((p) => p.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((p) => p.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        increase: (state, action) => {
            const product = state.items.find((p) => p.id === action.payload);
            if (product) product.quantity += 1;
        },
        decrease: (state, action) => {
            const product = state.items.find((p) => p.id === action.payload);
            if (product && product.quantity > 1) product.quantity -= 1;
        },
    },
})

export const { addToCart, removeFromCart, clearCart, increase, decrease } = counter.actions;
export default counter.reducer;
