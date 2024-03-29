import fs from "fs";
import matter from "gray-matter";
import { Post } from "./types";

export default function getPostMetadata(): Post[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResolt = matter(fileContents);
    return {
      title: matterResolt.data.title,
      date: matterResolt.data.date,
      subtitle: matterResolt.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
}
