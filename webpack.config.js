const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    // test: './src/test.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'// 'index.js'
  },
  mode: "development",
  devtool: 'inline-source-map',
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules"
      // path.resolve(__dirname, "src")
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // babel-preset-react-app
          }
        }
      }
    ]
  }
};
