import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    })

    return config
  },
  images: {
    domains: ["uploadthing.com", "i5bk1066ut.ufs.sh","utfs.io"],
  },
};

export default nextConfig;
