import { Link } from "expo-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Linking, Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import AutoCarousel from "../components/carrossel";
import Depoimentos from "../components/depoimentos";
import { botao, textobotao, textoselecionado, viewcarrossel } from "../components/estilos";
import "../global.css";


export default function App() {

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
    <View className="flex-1 bg-white">

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
        <a
          href="https://wa.me/5549984006881"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 h-10 w-10 flex items-center justify-center hover:scale-105 transition"
        >
          <img src="/icons/wpp.png" />
        </a>


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

      <ScrollView className="flex-1 mt-16 bg-black">

        {/*---------------------------------------- PRIMEIRA PÁGINA --------------------------------- */}

        <View className="relative w-full h-[calc(100dvh-64px)] overflow-hidden bg-black items-center justify-center">


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

          <View className="flex-row w-full h-auto xl:mt-12">

            <View className="w-1/3 h-auto aspect-square xl:h-[430px]" />

            <View className="w-1/3 items-center justify-center gap-8 h-auto xl:max-h-96">

              <img src="/icons/eu.jpg" className="w-auto aspect-square rounded-lg max-h-72 min-w-48 shadow-black shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
              <img src="/icons/MinhaBranca.png" className="z-20 max-w-48 h-auto hidden sm:flex" />

            </View>

            <View className="w-1/3 h-auto xl:max-h-96" />

          </View>
          <View className="items-center justify-center w-full h-1/3 gap-9 xl:justify-start mt-10 sm:mt-4 xl:mt-4">

            <View className="items-center justify-center">
              <Text className="text-center text-xl sm:text-2xl text-white mx-12 sm:mx-24">
                Fotógrafo em Chapecó e região.
              </Text>

              <Text className="text-center text-sm mt-2 sm:text-lg text-white/90 mx-12 sm:mx-24">
                Atendo diversos tipos de eventos, incluindo esportivos, automotivos e motociclísticos, além de ensaios em geral.
              </Text>
            </View>

            <View className="flex-row max-[390px]:flex-col items-center justify-center w-full h-fit gap-5 sm:gap-10">


              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex-row items-center justify-center w-fit">

                <Link href="/portifolio" asChild>
                  <Pressable className="flex-row gap-2 backdrop-blur-sm w-fit py-3 px-4 sm:py-4 sm:px-5 items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">

                    <img src="/icons/cameraBranca.svg" className="sm:w-6 sm:h-6 w-4 h-4" />
                    <Text className="text-center text-white text-md sm:text-lg">
                      Ver portifolio
                    </Text>
                  </Pressable>
                </Link>
              </motion.div>



              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex-row items-center justify-center w-fit">

                <Link href="/contato" asChild>
                  <Pressable className="flex-row gap-2 backdrop-blur-sm w-fit py-3 px-4 sm:py-4 sm:px-5 items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <img src="/icons/telefoneBranco.svg" className="sm:w-6 sm:h-6 w-4 h-4" />
                    <Text className="text-center text-white text-md sm:text-lg">
                      Entrar em contato
                    </Text>
                  </Pressable>
                </Link>
              </motion.div>


            </View>

          </View>
        </View>

        {/*---------------------------------------- PRÉVIA PORTIFÓLIO --------------------------------- */}

        <View className="relative bg-black h-fit w-screen items-center justify-start">

          {/* Imagem DESKTOP (>= sm) */}
          <img
            src="/images/fundopadel.jpg"
            className="hidden sm:block absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
          />

          {/* Imagem MOBILE (< sm) */}
          <img
            src="/images/fundofogos.avif"
            className="block sm:hidden absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
          />

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

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex-row items-center justify-center w-fit">

            <Link href="/portifolio" asChild>
              <Pressable className="flex-row gap-2 backdrop-blur-sm w-fit mb-10 py-3 px-4 sm:py-4 sm:px-5 items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <img src="/icons/cameraBranca.svg" className="sm:w-6 sm:h-6 w-4 h-4" />
                <Text className="text-center text-white text-md sm:text-lg">
                  Ver portifolio
                </Text>
              </Pressable>
            </Link>
          </motion.div>

        </View>

        {/*---------------------------------------- SOBRE MIM: FUNDO --------------------------------- */}

        <View className="relative bg-black h-[calc(100dvh-64px)] w-full md:items-center md:justify-center overflow-hidden">

          <View className="md:flex-row flex-col">

            <View className="items-center justify-center w-auto h-screen md:w-full md:h-[calc(100dvh-64px)] lg:w-1/2  relative ">
              <img
                src="/images/fundo.jpg"
                className="w-full h-full lg:h-auto object-cover"
              />
            </View>

            <View className="items-center justify-center lg:w-1/2 w-full h-full md:hidden">
            </View>

          </View>



          {/*---------------------------------------- SOBRE MIM: FRENTE --------------------------------- */}

          <View className=" md:flex-row flex-col w-full h-[calc(100dvh-64px)] z-20 absolute items-center justify-center md:justify-normal backdrop-blur-sm md:backdrop-blur-none bg-black/30 md:bg-transparent">


            <View className="justify-center items-center flex md:hidden lg:flex lg:w-1/3 h-1/5">
              <Text className="flex md:hidden text-6xl font-thin text-center text-white whitespace-nowrap">Sobre mim:</Text>
            </View>

            <View className="z-20 px-10 w-full lg:w-1/3 md:w-1/2 h-1/4 md:h-full  items-center justify-center">
              <img
                src="/images/selfie.jpg"
                className="md:max-w-96 md:h-auto md:w-full w-auto h-full aspect-square rounded-xl shadow-black shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              />
            </View>

            <View className="flex-col px-10 sm:px-24 md:px-10 lg:px-4 xl:px-8 items-center justify-center w-full lg:w-1/3 md:w-1/2 h-2/4 md:h-full ">
              <Text className="md:flex hidden text-5xl font-thin text-center text-white md:mb-6 lg:mb-4 mb-2 whitespace-nowrap">Sobre mim:</Text>
              <Text
                className="font-bold text-base text-white text-justify md:text-left xl:text-justify leading-relaxed p-4 backdrop-blur-none shadow-none bg-transparent rounded-none md:backdrop-blur-sm md:shadow-black md:shadow-[0_0_10px_rgba(0,0,0,0.3)] md:bg-black/30 md:rounded-2xl">
                Olá! Sou Vinicius Marchetti, fotógrafo em Chapecó–SC. Trabalho com fotografia esportiva, automotiva, ensaios, eventos e fotografia comercial e corporativa.
                <br />
                Saiba mais sobre mim no botão abaixo!
              </Text>
              <Link href="/sobre" asChild>
                <Pressable className="flex-row  gap-2 backdrop-blur-sm w-fit py-3 px-4 sm:py-4 sm:px-5 items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                  <img src="/icons/pessoa.svg" className="sm:w-6 sm:h-6 w-4 h-4" />
                  <Text className="text-center text-white text-md sm:text-lg">
                    Saiba mais
                  </Text>
                </Pressable>
              </Link>
            </View>

          </View>
        </View>


        {/*---------------------------------------- RODAPÉ ----------------------------------------------------------------------- */}

        <View className="w-full items-center justify-center flex-col md:flex-row pt-14 pb-16 sm:p-16 bg-black lg:bg-slate-950">

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

              <Pressable className=" items-center justify-center w-fit h-fit" onPress={() => Linking.openURL(url)}>
                <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                  WhatsApp
                </Text>
              </Pressable>

              <Text className="text-white text-center text-md"> • <br /></Text>

              <Pressable className=" items-center justify-center w-fit h-fit"
                onPress={() => window.open("https://www.instagram.com/fotoviniciusmarchetti/", "_blank")}>
                <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                  Instagram
                </Text>
              </Pressable>

              <Text className="text-white text-center text-md"> • <br /></Text>

              <Pressable className=" items-center justify-center w-fit h-fit" onPress={() => Linking.openURL(emailUrl)}>
                <Text className="text-white text-center text-md hover:underline hover:decoration-1 hover:underline-offset-1">
                  Email
                </Text>
              </Pressable>

              <Text className="text-white text-center text-md"> • <br /></Text>

              <Pressable className=" items-center justify-center w-fit h-fit" onPress={() => Linking.openURL("https://banlek.com/viniciusmarchetti")}>
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
                <Pressable onPress={() => Linking.openURL(url)}>
                  <img src="/icons/wppbranco.png" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                </Pressable>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="items-center justify-center w-fit">
                <Pressable onPress={() => window.open("https://www.instagram.com/fotoviniciusmarchetti/", "_blank")}>
                  <img src="/icons/instabranco.png" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                </Pressable>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="items-center justify-center w-fit">
                <Pressable onPress={() => Linking.openURL(emailUrl)}>
                  <img src="/icons/email1.svg" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                </Pressable>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="items-center justify-center w-fit">
                <Pressable onPress={() => window.open("https://banlek.com/viniciusmarchetti", "_blank")}>
                  <img src="/icons/banlek.png" className="lg:w-8 lg:h-8 md:w-6 md:h-6 h-8 w-8 mx-2" />
                </Pressable>
              </motion.div>

            </View>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex-row items-center justify-center w-fit">

              <Link href="/contato" asChild>
                <Pressable className="flex-row  backdrop-blur-sm w-fit   gap-2 py-1 px-12 md:py-2 md:px-14 lg:py-2 lg:px-16    items-center justify-center rounded-full hover:shadow-none shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">
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
  );
}
