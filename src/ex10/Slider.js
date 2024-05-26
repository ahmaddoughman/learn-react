import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div style={{ background: "rgb(248 249 250)", height: "100vh",  textAlign:"center"}}>
      <Link to="/product" style={{textDecoration:"none"}}>
        get All products
      </Link>
    </div>
  );
}
