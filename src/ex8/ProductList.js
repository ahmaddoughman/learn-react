import { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const api_url = "https://fakestoreapi.com/products";
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-4">Our Products</h2>
      <h3 style={{ marginLeft: "116px" }}>Category list:</h3>
      <div style={{ marginLeft: "110px", marginBottom: "20px" }}>
        <button
          className="btn btn-info m-2"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info m-2"
              onClick={() => {
                getProductInCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
