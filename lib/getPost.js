import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// Get a single post by slug
export function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    title: data.title || slug,
    date: data.date || null,
    content,
  };
}

// Get all slugs for dynamic routing
export function getAllSlugs() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ""),
    },
  }));
}
