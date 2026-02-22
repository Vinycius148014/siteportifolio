import { Linking, Platform } from "react-native";

export function trackWhatsAppClick(url: string) {
  let opened = false;
  const open = () => {
    if (opened) return;
    opened = true;
    Linking.openURL(url);
  };

  if (Platform.OS !== "web" || typeof window === "undefined") {
    open();
    return;
  }

  const gtag = (window as any).gtag;
  if (typeof gtag !== "function") {
    open();
    return;
  }

  const shouldDebug = window.location.search.includes("ga_debug=1");
  const eventParams: Record<string, unknown> = {
    event_callback: open,
    event_timeout: 1000,
    transport_type: "beacon",
  };
  if (shouldDebug) {
    eventParams.debug_mode = true;
  }

  gtag("event", "whatsapp_click", eventParams);

  // Fallback in case gtag never calls the callback.
  setTimeout(open, 1100);
}
