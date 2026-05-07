import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const basePath =
  process.env.NODE_ENV === "production" ? "/Next-Rails-Timer-v3" : ""

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next-Rails-Timer-v3 Timer",
    short_name: "Timer",
    description: "Timer app built with Next.js",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#f3f3f3",
    theme_color: "#d65cff",
    icons: [
      {
        src: `${basePath}/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${basePath}/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}