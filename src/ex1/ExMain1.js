import "./Style.css";

import Myheader from "./Myheader";
import Post from "./Post";
import Conbtns from "./Conbtns";

const showCategory = true;

export default function ExMain1() {
  return (
    <div>
      <Myheader title="react" name="ahmad doughman" />

      <div className={"PosBut"}>
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <AppSideMenu />
      </div>
    </div>
  );
}

function AppSideMenu() {
  if (showCategory === true) {
    return <Conbtns />;
  }
  else{
    return <div>no category</div>
  }
}
