import Link from "next/link";
import styled from "styled-components";

function TeaserPost(props) {
  return (
    <PostContainer {...props}>
      <Img src={props.teaser} alt="Post Intro Image"></Img>
      <Title>
        <Link href="/posts/[id]" as={`/posts/${props.id}`}>
          <a>{props.title}</a>
        </Link>
      </Title>

      <Description>
        {props.date} - {props.excerpt}
      </Description>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  display: ${({ displayOnlyDesktop }) =>
    displayOnlyDesktop ? "none" : "flex"};
  flex-direction: column;
  justify-self: right;
  padding: 32px 50px;
  max-width: 480px;

  :nth-child(2n) {
    justify-self: left;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: flex;
  }
`;

const Img = styled.img`
  border-radius: 6px;
  object-fit: cover;
  height: 163px;
  /* width: 224px; */
  width: 100%;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    height: 166px;
    /* width: clamp(224px, 25vw, 361px); */
    width: 100%;
  }
`;

const Title = styled.h4`
  font-size: 1.777em;
  margin-top: 35px;
  text-align: center;

  a:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    text-align: left;
  }
`;

const Description = styled.p`
  margin-top: 7px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    text-align: left;
  }
`;

export default TeaserPost;
