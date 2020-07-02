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
  background-size: 100%;
  height: clamp(50vw, 61.8vw, 890px);
  justify-content: center;
  max-height: 890px;
  max-width: 1440px;
  width: 100%;
`;

const HeroBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeroText = styled.h2`
  text-align: center;
`;

export default Hero;
