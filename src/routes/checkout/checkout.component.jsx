import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss"

const Checkout = ()=>{
    const {cartItems} = useContext(CartContext);
    return(
        <div className="checkout-container">
            <div className="checkout-header-container">
                <div className="checkout-header">
                    <span>Product</span>
                </div>
                <div className="checkout-header">
                    <span>Description</span>
                </div>
                <div className="checkout-header">
                    <span>Quantity</span>
                </div>
                <div className="checkout-header">
                    <span>Price</span>
                </div>
                <div className="checkout-header">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem=>{
                return(
                    <CheckOutItem id={cartItem.id} cartItem={cartItem}/>
                )
            })}
            <span className="total">Total: {cartItems.reduce((total, cartItem)=>total+(cartItem.quantity*cartItem.price),0)}</span>
        </div>
    )
};

export default Checkout;