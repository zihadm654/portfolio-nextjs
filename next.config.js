const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const { withContentlayer } = require('next-contentlayer');
const path = require('path');

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Add any other Next.js config options here
};
const withPWA = require('@ducanh2912/next-pwa').default({
  // Customize PWA options here
  dest: 'public',
  register: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
  scope: '/app',
  sw: 'service-worker.js',
  customWorkerDir: 'serviceworker',
  fallbacks: {
    document: '/~offline',
    data: '/fallback.json',
    image: '/fallback.webp',
    font: '/fallback-font.woff2',
  },
});

module.exports = withContentlayer(withPWA(nextConfig));
