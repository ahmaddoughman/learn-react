import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Home from "./Home";
import AllProducts from "./AllProducts";
import ViewProduct from "./ViewProduct";
import AddProduct from "./AddProduct";

export default function Ex10Main() {
  return (
    <div>
      <Navbar />

      <div className="row" style={{ width: "100%" }}>
        <div className="col-2">
          <Slider />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<AllProducts />} />
            <Route path="/products/:productID" element={<ViewProduct />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
