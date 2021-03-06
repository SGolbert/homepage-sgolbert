import Link from "next/link";
import styled from "styled-components";
import { ProjectHeader } from "utils/types";

type ProjectIntroProps = ProjectHeader & {
  leftImg?: boolean;
  lightThemed?: boolean;
};

function ProjectIntro(props: ProjectIntroProps): JSX.Element {
  return (
    <CardContainer {...props}>
      <ImgLink leftImg={props.leftImg}>
        <Link href="/projects/[id]" as={`/projects/${props.id}`}>
          <a>
            <Img src={props.teaser} alt="Post Intro Image"></Img>
          </a>
        </Link>
      </ImgLink>
      <TextContainer {...props}>
        <Title>
          <Link href="/projects/[id]" as={`/projects/${props.id}`}>
            <a>{props.title}</a>
          </Link>
        </Title>
        <Description>
          {props.date} - {props.excerpt}
        </Description>
        <ProjectLink
          rel="noopener noreferrer"
          target="_blank"
          href={props.link}
          {...props}
        >
          Go to site
        </ProjectLink>
      </TextContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div<{ lightThemed?: boolean }>`
  background: ${(props) =>
    props.lightThemed
      ? props.theme.colors.textWhite
      : props.theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: clamp(35px, 4.72vw, 68px) clamp(49px, 8.33vw, 120px);

  :not(:last-child) {
    margin-bottom: 64px;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  height: clamp(197px, 27.29vw, 393px);
  object-fit: cover;
  width: clamp(226px, 33.33vw, 480px);
  /* width: 100%;
  max-width: 480px; */
`;

const ImgLink = styled.div<{ leftImg?: boolean }>`
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    order: ${(props) => (props.leftImg ? 0 : 2)};
  }
`;

const TextContainer = styled.div<{ lightThemed?: boolean; leftImg?: boolean }>`
  align-items: center;
  color: ${(props) =>
    props.lightThemed
      ? props.theme.colors.textBlack
      : props.theme.colors.textWhite};
  display: flex;
  flex-direction: column;
  margin: 0;

  a {
    color: ${(props) =>
      props.lightThemed
        ? props.theme.colors.textBlack
        : props.theme.colors.textWhite};
  }

  a:hover {
    color: ${(props) =>
      props.lightThemed
        ? props.theme.colors.secondaryDark
        : props.theme.colors.secondary};
    cursor: pointer;
  }

  p {
    flex: 1;
    margin-top: 0px;
    width: clamp(226px, 25vw, 360px);
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin-left: ${(props) => (props.leftImg ? 120 : 0)}px;
    margin-right: ${(props) => (props.leftImg ? 0 : 120)}px;

    p {
      margin-top: 73px;
    }
  }
`;

const Title = styled.h4<{ lightThemed?: boolean }>`
  color: ${(props) =>
    props.lightThemed
      ? props.theme.colors.textBlack
      : props.theme.colors.textWhite};
  margin-top: 42px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin-top: 0px;
  }
`;

const Description = styled.p`
  margin-top: 7px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    text-align: left;
  }
`;

const ProjectLink = styled.a`
  font-size: 26.66px;
  margin-top: 40px;
  text-align: center;
`;

export default ProjectIntro;
