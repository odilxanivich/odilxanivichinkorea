import Layout from "../components/Layout";
import { groups } from "../data/groups";
import { useState, useRef, useEffect } from "react";
import { steps } from "../data/steps";
import Picker from "react-mobile-picker";

export default function IKorean() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const pickerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1); const groupsPerPage = 3; const totalPages = Math.ceil(groups.length / groupsPerPage); const startIndex = (currentPage - 1) * groupsPerPage; const currentGroups = groups.slice(startIndex, startIndex + groupsPerPage);

  const stepData = steps.find((s) => s.step === currentStep);

  const handleStepChange = (value) => {
    setIsLoading(true);
    setCurrentStep(value.step);
    new Audio("/sounds/scroll.mp3").play(); // optional sound
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Add scroll + keyboard controls only for picker area
  useEffect(() => {
    const el = pickerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
      } else {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
      }
    };

    const handleKey = (e) => {
      if (e.key === "ArrowDown") {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
      }
      if (e.key === "ArrowUp") {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("keydown", handleKey);

    // Make div focusable so keyboard works
    el.setAttribute("tabindex", "0");

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-red-100 rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Koreys tilini bosqichma‑bosqich o‘rganing
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          150 bosqichda koreys tilini egallang — har bir bosqichda 20 ta so‘z va 20 ta ibora beriladi.
        </p>
      </section>

      {/* STEP PICKER */}
      <div className="flex flex-col items-center mt-10">
        <div className="relative w-full max-w-xs" ref={pickerRef}>
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="h-1/3 bg-gradient-to-b from-white to-transparent" />
            <div className="h-1/3" />
            <div className="h-1/3 bg-gradient-to-t from-white to-transparent" />
          </div>
          <div className="flex items-center justify-center space-x-2 z-20 relative">
            <span className="text-xl font-semibold text-gray-700">Step</span>
            <Picker
              value={{ step: currentStep }}
              onChange={handleStepChange}
              height={120}
              itemHeight={40}
            >
              <Picker.Column name="step">
                {steps.map((s) => (
                  <Picker.Item key={s.step} value={s.step}>
                    {s.step}: {s.title}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {/* VOCAB GRID */}
      {!isLoading && (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 px-6">
          {stepData.words.map((word, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
            >
              <h2 className="text-center text-2xl font-semibold text-red-600 mb-2">
                {word.korean}
              </h2>
              <p className="text-gray-400">
                O‘qilishi: <strong className="text-gray-800">{word.romanization}</strong>
              </p>
              <p className="text-gray-400">
                O‘zbekchasi: <strong className="text-gray-800">{word.uzbek}</strong>
              </p>
              <p className="text-gray-400">
                Inglizchasi: <strong className="text-gray-800">{word.english}</strong>
              </p>
            </div>
          ))}
        </section>
      )}

      {/* STICKY AUDIO CONTROL */}
      <div className="fixed bottom-4 right-4 shadow-lg rounded-full px-4 py-2">
        <button
          className="px-6 py-3 text-white rounded-full shadow-lg transition hover:opacity-90"
          style={{ backgroundColor: "#00224D" }}
          onClick={handleTogglePlay}
        >
          {isPlaying ? "⏸ Pauza" : "▶️ Audioni eshitish"}
        </button>
        <audio
          ref={audioRef}
          src={`/audios/step${currentStep}.mp3`}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-12 max-w-xl mx-auto">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-red-600 h-3 rounded-full"
            style={{ width: `${(currentStep / 150) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Step {currentStep} of 150
        </p>
      </div>

      <section className="mt-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Premium Test Guruhlari
        </h2>

        {/* BIG CARD GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {currentGroups.map((group) => (
            <div key={group.id} className="bg-gradient-to-r from-yellow-50 to-red-100 rounded-2xl shadow-xl p-10 flex flex-col items-center hover:scale-105 transition" >
              <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">
                {group.title}
              </h3>
              <p className="text-gray-700 mb-6 text-center text-lg">
                Faylni yuklab oling va mustaqil yeching.
              </p>
              <a href={group.pdf} download className="px-6 py-3 bg-red-600 text-white text-lg rounded-full shadow hover:bg-red-700 transition" >
                📄 PDF saqlab olish
              </a>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          {/* Mobile-friendly pagination */}
          <div className="flex items-center justify-center space-x-4 md:hidden">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
              Oldingi
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
              Keyingi
            </button>
          </div>

          {/* Desktop pagination with numbers */}
          <div className="hidden md:flex justify-center space-x-2">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
              Oldingi
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${
                  page === currentPage
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}

            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
              Keyingi
            </button>
          </div>
        </div>
      </section>
      
    </Layout>
  );
}
