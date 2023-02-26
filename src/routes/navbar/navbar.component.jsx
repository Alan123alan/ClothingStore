import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss"
import {ReactComponent as Logo} from "../../assets/zarape.svg";

const Navbar = ()=>{
    return(
        <Fragment>
            <div className="navbar-container">
                <Link to="/" className="logo-container"><Logo className="logo"/></Link>
                <div className="links-container">
                    <Link to="sign-up" className="link">Sign up</Link>
                    <Link to="sign-in" className="link">Sign in</Link>
                    <Link to="y" className="link">About</Link>
                    <Link to="z" className="link">Contact</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navbar;