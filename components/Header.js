import styled from "styled-components";

function Header() {
  return (
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
  );
}

const HeaderContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  justify-content: space-between;
`;

const HeaderLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media (min-width: 400px) {
    flex-direction: row;
    padding: 17px 0 17px 120px;
  }
`;

const LinkItem = styled.h5`
  color: ${(props) => props.theme.colors.textWhite};
  display: none;
  font-size: 1.2rem;
  margin: 20px 0px;

  @media (min-width: 400px) {
    display: block;
    margin: 0 80px 0 0;
  }
`;

const ImgContainer = styled.div`
  align-items: center;
  display: flex;
  order: 0;
  padding: 0 90px 0 0;

  @media (min-width: 400px) {
    order: 2;
  }
`;

const Img = styled.img`
  margin-right: 30px;
`;

export default Header;
