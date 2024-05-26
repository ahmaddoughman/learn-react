import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewProduct() {
  const [products, setProducts] = useState([]);

  let {productID} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [productID]);

  return (
    <>
      <div className="mt-3" style={{maxWidth: "800px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={products.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                {products.title}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                   Price: ${products.price}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
