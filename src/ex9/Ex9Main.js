import { useFetch } from "./useFetch";

function Ex9Main() {
  const { data: product } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      <div>hi</div>
      
      {product && (
        <ul>
          {product.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Ex9Main;
