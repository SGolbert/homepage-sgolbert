import styled from "styled-components";
import Section from "components/Section";
import ProjectIntro from "components/ProjectIntro";

const background = "linear-gradient(180deg, #003087 0%, #001233 100%)";

function ProjectTeaser() {
  return (
    <Section title="Projects" bg={background}>
      <ProjectContainer>
        <ProjectIntro />
        <ProjectIntro lightThemed leftImg />
      </ProjectContainer>
    </Section>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 84px 0 67px 0;
`;

export default ProjectTeaser;
