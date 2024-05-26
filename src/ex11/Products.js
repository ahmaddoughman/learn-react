import { useDispatch, useSelector } from "react-redux"
// import { add_Product, fetchProducts } from "./store/actions/products-action";
import { useEffect } from "react";
import { addProduct, fetchProducts } from "./reactToolKit1/slices/product-slice";

export default function Products(){

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    // useEffect(() =>{
    //     dispatch(fetchProducts())
    // },[dispatch])

    useEffect(() =>{
        dispatch(fetchProducts())
    },[dispatch])

    console.log(products)
    return(
        <>
        <h1>Products</h1>
        {/* <button onClick={() => dispatch(add_Product({id:2, title:"product2"}))}>Add Product</button> */}
        <button onClick={() => dispatch(addProduct({id:2, title:"product2"}))}>Add Product</button>
        {
            products.map((product) => (<h3 key={product.id}>{product.title}</h3>))
        }
        </>
    )
}