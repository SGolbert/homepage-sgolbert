import styled from "styled-components";

function Separator() {
  return (
    <Container>
      <Wire />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wire = styled.div`
  height: 1px;
  width: clamp(274px, 40vw, 643px);
  background: ${(props) => props.theme.colors.grey};
`;

export default Separator;
