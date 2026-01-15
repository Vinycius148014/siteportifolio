import { Link } from "expo-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
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




    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(pointer:fine)"); // desktop/mouse
        const update = () => setIsDesktop(mq.matches);

        update();
        mq.addEventListener("change", update);

        return () => mq.removeEventListener("change", update);
    }, []);


    const { width } = useWindowDimensions();

    const fontSize = width * 0.0110;

    const fontSizeVertical = width * 0.0150;

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <View className="flex-1 bg-white">

            {/* ASSINATURA */}
            <View className={`absolute bottom-2 sm:bottom-3 z-40 left-2 sm:left-3`}>
                <Text className={"text-white text-xs"}>
                    © 2025 Vinicius Marchetti
                </Text>
            </View>


            {/* WHATSAPP */}
            <div className={`fixed sm:bottom-6 bottom-5 ${isDesktop ? 'right-10' : 'right-4'} z-50 flex flex-col items-end gap-2`}>



                {/* BOTÃO WHATSAPP */}
                <a
                    href="https://wa.me/5549984006881"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-12 sm:h-12 h-10 w-10 flex items-center justify-center hover:scale-105 transition"
                >
                    <img src="/icons/wpp.png" />
                </a>


            </div>

            {/* HEADER FIXO */}
            <View className="fixed top-0 left-0 right-0 z-50 w-full bg-black p-4 flex-row items-center">
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


            <View className="relative bg-black pt-[64px] w-full overflow-hidden">
                {/* FUNDO */}
                <View className="relative min-h-[calc(100dvh-64px)] w-full overflow-hidden">

                    <img
                        src="/images/fundosobre.avif"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                        alt="fundo"
                    />


                    {/* FRENTEEEE */}

                    {/* FRENTE: ocupa todo o espaço do container pai */}
                    <View className="md:flex-row flex-col h-full z-20 absolute inset-0 items-center justify-center w-full">

                        {/* ESQUERDA */}
                        <View className="w-1/2 flex items-center justify-center gap-6 h-full">
                            <img
                                src="/images/selfie.jpg"
                                className="h-auto max-w-96 aspect-square rounded-xl shadow-black shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                                alt="eu"
                            />

                            <img src="/icons/MinhaBranca.png" className="h-auto max-w-64" alt="logo" />
                        </View>

                        {/* DIREITA */}
                        <View className="w-1/2 h-full px-12 flex items-center justify-center ">
                            <View className="max-w-3xl items-center justify-center gap-8">
                                <Text
                                    style={{ fontSize: width < 768 ? fontSizeVertical : fontSize }}
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
                                    <Pressable className="flex-row gap-2 backdrop-blur-sm w-fit py-3 px-4 sm:py-4 sm:px-5 items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                                        <img src="/icons/telefoneBranco.svg" className="sm:w-6 sm:h-6 w-4 h-4" />
                                        <Text className="text-center text-white text-md sm:text-lg">
                                            Entrar em contato
                                        </Text>
                                    </Pressable>
                                </Link>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}