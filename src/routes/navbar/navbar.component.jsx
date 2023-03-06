import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss"
import {ReactComponent as Logo} from "../../assets/zarape.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import ShoppingBag from "../../components/shopping-bag/shopping-bag.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navbar = ()=>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return(
        <Fragment>
            <div className="navbar-container">
                <Link to="/" className="logo-container"><Logo className="logo"/></Link>
                <div className="links-container">
                    {currentUser? 
                        (<Link to="/" className="link" onClick={signOutUser}>Sign out</Link>)
                        :
                        (<Link to="auth" className="link">Sign in/Sign up</Link>)
                    }
                    <Link to="y" className="link">About</Link>
                    <Link to="z" className="link">Contact</Link>
                    <ShoppingBag/>
                    {isCartOpen && <CartDropdown/>}
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navbar;