"use client";

import Script from "next/script";

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
