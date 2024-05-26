import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../Context_Api/Context_TodoList';
import { useNavigate, useParams } from 'react-router-dom';

const Editlist = () => {
  const { products, updateList } = useContext(TodoContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');

  const navigate = useNavigate(); // Use useNavigate here


  useEffect(() => {
    const selectedProduct = products.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]); 

  const handleUpdate = () => {
    if (!product) return ;

    const updatedItem = {
      id: product.id,
      title: updatedTitle || product.title,
      price: updatedPrice || product.price, 
    };

    updateList(product.id, updatedItem);

    navigate(`/`);
  };

  
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "200px" }}>{product.id}</td>
            <td style={{ width: "200px" }}>
              <input 
                type='text' 
                value={updatedTitle || product.title} 
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </td>
            <td style={{ width: "200px" }}>
              <input 
                type='text' 
                value={updatedPrice || product.price} 
                onChange={(e) => setUpdatedPrice(e.target.value)}
              />
            </td>
            <td style={{ width: "200px" }}>
              <button onClick={handleUpdate}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Editlist;
