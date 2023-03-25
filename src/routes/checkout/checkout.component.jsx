import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart.reducer.js";
import {CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemImage,
        CheckoutItemDetails, CheckoutItemArrow, CheckoutItemQuantityContainer, CheckoutItemQuantity, CheckoutItemRemove, TotalContainer, CheckoutContainer, CheckoutHeaderContainer, CheckoutHeader} from "./checkout.styles.jsx"

const Checkout = ()=>{
    const cartItems = useSelector(state=>state.cartReducer.cartItems);
    const cartItemsTotal = useSelector(state=>state.cartReducer.cartItemsTotal);
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
            <TotalContainer>Total: {cartItemsTotal}</TotalContainer>
        </CheckoutContainer>
    )
};

const CheckOutItem = ({cartItem})=>{
    const cartItems = useSelector(state=>state.cartReducer.cartItems);
    const {quantity, price, name, imageUrl, id} = cartItem;
    const dispatch = useDispatch();
    const removeCartItemHandler = ()=>{ dispatch(removeItemFromCart(cartItem, cartItems));};
    const clearCartItemHandler = ()=>{ dispatch(clearItemFromCart(cartItem, cartItems));};
    const addCartItemHandler = ()=>{ dispatch(addProductToCart(cartItem, cartItems));};
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