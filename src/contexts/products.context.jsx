// import PRODUCTS from "../shop-data"
import SHOP_DATA from "../shop-data";
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndItems } from "../utils/firebase/firebase.utils";


export const ProductsContext = createContext({
    products : {},
});


export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState({});
    useEffect(()=>{
        const getProducts = async()=>{
            const categoriesAndDocuments = await getCategoriesAndItems();
            setProducts(categoriesAndDocuments);
        };
        getProducts();
    }, []);
    const value = products;
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
};