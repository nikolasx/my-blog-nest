/*
 * @Author: g05047
 * @Date: 2020-12-24 22:13:02
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-23 23:22:01
 * @Description: file content
 */
import { Configuration } from 'webpack';
import { resolve } from 'path';

export const baseConfig: Configuration = {
  entry: {
    main: resolve(__dirname, '..', 'src/client/main.tsx'),
  },
  output: {
    path: resolve(__dirname, '..', 'dist/static'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
    alias: {
      '@client': resolve(__dirname, '..', 'src/client'),
    },
  },
};
