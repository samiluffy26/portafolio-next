/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-domain.com'], // reemplaza con dominios externos si usas imágenes remotas
  },
};

module.exports = nextConfig;