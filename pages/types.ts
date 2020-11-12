import { ProjectHeader, PostHeader } from "utils/types";

export type IndexStaticProps = {
  props: {
    allBlogPostsData: PostHeader[];
    allProjectPostsData: ProjectHeader[];
  };
};

export type IndexProps = {
  allBlogPostsData: PostHeader[];
  allProjectPostsData: ProjectHeader[];
};
