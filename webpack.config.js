var path = require('path');
var webpack = require('webpack');
var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/, // A regexp to test the require path
        loaders: ['react-hot','babel'], // The module to load. "babel" is short for "babel-loader"
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      components: 'src/components',
      style: 'src/style'
    },
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
