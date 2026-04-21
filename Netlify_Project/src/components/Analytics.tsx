"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/site.config";

export function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent periodically or listen to a custom event
    const checkConsent = () => {
      setHasConsent(localStorage.getItem("dsgvo_consent") === "accepted");
    };

    checkConsent();
    window.addEventListener("consentChanged", checkConsent);

    return () => {
      window.removeEventListener("consentChanged", checkConsent);
    };
  }, []);

  if (!hasConsent || !siteConfig.analytics.googleAnalyticsId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
