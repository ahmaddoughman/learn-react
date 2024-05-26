import "./MyFirstComponent.css"

export default function MyFirstComponent() {

    const x = 10;

    const person ={
        name: 'Ahmad',
        email: 'ahmad@gmailcom'
    };

    const eleStyle = {
        backgroundColor: 'red',
        fontSize:'20px'
    };

  return (
    <div>
      <h2 style={eleStyle}>hello {person.name} and my email {person.email}</h2>
      <h2 className={"active"}>number {x}</h2>
      <h2 style={{color: 'blue',fontSize:'20px'}}>function {sayHola()}</h2>

      <h1 className={person.name == "Aahmad" ? "active" : "green"}>Check Name</h1>

      <button onClick={saybye}>click</button>
    </div>
  );
}

function sayHola(){
    return "hola ";
}
function saybye(){
    alert('bye');
}
