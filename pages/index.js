import Head from "next/head";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "components/Layout";
import Hero from "components/Hero";
import About from "components/About";
import BlogTeaser from "components/BlogTeaser";
import ProjectTeaser from "components/ProjectTeaser";
import { getSortedPostsData } from "utils/posts.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Sebastian Golbert - Fullstack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <About />
        <BlogTeaser blogPosts={allPostsData} />
        <ProjectTeaser />
      </Layout>
    </div>
  );
}
