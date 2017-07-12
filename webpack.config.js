var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer  = require('autoprefixer');

module.exports = {
  devtool: 'eval',
    entry: [
    './myKit/scripts/main.js',
    './myKit/scss/style.scss'
    ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.min.js',
    publicPath: '/build/'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      { 
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: "css-loader?minimize!sass-loader!postcss-loader"
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [autoprefixer]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    })
  ]
}
