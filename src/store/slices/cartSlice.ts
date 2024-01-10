import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {cartItems: [] as any[]},
	reducers: {
		addToCart: (state, action) => {
			// aynı üründen 2. kez eklendiğinde listeye eklenmesi yerine adedinin artırılması..
			state.cartItems.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item: any) => item.id !== action.payload.id,
			);
		},
		clearCart: state => {
			state.cartItems = [];
		},
	},
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
