const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: ["@babel/polyfill", "./src/main.jsx"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: "[name].[fullhash].js",
    publicPath: '/',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
            ],
        },
        {
            test: /\.(jpg|jpeg|png|svg|ico)$/,
            use: 'file-loader?name=[name].[ext]',
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            },
        },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
    ],
    
  devServer: {
    port: 3000,
  },
};