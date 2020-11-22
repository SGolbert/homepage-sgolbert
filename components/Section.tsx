import { ReactNode } from "react";
import styled from "styled-components";

type SectionProps = {
  title: string;
  bg: string;
  children: ReactNode;
};

function Section(props: SectionProps): JSX.Element {
  return (
    <SectionBody id={props.title} bg={props.bg}>
      <SectionContainer>
        <SectionTitle>{props.title}</SectionTitle>
        {props.children}
      </SectionContainer>
    </SectionBody>
  );
}

const SectionBody = styled.section`
  background: ${(props: { bg: string }) => props.bg};
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SectionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  margin-top: 76px;
  text-align: center;
`;

export default Section;
