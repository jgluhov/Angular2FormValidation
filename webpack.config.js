/**
 * Created by jgluhov on 15/01/16.
 */

module.exports = {
  entry: './src/boot',
  output: {
    filename: 'bundle.js',
    publicPath: "/build/",
    path: './build'
  },
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000
  },
  resolve: {
    extensions: ["", ".js", ".ts", ".styl"],
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: {
    loaders: [
      {test: /\.ts/, loader: 'ts'},
      {test: /\.styl/, loader: 'style!css!stylus'}
    ]
  },
  devServer: {
    contentBase: __dirname
  }
};