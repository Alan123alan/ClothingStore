import "./button.styles.scss"
/*Website has three button stylings: default, inverted and google-sign-in*/

const BUTTON_STYLE_CLASSES = {
    inverted : "inverted",
    google : "google-sign-in"
}

const Button = ({children, style, ...otherProps})=>{
    return <button className={`button-container ${BUTTON_STYLE_CLASSES[style]}`} {...otherProps} >{children}</button>
};


export default Button;