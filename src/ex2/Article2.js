export default function Article2(props) {
  const children = props.children;
  return (
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
      {children}
    </div>
  );
}
