import { ReactNode } from "react";
import { PostHeader } from "utils/types";

export type BlogTeaserProps = {
  blogPosts: PostHeader[];
};

export type SectionProps = {
  title: string;
  bg: string;
  children: ReactNode;
};
