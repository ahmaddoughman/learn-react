import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodoContext } from '../Context_Api/Context_TodoList';


const Nav = () => {
  const {products} = useContext(TodoContext);
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home -  {products.length}</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/add">Add_List</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/edit">Edit_List</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
