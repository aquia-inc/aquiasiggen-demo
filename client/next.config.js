/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aquiasiggen-python-zappa.s3.amazonaws.com",
        port: "",
        pathname: "/images/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
