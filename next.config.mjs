/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   esmExternals: "loose",
  // },
  transpilePackages: ["@react-pdf/renderer"],
};

export default nextConfig;
