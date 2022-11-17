const path = require('path');
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    watchContentBase: true,
  },
  entry: './src/ToastjsTiny.js',
  output: {
    globalObject: 'this',
    library: 'ToastjsTiny',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
