import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Pressable, View } from "react-native";
import SkeletonImage from "./skeleton";

type Props = {
    images: string[];
    autoPlayInterval?: number;
};

export default function AutoCarousel({
    images,
    autoPlayInterval = 3000
}: Props) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // pré-carrega todas as imagens e as mantém em memória, para a troca não ficar preta
    const preloadedRef = useRef<HTMLImageElement[]>([]);
    useEffect(() => {
        preloadedRef.current = images.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
    }, [images]);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () =>
        setIndex((i) => (i - 1 + images.length) % images.length);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const delay = Math.random() * 1500; // cada carrossel começa num tempo diferente

        timeoutRef.current = window.setTimeout(() => {
            next();
        }, autoPlayInterval + delay);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index, autoPlayInterval]);



    return (
        <div className="w-full h-full flex-col justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center">
                <View className="w-fit h-fit shadow-black rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <motion.div
                        key={index}
                        className="w-full h-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <SkeletonImage
                            src={images[index]}
                            className="w-full h-full rounded-xl shadow-xl"
                        />
                    </motion.div>

                </View>
            </div>
            <div className="sm:flex items-center hidden justify-center">
                {/* PREV */}
                <Pressable
                    onPress={prev}
                    className="w-1/3 mt-2 lg:mt-3 h-5 lg:h-10 items-center justify-center cursor-pointer">

                    <motion.img
                        src="/icons/setaesquerda.svg"
                        className="lg:w-4 lg:h-4 w-2 h-2 aspect-square"
                        animate={{ scale: 2 }}
                        whileHover={{ scale: 2.4 }}
                        transition={{ type: "spring", stiffness: 200 }} />

                </Pressable>

                {/* INDICADORES */}
                <div className="w-fit mt-2 lg:mt-3 h-5 lg:h-10 flex gap-1 lg:gap-2 items-center justify-center">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`w-1 h-1 lg:w-2 lg:h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>

                {/* NEXT */}
                <Pressable
                    onPress={next}
                    className="w-1/3 mt-2 lg:mt-3 h-5 lg:h-10 items-center justify-center cursor-pointer">

                    <motion.img
                        src="/icons/setadireita.svg"
                        className="lg:w-4 lg:h-4 w-2 h-2 aspect-square"
                        animate={{ scale: 2 }}
                        whileHover={{ scale: 2.4 }}
                        transition={{ type: "spring", stiffness: 200 }} />

                </Pressable>
            </div>
        </div>
    );
}
