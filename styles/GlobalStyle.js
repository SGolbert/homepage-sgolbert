import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background: ${(props) => props.theme.colors.textBlack};
    display: flex;
    font-size: 125%;
    justify-content: center;
  }

  body {
    color: white;
    font-family: "Aleo", serif;
    line-height: 1.65;
    margin: 0;
    padding: 0;
    width: 100%;

  }

  h1 {
    font-size: clamp(3.157em, 16.82vw, 4.209em);
    font-weight: 400;
  }

  h2 {
    font-size: clamp(2.369em, 12.62vw, 3.157em);
    font-weight: 400;
  }

  h3 {
    font-size: clamp(1.777em, 9.47vw, 2.369em);
    font-weight: 400;
  }

  h4 {
    font-size: clamp(1.333em, 7.11vw, 1.777em);
    font-weight: 400;
  }

  h5 {
    font-size: clamp(1em, 5.33vw, 1.333em);
    font-weight: 400;
  }

  small,
  .text_small {
    font-size: 0.75em;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    ${"" /* padding: 0; */}
  }

  a {
    color: ${(props) => props.theme.colors.textWhite};
    text-decoration: none;
  }

  strong {
    font-weight: bold;
  }
`;

export default GlobalStyle;
