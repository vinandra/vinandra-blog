import Link from "next/link";
import { Post } from "../lib/types";

export default function PostPreview(props: Post) {
  const formattedDate = new Date(props.date).toLocaleDateString();
  return (
    <div key={props.title}>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.slug}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
