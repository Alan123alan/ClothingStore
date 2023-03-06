import "./product-card.styles.scss"
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({product})=>{
    const {addProductToCart} = useContext(CartContext);
    const {name, price, imageUrl} = product;
    function addProductToCartHandler(){
        addProductToCart(product);
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button children="Add to cart" style="inverted" onClick={addProductToCartHandler}/>
        </div>
    )
};

export default ProductCard;