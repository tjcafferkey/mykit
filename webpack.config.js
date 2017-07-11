const path = require('path');
const webpack = require('webpack');

module.exports = {
     entry: './myKit/scripts/script.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'script.min.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader?presets[]=es2015'
         }]
     },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
 };