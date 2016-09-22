var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log("Starting Webpack...");
module.exports = {
  entry: {
    'app': './app/app.js',
    // 'app/locale/en': './app/locale/en.coffee',
    // 'app/locale/en-US': './app/locale/en-US.coffee',
    // 'aether': './bower_components/aether/build/aether.js', // TODO: Do this the right way
    // 'esper': './bower_components/esper.js/esper.js', // TODO: Do this the right way
  },
  output: {
    filename: './public/javascripts/[name].js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.jade$/, loader: 'jade-loader', query: { root: path.resolve('./app') } },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])},
      { test: /\.sass$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader?indentedSyntax'])},
      { test: /\vendor\/.*.css$/, loader: ExtractTextPlugin.extract(['css-loader?-url'])},
      { test: /\.css$/, loader: ExtractTextPlugin.extract(['css-loader'])},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /npm-modernizr/, loader: 'imports?this=>window!exports?window.Modernizr'}, // TODO: Decide if this goes here or in app.js
    ],
  },
  resolve: {
    root: [
      path.resolve('./app'),
      path.resolve('./app/templates'),
      path.resolve('./node_modules'),
      path.resolve('./bower_components'),
      path.resolve('./vendor/scripts'),
      // path.resolve('./'),
    ],
    extensions: ['', '.web.coffee', '.web.js', '.coffee', '.js', '.jade', '.sass'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ContextReplacementPlugin(/./, function(context){
      if (context.resource === path.resolve('./app/views')) {
        context.regExp = /^.*$/i;
      }
      console.log(arguments);
    }),
    new webpack.NormalModuleReplacementPlugin(/.*templates.*/, function(context){
      if(context.request.indexOf('.jade') < 0){
        context.request += '.jade';
      }
    }),
    new webpack.IgnorePlugin(/^memwatch$/),
    new webpack.IgnorePlugin(/.*images.*/, /.*vendor.*/),
    // new webpack.IgnorePlugin(/.*/, /.*aether.*/),
    new CopyWebpackPlugin([{
      from: 'app/assets',
      to: 'public',
      ignore: '*bower.json',
    }]),
    new CopyWebpackPlugin([{
      from: 'bower_components/aether/build/aether.js',
      to: 'public/javascripts/aether.js',
    }]),
    new ExtractTextPlugin('./public/stylesheets/app.css'),
  ],
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
}
