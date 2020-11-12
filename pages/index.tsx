import Head from "next/head";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "components/Layout";
import Hero from "components/Hero";
import About from "components/About";
import BlogTeaser from "components/BlogTeaser";
import ProjectTeaser from "components/ProjectTeaser";
import { getSortedBlogPosts, getSortedProjectPosts } from "utils/posts";
import { IndexProps, IndexStaticProps } from "./types";

export async function getStaticProps(): Promise<IndexStaticProps> {
  const allBlogPostsData = getSortedBlogPosts();
  const allProjectPostsData = getSortedProjectPosts();
  return {
    props: {
      allBlogPostsData,
      allProjectPostsData,
    },
  };
}

export default function Home({
  allBlogPostsData,
  allProjectPostsData,
}: IndexProps): JSX.Element {
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
        <BlogTeaser blogPosts={allBlogPostsData} />
        <ProjectTeaser projectPosts={allProjectPostsData} />
      </Layout>
    </div>
  );
}
