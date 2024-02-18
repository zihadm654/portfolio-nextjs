const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const { withContentlayer } = require('next-contentlayer');
const path = require('path');
const withPWA = require('@ducanh2912/next-pwa').default;

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

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER; // Check dev environment explicitly

  return withContentlayer(
    withPWA({
      ...nextConfig,
      pwa: {
        // Customize PWA options here
        dest: 'public',
        disable: isDev, // Disable PWA in development
        register: true,
        cacheOnFrontEndNav: true,
        reloadOnOnline: true,
        swcMinify: true,
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
      },
    })
  );
};
