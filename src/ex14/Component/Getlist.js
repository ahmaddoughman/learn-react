import React, { useContext } from 'react';
import { TodoContext } from '../Context_Api/Context_TodoList';

const Getlist = (props) => {
  // Accessing the context value
  const { getList } = useContext(TodoContext);

  return (
    <div>
      <h1>This is a list:</h1>
      {getList()}
    </div>
  );
};

export default Getlist;
