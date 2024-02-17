/**
 * @type{import("next").NextConfig}
 *
 */
// import {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } from 'next/constants.js';
const { withContentlayer } = require('next-contentlayer');
// import { withContentlayer } from 'next-contentlayer';
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   serverActions: true,
  //   // serverComponentsExternalPackages: ['@prisma/client'], // <-- and this
  // },
  // serverActions,
  // and the following to enable top-level await support for Webpack
  // webpack: (config) => {
  //   config.experiments = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '',
        // pathName: '/dxadtnltj/image/upload/**',
      },
      // 'storage.googleapis.com',
      // 'firebasestorage.googleapis.com',
      // 'res.cloudinary.com',
    ],
  },
};

// const nextConfigFunction = async (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
//     const withPWA = (await import('@ducanh2912/next-pwa')).default({
//       dest: 'public',
//       disable: process.env.NODE_ENV === 'development',
//       register: true,
//       scope: '/app',
//       sw: 'service-worker.js',
//       customWorkerDir: 'serviceworker',
//       fallbacks: {
//         document: '/~offline',
//         data: '/fallback.json',
//         image: '/fallback.webp',
//         font: '/fallback-font.woff2',
//       },
//     });
//     return withPWA(nextConfig);
//   }
//   return withContentlayer(nextConfig);
// };

// module.exports = withContentlayer(nextConfig);

// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig);
