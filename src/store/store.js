import {compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root.reducer";
// import { rootSaga } from "./root.saga"; 
import { logger } from "../middleware/logger.middleware";
// import createSagaMiddleware from "@redux-saga/core";

// const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cartReducer"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);

//If not in production use the redux devtools compose otherwise use the redux compose
const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
//creating a Redux store with no persisted reducers
// export const store = createStore(rootReducer, undefined, composedEnhancers);

export let store = createStore(persistedReducer, composedEnhancers);

// sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);