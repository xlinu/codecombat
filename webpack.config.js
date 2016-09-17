var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: './public/javascripts/app.js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.jade$/, loader: 'jade-loader', query: { root: path.resolve('./app') } }
    ],
  },
  resolve: {
    root: [path.resolve('./app'), path.resolve('./app/templates')],
    extensions: ['', '.web.coffee', '.web.js', '.coffee', '.js', '.jade']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/./, function(context){
      if (context.resource === path.resolve('./app/views')) {
        context.regExp = /home/i
      }
      console.log(arguments);
    }),
    new webpack.NormalModuleReplacementPlugin(/.*templates.*/, function(context){
      if(context.request.indexOf('.jade') < 0){
        context.request += '.jade';
      }
    }),
  ]
}
