// app/_layout.tsx
import { Stack } from "expo-router";
import Head from "expo-router/head";
import { Platform } from "react-native";

const GA_ID = "G-MG62D152NH";

export default function RootLayout() {
  return (
    <>
      {Platform.OS === "web" && (
        <Head>
          {/* Google tag (gtag.js) */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />

          {/* Configuração do GA */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `,
            }}
          />
        </Head>
      )}

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
