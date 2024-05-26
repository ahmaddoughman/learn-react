import { useState } from "react";

export default function MyInputs() {

  const [myInputValue, setMyInputValue] = useState("");

  function handleInputChange(event) {
    setMyInputValue(event.target.value);
  }

  return (
    <div>
      <label>Your Name:</label>
      <input
        type="text"
        value={myInputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
