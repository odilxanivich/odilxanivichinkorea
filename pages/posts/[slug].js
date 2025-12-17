// pages/posts/[slug].js

import Layout from "../../components/Layout";
import { getPost, getAllSlugs } from "../../lib/getPost";
import markdownToHTML from "../../lib/markdownToHTML";
import AdInArticle from "../../components/AdInArticle";

export default function Post({ title, date, summary, content }) {
  return (
    <Layout
      title={`${title} — Odilxanivich in Korea`}   // ✅ dynamic <title>
      description={summary}                        // ✅ dynamic <meta description>
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-400 mt-2">{date}</p>
      </div>
<AdInArticle />
      <article
        className="prose prose-lg prose-img:rounded-xl prose-headings:font-bold"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  const html = await markdownToHTML(post.content);

  return {
    props: {
      title: post.title,
      date: post.date,
      summary: post.summary || "Koreyada hayot haqida o‘zbekona blog.", // ✅ add summary for SEO
      content: html,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllSlugs(),
    fallback: false,
  };
}
