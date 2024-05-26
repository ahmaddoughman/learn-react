import Product from "./Product";
import productsData from "./products-data";
import "./ProductsList.css";

function ProductsList() {
  const products = productsData.map((product) => {
    return product.price > 100 ? (
      <Product key={product.id} product={product} />
    ) : null;
  });

  return (
    <div className="products-list">
      <div className="row">{products}</div>
    </div>
  );
}

export default ProductsList;
