import React, { useContext, useState } from "react";
import { TodoContext } from "../Context_Api/Context_TodoList";

const Addlist = () => {
  const { addList } = useContext(TodoContext);

  const [list, setList] = useState({
    id: 1, // Start ID from 1
    title: "",
    price: "",
  });

  const addListHandler = (e) => {
    e.preventDefault();
    console.log(list);
    const newList = {
      id: list.id,
      title: list.title,
      price: list.price,
    };

    addList(newList);
    setList({ ...list, id: list.id + 1, title: "", price: "" }); 
  };

  return (
    <div className="container">
      <h2>Enter the value:</h2>
      <form>
        <input
          type="text"
          value={list.title}
          onChange={(e) => {
            setList({ ...list, title: e.target.value });
          }}
          placeholder="Enter title"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          value={list.price}
          onChange={(e) => {
            setList({ ...list, price: e.target.value });
          }}
          placeholder="Enter price"
        />
        <br></br>
        <br></br>
        <button onClick={addListHandler}>Add List</button>
      </form>
    </div>
  );
};

export default Addlist;
