import fs from "fs";

export const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slug = markdownPosts.map((file) => file.replace(".md", ""));
  return slug;
};
