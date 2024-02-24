const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

dotenv.config();

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@root': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@constants': path.resolve(__dirname, 'src', 'constants'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@app-types': path.resolve(__dirname, 'src', 'types'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Currency Tracker',
      favicon: path.join(__dirname, 'public', 'favicon.png'),
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
