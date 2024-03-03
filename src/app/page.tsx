import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slug = markdownPosts.map((file) => file.replace(".md", ""));
  return slug;
};

export default function Home() {
  const metadata = getPostMetadata();
  const preveuMetadata = metadata.map((slug) => {
    return (
      <div key={slug}>
        <Link href={`/posts/${slug}`}>
          <h2>{slug}</h2>
        </Link>
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
