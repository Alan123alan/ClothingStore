// import {ReactComponent as Logo} from "../../assets/zarape.svg";
// import {ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg";
import { Fragment, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// import ShoppingBag from "../../components/shopping-bag/shopping-bag.component";
// import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
// import {CartDropdownButton} from "../../components/button/button.styles"
import {NavbarContainer, NavbarLinksContainer, NavbarLink,  NavbarLogoContainer, NavbarLogo,
        ShoppingBagContainer, ShoppingBagIcon, ShoppingBagItemsContainer,
        CartDropdownContainer, EmptyMessageContainer, CartItemsContainer, 
        CartItemContainer, CartItemDetailsContainer, CartItemImage, CartItemName, CartIemPrice} from "./navbar.styles.jsx"

const Navbar = ()=>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
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
    const {cartItems, isCartOpen, toggleCart} = useContext(CartContext);
    function toggleCartHandler(){
        toggleCart(isCartOpen);
    }
    return(
        <ShoppingBagContainer onClick={toggleCartHandler}>
            <ShoppingBagIcon/>
            <ShoppingBagItemsContainer>{cartItems.reduce((total, cartItem)=>total+cartItem.quantity,0)}</ShoppingBagItemsContainer>
        </ShoppingBagContainer>    
    )
};

const CartDropdown = ()=>{
    const {cartItems} = useContext(CartContext);
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