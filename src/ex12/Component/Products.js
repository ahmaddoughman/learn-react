import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

export default function Products() {

    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop:"70px"}}>
        {products.map((product) => {
          return (  product.id <= 10 && (     
            <div className="card " style={{ width: "18rem" , marginBottom:"10px"}} key={product.id}>
              <img
                src={product.image}
                style={{ width: "100px", height: "100px"}}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price} $</p>
                <button className="btn btn-primary" onClick={()=> dispatch(addToCart(product))}>Add to cart</button>
              </div>
            </div>)  
          );
        })}
      </div>
    </>
  );
}
