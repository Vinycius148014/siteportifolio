import { Linking, Platform } from "react-native";

type WebNavigationTarget = "_self" | "_blank";

function shouldDebugGoogleAnalytics() {
  if (typeof window === "undefined") return false;

  const urlHasDebugParam = window.location.search.includes("ga_debug=1");
  if (urlHasDebugParam) {
    window.sessionStorage.setItem("ga_debug", "1");
    return true;
  }

  return window.sessionStorage.getItem("ga_debug") === "1";
}

function isLikelyMobileContext() {
  if (typeof window === "undefined") return false;
  if (typeof navigator === "undefined") return false;

  const coarsePointer =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches;
  const mobileUserAgent =
    /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);

  return coarsePointer || mobileUserAgent;
}

function openUrl(url: string, target: WebNavigationTarget = "_blank") {
  if (Platform.OS !== "web" || typeof window === "undefined") {
    Linking.openURL(url);
    return;
  }

  if (url.startsWith("mailto:")) {
    window.location.href = url;
    return;
  }

  if (target === "_blank") {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = url;
}

function trackAndOpen(
  eventName: string,
  url: string,
  target: WebNavigationTarget = "_blank"
) {
  const mobileContext = Platform.OS === "web" && isLikelyMobileContext();
  const effectiveTarget =
    mobileContext && target === "_blank" ? "_self" : target;

  let opened = false;
  const open = () => {
    if (opened) return;
    opened = true;
    openUrl(url, effectiveTarget);
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

  const eventParams: Record<string, unknown> = {
    link_url: url,
    link_target: effectiveTarget,
    page_location: window.location.href,
    event_callback: open,
    event_timeout: 1000,
    transport_type: "beacon",
  };
  if (shouldDebugGoogleAnalytics()) {
    eventParams.debug_mode = true;
  }

  // On mobile browsers, delayed callbacks can be blocked for external apps/popups.
  // Send event first and navigate immediately in the same tab.
  if (mobileContext) {
    delete eventParams.event_callback;
    delete eventParams.event_timeout;
    gtag("event", eventName, eventParams);
    open();
    return;
  }

  gtag("event", eventName, eventParams);

  // Fallback in case gtag never calls the callback.
  setTimeout(open, 1100);
}

export function trackWhatsAppClick(url: string) {
  trackAndOpen("whatsapp_click", url, "_blank");
}

export function trackInstagramClick(url: string) {
  trackAndOpen("instagram_click", url, "_blank");
}

export function trackEmailClick(url: string) {
  trackAndOpen("email_click", url, "_self");
}

export function trackBanlekClick(url: string) {
  trackAndOpen("banlek_click", url, "_blank");
}
