import Head from "next/head";
// import Link from "next/link";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import BlogTeaser from "components/BlogTeaser";
import ProjectTeaser from "components/ProjectTeaser";
import Contact from "components/Contact";
import styled from "styled-components";

export default function Home() {
  return (
    <Homepage>
      <Head>
        <title>Sebastian Golbert - Fullstack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <BlogTeaser />
        <ProjectTeaser />
        <Contact />
      </main>

      <Footer />
    </Homepage>
  );
}

const Homepage = styled.body`
  html {
    font-size: 125%;
  }

  body {
    color: blue;
    font-family: "Aleo", serif;
    font-size: 1.25rem;
    line-height: 1.65;
    margin: 0;
    padding: 0;
  }

  h1 {
    /* font-size: 4.209em; */
    font-size: clamp(3.157em, 16.82vw, 4.209em);
  }

  h2 {
    /* font-size: 3.157em; */
    font-size: clamp(2.369em, 12.62vw, 3.157em);
  }

  h3 {
    /* font-size: 2.369em; */
    font-size: clamp(1.777em, 9.47vw, 2.369em);
  }

  h4 {
    /* font-size: 1.777em; */
    font-size: clamp(1.333em, 7.11vw, 1.777em);
  }

  h5 {
    font-size: clamp(1em, 5.33vw, 1.333em);
  }

  small,
  .text_small {
    font-size: 0.75em;
  }

  * {
    box-sizing: border-box;
  }
`;
