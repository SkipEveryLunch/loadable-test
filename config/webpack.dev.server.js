const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'development',
  // inform webpack that we're building a bundle
  // for nodeJS, rather than for the brouser
  target: 'node',

  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(common, serverConfig);
