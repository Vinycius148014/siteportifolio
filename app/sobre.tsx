import { Link } from "expo-router";
import Head from "expo-router/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  trackBanlekClick,
  trackEmailClick,
  trackInstagramClick,
  trackWhatsAppClick,
} from "../components/analytics";
import { botao, textobotao, textoselecionado } from "../components/estilos";
import "../global.css";

export default function Sobre() {
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

  const headerHeight = 64;

  const phone = "5549984006881";
  const message = "Olá, vim pelo seu portfólio!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const [isDesktop, setIsDesktop] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine)");
    const update = () => setIsDesktop(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      <Head>
        <title>Sobre | Vinicius Marchetti Fotografo</title>
        <meta
          name="description"
          content="Conheca Vinicius Marchetti, fotografo em Chapeco-SC, com atuacao em ensaios, eventos, esporte, automotivo e fotografia comercial."
        />
        <link rel="canonical" href="https://viniciusmarchetti.com.br/sobre" />
      </Head>

      <View className="flex-1 bg-black">
        <View className="absolute bottom-2 left-2 z-40 sm:bottom-3 sm:left-3">
          <Text className="text-xs text-white">Desenvolvido por Vinicius Marchetti.</Text>
        </View>

        <div className={`fixed bottom-5 z-50 flex flex-col items-end gap-2 sm:bottom-6 ${isDesktop ? "right-10" : "right-4"}`}>
          <Pressable
            onPress={() => {
              trackWhatsAppClick(url);
            }}
            className="flex h-10 w-10 items-center justify-center transition hover:scale-105 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          >
            <img src="/icons/wpp.png" />
          </Pressable>
        </div>

        {/*-------------------------------------HEADER------------------------------------*/}

        <View className="absolute left-0 right-0 top-0 z-50 flex h-16 w-full flex-row items-center justify-center bg-black/50 p-4 backdrop-blur-md shadow-[0_0_18px_rgba(0,0,0,0.3)] shadow-black">
          <Link href="/" asChild>
            <Pressable className="w-fit items-center justify-center p-1">
              <motion.img
                src="/icons/MinhaBranca.png"
                className="ml-3 h-8 w-auto"
                animate={{ scale: 1.2 }}
                whileHover={{ scale: 1.26 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </Pressable>
          </Link>

          <Pressable onPress={() => setOpenMenu(true)} className="fixed left-4 sm:hidden">
            <img src="/icons/3linha.svg" className="h-7 w-7" />
          </Pressable>

          <View className="ml-auto hidden flex-row gap-7 sm:flex">
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

        {openMenu && (
          <>
            <Pressable className="fixed inset-0 z-40 bg-black/60" onPress={() => setOpenMenu(false)} />

            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 top-0 z-50 h-full w-64 bg-black p-6 shadow-xl"
            >
              <img src="/icons/MinhaBranca.png" className="h-11 w-auto" />

              <Link href="/" asChild>
                <Pressable className="mt-5 flex-row items-center justify-start gap-2 py-3">
                  <img src="/icons/home.svg" className="h-5 w-5" />
                  <Text className="text-xl text-white">Início</Text>
                </Pressable>
              </Link>

              <Link href="/portifolio" asChild>
                <Pressable className="flex-row items-center justify-start gap-2 py-3">
                  <img src="/icons/cameraBranca.svg" className="h-5 w-5" />
                  <Text className="text-xl text-white">Portfólio</Text>
                </Pressable>
              </Link>

              <Link href="/sobre" asChild>
                <Pressable className="flex-row items-center justify-start gap-2 py-3">
                  <img src="/icons/pessoa.svg" className="h-5 w-5" />
                  <Text className="text-xl text-white">Sobre</Text>
                </Pressable>
              </Link>

              <Link href="/contato" asChild>
                <Pressable className="flex-row items-center justify-start gap-2 py-3">
                  <img src="/icons/telefoneBranco.svg" className="h-5 w-5" />
                  <Text className="text-xl text-white">Contato</Text>
                </Pressable>
              </Link>
            </motion.div>
          </>
        )}

        <ScrollView
          className="flex-1 bg-black"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: headerHeight }}>

          <View className="relative min-h-[calc(100dvh-64px)] w-full overflow-hidden bg-black">
            <View className="absolute inset-0 bg-gradient-to-b from-white/15 via-zinc-900 to-black" />
            <View className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
            <View className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <View className="absolute inset-0 bg-black/25" />

            <Text className="absolute left-6 top-10 text-5xl font-bold tracking-[0.3em] text-white/5 sm:text-7xl lg:text-8xl">
              SOBRE
            </Text>

            <View className="relative z-10 w-full max-w-6xl self-center py-16 sm:px-10 sm:py-20 lg:px-12">
              <View className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch">
                <View className="mx-auto w-full max-w-[420px] lg:mx-0 lg:w-5/12 lg:max-w-none px-5 sm:px-0">
                  <View className="relative h-auto w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.2)] lg:aspect-square">
                    <img
                      src="/images/selfie.jpg"
                      className="block h-auto w-full max-w-full object-cover rounded-2xl lg:h-full"
                      alt="Vinicius Marchetti"
                    />

                    <View className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/55 px-4 py-2 backdrop-blur-sm">
                      <Text className="text-sm font-medium text-white">Chapecó - SC</Text>
                    </View>

                    <View className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-black/55 px-4 py-3 backdrop-blur-sm">
                      <Text className="text-xl font-bold text-white">+200</Text>
                      <Text className="text-xs text-white/70">eventos registrados</Text>
                    </View>
                  </View>
                </View>

                <View className="w-full px-6 sm:px-0 lg:px-6 lg:w-7/12">
                  <Text className="text-4xl font-thin text-white sm:text-5xl">Sobre mim</Text>
                  <Text className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                    Sou Vinicius Marchetti, fotógrafo em Chapecó-SC. Trabalho com fotografia esportiva,
                    automotiva, ensaios, eventos e projetos comerciais, sempre com direção criativa e
                    foco em resultado.
                  </Text>
                  <Text className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                    Para mim, fotografia não é só estética: é posicionamento, percepção e memória. Em
                    cada trabalho eu busco imagens que valorizem pessoas, contem contexto e reforcem a
                    identidade de quem está sendo fotografado.
                  </Text>
                  <Text className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                    Do briefing à entrega final, mantenho processo organizado, comunicação direta e edição
                    consistente para entregar um material forte, autêntico e pronto para uso.
                  </Text>

                  <View className="mt-8 flex-row flex-wrap items-center gap-3">
                    <View className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <Text className="text-lg font-bold text-white">+200</Text>
                      <Text className="text-xs text-white/70">eventos</Text>
                    </View>
                    <View className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <Text className="text-lg font-bold text-white">10 anos</Text>
                      <Text className="text-xs text-white/70">experiência</Text>
                    </View>
                    <View className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <Text className="text-lg font-bold text-white">48h</Text>
                      <Text className="text-xs text-white/70">prévia</Text>
                    </View>
                  </View>

                  <View className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href="/contato" asChild>
                      <Pressable className="flex-row items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm shadow-white shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-none">
                        <img src="/icons/telefoneBranco.svg" className="h-6 w-6" />
                        <Text className="text-lg text-white">Entrar em contato</Text>
                      </Pressable>
                    </Link>

                    <Link href="/portifolio" asChild>
                      <Pressable className="flex-row items-center justify-center gap-2 rounded-full border border-white/20 bg-black/25 px-5 py-4 backdrop-blur-sm hover:bg-white/10">
                        <img src="/icons/cameraBranca.svg" className="h-6 w-6" />
                        <Text className="text-lg text-white">Ver portfólio</Text>
                      </Pressable>
                    </Link>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="relative w-full overflow-hidden border-t border-white/10 bg-black px-6 py-16 sm:px-10 lg:px-12">
            <View className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/25" />
            <View className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <View className="relative z-10 w-full max-w-6xl self-center">
              <Text className="text-3xl font-thin text-white sm:text-4xl">Como eu trabalho</Text>
              <Text className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
                Meu fluxo é simples e direto: entender objetivo, capturar com intenção e entregar com
                consistência técnica para que cada imagem tenha uso real.
              </Text>

              <View className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <View className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:w-[48%]">
                  <Text className="text-lg font-medium text-white">Briefing estratégico</Text>
                  <Text className="mt-2 text-sm leading-relaxed text-white/75">
                    Alinhamento de proposta, estilo visual e uso final das imagens antes do clique.
                  </Text>
                </View>

                <View className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:w-[48%]">
                  <Text className="text-lg font-medium text-white">Direção durante a sessão</Text>
                  <Text className="mt-2 text-sm leading-relaxed text-white/75">
                    Orientação leve para manter naturalidade, expressão e narrativa visual do trabalho.
                  </Text>
                </View>

                <View className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:w-[48%]">
                  <Text className="text-lg font-medium text-white">Edição e padronização</Text>
                  <Text className="mt-2 text-sm leading-relaxed text-white/75">
                    Tratamento consistente para reforçar identidade, impacto e profissionalismo.
                  </Text>
                </View>

                <View className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:w-[48%]">
                  <Text className="text-lg font-medium text-white">Entrega organizada</Text>
                  <Text className="mt-2 text-sm leading-relaxed text-white/75">
                    Arquivos entregues prontos para redes sociais, campanhas e materiais comerciais.
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
        </ScrollView>
      </View>
    </>
  );
}
