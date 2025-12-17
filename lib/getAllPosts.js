import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace(".md", "")
    };
  });

  return posts;
}
