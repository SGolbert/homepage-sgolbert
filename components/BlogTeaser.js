import Link from "next/link";
import TeaserPost from "components/TeaserPost";

function BlogTeaser() {
  return (
    <div>
      <h2>Blog</h2>
      <TeaserPost />
      <TeaserPost />
      <TeaserPost />
      <TeaserPost />
      <Link href="/">
        <a>Go to blog site</a>
      </Link>
    </div>
  );
}

export default BlogTeaser;
