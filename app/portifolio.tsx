import { Link, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
    trackBanlekClick,
    trackEmailClick,
    trackInstagramClick,
    trackWhatsAppClick,
} from "../components/analytics";
import { botao, textobotao, textoselecionado } from "../components/estilos";
import "../global.css";

type Img = { src: string; category: string };

export default function portifolio() {
    // imagens com categoria
    const images: Img[] = [

        /*---------------------------------------- AUTOMOTIVA E OUTROS --------------------------------- */


        { src: "/images/automotiva/IMG_5537.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5625.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5780.avif", category: "automotiva" },
        { src: "/images/bmwm2.avif", category: "automotiva" },
        { src: "/images/automotiva/9-509.avif", category: "automotiva" },
        { src: "/images/m2vermelha.avif", category: "automotiva" },
        { src: "/images/2carrofundo.avif", category: "automotiva" },
        { src: "/images/ferrari.avif", category: "automotiva" },
        { src: "/images/rodera.avif", category: "automotiva" },
        { src: "/images/automotiva/9-559.avif", category: "automotiva" },
        { src: "/images/supraavif.avif", category: "automotiva" },
        { src: "/images/automotiva/9-511.avif", category: "automotiva" },
        { src: "/images/roderafundo.jpg", category: "automotiva" },
        { src: "/images/automotiva/9-530.avif", category: "automotiva" },
        { src: "/images/automotiva/9-507.avif", category: "automotiva" },
        { src: "/images/automotiva/9-510.avif", category: "automotiva" },
        { src: "/images/automotiva/9-512.avif", category: "automotiva" },


        { src: "/images/automotiva/IMG_6008.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6021.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6061.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6138.avif", category: "automotiva" },
        { src: "/images/automotiva/9-513.avif", category: "automotiva" },
        { src: "/images/automotiva/9-515.avif", category: "automotiva" },
        { src: "/images/automotiva/9-514.avif", category: "automotiva" },
        { src: "/images/automotiva/9-522.avif", category: "automotiva" },
        { src: "/images/automotiva/9-516.avif", category: "automotiva" },
        { src: "/images/automotiva/9-521.avif", category: "automotiva" },
        { src: "/images/automotiva/9-518.avif", category: "automotiva" },
        { src: "/images/automotiva/9-552.avif", category: "automotiva" },
        { src: "/images/automotiva/9-554.avif", category: "automotiva" },
        { src: "/images/mulherporsche.avif", category: "automotiva" },
        { src: "/images/automotiva/9-527.avif", category: "automotiva" },
        { src: "/images/automotiva/9-517.avif", category: "automotiva" },
        { src: "/images/automotiva/9-525.avif", category: "automotiva" },

        { src: "/images/duda.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6242.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6413.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6441.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6730.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_6807.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_7088.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_7261.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_7269.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_7334.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_7345.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_7378.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_0223.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_0310.avif", category: "automotiva" },
        { src: "/images/automotiva/9-563.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_0362.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_2165.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5027.avif", category: "automotiva" },

        { src: "/images/automotiva/IMG_5155.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5245.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5342.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5414.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5735.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5848.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5858.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5890.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5973.avif", category: "automotiva" },
        { src: "/images/automotiva/IMG_5985.avif", category: "automotiva" },
        { src: "/images/automotiva/9-520.avif", category: "automotiva" },
        { src: "/images/automotiva/9-528.avif", category: "automotiva" },
        { src: "/images/automotiva/9-529.avif", category: "automotiva" },
        { src: "/images/automotiva/9-531.avif", category: "automotiva" },
        { src: "/images/automotiva/9-519.avif", category: "automotiva" },
        { src: "/images/automotiva/9-558.avif", category: "automotiva" },
        { src: "/images/automotiva/9-564.avif", category: "automotiva" },


        /*---------------------------------------- ENSAIOS --------------------------------- */

        { src: "/images/ensaios/9-573.avif", category: "ensaios" },
        { src: "/images/ensaios/9-574.avif", category: "ensaios" },
        { src: "/images/ensaios/9-575.avif", category: "ensaios" },
        { src: "/images/ensaios/9-576.avif", category: "ensaios" },
        { src: "/images/ensaios/9-577.avif", category: "ensaios" },
        { src: "/images/ensaios/9-578.avif", category: "ensaios" },
        { src: "/images/ensaios/9-579.avif", category: "ensaios" },
        { src: "/images/ensaios/9-580.avif", category: "ensaios" },
        { src: "/images/ensaios/9-581.avif", category: "ensaios" },
        { src: "/images/ensaios/9-582.avif", category: "ensaios" },

        { src: "/images/ensaios/corporativa-01.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-07.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-03.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-04.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-02.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-06.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-05.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-09.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-10.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-16.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-14.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-08.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-18.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-13.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-11.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-15.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-17.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-19.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-12.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-20.avif", category: "ensaios" },
        { src: "/images/ensaios/corporativa-21.avif", category: "ensaios" },




        /*---------------------------------------- MOTOCICLISMO --------------------------------- */

        { src: "/images/motobmw.avif", category: "motociclismo" },
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


        { src: "/images/esportiva/IMG_4410.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_5739.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_1377.avif", category: "esportiva" },
        { src: "/images/esportiva/9-477.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_1366.avif", category: "esportiva" },
        { src: "/images/esportiva/9-483.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_4363.avif", category: "esportiva" },
        { src: "/images/padelliberdade.avif", category: "esportiva" },
        { src: "/images/esportiva/9-506.avif", category: "esportiva" },
        { src: "/images/esportiva/9-484.avif", category: "esportiva" },
        { src: "/images/esportiva/9-488.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_0435.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_0935.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_0705.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_0989.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_1321.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_7080.avif", category: "esportiva" },

        { src: "/images/esportiva/9-492.avif", category: "esportiva" },
        { src: "/images/esportiva/9-503.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_3308.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_1686.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_2544.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_5638.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_2205.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_5409.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_6008.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_6125.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_6407.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_6411.avif", category: "esportiva" },
        { src: "/images/esportiva/9-490.avif", category: "esportiva" },
        { src: "/images/esportiva/9-493.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_6594.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_7775.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_8021.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_6901.avif", category: "esportiva" },

        { src: "/images/esportiva/IMG_7031.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_7097.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_7155.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_7268.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_7352.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_7421.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_8565.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_9033.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_9101.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_9206.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_9446.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_9457.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_9922.avif", category: "esportiva" },
        { src: "/images/esportiva/FOCO.jpg", category: "esportiva" },
        { src: "/images/esportiva/IMG_5859.avif", category: "esportiva" },
        { src: "/images/esportiva/IMG_5932.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_0736.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_1404.avif", category: "esportiva" },

        
        { src: "/images/esportiva/9-504.avif", category: "esportiva" },
        { src: "/images/esportiva/9-499.avif", category: "esportiva" },
        { src: "/images/esportiva/9-481.avif", category: "esportiva" },
        { src: "/images/esportiva/9-498.avif", category: "esportiva" },
        { src: "/images/esportiva/9-500.avif", category: "esportiva" },
        { src: "/images/esportiva/9-502.avif", category: "esportiva" },
        { src: "/images/esportiva/9-501.avif", category: "esportiva" },
        { src: "/images/esportiva/9-505.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_6302.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_6416.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_7196.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_0887.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_7793.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_1114.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_6319.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_6947.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_7360.avif", category: "esportiva" },
        { src: "/images/trilha/IMG_7820.avif", category: "esportiva" },


        /*--------------- TRILHA --------------- */




    ];


    const phone = "5549984006881"; // DDI + DDD + número (sem espaços)
    const message = "Olá, vim pelo seu portfólio!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const email = "marchettivinim@email.com";
    const subject = "Contato pelo portfólio";
    const body = "Olá Vinicius, vi seu portfólio!";

    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;


    const [showBalloon, setShowBalloon] = useState(false);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("whatsBalloonShown");

        // se já mostrou nessa sessão, não mostra de novo ao trocar de rota
        if (alreadyShown === "true") return;

        const timer = setTimeout(() => {
            setShowBalloon(true);
            sessionStorage.setItem("whatsBalloonShown", "true");
        }, 7000);

        return () => clearTimeout(timer);
    }, []);





    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(pointer:fine)"); // desktop/mouse
        const update = () => setIsDesktop(mq.matches);

        update();
        mq.addEventListener("change", update);

        return () => mq.removeEventListener("change", update);
    }, []);



    // filtros disponíveis (ordem mostrada nas abas)
    const FILTERS = ["all", "esportiva", "automotiva", "ensaios", "motociclismo"];

    const params = useLocalSearchParams();

    const [openMenu, setOpenMenu] = useState(false);

    const initialFilter =
        typeof params.filter === "string" && params.filter.length > 0
            ? params.filter
            : "automotiva";

    const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

    useEffect(() => {
        const q =
            typeof params.filter === "string" && params.filter.length > 0
                ? params.filter
                : "automotiva";

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


    const handleImgRef = (key: string, index: number) => (el: HTMLImageElement | null) => {
        if (!el) return;

        // se já marcou como loaded, sai
        if (loadedMap[key]) return;

        // se já veio do cache e está completa, o onLoad pode não disparar
        if (el.complete && el.naturalWidth > 0) {
            const ratio = el.naturalWidth / el.naturalHeight;
            setRatioMap((prev) => ({ ...prev, [key]: ratio }));
            setLoadedMap((prev) => ({ ...prev, [key]: true }));
        }
    };



    const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // reseta skeleton quando muda o filtro / lista
        setLoadedMap({});
    }, [activeFilter]);

    const [ratioMap, setRatioMap] = useState<Record<string, number>>({});



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
        <>
            <Head>
                <title>Portfolio | Vinicius Marchetti Fotografo</title>
                <meta
                    name="description"
                    content="Portfolio com trabalhos de fotografia esportiva, automotiva, ensaios, eventos e corporativa em Chapeco-SC."
                />
                <link rel="canonical" href="https://viniciusmarchetti.com.br/portifolio" />
            </Head>
            <View className="flex-1 bg-white">
                {/* ASSINATURA */}
                <View className={`absolute bottom-2 sm:bottom-3 z-40 left-2 sm:left-3`}>
                    <Text className={"text-white text-xs"}>
                        Desenvolvido por Vinicius Marchetti.
                    </Text>
                </View>


                {/* WHATSAPP */}
                <div className={`fixed sm:bottom-6 bottom-5 ${isDesktop ? 'right-10' : 'right-4'} z-50 flex flex-col items-end gap-2`}>

                    {/* BALÃO */}
                    {showBalloon && (
                        <div className="relative animate-fadeIn">

                            {/* BOTÃO FECHAR */}
                            <button
                                onClick={() => {
                                    setShowBalloon(false);
                                }}
                                className="absolute sm:-top-3 sm:-left-3 -top-4 -left-4 w-7 h-7 z-50 bg-black text-white rounded-full text-xs flex items-center justify-center hover:bg-gray-800"
                            >
                                X
                            </button>

                            {/* IMAGEM DO BALÃO */}
                            <img
                                src="/icons/balao.svg"
                                alt="Chame no WhatsApp"
                                className="lg:h-20 sm:h-16 h-14 drop-shadow-lg" />
                        </div>
                    )}

                    {/* BOTÃO WHATSAPP */}
                    <Pressable
                        onPress={() => {
                            trackWhatsAppClick(url);
                        }}
                        className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 h-10 w-10 flex items-center justify-center hover:scale-105 transition"
                    >
                        <img src="/icons/wpp.png" />
                    </Pressable>


                </div>

                {/*---------------------------------------- HEADER --------------------------------- */}
                <View className="p-4 flex-row items-center justify-center fixed top-0 left-0 w-full h-16 bg-black">


                    <Pressable
                        onPress={() => setOpenMenu(true)}
                        className="sm:hidden fixed left-4"
                    >
                        <img src="/icons/3linha.svg" className="w-7 h-7" />
                    </Pressable>

                    <Link href="/" asChild>
                        <Pressable className="w-fit justify-center items-center p-1">

                            <motion.img
                                src="/icons/MinhaBranca.png"
                                className="w-auto h-8 ml-3"
                                animate={{ scale: 1.2 }}
                                whileHover={{ scale: 1.26 }}
                                transition={{ type: "spring", stiffness: 100 }} />

                        </Pressable>
                    </Link>

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
                <View className="mt-16 bg-black">
                    <ScrollView
                        className="bg-gradient-to-r from-white/10 via-transparent to-white/10 w-full"
                        style={{ height: 'calc(100dvh - 64px)' } as any}
                        scrollEnabled={!selectedImage}>

                        <Text className="text-5xl font-thin text-center m-10 text-white">Portfólio</Text>

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
                                                    ? "text-center text-white text-lg font-thin underline decoration-2 underline-offset-4"
                                                    : "text-center text-white text-lg font-thin hover:underline hover:decoration-2 hover:underline-offset-4"
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
                            <Text className="text-sm text-white items-center text-center justify-center md:items-start md:text-start mb-6">
                                Mostrando <strong>{filtered.length}</strong> foto(s) — categoria: <strong>{activeFilter === "all" ? "Todos" : activeFilter}</strong>
                            </Text>

                        </div>
                        <View className="flex-row sm:hidden items-center justify-center mb-1">
                            <Text className="text-sm sm:text-md text-center text-white">Clique na foto para vê-la em tela cheia.</Text>
                            <img src="/icons/cliquetelabranco.svg" className="sm:w-6 sm:h-6 w-4 h-4 ml-2" />
                        </View>

                        {/* ------------------ GALERIA (usa array filtrado) ------------------ */}
                        <div key={activeFilter} className="columns-4 gap-2 md:gap-6 md:px-10 px-5">
                            {filtered.map((image, index) => {
                                const key = image.src; // chave única
                                const loaded = loadedMap[key] === true;

                                return (
                                    <div
                                        key={key}
                                        className="group relative md:mb-6 mb-2 inline-block w-full align-top break-inside-avoid overflow-hidden rounded-sm bg-black/10"
                                        style={{ aspectRatio: ratioMap[key] ?? 4 / 5 }}>

                                        {/* SKELETON */}
                                        {!loaded && (
                                            <div className="absolute inset-0 z-10 overflow-hidden rounded-md bg-[#1c1c1c]">
                                                <div className="absolute inset-0 bg-gray-400 rounded-sm" />
                                                <div className="absolute -inset-y-24 -left-[60%] w-[60%] h-[300%] animate-skeletonNubank bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                                            </div>
                                        )}

                                        {/* IMAGEM */}
                                        <img
                                            ref={handleImgRef(key, index)}
                                            src={image.src}
                                            className={`absolute inset-0 w-full h-full object-contain cursor-pointer hover:opacity-50 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                                                }`}
                                            onClick={() => setSelectedIndex(index)}
                                            onLoad={(e) => {
                                                const img = e.currentTarget as HTMLImageElement;
                                                const ratio = img.naturalWidth / img.naturalHeight;

                                                setRatioMap((prev) => ({ ...prev, [key]: ratio }));
                                                setLoadedMap((prev) => ({ ...prev, [key]: true }));
                                            }}
                                            onError={() => setLoadedMap((prev) => ({ ...prev, [key]: true }))}
                                            loading="lazy"
                                        />

                                        {/* OVERLAY HOVER */}
                                        <div
                                            className="absolute inset-0 z-20 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                                        >
                                            <div className="flex items-center gap-1 flex-col-reverse xl:flex-row p-4">
                                                <span className="text-xs md:text-sm text-center font-medium text-white ">
                                                    Ver em tela cheia.
                                                </span>
                                                <img
                                                    src="/icons/cliquetelabranco.svg"
                                                    className="w-5 h-5"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>

                                );
                            })} </div>



                        {/* ------------------ RODAPE ------------------ */}

                        <View className="w-full items-center justify-center flex-col md:flex-row pt-14 pb-16 sm:p-16 bg-black">

                            <View className="w-full h-1/3 md:h-full md:w-1/4 items-center md:items-start justify-center m-2">
                                <img className="w-auto h-full max-h-28 aspect-square rounded-xl" src="/icons/eu.jpg" />
                            </View>


                            <View className="w-full h-1/3 md:h-full md:w-2/4 items-center justify-center gap-1 m-2 ">

                                <Text className="text-white text-center text-md">
                                    Vinicius Marchetti Fotógrafo
                                </Text>

                                <View className="w-fit h-fit flex-row ">

                                    <Text className="text-white text-center text-md">Links: </Text>

                                    <Link href="/" asChild>
                                        <Pressable className=" items-center justify-center w-fit h-fit">
                                            <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                                Início
                                            </Text>
                                        </Pressable>
                                    </Link>

                                    <Text className="text-white text-center text-md"> | <br /></Text>

                                    <Link href="/portifolio" asChild>
                                        <Pressable className="items-center justify-center w-fit h-fit">
                                            <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                                Portfólio
                                            </Text>
                                        </Pressable>
                                    </Link>

                                    <Text className="text-white text-center text-md"> | <br /></Text>

                                    <Link href="/sobre" asChild>
                                        <Pressable className="items-center justify-center w-fit h-fit">
                                            <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                                Sobre
                                            </Text>
                                        </Pressable>
                                    </Link>

                                    <Text className="text-white text-center text-md"> | <br /></Text>

                                    <Link href="/contato" asChild>
                                        <Pressable className=" items-center justify-center w-fit h-fit">
                                            <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                                Contato
                                            </Text>
                                        </Pressable>
                                    </Link>

                                </View>




                                <View className="w-fit h-fit flex-row ">

                                    <Pressable className=" items-center justify-center w-fit h-fit"
                                        onPress={() => {
                                            trackWhatsAppClick(url);
                                        }}>
                                        <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                            WhatsApp
                                        </Text>
                                    </Pressable>

                                    <Text className="text-white text-center text-md"> • <br /></Text>

                                    <Pressable className=" items-center justify-center w-fit h-fit"
                                        onPress={() => trackInstagramClick("https://www.instagram.com/fotoviniciusmarchetti/")}>
                                        <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                            Instagram
                                        </Text>
                                    </Pressable>

                                    <Text className="text-white text-center text-md"> • <br /></Text>

                                    <Pressable className=" items-center justify-center w-fit h-fit" onPress={() => trackEmailClick(emailUrl)}>
                                        <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                            Email
                                        </Text>
                                    </Pressable>

                                    <Text className="text-white text-center text-md"> • <br /></Text>

                                    <Pressable className=" items-center justify-center w-fit h-fit" onPress={() => trackBanlekClick("https://banlek.com/viniciusmarchetti")}>
                                        <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                                            Banlek
                                        </Text>
                                    </Pressable>

                                </View>


                                <Text className="text-white text-center text-md">
                                    © 2026 — Todos os direitos reservados.
                                </Text>
                            </View>


                            <View className="w-full h-1/3 md:h-full md:w-1/4 items-center justify-center gap-6 lg:gap-6">

                                <View className="flex-row items-center justify-center">

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="items-center justify-center w-fit">
                                        <Pressable
                                            onPress={() => {
                                                trackWhatsAppClick(url);
                                            }}>
                                            <img src="/icons/wppbranco.png" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                                        </Pressable>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="items-center justify-center w-fit">
                                        <Pressable onPress={() => trackInstagramClick("https://www.instagram.com/fotoviniciusmarchetti/")}>
                                            <img src="/icons/instabranco.png" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                                        </Pressable>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="items-center justify-center w-fit">
                                        <Pressable onPress={() => trackEmailClick(emailUrl)}>
                                            <img src="/icons/email1.svg" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                                        </Pressable>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="items-center justify-center w-fit">
                                        <Pressable onPress={() => trackBanlekClick("https://banlek.com/viniciusmarchetti")}>
                                            <img src="/icons/banlek.png" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                                        </Pressable>
                                    </motion.div>

                                </View>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 120 }}
                                    className="hidden sm:block flex-row items-center justify-center w-fit">

                                    <Link href="/contato" asChild>
                                        <Pressable className={"flex-row  backdrop-blur-sm w-fit   gap-2 py-1 px-12 md:py-2 md:px-14 lg:py-2 lg:px-16    items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"}>
                                            {/*<img src="/icons/telefoneBranco.svg" className="sm:w-6 sm:h-6 w-4 h-4" />*/}
                                            <Text className="text-center text-white text-lg md:text-md lg:text-xl">
                                                Contato
                                            </Text>
                                        </Pressable>
                                    </Link>
                                </motion.div>
                            </View>

                        </View>
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
        </>
    );
}
