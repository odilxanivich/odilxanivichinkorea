import { motion } from "framer-motion";
import Link from "next/link";

const modalContent = {
  about: {
    title: "Odilxanivich Kim O'zi?",
    text: "Odilxanivich — Koreyada yashab, o‘zbek auditoriyasiga foydali ma’lumotlar, tajribalar va kuzatuvlar ulashadigan blogger.",
  },
  stay: {
    title: "Yo'qotib qo'ymaslik",
    text: "Blogni kuzatib borish uchun Telegram, email obuna yoki bookmark qo‘shish kabi usullar haqida ma’lumot.",
  },
  work: {
    title: "Ish bo'yicha",
    text: "Koreyada ish topish, rezume tayyorlash, intervyu savollari va viza jarayonlari bo‘yicha real tajribalar.",
  },
  ads: {
    title: "Reklama Menejmenti",
    text: "Blogda reklama joylashtirish, hamkorlik qilish yoki tijorat takliflari bo‘yicha to‘liq ma’lumot.",
  },
};

export default function ModalPage({ modal }) {
  const data = modalContent[modal];

  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 40 }}
        transition={{ duration: 0.25 }}
        className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl"
      >
        <Link href="/" className="absolute top-2 right-2 text-gray-500 hover:text-black">
          ✕
        </Link>

        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p>{data.text}</p>
      </motion.div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { modal: params.modal },
  };
}
