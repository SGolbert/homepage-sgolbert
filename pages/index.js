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
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: red;
  }

  * {
    box-sizing: border-box;
  }
`;
