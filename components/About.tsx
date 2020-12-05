import { ReactNode, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Section from "components/Section";
import { theme } from "../pages/_app.js";

const DescriptionContainer = styled.div`
  padding: 20px;
`;

const textDescriptions = {
  react: (
    <DescriptionContainer>
      <h5>Very popular and flexible frontend framework</h5>
      <p>
        React is a library for managing the UI components of a site. In order to
        have a website with more than just basic features, it&#39;s necessary to
        extend React&#39;s functionalities through the use of libraries. In that
        sense it leaves it up to the developer to make all the decisions, which
        is a great advantage but can be daunting at the beginning. Another
        advantage of React is it&#39;s popularity, making it easy to find
        learning resources and developers proficient with it.
      </p>
    </DescriptionContainer>
  ),
  next: (
    <DescriptionContainer>
      <h5>
        A React framework for making serverless websites with static site
        generation
      </h5>
      <p>
        Next brings a lot of features which allow for a rapid development of a
        React App. At the expense of being opinionated in aspects like routing
        or folder structure, it eliminates almost all of the overhead of setting
        up the environment for a React project. On top of that, it offers an
        easy way of implementing static site generation and server side
        rendering of webpages.
      </p>
    </DescriptionContainer>
  ),
  vscode: (
    <DescriptionContainer>
      <h5>A text editor with features comparable to an IDE</h5>
      <p>
        VS Code is a text editor which can be extended by the use of plugins. It
        offers a lot of productivity hacks for a web developer. It&#39;s pretty
        much the standard for web development and scripting nowadays. The
        integration with TypeScript is specially good!
      </p>
    </DescriptionContainer>
  ),
  node: (
    <DescriptionContainer>
      <h5>Runtime environment which allows to use JavaScript in the server</h5>
      <p>
        Node allows to develop backend applications using the same language as
        in the frontend, JavaScript. Moreover, by using a very well developed
        asynchronous execution engine, it allows developers to write concurrent
        code snippets in an easy way. It follows a philosophy similar to the one
        from React: the developer must choose libraries to extend Node&#39;s
        basic functionalities. Libraries like express or Nest.js are a good
        example.
      </p>
    </DescriptionContainer>
  ),
  mongo: (
    <DescriptionContainer>
      <h5>Long standing and very popular No-SQL database</h5>
      <p>
        As the most well known No-SQL database, MongoDB is a great choice for
        permanently storing JavaScript objects. As MongoDB stores the data in a
        similar way to a JSON file, it avoids the use of ORM (i.e. translating
        from JavaScript to relational data). The good documentation and
        resources makes it a superior storage choice.
      </p>
    </DescriptionContainer>
  ),
  typescript: (
    <DescriptionContainer>
      <h5>
        A major upgrade to JavaScript, it allows for type checking during
        development
      </h5>
      <p>
        TypeScript changes the development experience of a JavaScript project
        very significantly. By type checking during development and enforcing
        good practices, it avoids a lot of bugs in runtime code. The extra
        effort when writing the code pays off ten times over as the project
        advances and is easier to debug, test, maintain and extend.
      </p>
    </DescriptionContainer>
  ),
  aws: (
    <DescriptionContainer>
      <h5>
        Cloud provider with great performance and a large number of services
      </h5>
      <p>
        AWS provides everything you will ever need for cloud development. The
        amount of available services can be intimidating, but it is possible to
        start learning a few core services which are fundamental.
      </p>
    </DescriptionContainer>
  ),
  svelte: (
    <DescriptionContainer>
      <h5>
        State of the art frontend framework which simplifies the development
        process
      </h5>
      <p>
        Svelte handles the union of HTML, CSS and JavaScript in a very natural
        way with the use of a templating scheme. Moreover, the connection
        between a JS variable and it&#39;s counterpart in the UI is extremely
        straightforward. In comparison with other frontend frameworks it has a
        reduced user base, but it&#39;s nonetheless very powerful. It has the
        potential of surpassing React, Angular and Vue in the future.
      </p>
    </DescriptionContainer>
  ),
  nest: (
    <DescriptionContainer>
      <h5>A progressive Node.js framework which uses TypeScript by default</h5>
      <p>
        Nest.js simplifies the development of a node.js project by bringing
        built-in features and software design decisions, in a way which could be
        compared to Next.js and React.
      </p>
    </DescriptionContainer>
  ),
  none: "",
};

type DescriptionKeys = keyof typeof textDescriptions;

const background =
  "linear-gradient(180deg, #001233 0%, #003087 24.48%, #001233 100%)";

const Subtitle = styled.h3`
  margin-top: 55px;
  text-align: center;
  width: clamp(180px, 53.57vw, 1440px);

  br {
    display: block;

    @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    margin-top: 41px;
    width: 100%;
  }
`;

const StackIcons = styled.div`
  display: grid;
  grid-row-gap: 33px;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  justify-items: center;
  margin: 42px 20px 58px 20px;
  position: relative;
  width: 100%;

  @media (min-width: 600px) {
    margin: 92px 0 58px 0;
    grid-template-columns: repeat(auto-fit, 150px 150px 150px);
  }
`;

const Img = styled.img`
  margin-right: 0px;
`;

const TechDescription = styled(animated.div)`
  position: absolute;
  top: 200px;
  width: clamp(320px, 80vw, 900px);
  background: ${theme.colors.secondaryDark};
  border-radius: 8px;
  z-index: 2;

  @media (min-width: 900px) {
    top: 100px;
  }
`;

const About = (): JSX.Element => {
  const [description, setdescription] = useState<ReactNode>("none");
  const [wantToLearn, setwantToLearn] = useState<ReactNode>("none");
  const props = useSpring({
    opacity: description !== "none" ? 1 : 0,
    display: description !== "none" ? "block" : "none",
    height: description !== "none" ? "auto" : "0px",
    margin: description !== "none" ? 20 : 0,
    // maxHeight: description !== "none" ? "0" : "0",
    // from: {
    //   opacity: 0,
    // },
  });

  const MouseHoverHandler = (
    value: DescriptionKeys,
    wantToLearn?: boolean
  ) => () => {
    if (wantToLearn) {
      setwantToLearn(textDescriptions[value]);
    } else {
      setdescription(textDescriptions[value]);
    }
  };

  return (
    <Section title="About" bg={background}>
      <Subtitle>These are my favorite tools</Subtitle>
      <StackIcons>
        <Img
          onMouseEnter={MouseHoverHandler("react")}
          onMouseLeave={MouseHoverHandler("none")}
          width="90"
          height="80"
          src="react.svg"
          alt="React"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("next")}
          onMouseLeave={MouseHoverHandler("none")}
          width="132"
          height="80"
          src="nextjs.svg"
          alt="Next"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("vscode")}
          onMouseLeave={MouseHoverHandler("none")}
          width="80"
          height="80"
          src="vscode.svg"
          alt="VS Code"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("node")}
          onMouseLeave={MouseHoverHandler("none")}
          width="56"
          height="80"
          src="Node.svg"
          alt="Node.js"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("mongo")}
          onMouseLeave={MouseHoverHandler("none")}
          width="115"
          height="80"
          src="mongodb.png"
          alt="Mongo"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("typescript")}
          onMouseLeave={MouseHoverHandler("none")}
          width="90"
          height="80"
          src="Typescript.svg"
          alt="Typescript"
        ></Img>
        <TechDescription style={props}>
          {description !== "none" ? description : ""}
        </TechDescription>
      </StackIcons>
      <Subtitle>And I want to learn these</Subtitle>
      <StackIcons>
        <Img
          onMouseEnter={MouseHoverHandler("aws", true)}
          onMouseLeave={MouseHoverHandler("none", true)}
          width="110"
          height="80"
          src="AWS.svg"
          alt="AWS"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("svelte", true)}
          onMouseLeave={MouseHoverHandler("none", true)}
          width="110"
          height="80"
          src="svelte.svg"
          alt="Svelte"
        ></Img>
        <Img
          onMouseEnter={MouseHoverHandler("nest", true)}
          onMouseLeave={MouseHoverHandler("none", true)}
          width="110"
          height="80"
          src="nestjs.svg"
          alt="Nest"
        ></Img>
        <TechDescription style={props}>
          {wantToLearn !== "none" ? wantToLearn : ""}
        </TechDescription>
      </StackIcons>
    </Section>
  );
};

export default About;
