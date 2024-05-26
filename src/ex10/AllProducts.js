import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
     <Link className="btn btn-success m-2" style={{marginRight:"6px"}} to="/addProduct">Add new product</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <tbody key={product.id}>
              <tr>
                <th scope="row">{product.id}</th>
                <td className="col-7">{product.title}</td>
                <td>{product.price}</td>
                <td>
                   
                    <button className="btn btn-danger" style={{marginRight:"6px"}}>Delete</button>
                    <Link className="btn btn-info" style={{marginRight:"6px"}} to={`/products/${product.id}`}>Info</Link>
                </td>
              </tr>
              
            </tbody>
          );
        })}
      </table>
    </>
  );
}
