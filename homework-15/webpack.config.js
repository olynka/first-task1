const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './index.js'),
    },
      output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    },
       module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}