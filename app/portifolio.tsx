import { Link, useLocalSearchParams } from "expo-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { botao, textobotao, textoselecionado } from "../components/estilos";
import "../global.css";

type Img = { src: string; category: string };

export default function portifolio() {
    // imagens com categoria
    const images: Img[] = [

        /*---------------------------------------- AUTOMOTIVA E OUTROS --------------------------------- */

        { src: "/images/bmwm2.avif", category: "automotiva" },
        { src: "/images/automotiva/9-509.avif", category: "automotiva" },
        { src: "/images/m2vermelha.avif", category: "automotiva" },
        { src: "/images/2carrofundo.jpg", category: "automotiva" },
        { src: "/images/ferrari.avif", category: "automotiva" },
        { src: "/images/jetta.avif", category: "automotiva" },
        { src: "/images/motobmw.avif", category: "motociclismo" },
        { src: "/images/padelazulpreparada.avif", category: "esportiva" },
        { src: "/images/padelcansado.avif", category: "esportiva" },
        { src: "/images/esportiva/9-480.avif", category: "esportiva" },
        { src: "/images/rodera.avif", category: "automotiva" },
        { src: "/images/automotiva/9-559.avif", category: "automotiva" },
        { src: "/images/automotiva/9-553.avif", category: "automotiva" },


        { src: "/images/supraavif.avif", category: "automotiva" },
        { src: "/images/automotiva/9-511.avif", category: "automotiva" },
        { src: "/images/roderafundo.jpg", category: "automotiva" },
        { src: "/images/automotiva/9-530.avif", category: "automotiva" },
        { src: "/images/automotiva/9-507.avif", category: "automotiva" },
        { src: "/images/automotiva/9-510.avif", category: "automotiva" },
        { src: "/images/automotiva/9-512.avif", category: "automotiva" },
        { src: "/images/automotiva/9-519.avif", category: "automotiva" },
        { src: "/images/automotiva/9-558.avif", category: "automotiva" },
        { src: "/images/automotiva/9-564.avif", category: "automotiva" },


        { src: "/images/automotiva/9-513.avif", category: "automotiva" },
        { src: "/images/automotiva/9-515.avif", category: "automotiva" },
        { src: "/images/automotiva/9-514.avif", category: "automotiva" },
        { src: "/images/automotiva/9-522.avif", category: "automotiva" },
        { src: "/images/automotiva/9-516.avif", category: "automotiva" },
        { src: "/images/automotiva/9-521.avif", category: "automotiva" },
        { src: "/images/automotiva/9-518.avif", category: "automotiva" },
        { src: "/images/automotiva/9-523.avif", category: "automotiva" },
        { src: "/images/automotiva/9-552.avif", category: "automotiva" },
        { src: "/images/automotiva/9-554.avif", category: "automotiva" },


        { src: "/images/mulherporsche.avif", category: "automotiva" },
        { src: "/images/automotiva/9-527.avif", category: "automotiva" },
        { src: "/images/automotiva/9-517.avif", category: "automotiva" },
        { src: "/images/automotiva/9-524.avif", category: "automotiva" },
        { src: "/images/automotiva/9-525.avif", category: "automotiva" },
        { src: "/images/automotiva/9-526.avif", category: "automotiva" },
        { src: "/images/automotiva/9-520.avif", category: "automotiva" },
        { src: "/images/automotiva/9-528.avif", category: "automotiva" },
        { src: "/images/automotiva/9-529.avif", category: "automotiva" },
        { src: "/images/automotiva/9-531.avif", category: "automotiva" },
        { src: "/images/automotiva/9-563.avif", category: "automotiva" },


/*---------------------------------------- ENSAIOS --------------------------------- */

        { src: "/images/ensaios/9-541.avif", category: "ensaios" },
        { src: "/images/ensaios/9-542.avif", category: "ensaios" },
        { src: "/images/ensaios/9-543.avif", category: "ensaios" },
        { src: "/images/ensaios/9-544.avif", category: "ensaios" },
        { src: "/images/ensaios/9-545.avif", category: "ensaios" },
        { src: "/images/ensaios/9-546.avif", category: "ensaios" },
        { src: "/images/ensaios/9-547.avif", category: "ensaios" },
        { src: "/images/ensaios/9-548.avif", category: "ensaios" },
        { src: "/images/ensaios/9-549.avif", category: "ensaios" },
        { src: "/images/ensaios/9-550.avif", category: "ensaios" },

/*---------------------------------------- MOTOCICLISMO --------------------------------- */

        { src: "/images/motociclismo/9-532.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-533.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-534.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-535.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-536.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-557.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-561.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-537.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-538.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-539.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-540.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-562.avif", category: "motociclismo" },
        { src: "/images/motociclismo/9-560.avif", category: "motociclismo" },

/*---------------------------------------- ESPORTIVA --------------------------------- */

        { src: "/images/esportiva/9-496.avif", category: "esportiva" },
        { src: "/images/esportiva/9-495.avif", category: "esportiva" },
        { src: "/images/esportiva/9-477.avif", category: "esportiva" },
        { src: "/images/esportiva/9-478.avif", category: "esportiva" },
        { src: "/images/esportiva/9-483.avif", category: "esportiva" },
        { src: "/images/esportiva/9-479.avif", category: "esportiva" },
        { src: "/images/padelliberdade.avif", category: "esportiva" },
        { src: "/images/esportiva/9-506.avif", category: "esportiva" },
        { src: "/images/esportiva/9-484.avif", category: "esportiva" },
        { src: "/images/esportiva/9-485.avif", category: "esportiva" },
        { src: "/images/esportiva/9-486.avif", category: "esportiva" },
        { src: "/images/esportiva/9-487.avif", category: "esportiva" },
        { src: "/images/esportiva/9-489.avif", category: "esportiva" },
        { src: "/images/esportiva/9-488.avif", category: "esportiva" },
        { src: "/images/esportiva/9-492.avif", category: "esportiva" },
        { src: "/images/esportiva/9-503.avif", category: "esportiva" },        
        { src: "/images/esportiva/9-490.avif", category: "esportiva" },
        { src: "/images/esportiva/9-491.avif", category: "esportiva" },
        { src: "/images/esportiva/9-493.avif", category: "esportiva" },
        { src: "/images/esportiva/9-494.avif", category: "esportiva" },
        { src: "/images/esportiva/9-475.avif", category: "esportiva" },
        { src: "/images/esportiva/9-476.avif", category: "esportiva" },
        { src: "/images/esportiva/9-497.avif", category: "esportiva" },
        { src: "/images/esportiva/9-504.avif", category: "esportiva" },
        { src: "/images/esportiva/9-499.avif", category: "esportiva" },
        { src: "/images/esportiva/9-481.avif", category: "esportiva" },
        { src: "/images/esportiva/9-498.avif", category: "esportiva" },
        { src: "/images/esportiva/9-500.avif", category: "esportiva" },
        { src: "/images/esportiva/9-502.avif", category: "esportiva" },
        { src: "/images/esportiva/9-501.avif", category: "esportiva" },
        { src: "/images/esportiva/9-505.avif", category: "esportiva" },
        { src: "/images/esportiva/9-482.avif", category: "esportiva" },
        
    ];

    // filtros disponíveis (ordem mostrada nas abas)
    const FILTERS = ["all", "esportiva", "automotiva", "ensaios", "motociclismo", "eventos", "comercial"];

    const params = useLocalSearchParams();

    const [openMenu, setOpenMenu] = useState(false);

    const initialFilter =
        typeof params.filter === "string" && params.filter.length > 0
            ? params.filter
            : "all";

    const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

    useEffect(() => {
        const q =
            typeof params.filter === "string" && params.filter.length > 0
                ? params.filter
                : "all";

        setActiveFilter(q);
    }, [params.filter]);


    // lista filtrada (memoizada)
    const filtered = useMemo(() => {
        if (activeFilter === "all") return images;
        return images.filter((img) => img.category === activeFilter);
    }, [activeFilter, images]);

    // índice referente ao array `filtered`
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectedImage = selectedIndex !== null ? filtered[selectedIndex]?.src : null;

    // bloquear scroll da página quando lightbox aberto
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    // teclado (ESC / LEFT / RIGHT) operando sobre `filtered`
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setSelectedIndex(null);
            }
            if (e.key === "ArrowRight" && selectedIndex !== null && selectedIndex < filtered.length - 1) {
                setSelectedIndex((s) => (s !== null ? s + 1 : s));
            }
            if (e.key === "ArrowLeft" && selectedIndex !== null && selectedIndex > 0) {
                setSelectedIndex((s) => (s !== null ? s - 1 : s));
            }
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, filtered.length]);

    // quando o filtro muda, fecha lightbox e reseta índice
    useEffect(() => {
        setSelectedIndex(null);
    }, [activeFilter]);

    return (
        <View className="flex-1 bg-white">
            {/* ASSINATURA */}
            <View className="fixed bottom-2 left-2 z-40">
                <Text className={"text-white text-xs"}>
                    © 2025 Vinicius Marchetti
                </Text>
            </View>

            {/*---------------------------------------- HEADER --------------------------------- */}
            <View className="fixed top-0 left-0 w-full h-16 bg-black items-center flex-row p-4 z-0">
                <Link href="/" asChild>
                    <Pressable className="w-fit justify-center items-center">
                        <motion.img
                            src="/icons/MinhaBranca.png"
                            className="w-auto h-8 ml-3"
                            animate={{ scale: 1.2 }}
                            whileHover={{ scale: 1.26 }}
                            transition={{ type: "spring", stiffness: 100 }} />
                    </Pressable>
                </Link>

                <Pressable
                    onPress={() => setOpenMenu(true)}
                    className="sm:hidden ml-auto"
                >
                    <img src="/icons/3linha.svg" className="w-7 h-7" />
                </Pressable>

                <View className="hidden sm:flex sm:flex-row ml-auto gap-7">

                    <Link href="/" asChild>
                        <Pressable className={botao}>
                            <Text className={textobotao}>Início</Text>
                        </Pressable>
                    </Link>

                    <Link href="/portifolio" asChild>
                        <Pressable className={botao}>
                            <Text className={textoselecionado}>Portfólio</Text>
                        </Pressable>
                    </Link>

                    <Link href="/sobre" asChild>
                        <Pressable className={botao}>
                            <Text className={textobotao}>Sobre</Text>
                        </Pressable>
                    </Link>

                    <Link href="/contato" asChild>
                        <Pressable className={botao}>
                            <Text className={textobotao}>Contato</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>


            {/*---------------------------------------- SIDEBAR MENU --------------------------------- */}

            {openMenu && (
                <>
                    {/* BACKDROP — clica e fecha */}
                    <Pressable
                        className="fixed inset-0 bg-black/60 z-40"
                        onPress={() => setOpenMenu(false)}
                    />

                    {/* SIDEBAR */}
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed left-0 top-0 h-full w-64 bg-black z-50 shadow-xl p-6"
                    >
                        <img
                            src="/icons/MinhaBranca.png"
                            className="w-auto h-11" />

                        <Link href="/" asChild>
                            <Pressable className="py-3 flex-row mt-5 items-center justify-start gap-2">
                                <img src="/icons/home.svg" className="w-5 h-5" />
                                <Text className="text-xl text-white">Início</Text>
                            </Pressable>
                        </Link>

                        <Link href="/portifolio" asChild>
                            <Pressable className="py-3 flex-row items-center justify-start gap-2">
                                <img src="/icons/cameraBranca.svg" className="w-5 h-5" />
                                <Text className="text-xl text-white">Portfólio</Text>
                            </Pressable>
                        </Link>

                        <Link href="/sobre" asChild>
                            <Pressable className="py-3 flex-row items-center justify-start gap-2">
                                <img src="/icons/pessoa.svg" className="w-5 h-5" />
                                <Text className="text-xl text-white">Sobre</Text>
                            </Pressable>
                        </Link>

                        <Link href="/contato" asChild>
                            <Pressable className="py-3 flex-row items-center justify-start gap-2">
                                <img src="/icons/telefoneBranco.svg" className="w-5 h-5" />
                                <Text className="text-xl text-white">Contato</Text>
                            </Pressable>
                        </Link>
                    </motion.div>
                </>
            )}

            {/*---------------------------------------- PAGINA PRINCIPAL --------------------------------- */}
            <View className="mt-16">
                <ScrollView
                    className="bg-white w-full"
                    style={{ height: 'calc(100vh - 64px)' } as any}
                    scrollEnabled={!selectedImage}>

                    <Text className="text-5xl font-thin text-center m-10">Portifólio</Text>

                    {/* ------------------ FILTROS (abas) ------------------ */}
                    <div className="max-w-[1200px] mx-auto px-6 mb-2 flex flex-col gap-3">
                        <div className="flex gap-8 items-center flex-wrap">
                            <div className="flex gap-3 items-center justify-center flex-wrap">
                                {FILTERS.map((f) => {
                                    const label = f === "all"
                                        ? "Todos"
                                        : f.charAt(0).toUpperCase() + f.slice(1);

                                    const active = f === activeFilter;

                                    return (
                                        <button
                                            key={f}
                                            onClick={() => setActiveFilter(f)}
                                            className={`w-24 justify-center items-center transition-all duration-150 ${active
                                                ? "text-center text-black text-lg font-thin underline decoration-2 underline-offset-4"
                                                : "text-center text-black text-lg font-thin hover:underline hover:decoration-2 hover:underline-offset-4"
                                                }`}>
                                            <span className={`transition-all duration-150 ${active
                                                ? "w-24 justify-center items-center"
                                                : "w-24 justify-center items-center"
                                                }`}>
                                                {label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                        </div>
                        <Text className="text-sm text-gray-600 items-center text-center justify-center md:items-start md:text-start">
                            Mostrando <strong>{filtered.length}</strong> foto(s) — categoria: <strong>{activeFilter === "all" ? "Todos" : activeFilter}</strong>
                        </Text>

                    </div>
                    <View className="flex-row items-center justify-center mb-1 mt-6 md:mr-10 md:ml-auto">
                        <Text className="text-sm text-center text-black sm:text-md">Clique na foto para vê-la em tela cheia.</Text>
                        <img src="/icons/cliquebranco.svg" className="sm:w-6 sm:h-6 w-4 h-4 ml-2" />
                    </View>

                    {/* ------------------ GALERIA (usa array filtrado) ------------------ */}
                    <div className="columns-4 gap-2 md:gap-6 md:px-10 px-5">
                        {filtered.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                className="md:mb-6 mb-2 w-full rounded-sm object-cover cursor-pointer"
                                onClick={() => setSelectedIndex(index)}
                            />
                        ))}
                    </div>
                </ScrollView>

                {/* ------------------ LIGHTBOX / MODAL ------------------ */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>

                            <motion.img
                                key={selectedImage}
                                src={selectedImage}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="object-contain rounded-xl shadow-xl max-h-[95vh] max-w-[95vw]"
                            />

                            {/* X no canto superior direito */}
                            <Pressable
                                onPress={() => setSelectedIndex(null)}
                                className="absolute top-2 right-5 md:top-12 md:right-12 bg-transparent rounded-full w-12 h-12 items-center justify-center cursor-pointer">

                                <motion.img
                                    src="/icons/x.svg"
                                    className="w-4 h-4 sm:w-6 sm:h-6 aspect-square"
                                    animate={{ scale: 2 }}
                                    whileHover={{ scale: 2.4 }}
                                    transition={{ type: "spring", stiffness: 200 }} />
                            </Pressable>

                            {/* BOTÃO ANTERIOR */}
                            {selectedIndex !== null && selectedIndex > 0 && (
                                <Pressable
                                    onPress={() => setSelectedIndex(selectedIndex - 1)}
                                    className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 bg-transparent rounded-full w-12 h-12 items-center justify-center cursor-pointer"
                                >
                                    <motion.img
                                        src="/icons/setaesquerda.svg"
                                        className="w-4 h-4 sm:w-6 sm:h-6 aspect-square"
                                        animate={{ scale: 2 }}
                                        whileHover={{ scale: 2.4 }}
                                        transition={{ type: "spring", stiffness: 200 }} />
                                </Pressable>
                            )}

                            {/* BOTÃO PRÓXIMO */}
                            {selectedIndex !== null && selectedIndex < filtered.length - 1 && (
                                <Pressable
                                    onPress={() => setSelectedIndex(selectedIndex + 1)}
                                    className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 bg-transparent rounded-full w-12 h-12 items-center justify-center cursor-pointer">

                                    <motion.img
                                        src="/icons/setadireita.svg"
                                        className="w-4 h-4 sm:w-6 sm:h-6 aspect-square"
                                        animate={{ scale: 2 }}
                                        whileHover={{ scale: 2.4 }}
                                        transition={{ type: "spring", stiffness: 200 }} />
                                </Pressable>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </View>
        </View>
    );
}
