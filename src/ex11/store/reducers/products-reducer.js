import { ADD_Product, GET_PRODUCTS } from "../actions/products-action";

export const productReducer = (state = [], action) =>{
    switch(action.type){
        case ADD_Product:
            return  [...state, action.payload]
        case GET_PRODUCTS:
            return [...action.payload]
        default:
            return state;
    }
}
