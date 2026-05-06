import { Link } from "expo-router";
import Head from "expo-router/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import {
  trackBanlekClick,
  trackEmailClick,
  trackInstagramClick,
  trackWhatsAppClick,
} from "../components/analytics";
import AutoCarousel from "../components/carrossel";
import Depoimentos from "../components/depoimentos";
import { botao, textobotao, textoselecionado, viewcarrossel } from "../components/estilos";
import "../global.css";


export default function App() {
  const headerHeight = 64;
  const ctaPrimaryButtonClass =
    "flex-row items-center w-52 justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-none";
  const ctaSecondaryButtonClass =
    "flex-row items-center w-52 justify-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-3 backdrop-blur-sm hover:bg-white/10";

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




  const { width } = useWindowDimensions();

  let dynamicFont = 18; // fallback

  if (width < 400) {
    dynamicFont = 15;         // mobile MUITO pequeno
  }
  else if (width < 768) {
    dynamicFont = 19;   // mobile normal com escala melhor
  }
  else if (width < 1024) {
    dynamicFont = 20;         // APENAS md → fixo
  }
  else {
    dynamicFont = width * 0.015; // telas grandes
  }



  const [openMenu, setOpenMenu] = useState(false);

  const phone = "5549984006881"; // DDI + DDD + número (sem espaços)
  const message = "Olá, vim pelo seu portfólio!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Head>
        <title>Vinicius Marchetti | Fotografo em Chapeco e regiao</title>
        <meta
          name="description"
          content="Fotografo em Chapeco-SC para ensaios, eventos, esportes, automotivo e fotografia comercial."
        />
        <link rel="canonical" href="https://viniciusmarchetti.com.br/" />
      </Head>
      <View className="flex-1 bg-black">

        {/* ASSINATURA */}
        <View className={`absolute bottom-2 sm:bottom-3 z-30 left-2 sm:left-3`}>
          <Text className={"text-white text-xs"}>
            Desenvolvido por Vinicius Marchetti.
          </Text>
        </View>


        {/* WHATSAPP */}
        <div className={`fixed sm:bottom-6 bottom-5 ${isDesktop ? 'right-10' : 'right-4'} z-30 flex flex-col items-end gap-2 sm:gap-4`}>

          {/* BALÃO */}
          {showBalloon && (
            <div className="relative animate-fadeIn">

              {/* BOTÃO FECHAR */}
              <button
                onClick={() => setShowBalloon(false)}
                className="absolute sm:-top-3 sm:-left-3 -top-4 -left-4 w-7 h-7 z-30 bg-black text-white rounded-full text-xs flex items-center justify-center hover:bg-gray-800"
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
            className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 h-10 w-10 flex items-center justify-center hover:scale-105 transition">
            <img src="/icons/wpp.png" />
          </Pressable>


        </div>



        {/*---------------------------------------- HEADER --------------------------------- */}
        <View className="p-4 flex-row items-center justify-center absolute top-0 left-0 right-0 h-16 z-40 bg-black/50 backdrop-blur-md shadow-[0_0_18px_rgba(0,0,0,0.3)] shadow-black">


          <Pressable
            onPress={() => setOpenMenu(true)}
            className="sm:hidden fixed left-4">
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
                <Text className={textoselecionado}>Início</Text>
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
          className="flex-1 bg-black"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: headerHeight }}>

          {/*---------------------------------------- PRIMEIRA PÁGINA --------------------------------- */}

          <View className="relative w-full h-[calc(100dvh-64px)] min-h-[600px] overflow-hidden bg-black items-center justify-center">


            {/* VIDEO BACKGROUND */}
            <video
              src="/videos/30fps.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none -z-10 bg-black opacity-30"
            />
            <View className="items-center justify-around gap-0 flex-1 my-14">
              <View className="flex-row w-full h-fit ">

                <View className="w-1/3 h-fit xl:max-h-96" />

                <View className="w-1/3 items-center justify-center gap-4 h-auto xl:max-h-96">

                  <img src="/icons/eu.jpg" className="w-auto aspect-square rounded-lg max-h-48 min-w-24 shadow-black shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
                  <img src="/icons/MinhaBranca.png" className="z-20 max-w-32 h-auto hidden sm:flex" />

                </View>

                <View className="w-1/3 h-fit xl:max-h-96" />

              </View>
              <View className="items-center justify-center w-full h-1/3 gap-9 sm:mt-4 xl:mt-4">

                <View className="items-center justify-center">
                  <Text
                    className="flex sm:hidden text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white mx-12 sm:mx-24 whitespace-nowrap"
                    style={{
                      textShadowColor: "rgba(0,0,0,8)",
                      textShadowOffset: { width: 0, height: 0 },
                      textShadowRadius: 6,
                    }}>
                    Fotógrafo em Chapecó
                    <br>
                    </br> e região.
                  </Text>

                  <Text
                    className="hidden sm:flex text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white mx-12 sm:mx-24 whitespace-nowrap"
                    style={{
                      textShadowColor: "rgba(0,0,0,8)",
                      textShadowOffset: { width: 0, height: 0 },
                      textShadowRadius: 6,
                    }}>
                    Fotógrafo em Chapecó e região.
                  </Text>

                  <Text
                    className="text-center text-sm mt-2 sm:text-xl text-white/90 mx-12 sm:mx-24"
                    style={{
                      textShadowColor: "rgba(0,0,0,10)",
                      textShadowOffset: { width: 0, height: 0 },
                      textShadowRadius: 4,
                    }}>
                    Atendo diversos tipos de eventos, incluindo esportivos, automotivos e motociclísticos, além de ensaios em geral.
                  </Text>
                </View>

              </View>

              <View className="flex-row max-[500px]:flex-col items-center justify-center w-full h-fit gap-5 sm:gap-7">




                <Link href="/sobre" asChild>
                  <Pressable className={ctaPrimaryButtonClass}>
                    <img src="/icons/pessoa.svg" className="h-5 w-5 sm:h-6 sm:w-6" />
                    <Text className="text-center text-white text-md sm:text-lg whitespace-nowrap">
                      Sobre mim
                    </Text>
                  </Pressable>
                </Link>




                <Link href="/portifolio" asChild>
                  <Pressable className={ctaSecondaryButtonClass}>
                    <img src="/icons/cameraBranca.svg" className="h-5 w-5 sm:h-6 sm:w-6" />
                    <Text className="text-center text-white text-md sm:text-lg whitespace-nowrap">
                      Ver portfólio
                    </Text>
                  </Pressable>
                </Link>


              </View>


            </View>
          </View>

          <View className="w-full h-fit border border-white/40" />

          {/*---------------------------------------- PRÉVIA PORTIFÓLIO --------------------------------- */}

          <View className="relative h-fit w-screen items-center justify-start overflow-hidden bg-black">
            <View className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
            <View className="absolute inset-0 bg-black/25" />

            <Text className="text-white text-3xl sm:text-4xl font-bold mt-16 mx-8 text-center mb-8">Cada momento conta. Veja alguns dos meus trabalhos.</Text>

            <View className="grid grid-cols-2 sm:grid-cols-4 p-8 lg:p-10 xl:p-14 w-full auto-rows-auto gap-6">
              <View className={viewcarrossel + " h-full"}>

                <Link href="/portifolio?filter=esportiva" asChild>
                  <Pressable className={botao}>
                    <Text className={"text-center text-white text-2xl font-thin hover:underline hover:decoration-2 hover:underline-offset-4"}>
                      Esportiva</Text>
                  </Pressable>
                </Link>

                <AutoCarousel
                  images={[
                    "/images/padelliberdade.avif",
                    "/images/esportiva/9-503.avif",
                    "/images/esportiva/9-488.avif",
                    "/images/esportiva/9-499.avif",
                    "/images/bikear.avif",
                  ]} />
              </View>

              <View className={viewcarrossel}>

                <Link href="/portifolio?filter=automotiva" asChild>
                  <Pressable className={botao}>
                    <Text className={"text-center text-white text-2xl font-thin hover:underline hover:decoration-2 hover:underline-offset-4"}>
                      Automotiva</Text>
                  </Pressable>
                </Link>

                <AutoCarousel
                  images={[
                    "/images/suprapreviaavif.avif",
                    "/images/mulherporsche.avif",
                    "/images/bmwm2.avif",
                    "/images/automotiva/9-511.avif",
                    "/images/automotiva/9-517.avif",
                  ]} />
              </View>

              <View className={viewcarrossel}>

                <Link href="/portifolio?filter=ensaios" asChild>
                  <Pressable className={botao}>
                    <Text className={"text-center text-white text-2xl font-thin hover:underline hover:decoration-2 hover:underline-offset-4"}>
                      Ensaios</Text>
                  </Pressable>
                </Link>

                <AutoCarousel
                  images={[
                    "/images/ensaios/9-574.avif",
                    "/images/ensaios/corporativa-05.avif",
                    "/images/ensaios/9-578.avif",
                    "/images/ensaios/corporativa-11.avif",
                    "/images/ensaios/corporativa-09.avif",

                  ]} />
              </View>

              <View className={viewcarrossel}>

                <Link href="/portifolio?filter=motociclismo" asChild>
                  <Pressable className={botao}>
                    <Text className={"text-center text-white text-2xl font-thin hover:underline hover:decoration-2 hover:underline-offset-4"}>
                      Motociclismo</Text>
                  </Pressable>
                </Link>

                <AutoCarousel
                  images={[
                    "/images/motociclismo/9-537.avif",
                    "/images/motociclismo/9-538.avif",
                    "/images/motociclismo/9-561.avif",
                    "/images/motociclismo/9-534.avif",
                    "/images/motociclismo/9-535.avif",
                  ]} />
              </View>

            </View>

            <Depoimentos />



            <Link href="/portfolio" asChild>
              <Pressable className={`${ctaPrimaryButtonClass} mb-10`}>
                <img src="/icons/cameraBranca.svg" className="sm:w-6 sm:h-6 w-4 h-4" />
                <Text className="text-center text-md text-white sm:text-lg">
                  Ver portifolio
                </Text>
              </Pressable>
            </Link>

          </View>

          <View className="w-full h-fit border border-white/40" />

          {/*---------------------------------------- SOBRE MIM --------------------------------- */}
          <View className="relative w-full overflow-hidden border-y border-white/10 bg-black">
            <View className="absolute inset-0 bg-gradient-to-br from-white/10 via-black to-transparent" />
            <View className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <View className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <Text className="lg:hidden text-white text-4xl font-bold mt-10 mx-8 text-center mb-0">
              Sobre mim
            </Text>
            <View className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 py-16 sm:px-12 sm:py-20 md:px-10 lg:flex-row">
              <View className="w-full lg:w-1/2">
                <View className="relative mx-auto w-full max-w-[440px] rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                  <img
                    src="/images/selfie.jpg"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                  <View className="absolute -top-5 sm:-right-6 -right-3 rounded-2xl border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-sm">
                    <Text className="text-base font-bold text-white">Vinicius Marchetti</Text>
                  </View>
                </View>
              </View>

              <View className="w-full lg:w-1/2 pr-5">

                <Text className="hidden lg:block text-white text-4xl font-thin mt-10 mx-8 text-start mb-0">
                  Sobre mim
                </Text>

                <Text
                  style={{ fontSize: dynamicFont }}
                  className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-5 text-justify font-bold leading-relaxed text-white/95 backdrop-blur-sm md:text-left">
                  Olá! Sou Vinicius Marchetti, fotógrafo em Chapecó-SC. Trabalho com fotografia
                  esportiva, automotiva, ensaios, eventos e fotografia comercial e corporativa.
                  Cada projeto é pensado para entregar imagens com emoção, identidade e uso real.
                </Text>

                <View className="mt-5 flex-row flex-wrap items-center justify-center gap-2 md:justify-start">
                  <View className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                    <Text className="text-sm text-white">Esportiva</Text>
                  </View>
                  <View className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                    <Text className="text-sm text-white">Automotiva</Text>
                  </View>
                  <View className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                    <Text className="text-sm text-white">Eventos</Text>
                  </View>
                  <View className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                    <Text className="text-sm text-white">Corporativa</Text>
                  </View>
                  <View className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                    <Text className="text-sm text-white">Ensaios</Text>
                  </View>
                </View>

                <View className="pt-12 sm:pt-7 flex flex-col gap-3 sm:flex-row items-center">
                  <Link href="/sobre" asChild>
                    <Pressable className={ctaPrimaryButtonClass}>
                      <img src="/icons/pessoa.svg" className="h-5 w-5 sm:h-6 sm:w-6" />
                      <Text className="text-center text-md text-white sm:text-lg whitespace-nowrap">
                        Saiba mais
                      </Text>
                    </Pressable>
                  </Link>

                  <Link href="/contato" asChild>
                    <Pressable className={"flex-row items-center w-52 sm:w-60 justify-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-3 backdrop-blur-sm hover:bg-white/10"}>
                      <img src="/icons/telefoneBranco.svg" className="h-5 w-5 sm:h-6 sm:w-6" />
                      <Text className="text-center text-md text-white sm:text-lg whitespace-nowrap">
                        Entrar em contato
                      </Text>
                    </Pressable>
                  </Link>
                </View>
              </View>
            </View>
          </View>

          <View className="w-full h-fit border border-white/40" />

          {/*---------------------------------------- RODAPÉ ----------------------------------------------------------------------- */}

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


        </ScrollView >
      </View >
    </>
  );
}
