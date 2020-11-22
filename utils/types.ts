type CommonHeader = {
  title: string;
  date: string;
  teaser: string;
  excerpt: string;
  author: string;
  id: string;
};

export type PostHeader = CommonHeader;

export type Post = CommonHeader & {
  contentHtml: string;
};

export type ProjectHeader = Omit<CommonHeader, "author"> & {
  link: string;
};

export type Project = ProjectHeader & {
  contentHtml: string;
};

export type PostId = {
  params: {
    id: string;
  };
};
