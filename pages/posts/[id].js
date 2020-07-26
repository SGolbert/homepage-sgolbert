import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getAllPostIds, getPostData } from "utils/posts";
import Layout from "components/Layout";
import Section from "components/Section";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const background =
  "linear-gradient(180deg, #001233 0%, #003087 24.48%, #001233 100%)";

export default function Post({ postData }) {
  console.log(postData.contentHtml);
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
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Article>
          <Link href="/blog" passHref>
            <BlogLink>Go back to blog site</BlogLink>
          </Link>
        </Section>
      </Layout>
    </div>
  );
}

const Article = styled.article`
  div {
    margin: 0 26px 33px 26px;
  }

  p,
  ul {
    margin-bottom: 33px;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    div {
      margin: 0 clamp(26px, 16.66vw, 240px) 33px clamp(26px, 16.66vw, 240px);
    }
  }
`;

const Img = styled.img`
  border-radius: 6px;
  object-fit: cover;
  height: clamp(260px, 32.1vw, 462px);
  margin: 47px 0 42px 0;
  width: clamp(325px, 66.6vw, 959px);
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 1.333em;
  margin: 33px auto 66px 26px;
  text-align: center;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.media_sizes.mobileTransition}) {
    font-size: 1.777em;
    margin: 67px auto 50px clamp(26px, 16.66vw, 240px);
  }
`;
