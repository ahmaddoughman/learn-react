import "./Style.css"

export default function Post({postName, postTitle, children="no content"}) {
  return (
    <div className={"post"}>
      <h3>{postName}</h3>
      <h5>{postTitle}</h5>
      <hr />
      <h5>{children}</h5>
    </div>
  );
}
