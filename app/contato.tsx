import { Link } from "expo-router";
import Head from "expo-router/head";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import {
    trackBanlekClick,
    trackEmailClick,
    trackInstagramClick,
    trackWhatsAppClick,
} from "../components/analytics";
import { botao, textobotao, textoselecionado } from "../components/estilos";
import "../global.css";


export default function portifolio() {

    const banlek = "https://banlek.com/viniciusmarchetti";

    const { height, width } = useWindowDimensions();
    const headerHeight = 64;
    const heroHeight = Math.max(0, height - headerHeight);
    const isLg = width >= 1024;
    const scrollRef = useRef<ScrollView>(null);

    useEffect(() => {
        if (isLg && scrollRef.current) {
            scrollRef.current.scrollTo({ y: 0, animated: false });
        }
    }, [isLg]);

    const email = "marchettivinim@email.com";
    const subject = "Contato pelo portfólio";
    const body = "Olá Vinicius, vi seu portfólio!";

    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;


    const username = "fotoviniciusmarchetti"; // sem @
    const url2 = `https://instagram.com/${username}`;

    const phone = "5549984006881"; // DDI + DDD + número (sem espaços)
    const message = "Olá, vim pelo seu portfólio!";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;



    const fontSize = width * 0.0125;

    const fontSizeVertical = width * 0.0270;

    const fontevinicius = width * 0.0500;

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Head>
                <title>Contato | Vinicius Marchetti Fotografo</title>
                <meta
                    name="description"
                    content="Entre em contato com Vinicius Marchetti para orcamentos de fotografia em Chapeco e regiao."
                />
                <link rel="canonical" href="https://viniciusmarchetti.com.br/contato" />
            </Head>
            <View className="flex-1 bg-black">

                {/*----------------------------------------- ASSINATURA --------------------------------- */}
                <View className="fixed bottom-2 left-2 z-50">
                    <Text className={"text-white text-xs"}>
                        Desenvolvido por Vinicius Marchetti.
                    </Text>
                </View>

                {/*----------------------------------------- HEADER --------------------------------- */}
                <View className="p-4 z-50 flex-row items-center justify-center fixed top-0 left-0 w-full h-16 bg-black">


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
                                <Text className={textobotao}>Portfólio</Text>
                            </Pressable>
                        </Link>

                        <Link href="/sobre" asChild>
                            <Pressable className={botao}>
                                <Text className={textobotao}>Sobre</Text>
                            </Pressable>
                        </Link>

                        <Link href="/contato" asChild>
                            <Pressable className={botao}>
                                <Text className={textoselecionado}>Contato</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>

                {/*---------------------------------------- SIDEBAR MENU --------------------------------- */}

                {openMenu && (
                    <>
                        {/* BACKDROP — clica e fecha */}
                        <Pressable
                            className="fixed inset-0 bg-black/60 z-50"
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
                    ref={scrollRef}
                    className="flex-1 bg-black"
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={!isLg}
                    contentContainerStyle={{ paddingTop: headerHeight, ...(isLg ? { height } : {}) }}>



                    {/*---------------------- PRINCIPAL ------------------- */}


                    <View
                        className="flex-col lg:flex-row items-center justify-center w-full "
                        style={isLg ? { minHeight: heroHeight, height: heroHeight } : undefined}  >

                        <View className="absolute inset-0 bg-gradient-to-b from-white/15 via-zinc-900 to-black" />
                        <View className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
                        <View className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
                        <View className="absolute inset-0 bg-black/25" />

                        <Text className="absolute left-6 top-8 lg:top-6 text-5xl font-bold tracking-[0.2em] text-white/5">
                            CONTATO
                        </Text>

                        <View className="w-full lg:w-3/5 lg:h-full items-center justify-start px-6 pt-14 sm:px-8 lg:px-16 gap-10 mb-8">

                            <View className="items-start justify-center w-full h-fit">
                                <Text className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl text-left text-white">
                                    Vamos tirar sua ideia do papel?
                                </Text>
                            </View>

                            <View className="items-start justify-center w-full h-fit">
                                <Text className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-left text-white">
                                    Uma imagem bem feita pode fortalecer sua marca, valorizar seu produto, transmitir mais profissionalismo e fazer seu projeto ser percebido da forma certa.
                                    <br></br> <br></br>
                                    Atendo ensaios, eventos e produções com foco em qualidade, agilidade e uma entrega que realmente faça sentido para o seu objetivo — seja divulgar, vender, fortalecer sua presença ou simplesmente guardar um momento importante da forma como ele merece.
                                    <br></br> <br></br>
                                    Mesmo que você ainda não saiba exatamente o que precisa, pode me chamar. Eu te ajudo a entender a melhor solução para o seu caso e explico tudo de forma simples, sem complicação.
                                </Text>
                            </View>

                        </View>

                        <View className="flex lg:hidden w-full h-fit border border-white/10" />

                        <View className="flex sm:hidden w-full items-center justify-center mt-6">
                            <Text className="text-white font-bold text-center text-4xl">Entre em contato:</Text>
                        </View>

                        <View
                            className="w-full lg:w-2/5 items-center justify-center p-6 sm:p-8 lg:p-12 lg:pr-28 xl:pr-12 mt-0 sm:mt-8 lg:mt-0 mb-8"
                            style={isLg ? { minHeight: heroHeight, height: heroHeight } : undefined}>
                            <View className="sm:gap-5 lg:gap-0 sm:py-5 lg:py-5 rounded-3xl h-full max-h-[550px] sm:max-h-[650px] sm:min-h-[520px] lg:min-h-[600px] min-w-0 lg:min-w-[425px] max-w-[350px] sm:max-w-[500px] w-full border border-white/20 bg-white/5 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.2)] px-6 sm:px-8 lg:px-12 flex-col">

                                <View className="flex-none sm:flex-1 w-full items-center justify-center">
                                    <Text className="hidden sm:flex font-bold text-white text-center text-4xl">Entre em contato:</Text>
                                </View>

                                <View className="mt-6 sm:mt-0 flex-none items-center justify-center w-full flex-col gap-4">
                                    {/* WHATSAPP */}
                                    <Pressable
                                        onPress={() => {
                                            trackWhatsAppClick(url);
                                        }}
                                        className="px-5 py-4 w-full rounded-xl flex-row items-center gap-4 border border-white/20 bg-black/45 backdrop-blur-sm hover:bg-white/10">

                                        <img
                                            src="/icons/wppbranco.png"
                                            className="w-auto h-8 sm:h-10 aspect-square"
                                        />

                                        <Text className="text-white font-bold text-center text-sm sm:text-lg">
                                            WhatsApp
                                        </Text>
                                    </Pressable>


                                    {/* INSTAGRAM */}
                                    <Pressable
                                        onPress={() => trackInstagramClick(url2)}
                                        className="px-5 py-4 w-full rounded-xl flex-row items-center gap-4 border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/10">

                                        <img
                                            src="/icons/instabranco.png"
                                            className="w-auto h-8 sm:h-10 aspect-square z-10"
                                        />

                                        <Text className="text-white font-bold text-sm sm:text-lg z-10">
                                            Instagram
                                        </Text>
                                    </Pressable>

                                    {/* BANLEK */}
                                    <Pressable
                                        onPress={() => trackBanlekClick(banlek)}
                                        className="px-5 py-4 w-full rounded-xl flex-row items-center gap-4 border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/10">

                                        <img
                                            src="/icons/banlek.png"
                                            className="w-auto h-8 sm:h-10 aspect-square"
                                        />

                                        <Text className="text-white font-bold text-center text-sm sm:text-lg">
                                            Banlek (Suas fotos)
                                        </Text>
                                    </Pressable>

                                    {/* EMAIL */}
                                    <Pressable
                                        onPress={() => trackEmailClick(emailUrl)}
                                        className="px-5 py-4 w-full rounded-xl flex-row items-center gap-4 border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/10">

                                        <img
                                            src="/icons/email1.svg"
                                            className="w-auto h-8 sm:h-10 aspect-square bg-transparent"
                                        />

                                        <Text className="text-white font-bold text-center text-sm sm:text-lg">
                                            marchettivinim@gmail.com
                                        </Text>
                                    </Pressable>

                                </View>

                                <View className="flex-1 w-full items-center justify-center py-6 sm:py-4">
                                    <img className="w-32 sm:w-56 lg:w-48 max-w-full h-auto max-h-full object-contain" src="/icons/MinhaBranca.png" />
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View >
        </>
    );
}
