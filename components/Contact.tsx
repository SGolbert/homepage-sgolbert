import styled from "styled-components";
import { FormEvent, useState } from "react";
import Section from "components/Section";
import SocialMedia from "components/SocialMedia";

const background = "linear-gradient(180deg, #001233 98.1%, #19A400 100%)";

function Contact(): JSX.Element {
  const [messageStatus, setMessageStatus] = useState("typing");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessageStatus("sending");

    const form = document.querySelector("form");

    if (!form) {
      setMessageStatus("error");
      throw new Error("Form not found!");
    }

    const data = new FormData(form);
    form.reset();

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(data)),
    }).then((response) => {
      if (response.status === 200) {
        setMessageStatus("sent");
      } else {
        console.log("Sendgrid error:", response);
        setMessageStatus("error");
      }
    });
  }

  return (
    <Section title="Contact" bg={background}>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <TextArea id="message" name="message" required />

        {messageStatus === "sending" ? (
          <Submit id="submit" type="submit" value="Submit" disabled />
        ) : (
          <Submit id="submit" type="submit" value="Submit" />
        )}
      </ContactForm>
      {messageStatus === "sent" ? <SentMessage>Message sent!</SentMessage> : ""}
      {messageStatus === "error" ? (
        <SentMessage>Message could not be sent!</SentMessage>
      ) : (
        ""
      )}
      <Social />
      {/* <ContactSection>Testing</ContactSection> */}
    </Section>
  );
}

const SentMessage = styled.div`
  width: 100%;
  margin-top: 33px;
  margin-bottom: -33px;
  max-width: 500px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin-top: 33px;
    margin-bottom: -66px;
    text-align: right;
  }
`;

// const ContactSection = styled(Section)`
//   position: relative;

//   &::after {
//     content: "LALALA";
//     width: 60px;
//     height: 4px;
//     background: red;
//     position: absolute;
//     bottom: 40px;
//   }
// `;

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
