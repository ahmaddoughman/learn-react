import { useState } from "react";

export default function Mybutton() {

  const [name, setName] = useState("Ahmad");
  
  function buttonClicked() {
    if(name === "Ahmad"){
        setName("Ali");
    }else{
        setName("Ahmad");
    }
  }

  return (
    <div>
      <button onClick={buttonClicked}>Click me</button>
      <h3>{name}</h3>
    </div>
  );
}
