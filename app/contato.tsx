import { Link } from "expo-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Linking, Pressable, Text, View, useWindowDimensions } from "react-native";
import { botao, textobotao, textoselecionado } from "../components/estilos";
import "../global.css";


export default function portifolio() {

    const banlek = "https://banlek.com/viniciusmarchetti";


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


    const { width } = useWindowDimensions();

    const fontSize = width * 0.0125;

    const fontSizeVertical = width * 0.0270;

    const fontevinicius = width * 0.0500;

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <View className="flex-1 bg-black">

            {/*----------------------------------------- ASSINATURA --------------------------------- */}
            <View className="fixed bottom-2 left-2 z-0">
                <Text className={"text-white text-xs"}>
                    © 2025 Vinicius Marchetti
                </Text>
            </View>

            {/*----------------------------------------- HEADER --------------------------------- */}
            <View className="fixed top-0 left-0 right-0 z-50 w-full bg-black p-4 flex-row items-center">

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

            <View className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">

                <View className="bg-white mx-6 px-6 sm:px-12 py-8 rounded-lg shadow-white max-w-[1100px] max-h-[85vh] w-auto overflow-auto pointer-events-auto shadow-[0_0_5px_rgba(0,0,0,0.3)]">

                    {/* CABEÇALHO */}
                    <View className="items-center justify-center pt-2 pb-4 w-full">
                        <Text className="text-black text-2xl sm:text-3xl font-bold text-center">
                            Entre em contato!
                        </Text>
                    </View>

                    {/* CORPO */}
                    <View className="p-4 w-full space-y-4">


                        {/* WHATSAPP */}
                        <Pressable
                            onPress={() => Linking.openURL(url)}
                            className="px-4 py-3 w-full rounded-xl flex-row items-center gap-4 shadow-black hover:bg-gray-200 hover:shadow-none shadow-[0_0_5px_rgba(0,0,0,0.3)]"
                            style={{ backgroundColor: "#00e676" }}>

                            <img
                                src="/icons/wpp.png"
                                className="w-auto h-8 sm:h-12 aspect-square"
                            />

                            <Text className="text-white font-bold text-center text-sm sm:text-lg">
                                WhatsApp
                            </Text>
                        </Pressable>


                        {/* INSTAGRAM */}
                        <Pressable
                            onPress={() => Linking.openURL(url2)}
                            className="w-full h-auto rounded-xl overflow-hidden flex-row items-center px-4 py-3 gap-4 shadow-black hover:bg-gray-200 hover:shadow-none shadow-[0_0_5px_rgba(0,0,0,0.3)]">

                            <img
                                src="/icons/bannerinsta.png"
                                className="absolute inset-0 w-full h-full"
                            />

                            <img
                                src="/icons/insta.png"
                                className="w-auto h-8 sm:h-12 aspect-square z-10"
                            />

                            <Text className="text-white font-bold text-sm sm:text-lg z-10">
                                Instagram
                            </Text>
                        </Pressable>


                        {/* EMAIL */}
                        <Pressable
                            onPress={() => Linking.openURL(emailUrl)}
                            className="bg-black px-4 py-3 w-full h-auto rounded-xl flex-row items-center gap-4 shadow-black hover:shadow-none shadow-[0_0_5px_rgba(0,0,0,0.3)]">

                            <img
                                src="/icons/email.svg"
                                className="w-auto h-8 sm:h-12 aspect-square bg-transparent"
                            />

                            <Text className="text-white font-bold text-center text-sm sm:text-lg">
                                marchettivinim@gmail.com
                            </Text>
                        </Pressable>

                        {/* BANLEK */}
                        <Pressable
                            onPress={() => Linking.openURL(banlek)}
                            className="bg-black px-4 py-3 w-full h-auto rounded-xl flex-row items-center gap-4 shadow-black hover:shadow-none shadow-[0_0_5px_rgba(0,0,0,0.3)]">

                            <img
                                src="/icons/banlek.png"
                                className="w-auto h-8 sm:h-12 aspect-square"
                            />

                            <Text className="text-white font-bold text-center text-sm sm:text-lg">
                                Banlek (Suas fotos)
                            </Text>
                        </Pressable>

                    </View>


                </View>


            </View>
        </View>
    );
}