import { createContext, useState } from "react";
//remember that in javascript arrays are truthy even if empty
//cartItems es un array de objetos {id, name, price, imageUrl, quantity}
//productToAdd es un objeto {id, name, price, imageUrl}
const addCartItem = (cartItems, productToAdd)=>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id==productToAdd.id);
    if(existingCartItem){
       return cartItems.map(cartItem=>cartItem.id==productToAdd.id?{...cartItem, quantity:++cartItem.quantity }:cartItem);
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
};


const removeCartItem = (cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id==cartItemToRemove.id);
    if(existingCartItem && existingCartItem.quantity>1){
        return cartItems.map(cartItem=>cartItem.id==cartItemToRemove.id?{...cartItem, quantity: --cartItem.quantity}:cartItem);
    }
    return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id);
};

const clearCartItem = (cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id!=cartItemToClear.id);
};

export const CartContext = createContext({
//    cart: {
//        cartItems: [], 
//        isCartOpen: false
//     },
    cartItems: [],
    isCartOpen: false,
    // setCart: ()=>null,
    setCartItems: ()=>null,
    setIsCartOpen: ()=>null,
    addProductToCart: ()=>null,
    removeItemFromCart: ()=>null,
    clearItemFromCart: ()=>null,
    toggleCart: ()=>null,
});

export const CartProvider = ({children})=>{
    // const [cart, setCart] = useState({
    //     cartItems:[],
    //     isCartOpen: false
    // });
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addProductToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };
    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };
    const toggleCart = (isCartOpen)=>{
        setIsCartOpen(!isCartOpen);
    }
    const value = { cartItems, isCartOpen, addProductToCart, removeItemFromCart, clearItemFromCart ,toggleCart};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};
