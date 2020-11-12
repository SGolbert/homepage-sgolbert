import styled from "styled-components";

function Footer() {
  return <Toe>Copyright Sebastian Golbert 2020</Toe>;
}

const Toe = styled.footer`
  background: ${(props) => props.theme.colors.secondaryDark};
  color: ${(props) => props.theme.colors.textBlack};
  font-size: 15px;
  padding: 11.5px 0;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    font-size: 20px;
    padding: 7px 0;
  }
`;

export default Footer;
