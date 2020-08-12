import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const blogPostDir = path.join(process.cwd(), "blog-posts");
const projectPostDir = path.join(process.cwd(), "project-posts");

function getSortedPosts(directory) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getSortedBlogPosts() {
  return getSortedPosts(blogPostDir);
}

export function getSortedProjectPosts() {
  return getSortedPosts(projectPostDir);
}

function getAllPostIds(directory) {
  const fileNames = fs.readdirSync(directory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getAllBlogPostIds() {
  return getAllPostIds(blogPostDir);
}

export function getAllProjectPostIds() {
  return getAllPostIds(projectPostDir);
}

async function getPostData(directory, id) {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getBlogPostData(id) {
  return getPostData(blogPostDir, id);
}

export async function getProjectPostData(id) {
  return getPostData(projectPostDir, id);
}
