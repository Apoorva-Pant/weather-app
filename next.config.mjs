/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Make static exportable
  images: {
    unoptimized: true, // For GitHub Pages, no Next.js image optimization
  },
  basePath: '', // Leave blank for root deploy
};

export default nextConfig;
