import styled from "styled-components";

function TeaserPost(props) {
  return (
    <PostContainer {...props}>
      <Img
        src="https://www.fillmurray.com/224/163"
        alt="Post Intro Image"
      ></Img>
      <Title>Post's title</Title>
      <Description>
        Post description <br /> 1 <br /> 2
      </Description>
    </PostContainer>
  );
}

const Title = styled.h4`
  font-size: 1.777em;
  margin-top: 35px;
`;

const Description = styled.p`
  margin-top: 7px;
`;

const Img = styled.img`
  border-radius: 6px;
  object-fit: cover;
  height: 163px;
  width: 224px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    height: 166px;
    width: 361px;
  }
`;

const PostContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  display: ${({ displayOnlyDesktop }) =>
    displayOnlyDesktop ? "none" : "flex"};
  flex-direction: column;
  padding: 32px 50px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: flex;
  }
`;

export default TeaserPost;
