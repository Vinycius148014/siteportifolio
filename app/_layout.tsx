import { Stack, usePathname } from "expo-router";
import Head from "expo-router/head";
import { useEffect } from "react";
import { Platform } from "react-native";

const GA_MEASUREMENT_ID = "G-MG62D152NH";
const GA_INLINE_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
`.trim();

export default function RootLayout() {
  const pathname = usePathname();

  useEffect(() => {
    if (Platform.OS !== "web") return;
    if (!GA_MEASUREMENT_ID) return;
    if (typeof window === "undefined") return;

    (window as any).gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      {Platform.OS === "web" && GA_MEASUREMENT_ID ? (
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script>{GA_INLINE_SCRIPT}</script>
        </Head>
      ) : null}

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
