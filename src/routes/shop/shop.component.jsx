import { Fragment, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch , useSelector} from "react-redux";
import { addProductToCart } from "../../store/cart.reducer";
import { getCategoriesAndItems } from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/button.component";
import Spinner from "../../components/spinner/spinner.component";
import { productsSelector, setProducts } from "../../store/products.reducer";
import {ProductCardContainer, ProductCardImage, ProductCardFooter, ProductCardName, ProductCardPrice, ProductsContainer} from "./shop.styles.jsx"


export const ShopSectionsPreview = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const getProducts = async()=>{
            const products = await getCategoriesAndItems();
            dispatch(setProducts(products));
        };
        getProducts();
    }, []);
    const products = useSelector(productsSelector);
    const navigate = useNavigate();
    const navigateToShopSection = (section)=>{
        navigate(section);
    };
    return (
        <Fragment>
            {Object.keys(products).map(section=>(
                <Fragment key={section}>
                    <h2><span onClick={()=>{navigateToShopSection(section)}}>{section}</span></h2>
                    <ProductsContainer>
                        {products[section].map(product=><ProductCard key={product.id} product={product}/>)}
                    </ProductsContainer>
                </Fragment>
            ))}
        </Fragment>
    )
};


export const ShopSection = ()=>{    
    console.log("Rendered ShopSection component");
    const {section} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        const getProducts = async()=>{
            const products = await getCategoriesAndItems();
            dispatch(setProducts(products));
        };
        getProducts();
    },[]);
    const products = useSelector(productsSelector);
    console.log(products)
    console.log(products[section])
    // const isLoading = useSelector(isLoadingSelector);

    // if(products[section] !== undefined){
        // products[section].map(product=>console.log(product))
        return products[section] === undefined ? <Spinner/> :
        (
            <Fragment>
                <h2><span>{section}</span></h2>
                <ProductsContainer>
                    {products[section].map(product=><ProductCard key={product.id} product={product}/>)}
                </ProductsContainer>
            </Fragment>
        )
    // }
};


const ProductCard = ({product})=>{
    const cartItems = useSelector(state=>state.cartReducer.cartItems)
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    function addProductToCartHandler(){
        dispatch(addProductToCart(product, cartItems));
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
