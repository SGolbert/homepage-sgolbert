import styled from "styled-components";

function Hero() {
  return (
    <HeroBody>
      <HeroContainer>
        <HeroText>
          I am Sebastian <br /> Full Stack Web Developer{" "}
          {process.env.SENDGRID_API_KEY}
        </HeroText>
      </HeroContainer>
    </HeroBody>
  );
}

// The before pseudo-element is to put a blurry background behind the hero image
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

const HeroContainer = styled.div`
  align-items: flex-end;
  background: url("hero.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  height: 890px;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
`;

const HeroText = styled.h2`
  text-align: center;
`;

export default Hero;
