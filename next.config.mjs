/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/https://github.com/Apoorva-Pant/weather-app',  // Replace with your repo name
  assetPrefix: '/weather-app/', 
};

export default nextConfig;
