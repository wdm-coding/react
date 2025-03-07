const path = require('path')
module.exports = {
  devServer: {
    port: '8080',
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}