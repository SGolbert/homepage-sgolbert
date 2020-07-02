import Link from "next/link";
import styled from "styled-components";
import Section from "components/Section";
import TeaserPost from "components/TeaserPost";

const background = "linear-gradient(180deg, #001233 0%, #003087 100%)";

function BlogTeaser(props) {
  return (
    <Section title="Blog" bg={background}>
      <TeaserPost />
      <TeaserPost />
      <TeaserPost />
      <TeaserPost />
      <Link href="/">
        <a>Go to blog site</a>
      </Link>
    </Section>
  );
}

export default BlogTeaser;
