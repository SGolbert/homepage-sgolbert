import Link from "next/link";

function ProjectIntro() {
  return (
    <div>
      <img
        width="480"
        height="393"
        src="https://www.fillmurray.com/480/393"
        alt="Post Intro Image"
      ></img>
      <h4>Project's title</h4>
      <p>Project description</p>
      <Link href="/">
        <a>Go to the project's site</a>
      </Link>
    </div>
  );
}

export default ProjectIntro;
