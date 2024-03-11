import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/lib/gatPostMetadata";

const getPostConstent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResoult = matter(content);
  return matterResoult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const content = getPostConstent(slug);
  return (
    <div>
      <h1>{content.data.title}</h1>
      <Markdown>{content.content}</Markdown>
    </div>
  );
}
