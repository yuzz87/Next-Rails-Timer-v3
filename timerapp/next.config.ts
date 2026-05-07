import type { NextConfig } from "next";

const repoName = "Next-Rails-Timer-v3"//Next-Rails-Timer-v3
const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
}

export default nextConfig;
