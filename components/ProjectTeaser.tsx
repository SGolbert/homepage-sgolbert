import styled from "styled-components";
import Section from "components/Section";
import ProjectIntro from "components/ProjectIntro";
// import TeaserPost from "components/TeaserPost";
import { ProjectHeader } from "utils/types";

const background = "linear-gradient(180deg, #003087 0%, #001233 100%)";

type ProjectTeaserProps = {
  projectPosts: ProjectHeader[];
};

function ProjectTeaser(props: ProjectTeaserProps): JSX.Element {
  const numberOfPosts =
    props.projectPosts.length > 4 ? 4 : props.projectPosts.length;

  const posts = props.projectPosts.slice(0, numberOfPosts);

  return (
    <Section title="Projects" bg={background}>
      <ProjectContainer>
        {posts.map((post, index) =>
          index % 2 === 0 ? (
            <ProjectIntro {...post} key={post.id} />
          ) : (
            <ProjectIntro {...post} key={post.id} lightThemed leftImg />
          )
        )}
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
