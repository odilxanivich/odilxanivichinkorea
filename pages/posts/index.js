import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function PostsPage({ posts }) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-red-900 tracking-wide mb-4">
        Postlar Jadvali
        </h1>
        <p className="text-lg text-gray-400 italic">
          Koreyada nimani ko'rsam shuni yozaman va ko'rsataman
        </p>
      </section>

      {/* Creative Rows */}
      <div className="bg-gray-950 text-gray-200 rounded-lg divide-y divide-gray-800 shadow-lg">
        {posts.map((post, index) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className="group px-6 py-5 flex items-center justify-between hover:bg-gray-900 transition cursor-pointer">
              {/* Left side: index number */}
              <span className="text-gray-600 font-mono text-sm mr-4">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Middle: title + summary */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-100 group-hover:text-red-400 transition">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                  {post.summary}
                </p>
              </div>

              {/* Right side: subtle arrow */}
              <span className="text-gray-500 group-hover:text-red-400 transition">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "posts", filename),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Post",
      summary: data.summary ?? "No summary provided.",
    };
  });

  return {
    props: { posts },
  };
}
