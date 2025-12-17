import { useState, useEffect } from "react";

export default function AdBanner() {
  const images = [
    "/images/ads1.png",
    "/images/ads2.png",
    "/images/ads3.png",
    "/images/ads4.png",
    "/images/ads5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 md:px-10 my-8 pb-0 mb-0">
      <img
        src={images[currentIndex]}
        alt="Advertisement"
        className="w-full h-auto object-cover rounded-xl shadow-md"
      />
    </div>
  );
}
