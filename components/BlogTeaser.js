import Link from "next/link";
import styled from "styled-components";
import Section from "components/Section";
import TeaserPost from "components/TeaserPost";

const background = "linear-gradient(180deg, #001233 0%, #003087 100%)";

function BlogTeaser(props) {
  return (
    <Section title="Blog" bg={background}>
      <PostContainer>
        <TeaserPost />
        <TeaserPost />
        <TeaserPost displayOnlyDesktop />
        <TeaserPost displayOnlyDesktop />
      </PostContainer>
      <Link href="/">
        <BlogLink>Go to blog site</BlogLink>
      </Link>
    </Section>
  );
}

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 323px;
  grid-column-gap: 121px;
  grid-row-gap: 67px;
  margin: 85px 0 0px 0;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    grid-template-columns: 479px 479px;
  }
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 1.777em;
  margin: 66px 0 54px 0;
  text-align: center;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin: 67px 200px 50px auto;
  }
`;

export default BlogTeaser;
