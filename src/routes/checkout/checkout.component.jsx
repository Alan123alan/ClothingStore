import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemImage,
        CheckoutItemDetails, CheckoutItemArrow, CheckoutItemQuantityContainer, CheckoutItemQuantity, CheckoutItemRemove, TotalContainer, CheckoutContainer, CheckoutHeaderContainer, CheckoutHeader} from "./checkout.styles.jsx"

const Checkout = ()=>{
    const {cartItems} = useContext(CartContext);
    return(
        <CheckoutContainer>
            <CheckoutHeaderContainer>
                <CheckoutHeader>
                    <span>Product</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Description</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Quantity</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Price</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Remove</span>
                </CheckoutHeader>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem=><CheckOutItem id={cartItem.id} cartItem={cartItem}/>)}
            <TotalContainer>Total: {cartItems.reduce((total, cartItem)=>total+(cartItem.quantity*cartItem.price),0)}</TotalContainer>
        </CheckoutContainer>
    )
};

const CheckOutItem = ({cartItem})=>{
    const {addProductToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);
    const {quantity, price, name, imageUrl, id} = cartItem;
    const removeCartItemHandler = ()=>{ removeItemFromCart(cartItem);};
    const clearCartItemHandler = ()=>{ clearItemFromCart(cartItem);};
    const addCartItemHandler = ()=>{ addProductToCart(cartItem);};
    return(
        <CheckoutItemContainer key={id}>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt={name}/>
            </CheckoutItemImageContainer>
            <CheckoutItemDetails>{name}</CheckoutItemDetails>
            <CheckoutItemQuantityContainer>
                <CheckoutItemArrow  onClick={removeCartItemHandler}>&#10094;</CheckoutItemArrow>
                <CheckoutItemQuantity>{quantity}</CheckoutItemQuantity>
                <CheckoutItemArrow onClick={addCartItemHandler}>&#10095;</CheckoutItemArrow>
            </CheckoutItemQuantityContainer>
            <CheckoutItemDetails>${price}</CheckoutItemDetails>
            <CheckoutItemRemove onClick={clearCartItemHandler}>&#10005;</CheckoutItemRemove>
        </CheckoutItemContainer>
    )
};

export default Checkout;