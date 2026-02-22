import { Link } from "expo-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Linking, Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { trackWhatsAppClick } from "../components/analytics";
import { botao, textobotao, textoselecionado } from "../components/estilos";
import "../global.css";


export default function portifolio() {

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



    const phone = "5549984006881"; // DDI + DDD + número (sem espaços)
    const message = "Olá, vim pelo seu portfólio!";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(pointer:fine)"); // desktop/mouse
        const update = () => setIsDesktop(mq.matches);

        update();
        mq.addEventListener("change", update);

        return () => mq.removeEventListener("change", update);
    }, []);




    const { width } = useWindowDimensions();

    let dynamicFont = 18; // fallback

    if (width < 400) {
        dynamicFont = 12;         // mobile MUITO pequeno
    }
    else if (width < 638) {
        dynamicFont = 20;   // mobile normal com escala melhor
    }
    else if (width < 638) {
        dynamicFont = width * 0.020;   // mobile normal com escala melhor
    }
    else if (width < 1024) {
        dynamicFont = 20;   // mobile normal com escala melhor
    }
    else {
        dynamicFont = 16; // telas grandes
    }

    const isMobile = width < 500;
    const isSm = width < 640;
    const isStacked = width < 1024;

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <View className="flex-1 bg-white">

            {/* ASSINATURA */}
            <View className={`absolute bottom-2 sm:bottom-3 z-40 left-2 sm:left-3`}>
                <Text className={"text-white text-xs"}>
                    Desenvolvido por Vinicius Marchetti.
                </Text>
            </View>


            {/* WHATSAPP */}
            <div className={`fixed sm:bottom-6 bottom-5 ${isDesktop ? 'right-10' : 'right-4'} z-50 flex flex-col items-end gap-2`}>



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

            {/* HEADER FIXO */}
            <View className="fixed top-0 left-0 right-0 z-50 w-full bg-black p-4 flex-row items-center justify-center h-16">
                <Link href="/" asChild>
                    <Pressable className="w-fit justify-center items-center p-1">
                        <motion.img
                            src="/icons/MinhaBranca.png"
                            className="w-auto h-8 ml-3"
                            animate={{ scale: 1.2 }}
                            whileHover={{ scale: 1.26 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </Pressable>
                </Link>

                <Pressable
                    onPress={() => setOpenMenu(true)}
                    className="sm:hidden fixed left-4"
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
                            <Text className={textobotao}>Portfólio</Text>
                        </Pressable>
                    </Link>

                    <Link href="/sobre" asChild>
                        <Pressable className={botao}>
                            <Text className={textoselecionado}>Sobre</Text>
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
            <ScrollView
                scrollEnabled={isStacked}
                className="flex-1 bg-black"
                contentContainerStyle={!isStacked ? ({ flexGrow: 1 } as any) : undefined}>

                <View className={`relative bg-black pt-[64px] w-full ${isStacked ? "" : "overflow-hidden"}`}>
                    {/* FUNDO */}
                    <View
                        className={`relative w-full ${isStacked ? "min-h-[calc(100dvh-64px)]" : "sm:min-h-[calc(100dvh-64px)] min-h-[calc(170dvh-64px)]"} ${isStacked ? "" : "overflow-hidden"}`}
                    >


                        {/* Imagem DESKTOP (>= sm) */}
                        <img
                            src="/images/fundosobre.avif"
                            className="hidden sm:block absolute inset-0 w-full h-full object-cover opacity-30"
                        />

                        {/* Imagem MOBILE (< sm) */}
                        <img
                            src="/images/fundofogos.avif"
                            className="block sm:hidden absolute inset-0 w-full h-full object-cover opacity-30"
                        />



                        {/* FRENTEEEE */}

                        {/* FRENTE: ocupa todo o espaço do container pai */}
                        <View
                            className={`${isStacked
                                ? `relative z-20 w-full min-h-[calc(100dvh-64px)] flex flex-col items-center justify-center gap-8 py-8 ${isSm ? "px-6" : "px-10"}`
                                : "md:flex-row flex h-full z-20 absolute inset-0 items-center justify-center w-full"
                                }`}
                        >

                            {/* ESQUERDA */}
                            <View
                                className={`${isStacked
                                    ? "w-full flex items-center justify-center"
                                    : "w-auto md:h-full md:w-2/5 lg:w-1/3 flex-row items-center justify-center xl:justify-end xl:pr-8 lg:pr-0"
                                    }`}
                            >

                                <View
                                    className={`${isStacked
                                        ? "flex-col items-center gap-6 w-full max-w-[320px]"
                                        : "flex-col max-h-[400px] items-center h-full md:h-auto justify-center md:w-4/5 gap-6 p-8"
                                        }`}
                                >

                                    <img
                                        src="/images/selfie.jpg"
                                        className={`${isStacked
                                            ? "w-full max-w-[280px] h-auto aspect-square rounded-xl shadow-black shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                                            : "md:h-auto md:w-full h-full w-auto aspect-square rounded-xl shadow-black shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                                            }`}
                                        alt="eu"
                                    />


                                </View>

                            </View>

                            {/* DIREITA */}
                            <View
                                className={`${isStacked
                                    ? "w-full flex items-center justify-center"
                                    : "w-auto pt-0 md:pt-0 px-24 md:px-0 md:h-full md:w-3/5 lg:w-2/3 flex items-center md:justify-center justify-start xl:pr-0 md:pr-10"
                                    }`}
                            >
                                <View className={`${isStacked ? "w-full max-w-3xl" : "max-w-3xl items-center lg:mb-0 mb-7 justify-center h-screen-safe-offset-10"}`}>
                                    <Text className={`${isStacked ? "text-4xl font-thin text-center text-white mb-6" : "text-5xl font-thin text-center text-white mb-8"}`}>Sobre mim:</Text>
                                    <Text
                                        style={{ fontSize: dynamicFont }}
                                        className="font-bold text-white text-justify leading-relaxed">
                                        Sou Vinicius Marchetti, fotógrafo em Chapecó–SC. Trabalho com fotografia esportiva, automotiva, ensaios, eventos e fotografia comercial e corporativa, sempre buscando unir criatividade, emoção e utilidade em cada clique.
                                        <br /><br />
                                        Acredito que a fotografia vai muito além de uma imagem bonita: ela pode agregar, fortalecer marcas, valorizar pessoas e impulsionar negócios.
                                        <br />
                                        Em trabalhos comerciais, por exemplo, minhas fotos ajudam empresas a se posicionarem melhor, divulgarem produtos e alcançarem mais pessoas com qualidade e impacto visual.
                                        <br /><br />
                                        Gosto de fotografar de forma descontraída e natural, criando um ambiente confortável para que tudo aconteça com espontaneidade — e sempre busco registrar imagens que transmitam emoção e tenham significado para quem vê. Seja em um evento cheio de energia, em um ensaio pessoal, num registro automotivo ou numa produção comercial, meu objetivo é entregar um resultado verdadeiro e bem construído.
                                        <br /><br />
                                        Se quiser conhecer mais do meu trabalho ou criar algo juntos, será um prazer fazer parte do seu projeto. Entre em contato comigo no botão abaixo!
                                    </Text>
                                    <Link href="/contato" asChild>
                                        <Pressable className={`${isStacked ? "self-center" : ""} ${isMobile ? "mb-8" : ""} flex-row gap-2 mt-7 backdrop-blur-sm w-fit py-4 px-5 items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]`}>
                                            <img src="/icons/telefoneBranco.svg" className="w-6 h-6" />
                                            <Text className="text-center text-white text-lg">
                                                Entrar em contato
                                            </Text>
                                        </Pressable>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
