import "./ProductList.css";

export default function Product(props) {
  return (
    <>
      <div className="container" key={props.product.id}>
        <img src={props.product.image} alt="img" />
        <p>{props.product.title}</p>
        <span>price: {props.product.price}</span>
      </div>
    </>
    //
  );
}
