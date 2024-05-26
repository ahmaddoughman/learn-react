export default function Article({name, email, age, content ="no content", children}) {

    // second way
   // const age = props.age;
  return (
    <>
      <div
        style={{
          background: "black",
          color: "white",
          width: "600px",
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {/* first way */}
        {/* <h1>{props.name}</h1> */}
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{age}</h3>
        <hr></hr>
        <p>{content}</p>
        <p>{children}</p>
        
      </div>
    </>
  );
}


