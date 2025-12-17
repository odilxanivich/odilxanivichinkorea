import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import AdBanner from "../components/AdBanner";
import { useState } from "react";

export default function Home({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const categories = [
    "Barchasi",
    "SIM kartalar",
    "Bank",
    "Housing-Uy",
    "Real Voqea",
    "Din",
    "Ovqatlar",
    "Visalar",
    "Til kurslari",
    "Sog'lik",
    "Oila",
    "Lifestyle",
    "Moshenniklar",
    "Texnologiya",
  ];

  const filteredPosts =
    selectedCategory === "Barchasi"
      ? posts
      : posts.filter(
          (post) =>
            post.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <Layout>
      {/* HERO */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 leading-tight">
          So'nggi Postlar
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Koreyada yashash haqida o‘zbekona, samimiy, rasmiyatchiliksiz va do‘stlarimga gapirgandek yozayapman.
        </p>
      </section>

      {/* CATEGORY FILTERS */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 py-2 px-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-xs md:text-sm font-medium tracking-wide transition-all whitespace-nowrap shadow-sm
              ${
                selectedCategory === cat
                  ? "bg-red-600 text-white border-red-600 shadow-md"
                  : "bg-white hover:bg-red-50 hover:border-red-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* POSTS GRID */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
              
              {/* IMAGE */}
              <div className="relative h-52 md:h-56 w-full overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400 text-sm bg-gray-100">
                    No image
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                <div className="text-[11px] text-gray-400 mt-4 tracking-wide">
                  {post.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* PROMO */}
      <div className="mt-20 bg-gradient-to-r from-red-50 to-red-100 p-10 rounded-2xl shadow-sm text-center max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
          Discover Korea with Odilxanivich
        </h3>
        <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
          “Bu yerda hayot seni sinaydi, lekin o‘rgatadi ham. O‘zbekistonga
          qaytganda boshqa odam bo‘lasan.”
        </p>
        <Link
          href="/posts"
          className="inline-block px-7 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-md text-sm font-medium tracking-wide"
        >
          Postlarni Ko'rish
        </Link>
      </div>

      {/* LOCATION SECTION */}
      <Link href="/posts/wheretolive">
        <section className="w-full mt-20 px-4 md:px-10 cursor-pointer">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              QAYERDA YASHASAM EKAN?
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Eng ko‘p tanlanadigan koreys shaharlari
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Seoul",
                desc: "Qimmat, Ish Topish Oson",
                img: "/images/seoul.jpg",
              },
              {
                name: "Busan",
                desc: "Sohil Bo'yidagi Rohat, Arzon",
                img: "/images/busan.jpg",
              },
              {
                name: "Chuncheon",
                desc: "Kurort Shahar, Faqat O'qish Uchun",
                img: "/images/chuncheon.jpg",
              },
              {
                name: "Incheon",
                desc: "Aeroport va Dengiz Vaybi, Zamonaviy",
                img: "/images/incheon.jpg",
              },
            ].map((city) => (
              <div key={city.name} className="flex flex-col">
                <div className="relative h-60 md:h-64 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={city.img}
                    alt={city.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-4 text-lg font-semibold leading-snug">
                  {city.name}
                </p>
                <span className="text-gray-500 text-sm leading-relaxed">
                  {city.desc}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Link>

      <AdBanner />
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Post",
      summary: data.summary ?? "No summary provided.",
      date: data.date || "Unknown date",
      image: data.image || null,
      category: data.category || "Barchasi",
    };
  });

  return {
    props: { posts },
  };
}
