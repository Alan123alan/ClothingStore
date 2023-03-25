import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/cart.reducer";
import Button from "../../components/button/button.component";
import {NavbarContainer, NavbarLinksContainer, NavbarLink,  NavbarLogoContainer, NavbarLogo,
        ShoppingBagContainer, ShoppingBagIcon, ShoppingBagItemsContainer,
        CartDropdownContainer, EmptyMessageContainer, CartItemsContainer, 
        CartItemContainer, CartItemDetailsContainer, CartItemImage, CartItemName, CartIemPrice} from "./navbar.styles.jsx"

const Navbar = ()=>{
    const currentUser = useSelector((state)=>state.userReducer.currentUser);
    const isCartOpen = useSelector((state=>state.cartReducer.isCartOpen));
    console.log(isCartOpen)
    return(
        <Fragment>
            <NavbarContainer>
                <NavbarLogoContainer to="/"><NavbarLogo/></NavbarLogoContainer>
                <NavbarLinksContainer>
                    {currentUser? 
                        (<NavbarLink to="/" onClick={signOutUser}>Sign out</NavbarLink>)
                        :
                        (<NavbarLink to="auth">Sign in/Sign up</NavbarLink>)
                    }
                    <NavbarLink to="y">About</NavbarLink>
                    <NavbarLink to="z">Contact</NavbarLink>
                    <ShoppingBag/>
                    {isCartOpen && <CartDropdown/>}
                </NavbarLinksContainer>
            </NavbarContainer>
            <Outlet/>
        </Fragment>
    )
};

const ShoppingBag = ()=>{
    const cartItemsCount = useSelector((state=>state.cartReducer.cartItemsCount));
    const dispatch = useDispatch();
    function toggleCartHandler(){
        dispatch(toggleCart());
    }
    return(
        <ShoppingBagContainer onClick={toggleCartHandler}>
            <ShoppingBagIcon/>
            <ShoppingBagItemsContainer>{cartItemsCount}</ShoppingBagItemsContainer>
        </ShoppingBagContainer>    
    )
};

const CartDropdown = ()=>{
    const cartItems = useSelector(state=>state.cartReducer.cartItems);
    const navigate = useNavigate();
    const navigateToCheckout = ()=>{navigate("/checkout");};
    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {   
                    cartItems.length?
                    cartItems.map((cartItem)=><CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <Button style="cart" children="Go to checkout" onClick={navigateToCheckout}/>
        </CartDropdownContainer>
    )
};

const CartItem = ({item})=>{
    const {name, price, quantity, imageUrl} = item;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name}/>
            <CartItemDetailsContainer>
                <CartItemName>{name}</CartItemName>
                <CartIemPrice>{quantity} x ${price}</CartIemPrice>
            </CartItemDetailsContainer>
        </CartItemContainer>
    )
};

export default Navbar;