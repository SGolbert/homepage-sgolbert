import styled from "styled-components";

function Hero() {
  return (
    <HeroBody>
      <HeroContainer>
        <HeroText>
          I am Sebastian <br /> Full Stack Web Developer
        </HeroText>
      </HeroContainer>
    </HeroBody>
  );
}

const HeroContainer = styled.div`
  align-items: flex-end;
  display: flex;
  background: url("hero.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: clamp(50vw, 61.8vw, 890px); */
  height: 890px;
  justify-content: center;
  /* max-height: 890px; */
  max-width: 1440px;
  width: 100%;

  /* @media (min-width: ${(props) =>
    props.theme.media_sizes.mobileTransition}) {
    align-items: flex-end;
  } */
`;

const HeroBody = styled.div`
  /* :before {
    content: "";
    display: block;
    position: relative;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("hero.webp");
    background-size: cover;
    filter: blur(15px);
    opacity: 45%;
    height: 100%;
  } */

  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeroText = styled.h2`
  text-align: center;
`;

export default Hero;
