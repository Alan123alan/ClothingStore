import {BaseButton, GoogleSignInButton, InvertedButton, CartDropdownButton, ProductCardButton} from "./button.styles.jsx"
/*Website has three button stylings: default, inverted and google-sign-in*/

const BUTTON_STYLE_CLASSES = {
    "base" : BaseButton,
    "google" : GoogleSignInButton,
    "inverted" : InvertedButton,
    "cart" : CartDropdownButton,
    "card" : ProductCardButton
}

const Button = ({children, style, ...otherProps})=>{
    const CustomButton = !style?BaseButton:BUTTON_STYLE_CLASSES[style];
    return <CustomButton {...otherProps}>{children}</CustomButton>
};


export default Button;