import "./Style.css";
import Posts from "./Posts";

export default function Ex3main() {
  const tasks = [
    { id: 1, title: "dowing my homeworks" },
    { id: 2, title: "reading a book" },
    { id: 3, title: "studying" },
    { id: 4, title: "cleaning my room" },
  ];

  const myTasksList = tasks.map((task) => {
    return <li key={task.id}>{task.title}</li>;
  });

  const posts = [
    {
      id: 1,
      postName: "Ahmad",
      postTitle: "hello",
      child: (
        <div>
          <span>i am 23 years old</span>
        </div>
      ),
    },
    {
      id: 2,
      postName: "Ali",
      postTitle: "hello Ali",
      child: (
        <div>
          <span>i am 27 years old</span>
        </div>
      ),
    },
    { id: 3, postName: "sami", postTitle: "hello sami" },
  ];

  const postsList = posts.map((post) => {
    return (
      <Posts key={post.id} postName={post.postName} postTitle={post.postTitle}>
        {post.child}
      </Posts>
    );
  });

  return (
    <div>
      list
      <div>
        <ul>{myTasksList}</ul>
      </div>
      <div>{postsList}</div>
    </div>
  );
}
