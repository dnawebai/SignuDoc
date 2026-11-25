import type { MetadataRoute } from "next";

import { SIGNUDOC_NAME } from "@/lib/branding";

const ICONS = "/brand/iquash-official-20261112";

// What a phone or desktop shows when the site is added to the home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SIGNUDOC_NAME,
    short_name: SIGNUDOC_NAME,
    description: "Send, sign and seal documents. Part of iQuash.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfcfa",
    theme_color: "#fdfcfa",
    icons: [
      { src: `${ICONS}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${ICONS}/icon-512.png`, sizes: "512x512", type: "image/png" },
      {
        src: `${ICONS}/icon-maskable-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
