import Head from "next/head";
import Header from "./Header";
import { FaInstagram, FaYoutube, FaCommentDots } from "react-icons/fa";

export default function Layout({ children, title, description }) {
  const defaultTitle = "Odilxanivich in Korea — Real Hayot & Tajribalar";
  const defaultDescription =
    "Koreyada yashash tajribalari, o‘zbekona maslahatlar va real voqealar. Odilxanivich bilan Koreya hayoti.";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="author" content="Odilxanivich in Korea Team" />
        <link rel="icon" href="/images/BLACKLOGO.png" />

        <meta
          name="keywords"
          content="Odilxanivich, Korea, O'zbek, hayot, tajriba, blog, vizalar, uy-joy, student, lifestyle"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:title" content="Odilxanivich in Korea — Real Hayot" />
        <meta
          property="og:description"
          content="Koreyada yashash tajribalari va o‘zbekona yo‘l-yo‘riqlar."
        />
        <meta property="og:image" content="/images/logo-big.png" />
        <meta property="og:url" content="https://odilxanivichinkorea.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odilxanivich in Korea" />
        <meta
          name="twitter:description"
          content="Koreyada hayot haqida o‘zbekona blog."
        />
        <meta name="twitter:image" content="/images/logo-big.png" />

        <meta name="theme-color" content="#EF4444" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/css/style.css" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Odilxanivich in Korea",
              url: "https://odilxanivichinkorea.com",
              author: {
                "@type": "Person",
                name: "Odilxanivich",
              },
              description:
                "Koreyada yashash tajribalari, o‘zbekona maslahatlar va real voqealar.",
            }),
          }}
        />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>

      {/* FOOTER */}
      <footer className="bg-black text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

          {/* 🔥 UPDATED PROFILE BLOCK WITH ICONS */}
          <div>
            <h2 className="font-semibold text-xl mb-2 tracking-tight">
              Odilxanivich
            </h2>

            <p className="text-sm leading-relaxed text-gray-300">
              Janubiy Koreyaning aytilmagan hikoyalari: ko‘pchilik bilmaydigan
              voqealar, yashirin tafsilotlar va hayotning o‘zi yozgan
              tajribalar.
            </p>

            <div className="flex items-center gap-5 mt-4 text-sm font-medium text-gray-300">
              <a
                href="https://www.instagram.com/odilxanivich_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@odilxanivich"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <FaYoutube className="text-lg" />
                YouTube
              </a>

              <a
                href="https://invite.kakao.com/tc/INv4JC3UHM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <FaCommentDots className="text-lg" />
                KakaoTalk
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h2 className="font-bold text-lg mb-2">Explore</h2>
            <ul className="space-y-2">
              <li>
                <a href="/posts" className="hover:text-red-400">
                  Barcha Postlar
                </a>
              </li>
              <li>
                <a href="/posts?category=simcard" className="hover:text-red-400">
                  SIM Kartalar
                </a>
              </li>
              <li>
                <a href="/posts?category=banking" className="hover:text-red-400">
                  Bank va Kartalar
                </a>
              </li>
              <li>
                <a href="/posts?category=housing" className="hover:text-red-400">
                  Uy Topish
                </a>
              </li>
              <li>
                <a
                  href="/posts?category=migration"
                  className="hover:text-red-400"
                >
                  Migratsiya & Visalar
                </a>
              </li>
              <li>
                <a
                  href="/posts?category=education"
                  className="hover:text-red-400"
                >
                  Koreyada o'qish
                </a>
              </li>
              <li>
                <a href="/posts?category=jobs" className="hover:text-red-400">
                  Ishlar & Narxlar
                </a>
              </li>
              <li>
                <a
                  href="/posts?category=technology"
                  className="hover:text-red-400"
                >
                  Texnologiya & IT
                </a>
              </li>
              <li>
                <a href="/posts?category=health" className="hover:text-red-400">
                  Sog'lik & Oila
                </a>
              </li>
              <li>
                <a
                  href="/posts?category=lifestyle"
                  className="hover:text-red-400"
                >
                  Lifestyle & Madaniyat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
<div>
  <h2 className="font-bold text-lg mb-2">Contact</h2>
  <ul className="space-y-2">
    <li>
      <a href="/contact/about" className="hover:text-red-400">Odilxanivich Kim O'zi?</a>
    </li>
    <li>
      <a href="/contact/stay" className="hover:text-red-400">Yo'qotib qo'ymaslik</a>
    </li>
    <li>
      <a href="/contact/work" className="hover:text-red-400">Ish bo'yicha</a>
    </li>
    <li>
      <a href="/contact/ads" className="hover:text-red-400">Reklama Menejmenti</a>
    </li>
  </ul>
</div>

        </div>

        <div className="text-center text-xs text-gray-400 py-6 border-t border-gray-700">
          © {new Date().getFullYear()} Odilxanivich — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
