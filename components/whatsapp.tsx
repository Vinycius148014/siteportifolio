import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";

type Props = {
  whatsappUrl: string;
};

export default function WhatsAppFloating({ whatsappUrl }: Props) {
  const [showBalloon, setShowBalloon] = useState(false);

  useEffect(() => {
    // Se já fechou antes, não mostra
    const dismissed = typeof window !== "undefined"
      ? window.localStorage.getItem("wpp_balloon_dismissed")
      : null;

    if (dismissed === "1") return;

    const t = setTimeout(() => {
      setShowBalloon(true);
    }, 2500); // tempo para aparecer (ms)

    return () => clearTimeout(t);
  }, []);

  function closeBalloon() {
    setShowBalloon(false);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("wpp_balloon_dismissed", "1");
    }
  }

  return (
    <View className="fixed bottom-6 right-6 z-[999]">
      {/* BALÃO */}
      <AnimatePresence>
        {showBalloon && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 w-[260px]"
          >
            <View className="relative">
              {/* sua imagem PNG do balão */}
              <img
                src="/icons/balao.png"   // <<< coloque o caminho do teu PNG
                className="w-full h-auto select-none"
                draggable={false}
              />

              {/* texto dentro do balão */}
              <div className="absolute inset-0 px-5 py-4 flex items-center justify-center">
                <p className="text-black text-sm font-medium text-center leading-snug">
                  Oi! 😊<br />
                  Quer fazer um orçamento?<br />
                  Me chama no WhatsApp!
                </p>
              </div>

              {/* botão fechar (X) */}
              <button
                onClick={closeBalloon}
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
                aria-label="Fechar"
              >
                ×
              </button>
            </View>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÃO WHATSAPP */}
      <Pressable
        onPress={() => window.open(whatsappUrl, "_blank")}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-105 transition"
      >
        <img src="/icons/wpp.png" className="w-8 h-8" />
      </Pressable>
    </View>
  );
}
