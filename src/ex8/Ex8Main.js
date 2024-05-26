import Navbar from "./Navbar";
import ProductList from "./ProductList";
import About from "./About";
import Slider from "./Slider";
import ProductDetails from "./ProductDetails";

import {Route, Routes } from "react-router-dom";

export default function Ex8Main() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductList />
              </>
            }
          />

          <Route path="about" element={<About />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      
    </>
  );
}
