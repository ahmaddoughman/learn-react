import { Link } from "react-router-dom";

export default function Product(props) {

    const {product, showButton} = props;

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="img not found" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <span>price: {product.price}</span><br/>
          {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
          
        </div>
      </div>
    </>
  );
}
