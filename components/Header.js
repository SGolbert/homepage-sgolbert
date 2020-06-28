import styled from "styled-components";

function Header() {
  return (
    <div>
      <HeaderItem>Home</HeaderItem>
      <HeaderItem>About</HeaderItem>
      <HeaderItem>Blog</HeaderItem>
      <HeaderItem>Projects</HeaderItem>
      <HeaderItem>Contact</HeaderItem>
    </div>
  );
}

const HeaderItem = styled.h5`
  font-size: 1.2rem;
`;

export default Header;
