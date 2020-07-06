import styled from "styled-components";
import Section from "components/Section";
import SocialMedia from "components/SocialMedia";
import TextInput from "components/TextInput";

function Contact() {
  return (
    <Section title="Contact">
      <ContactForm>
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <TextArea id="message" name="message" />
        <Submit type="submit" value="Submit" />
      </ContactForm>
      <Social />
    </Section>
  );
}

const TextArea = styled.textarea`
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  height: 153px;
  line-height: 1.65;
  padding: 11px 14px;
  width: 324px;
`;

const Social = styled(SocialMedia)`
  margin-top: 73px;
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

const ContactForm = styled.form`
  display: grid;
  margin-top: 36px;
  width: 324px;
`;

export default Contact;
