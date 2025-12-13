"use client";

import Script from "next/script";

export default function UmamiAnalytics() {
  return (
    <Script
      defer
src="https://dps-analytics.suwebatu.com/script.js" data-website-id="cf69c42a-86c5-4be2-82ad-7ccfe599f365"
    />
  );
}