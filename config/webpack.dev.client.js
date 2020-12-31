const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const clientConfig = {
  entry: './src/client/client.jsx',
  target: 'web',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
  },
};

module.exports = merge(common, clientConfig);
