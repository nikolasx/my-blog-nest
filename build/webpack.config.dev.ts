import { Configuration } from 'webpack';
import { baseConfig } from './webpack.config.base';
import { mergeDeepWith, concat } from 'ramda';
import { resolve } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = mergeDeepWith(concat, baseConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src/client/index.ejs'),
      filename: 'index.ejs',
    }),
  ],
  output: {
    publicPath: 'http://localhost:9000',
  },
  devServer: {
    contentBase: resolve(__dirname, '..', 'dist/static'),
    port: 9000,
  },
});

export default config;
