import { useState } from "react";
import "../global.css";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function SkeletonImage({ src, alt = "", className = "" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Nubank */}
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden rounded-inherit bg-[#1c1c1c]">
          <div className="absolute inset-0 bg-white/5" />
          <div className="absolute -inset-y-[60%] -left-[200%] w-[300%] animate-skeletonNubank bg-gradient-to-r from-transparent via-white/14 to-transparent" />
        </div>
      )}

      {/* Imagem */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
