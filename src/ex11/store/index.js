import {createStore, combineReducers, applyMiddleware} from "redux";
import { bankReducer } from "./reducers/bank-reducer";
import { productReducer } from "./reducers/products-reducer";
import { thunk } from "redux-thunk";

const appReducer = combineReducers({
    bank: bankReducer,
    products: productReducer
})

export const store = createStore(appReducer, applyMiddleware(thunk));