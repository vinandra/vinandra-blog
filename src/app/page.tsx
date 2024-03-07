import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { Post } from "@/lib/types";

const getPostMetadata = (): Post[] => {
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
};

export default function Home() {
  const metadata = getPostMetadata();
  const preveuMetadata = metadata.map((slug) => {
    const formattedDate = new Date(slug.date).toLocaleDateString();
    return (
      <div key={slug.title}>
        <Link href={`/posts/${slug.title}`}>
          <h2>{slug.title}</h2>
        </Link>
        <p>{slug.slug}</p>
        <p>{formattedDate}</p>
      </div>
    );
  });
  // preveuMetadata();
  return (
    <>
      <div className="flex items-center mt-20 mb-10">
        <h1 className="text-8xl flex-1 font-bold mr-10">Blog.</h1>
        <p className="text-right text-lg">My thoughts, programming and somewhat</p>
      </div>
      {preveuMetadata}
    </>
  );
}
