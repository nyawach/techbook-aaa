const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

/** @type import('webpack').Configuration */
module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  externals: [ nodeExternals() ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
          loader: 'ts-loader',
          test: /\.tsx?$/,
          exclude: [
            /node_modules/
          ],
          options: {
            configFile: 'tsconfig.json'
          }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './'),
    }
  },
};
