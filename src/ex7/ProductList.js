import { useState } from "react";
import { useEffect } from "react";

import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const productsData = products.map((product) => {
    return (
      product.price > 100 && (
        <Product key={product.id} product={product} />
      )
    );
  });

  return (
    <div className="products-list">
      <div className="row">{productsData}</div>
    </div>
  );
}
