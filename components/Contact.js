import styled from "styled-components";
import Section from "components/Section";
import SocialMedia from "components/SocialMedia";

const background = "linear-gradient(180deg, #001233 98.1%, #19A400 100%)";

function Contact() {
  return (
    <Section title="Contact" bg={background}>
      <ContactForm>
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <TextArea id="message" name="message" />
        <Submit id="submit" type="submit" value="Submit" />
      </ContactForm>
      <Social />
      {/* <ContactSection>Testing</ContactSection> */}
    </Section>
  );
}

const ContactSection = styled(Section)`
  position: relative;

  &::after {
    content: "LALALA";
    width: 60px;
    height: 4px;
    background: red;
    position: absolute;
    bottom: 40px;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: auto;
  margin-top: 36px;
  width: 324px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 39px;
    width: 100%;
    max-width: 500px;

    #name {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    #email {
      grid-column-start: 2;
      grid-row-start: 2;
    }

    #message {
      grid-column: 1 / -1;
      grid-row-start: 4;
    }

    #submit {
      grid-column: 2 / -1;
      grid-row-start: 5;
      justify-self: right;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.textBlack};
  font-family: "Lato", sans-serif;
  font-size: 20px;
  line-height: 1.65;
  margin-bottom: 4px;
  padding: 3px 14px;
  width: 100%;
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  min-height: 153px;
  line-height: 1.65;
  padding: 11px 14px;
  resize: vertical;
  width: 324px;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    width: 100%;
  }
`;

const Submit = styled.input`
  justify-self: center;
  background: ${(props) => props.theme.colors.secondary};
  border: 0;
  border-radius: 15px;
  font-family: "Lato", sans-serif;
  font-size: 26.66px;
  height: 55px;
  margin-top: 47px;
  width: 170px;

  :hover {
    background: ${(props) => props.theme.colors.secondaryLight};
    cursor: pointer;
  }
`;

const Social = styled(SocialMedia)`
  margin: 73px 0 40px 0;
`;

export default Contact;
