import {ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg";
import "./shopping-bag.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ShoppingBag = ()=>{
    const {cartItems, isCartOpen, toggleCart} = useContext(CartContext);
    function toggleCartHandler(){
        toggleCart(isCartOpen);
    }
    return(
        <div className="shopping-bag-container" onClick={toggleCartHandler}>
            <ShoppingBagIcon className="shopping-bag-icon"/>
            <span className="shopping-bag-items">{cartItems.reduce((total, cartItem)=>total+cartItem.quantity,0)}</span>
        </div>    
    )
};

export default ShoppingBag;