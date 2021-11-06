module.exports = {
  reactStrictMode: true,
};
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};
