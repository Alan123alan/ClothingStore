import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { productsReducer } from "./products.reducer";
import { cartReducer } from "./cart.reducer"

export const rootReducer = combineReducers({
    userReducer,
    productsReducer,
    cartReducer
});