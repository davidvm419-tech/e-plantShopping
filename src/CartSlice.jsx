import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        // Get product details
        const {name, image, cost } = action.payload;
        // Check if item already exist in cart
        const itemInCart = state.items.find(item => item.name === name);
        if (itemInCart) {
            itemInCart.quantity ++;
        } else {
            // Add to cart if not exists
            state.items.push({name, image, cost, quantity: 1});
        }
    },

    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    }
    ,
    updateQuantity: (state, action) => {
        // Get values from payload
        const {name, quantity} = action.payload
        // Check if item already in cart
        const itemInCart = state.items.find(item => item.name === name);
        if (itemInCart) {
            itemInCart.quantity = q;
        } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
