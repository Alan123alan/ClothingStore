import { createSelector } from "reselect";

export const PRODUCTS_ACTION_TYPES = {
    // FETCH_PRODUCTS_START: "products/FETCH_PRODUCTS_START",
    // FETCH_PRODUCTS_SUCCESS: "products/FETCH_PRODUCTS_SUCCESS",
    // FETCH_PRODUCTS_ERROR: "products/FETCH_PRODUCTS_ERROR",
    SET_PRODUCTS: "products/SET_PRODUCTS"
};


const INITIAL_STATE = {
    products:{},
    // isLoading: false,
    // error: null,
};


export const productsReducer = (state=INITIAL_STATE, action={})=>{
    const {type, payload} = action;
    switch (type) {
        case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        // case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
        //     return {
        //         ...state,
        //         products: payload,
        //         isLoading: false
        //     }
        // case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ERROR:
        //     return {
        //         ...state,
        //         error: payload,
        //         isLoading: false
        //     }
        default:
            return state
    }

};

//#region products reducer actions
export const setProducts = (products)=>{
    return {type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS, payload: products}
}

// export const fetchProductsStart = ()=>{
//     return {type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START}
// };

// export const fetchProductsSuccess = (products)=>{
//     return {type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, payload: products}
// };

// export const fetchProductsError = (error)=>{
//     return {type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ERROR, payload: error}
// };
//#endregion


//#region products reducer selectors
export const productsReducerSelector = (state)=>state.productsReducer

export const productsSelector = createSelector(
    [productsReducerSelector],
    (productsReducer)=>productsReducer.products
);

// export const isLoadingSelector = createSelector(
//     [productsReducerSelector],
//     (productsReducer)=>productsReducer.isLoading
// );

// export const errorSelector = createSelector(
//     [productsReducerSelector],
//     (productsReducer)=>productsReducer.error
// )
//#endregion
