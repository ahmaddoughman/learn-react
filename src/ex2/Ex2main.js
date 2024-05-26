import Article from "./Article";
import Article2 from "./Article2";

export default function Ex2main() {
  const firstArticle = `hhhhhh
                        basdsad`;

  const secondArticle = `content
                        basdsad`;
  return (
    <div>
      <Article2>
        <h1>hello ahmad</h1>
      </Article2>


      <Article name="ahmad"
        email="ahmad@gmail.com"
        age="23">
        <h1>hello ali</h1>
      </Article>

      <Article
        name="ahmad"
        email="ahmad@gmail.com"
        age="23"
        content={firstArticle}
      />
      <Article
        name="ali"
        email="ali@gmail.com"
        age="27"
        content={secondArticle}
      />
      <Article name="sara" email="sara@gmail.com" age="28" />
    </div>
  );
}
