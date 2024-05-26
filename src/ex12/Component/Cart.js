import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

export default function Cart() {
  const carts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = carts.reduce((acc, product) =>{
    acc += product.price * product.quantity;
    return acc
  },0)

  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <h2 style={{ textAlign: "center" }}>Cart Page</h2>
        <div style={{marginLeft:"10px"}}>
            <button className="btn btn-primary"  onClick={()=> dispatch(clear())}>Clear cart</button>
            <h3>Total: {totalPrice.toFixed(2)}$</h3>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => {
              return (
                <tr key={cart.id}>
                  <th scope="row">{cart.id}</th>
                  <td><img style={{width: "100px" , height:"100px"}} src={cart.image} alt="Product"/></td>
                  <td>{cart.title}</td>
                  <td>{cart.price}$</td>
                  <td>{cart.quantity}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=> dispatch(deleteFromCart(cart))}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
