import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

export default function Navbar(){

    const value = useContext(ProductsContext)

    return(
        <div className="navbar">
            <h1>products count: {value.length}</h1>
        </div>
    );
}