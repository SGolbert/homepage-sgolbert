import styled from "styled-components";
import Section from "components/Section";

const background =
  "linear-gradient(180deg, #001233 0%, #003087 24.48%, #001233 100%)";

function About() {
  return (
    <Section title="About" bg={background}>
      <Subtitle>This is the stack I use</Subtitle>
      <StackIcons>
        <Img width="90" height="80" src="react.svg" alt="React"></Img>
        <Img width="132" height="80" src="nextjs.svg" alt="Next"></Img>
        <Img width="56" height="80" src="html.svg" alt="HTML"></Img>
        <Img width="56" height="80" src="css.svg" alt="CSS"></Img>
        <Img width="80" height="80" src="javascript.svg" alt="JavaScript"></Img>
        <Img width="80" height="80" src="vscode.svg" alt="VS Code"></Img>
      </StackIcons>
    </Section>
  );
}

const Subtitle = styled.h3`
  margin-top: 55px;
  text-align: center;
  width: 180px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin-top: 41px;
    width: 100%;
  }
`;

const StackIcons = styled.div`
  display: grid;
  grid-row-gap: 33px;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  justify-items: center;
  margin: 42px 20px 58px 20px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin: 192px 0 58px 0;
    grid-template-columns: repeat(auto-fit, 150px 150px 150px);
  }
`;

const Img = styled.img`
  margin-right: 0px;
`;

export default About;
