import styled from "styled-components";
import SocialMedia from "components/SocialMedia";

function Header() {
  return (
    <HeaderBody>
      <HeaderContainer>
        <InvisibleCheckbox type="checkbox" id="hamburg" />

        <HeaderLinks>
          <LinkItem>Home</LinkItem>
          <LinkItem>About</LinkItem>
          <LinkItem>Blog</LinkItem>
          <LinkItem>Projects</LinkItem>
          <LinkItem>Contact</LinkItem>
        </HeaderLinks>
        <HeaderSocialMedia />
        <label for="hamburg" class="hamburg">
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

const InvisibleCheckbox = styled.input`
  display: none;
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
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* height: 65px; */
  margin: 0px clamp(20px, 8.33vw, 120px);
  max-width: 1440px;
  width: 100%;
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

const LinkItem = styled.h5`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 1.2rem;
  margin: 20px 0;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    :not(:last-child) {
      margin: 0 clamp(40px, 5vw, 80px) 0 0;
    }
  }
`;

const HeaderSocialMedia = styled(SocialMedia)`
  margin: 20px 0 20px 0;
  /* align-self: auto; */
  flex: 1;

  /* @media (min-width: ${(props) =>
    props.theme.media_sizes.mobileTransition}) {
    margin: 20px clamp(60px, 8.33vw, 120px) 20px 0;
  } */
`;

const Hamburger = styled.svg`
  display: block;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: none;
    margin: 20px clamp(60px, 8.33vw, 120px) 20px 0;

    :hover {
      fill: ${(props) => props.theme.colors.secondary};
      cursor: pointer;
    }
  }
`;

export default Header;
