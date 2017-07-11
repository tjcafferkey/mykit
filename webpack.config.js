const path = require('path');

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
     }
 };