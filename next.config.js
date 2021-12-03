const path = require('path');
module.exports = {
  reactStrictMode: true,
};
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
module.exports = {
  images: {
    domains: ['storage.googleapis.com', 'firebasestorage.googleapis.com'],
  },
};
