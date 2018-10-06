const MiniCssExtract = require('mini-css-extract-plugin');
const appRootPath = require('app-root-path');

const config = {
  entry: './src/client',
  output: {
    filename: 'bundle.js',
    path: appRootPath + '/public'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          MiniCssExtract.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: appRootPath + '/config'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtract({
      filename: 'styles.css'
    })
  ]
};

module.exports = config;
