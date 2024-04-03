// Constants.js
const production = {
  url: 'https://portfolio-nextjs-zihadm654.vercel.app',
};
const development = {
  url: 'http://localhost:3000',
};
export const config =
  process.env.NODE_ENV === 'development' ? development : production;
