import { useState } from "react";

export default function A1a() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The count is {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount((c) => {
            return c + 1;
          });
        }}
      >
        +
      </button>
    </div>
  );
}
