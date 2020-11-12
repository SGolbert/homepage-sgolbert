import Link from "next/link";
import styled from "styled-components";
import SocialMedia from "components/SocialMedia";

function Header() {
  return (
    <HeaderBody>
      <HeaderContainer>
        <InvisibleCheckbox type="checkbox" id="hamburg" />
        <HeaderLinks>
          <Link href="/" passHref>
            <LinkItem>Home</LinkItem>
          </Link>
          <Link href="/#About" passHref>
            <LinkItem>About</LinkItem>
          </Link>
          <Link href="/#Blog" passHref>
            <LinkItem>Blog</LinkItem>
          </Link>
          <Link href="/#Projects" passHref>
            <LinkItem>Projects</LinkItem>
          </Link>
          <Link href="#Contact" passHref>
            <LinkItem>Contact</LinkItem>
          </Link>
        </HeaderLinks>
        <HeaderSocialMedia />
        <label htmlFor="hamburg" className="hamburg">
          <Hamburger
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.6875 5.625H25.3125V7.5H4.6875V5.625Z" />
            <path d="M4.6875 14.0625H25.3125V15.9375H4.6875V14.0625Z" />
            <path d="M4.6875 22.5H25.3125V24.375H4.6875V22.5Z" />
          </Hamburger>
        </label>
      </HeaderContainer>
    </HeaderBody>
  );
}

const LinkTest = styled(Link)`
  a {
    color: red;
  }
`;

const HeaderBody = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0px clamp(20px, 8.33vw, 120px);
  max-width: 1440px;
  width: 100%;
`;

const InvisibleCheckbox = styled.input`
  display: none;
`;

const HeaderLinks = styled.div`
  align-items: center;
  border-top: 1px ${(props) => props.theme.colors.secondaryDark} solid;
  display: none;
  flex: 1 0 100%;
  flex-direction: column;
  order: 3;

  #hamburg:checked ~ & {
    display: flex;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    border: none;
    display: flex;
    flex: auto;
    flex-direction: row;
    order: 0;
  }
`;

const LinkItem = styled.a`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 1.2rem;
  margin: 30px 0;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin: 13px 0;

    :not(:last-child) {
      margin: 0px clamp(40px, 5vw, 80px) 0px 0;
    }
  }
`;

const HeaderSocialMedia = styled(SocialMedia)`
  margin: 20px 0;
  flex: 1;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin: 17px 0;
    flex: 0;
  }
`;

const Hamburger = styled.svg`
  display: block;

  /* :hover {
    fill: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  } */

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: none;
  }
`;

export default Header;
