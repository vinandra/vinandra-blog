import getPostMetadata from "@/lib/gatPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const metadata = getPostMetadata();
  const previewMetadata = metadata.map((post) => <PostPreview key={post.slug} {...post} />);
  return (
    <>
      <div className="flex items-center mt-20 mb-10">
        <h1 className="text-8xl flex-1 font-bold mr-10">Blog.</h1>
        <p className="text-right text-lg">My thoughts, programming and somewhat</p>
      </div>
      <div>{previewMetadata}</div>
    </>
  );
}
