import styled, { css } from "styled-components";

function Section(props) {
  return (
    <SectionBody bg={props.bg}>
      <SectionContainer>
        <SectionTitle>{props.title}</SectionTitle>
        {props.children}
      </SectionContainer>
    </SectionBody>
  );
}

const SectionBody = styled.section`
  background: ${(props) => props.bg};
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
`;

export default Section;
