import { Fragment, useContext } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router";
import { ProductsContext } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";
// import ProductCard from "../../components/product-card/product-card.component";
import Button from "../../components/button/button.component";
import {ProductCardContainer, ProductCardImage, ProductCardFooter, ProductCardName, ProductCardPrice, ProductsContainer} from "./shop.styles.jsx"
// import {ProductCardButton} from "../../components/button/button.styles"


const Shop = ()=>{
    return (
        <Routes>
            <Route index element={<ShopSectionsPreview/>}/>
            <Route path=":section" element={<ShopSection/>}/>
        </Routes>
    )
};


const ShopSectionsPreview = ()=>{
    const products = useContext(ProductsContext);
    return (
        <Fragment>
            {Object.keys(products).map(title=><ShopSectionPreview key={title} section={title}/>)}
        </Fragment>
    )
};


const ShopSectionPreview = ({section})=>{
    const products = useContext(ProductsContext);
    const navigate = useNavigate();
    const navigateToShopSection = ()=>{
        navigate(section);
    };
    return (
        <Fragment>
            <h2><span onClick={navigateToShopSection}>{section}</span></h2>
            <ProductsContainer>
                {products[section].map(product=><ProductCard key={product.id} product={product}/>)}
            </ProductsContainer>
        </Fragment>
    )
};


const ShopSection = ()=>{
    const products = useContext(ProductsContext);
    const {section} = useParams();
    return (
        <Fragment key={section}>
            <h2><span>{section}</span></h2>
            <ProductsContainer>
                {products[section].map(product=><ProductCard key={product.id} product={product}/>)}
            </ProductsContainer>
        </Fragment>
    )
};


const ProductCard = ({product})=>{
    const {addProductToCart} = useContext(CartContext);
    const {name, price, imageUrl} = product;
    function addProductToCartHandler(){
        addProductToCart(product);
    }
    return (
        <ProductCardContainer>
            <ProductCardImage src={imageUrl} alt={name}/>
            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>${price}</ProductCardPrice>
            </ProductCardFooter>
            <Button style="card" children="Add to cart" onClick={addProductToCartHandler}/>
        </ProductCardContainer>
    )
};




export default Shop;