import { Configuration } from 'webpack';
import { resolve } from 'path';

export const baseConfig: Configuration = {
  entry: {
    main: resolve(__dirname, '..', 'src/client/main.ts'),
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
    ],
  },
};
