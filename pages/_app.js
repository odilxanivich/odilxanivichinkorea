import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Detect if the current route is a modal route
  const isModal = router.pathname.startsWith("/contact/");

  return (
    <>
      {/* Main page content */}
      <AnimatePresence mode="wait">
        {!isModal && (
          <Component key={router.asPath} {...pageProps} />
        )}
      </AnimatePresence>

      {/* Modal overlay content */}
      {isModal && (
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      )}
    </>
  );
}
