// Redux

// Constants
const withdraw_money =  "withdraw-money";
const deposite_money =  "deposite-money";
const ADD_Product = "ADD_Product";
const GET_PRODUCTS = "GET_PRODUCTS";


// action
const withdraw = (amount) =>{
    return {
        type : withdraw_money ,
        payload: amount
    }
}

const deposite = (amount) =>{
    return {
        type : deposite_money,
        payload: amount
    }
}


const add_Product = (product) =>{
    return {
        type : ADD_Product,
        payload: product
    }
}

const getProducts = (products) => {
    return{
        type: GET_PRODUCTS,
        payload: products
    }
}

const fetchProducts = () =>{
    return async (dispatch) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        dispatch(getProducts(data))
    }
}


// reducer 

const bankReducer = (state = 1000, action) => {
    switch(action.type){
        case withdraw_money :
            return state - action.payload;
        case deposite_money:
            return state + action.payload;
        default:
            return state;
    }
}

const productReducer = (state = [], action) =>{
    switch(action.type){
        case ADD_Product:
            return  [...state, ...action.payload]
        case GET_PRODUCTS:
            return [...action.payload]
        default:
            return state;
    }
}




const appReducer = Redux.combineReducers({
    bank: bankReducer,
    products: productReducer
})

//store

const store = Redux.createStore(appReducer, Redux.applyMiddleware(ReduxThunk));

store.dispatch(withdraw(100));
store.dispatch(withdraw(200));
store.dispatch(deposite(1000));


store.dispatch(add_Product({id:1, title:'product-1'}));


store.subscribe(() => {
    console.log("Current state", store.getState())
})
