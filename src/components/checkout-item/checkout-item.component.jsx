import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({cartItem})=>{
    const {addProductToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);
    const {quantity, price, name, imageUrl, id} = cartItem;
    const removeCartItemHandler = ()=>{ removeItemFromCart(cartItem);};
    const clearCartItemHandler = ()=>{ clearItemFromCart(cartItem);};
    const addCartItemHandler = ()=>{ addProductToCart(cartItem);};
    return(
        <div className="checkout-item-container" key={id}>
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow"  onClick={removeCartItemHandler}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={addCartItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearCartItemHandler}>&#10005;</div>
        </div>
    )
};

export default CheckOutItem;