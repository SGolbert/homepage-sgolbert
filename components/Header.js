import styled from "styled-components";

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
        <ImgContainer>
          <Img width="25" height="25" src="Linkedin.svg" alt="Linkedin"></Img>
          <Img width="25" height="25" src="Github.svg" alt="Github"></Img>
          <Img width="25" height="25" src="Twitter.svg" alt="Twitter"></Img>
        </ImgContainer>
      </HeaderContainer>
    </HeaderBody>
  );
}

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
  display: flex;
  flex-direction: column;
  /* justify-self: center; */
  padding: 30px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    flex-direction: row;
    padding: 17px 0 17px clamp(60px, 8.33vw, 120px);
  }
`;

const LinkItem = styled.h5`
  color: ${(props) => props.theme.colors.textWhite};
  display: none;
  font-size: 1.2rem;
  margin: 20px 0px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    display: block;
    margin: 0 clamp(40px, 5vw, 80px) 0 0;
  }
`;

const ImgContainer = styled.div`
  align-items: center;
  display: flex;
  justify-self: right;
  order: 0;
  padding: 0 clamp(30px, calc(8.33vw - 30px), 90px) 0 0;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    order: 2;
  }
`;

const Img = styled.img`
  margin-right: 30px;
`;

export default Header;
