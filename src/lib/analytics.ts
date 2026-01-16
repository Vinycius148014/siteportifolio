// src/lib/analytics.ts
export function trackEvent(
  name: string,
  params?: Record<string, any>
) {
  // Só roda no navegador
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (!gtag) return;

  gtag("event", name, {
    ...params,
  });
}
