module.exports = {
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  devServer: {
	  colors: true,
	  historyApiFallback: true,
	  inline: true
  } 
}