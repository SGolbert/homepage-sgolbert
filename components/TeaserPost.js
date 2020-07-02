import styled from "styled-components";

function TeaserPost() {
  return (
    <PostContainer>
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
  width: 224px;
  height: 163px;
`;

const PostContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 32px 50px;
  display: flex;
  flex-direction: column;
`;

export default TeaserPost;
