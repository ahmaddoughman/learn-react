import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar(){
    const cart = useSelector((state) => state.cart)
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart _{cart.length}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}