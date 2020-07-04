import styled from "styled-components";
import SocialMedia from "components/SocialMedia";

function Header() {
  return (
    <HeaderBody>
      <HeaderContainer>
        <HeaderLinks>
          <LinkItem>Home</LinkItem>
          <LinkItem>About</LinkItem>
          <LinkItem>Blog</LinkItem>
          <LinkItem>Projects</LinkItem>
          <LinkItem>Contact</LinkItem>
        </HeaderLinks>
        <HeaderSocialMedia />
        <Hamburger />
      </HeaderContainer>
    </HeaderBody>
  );
}

const Hamburger = styled.div`
  background: url("hamburger-menu.svg");
  display: block;
  height: 30px;
  width: 30px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: none;
    margin: 20px clamp(60px, 8.33vw, 120px) 20px 0;
  }
`;

const HeaderSocialMedia = styled(SocialMedia)`
  margin: 20px 0 20px 0;
  align-self: auto;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin: 20px clamp(60px, 8.33vw, 120px) 20px 0;
  }
`;

const HeaderBody = styled.div`
  align-items: center;
  display: flex;
  background: ${(props) => props.theme.colors.primaryDark};
  justify-content: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
`;

const HeaderLinks = styled.div`
  align-items: center;
  display: none;
  flex-direction: column;
  /* justify-self: center; */
  margin: 30px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: flex;
    flex-direction: row;
    margin: 0px 0 0px clamp(60px, 8.33vw, 120px);
  }
`;

const LinkItem = styled.h5`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 1.2rem;
  margin: 17px 0px;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: block;
    :not(:last-child) {
      margin: 0 clamp(40px, 5vw, 80px) 0 0;
    }
  }
`;

export default Header;
