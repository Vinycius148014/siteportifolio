import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [
  { src: "/images/IMG_0087.jpg" },
  { src: "/images/IMG_0677.jpg" },
  { src: "/images/IMG_0720.jpg" },
  { src: "/images/IMG_4990.jpg" },
  { src: "/images/IMG_0070.jpg" },
  { src: "/images/IMG_0087.jpg" },
  { src: "/images/IMG_0168.jpg" },
  { src: "/images/IMG_0267.jpg" },
  { src: "/images/IMG_9557.jpg" },
  { src: "/images/IMG_9566.jpg" },
  { src: "/images/IMG_9566.jpg" },
  { src: "/images/IMG_9566.jpg" },

];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* GRID */}
      <div className="m-8 md:m-24 rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-0 cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={slide.src}
              alt={`Foto ${i + 1}`}
              className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
}
