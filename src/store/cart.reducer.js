import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
};

export const REDUX_PERSIST_ACTION_TYPES = {
    REHYDRATE: "persist/REHYDRATE"
}


const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
    cartItemsCount: 0,
    cartItemsTotal: 0
};


export const cartReducer = (state = INITIAL_STATE, action)=>{
    const {type, payload} = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        // case REDUX_PERSIST_ACTION_TYPES.REHYDRATE:
        //     return {
        //         ...state,
        //         ...payload.cartReducer
        //     }
        default:
            return {
                ...state
            }
    }
};


const addCartItem = (cartItems, productToAdd)=>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id==productToAdd.id);
    if(existingCartItem){
       return cartItems.map(cartItem=>cartItem.id==productToAdd.id?{...cartItem, quantity:cartItem.quantity+1 }:cartItem);
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
};


const removeCartItem = (cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id==cartItemToRemove.id);
    if(existingCartItem && existingCartItem.quantity>1){
        return cartItems.map(cartItem=>cartItem.id==cartItemToRemove.id?{...cartItem, quantity: cartItem.quantity-1}:cartItem);
    }
    return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id);
};

const clearCartItem = (cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id!=cartItemToClear.id);
};


export const addProductToCart = (productToAdd, cartItems)=>{
    const newCartItems = addCartItem(cartItems, productToAdd);
    return updateCartItemsReducer(newCartItems);
};


export const removeItemFromCart = (cartItemToRemove, cartItems)=>{
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return updateCartItemsReducer(newCartItems);;
};


export const clearItemFromCart = (cartItemToClear, cartItems)=>{
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return updateCartItemsReducer(newCartItems);;
};


const updateCartItemsReducer = (cartItems)=>{
    const cartItemsCount = cartItems.reduce((total, cartItem)=>total+cartItem.quantity,0)
    const cartItemsTotal = cartItems.reduce((total, cartItem)=>total+(cartItem.quantity*cartItem.price),0)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems, cartItemsCount, cartItemsTotal}};
};


export const toggleCart = ()=>{
    return {type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, payload: {}}
}