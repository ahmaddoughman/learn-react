import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductDetails() {
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((resp) => resp.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
}
