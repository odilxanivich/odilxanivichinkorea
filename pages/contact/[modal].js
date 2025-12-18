import { motion } from "framer-motion";
import Link from "next/link";

const modalContent = {
  about: {
    title: "Odilxanivich Kim O'zi?",
    text: "Odilxanivich — bu blogning egasi. Men Koreyada yashayman va shu yerda ko‘rgan‑bilganlarimni, boshimdan o‘tgan voqealarni, foydali tajribalarimni o‘zbek tilida bo‘lishib boraman. Blogda faqat shaxsiy hayotim emas, balki Koreyadagi kundalik hayot, madaniyat, jamiyat, ish imkoniyatlari va real muammolar haqida ham gaplashaman.",
  },
  stay: {
    title: "Yo'qotib qo'ymaslik",
    text: "Agar siz blogni topgan bo'lsangiz — yo'qotmang! Odilxanivich har hafta yangi postlar, foydali maslahatlar va Koreyada yashash bo'yicha tajribalar bilan bo'lishadi. Siz blogni bookmarksga qo'shishingiz, Telegram kanalga obuna bo'lishingiz yoki email orqali yangiliklarni olishni yoqishingiz mumkin.",
  },
  ads: {
    title: "Reklama Menejmenti",
    text: "Agar siz o'z brendingizni yoki mahsulotingizni Odilxanivich blogida reklama qilishni istasangiz, bu bo'lim orqali bog'lanishingiz mumkin. Reklama joylashtirish, hamkorlik qilish, sponsorlik takliflari va boshqa tijorat aloqalari uchun bu yerda to'liq ma'lumot beriladi. Blog o'zbek auditoriyasiga yo'naltirilgan bo'lib, sizning xabaringizni to'g'ri odamlar ko'radi.",
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
