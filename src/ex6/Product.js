function Product(props) {
  return (
    <div className="card">
      <img src={props.product.image} alt="img" />
      <h1>{props.product.title}</h1>

      <p>{props.product.description}</p>
      <span>Price: {props.product.price}</span>
    </div>
  );
}

export default Product;
