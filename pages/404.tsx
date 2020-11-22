import styled from "styled-components";
import Layout from "components/Layout";

export default function Custom404(): JSX.Element {
  return (
    <Layout>
      <NotFound>404 - Page Not Found</NotFound>
    </Layout>
  );
}

const NotFound = styled.h1`
  margin: 200px 50px;
`;
