var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './app/app.js',
    'app/locale/en': './app/locale/en.coffee',
    'app/locale/en-US': './app/locale/en-US.coffee',
    'esper': './bower_components/esper.js/esper.js', // TODO: Do this the right way
  },
  output: {
    filename: './public/javascripts/[name].js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.jade$/, loader: 'jade-loader', query: { root: path.resolve('./app') } },
      // { test: /\.sass$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('style-loader', 'style!css!sass')},
    ],
  },
  resolve: {
    root: [
      path.resolve('./app'),
      path.resolve('./app/templates'),
      path.resolve('./node_modules'),
      path.resolve('./bower_components'),
      path.resolve('./vendor/scripts'),
    ],
    extensions: ['', '.web.coffee', '.web.js', '.coffee', '.js', '.jade', '.sass'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ContextReplacementPlugin(/./, function(context){
      if (context.resource === path.resolve('./app/views')) {
        context.regExp = /^.*(Home|Play|Campaign).*$/i;
      }
      console.log(arguments);
    }),
    new webpack.NormalModuleReplacementPlugin(/.*templates.*/, function(context){
      if(context.request.indexOf('.jade') < 0){
        context.request += '.jade';
      }
    }),
    new webpack.IgnorePlugin(/^memwatch$/),
    new CopyWebpackPlugin([{
      from: 'app/assets',
      to: 'public',
      ignore: '*bower.json',
    }]),
    new ExtractTextPlugin('stylesheets/app.css'),
  ]
}
