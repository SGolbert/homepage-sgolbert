import Link from "next/link";
import styled from "styled-components";
import Section from "components/Section";
import TeaserPost from "components/TeaserPost";

const background = "linear-gradient(180deg, #001233 0%, #003087 100%)";

function BlogTeaser(props) {
  const numberOfPosts = props.blogPosts.length > 4 ? 4 : props.blogPosts.length;

  const posts = props.blogPosts.slice(0, numberOfPosts);

  return (
    <Section title="Blog" bg={background}>
      <PostContainer>
        {posts.map((post) => (
          <TeaserPost {...post} key={post.id} />
        ))}

        {/* <TeaserPost />
        <TeaserPost />
        <TeaserPost displayOnlyDesktop />
        <TeaserPost displayOnlyDesktop /> */}
      </PostContainer>
      <Link href="/" passHref>
        <BlogLink>Go to blog site</BlogLink>
      </Link>
    </Section>
  );
}

const PostContainer = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 323px);
  grid-column-gap: clamp(20px, 3.5vw, 120px);
  grid-row-gap: 67px;
  justify-content: center;
  justify-items: center;
  margin: 85px 0 0px 0;
  width: 100%;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: clamp(20px, 5vw, 120px);
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
