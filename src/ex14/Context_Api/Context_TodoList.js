import React, { useState } from 'react'
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const TodoContext = createContext();

const Context_TodoList = (props) => {

    const [products, setProducts] = useState([]);

    const addList = (newItem ) => {
        setProducts([...products, newItem ]);
    }

   const updateList = (id, updatedItem) => {
    const updatedItems = products.map(item => (item.id === id ? updatedItem : item));
    setProducts(updatedItems);
  };

  const deleteItem = id => {
    const updatedItems = products.filter(item => item.id !== id);
    setProducts(updatedItems);
  };

  const navigate = useNavigate(); // Use useNavigate here
  const handleEdit = (id) => {
    // Navigate to edit page with product id
    navigate(`/edit/${id}`);
  };


  const getList = () => {
    return (
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
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ width: "200px" }}>{product.id}</td>
              <td style={{ width: "200px" }}>{product.title}</td>
              <td style={{ width: "200px" }}>{product.price} $</td>
              <td style={{ width: "200px" }}>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button style={{ marginLeft: "10px" }} onClick={() => deleteItem(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr key="no-data">
              <td colSpan="4">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };



  return (
    <TodoContext.Provider value={{products, addList, updateList, deleteItem, getList}}>
   
          {props.children}
    </TodoContext.Provider>
  )
}

export default Context_TodoList
