import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostConstent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const content = getPostConstent(slug);
  return (
    <div>
      <h1>ini adalah pose dari : {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
}
