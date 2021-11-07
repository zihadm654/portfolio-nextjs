const connect = require('./lib/mongo');
const path = require('path');

let database = (async () => {
  const { db } = await connect();
  return db;
})();

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  serverRuntimeConfig: {
    async database() {
      return await database;
    },
  },
};
