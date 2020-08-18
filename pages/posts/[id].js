import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getAllBlogPostIds, getBlogPostData } from "utils/posts";
import Layout from "components/Layout";
import Section from "components/Section";

export async function getStaticProps({ params }) {
  const postData = await getBlogPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

const background =
  "linear-gradient(180deg, #001233 0%, #003087 24.48%, #001233 100%)";

export default function Post({ postData }) {
  const content = postData.contentHtml.replace(
    /<a href=/g,
    '<a rel="noopener noreferrer" target="_blank" href='
  );

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <Section title={postData.title} bg={background}>
          {/* <h1>{postData.title}</h1> */}

          <Img src={postData.teaser} alt="Post Intro Image"></Img>
          <Article>
            <div>
              {" "}
              {postData.date} by {postData.author}{" "}
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Article>
          <Link href="/" passHref>
            <BlogLink>Go back</BlogLink>
          </Link>
        </Section>
      </Layout>
    </div>
  );
}

const Article = styled.article`
  max-width: 1200px;

  a {
    text-decoration: underline;
  }

  a:hover {
    font-weight: bold;
  }

  div {
    margin: 0 30px 33px 30px;
    max-width: 720px;
  }

  h3 {
    margin-bottom: 20px;
  }

  p,
  ul {
    margin-bottom: 33px;
  }
`;

const Img = styled.img`
  border-radius: 6px;
  object-fit: cover;
  height: clamp(260px, 32.1vw, 462px);
  margin: 47px 30px 42px 30px;
  width: calc(100vw - 60px);
  max-width: 720px;
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 1.777em;
  margin: 0 30px 33px 30px;
  max-width: 720px;
  width: calc(100% - 60px);

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
