import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./slices/cartSlice";

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
});

export const globalStore = configureStore({
	reducer: rootReducer,
});
