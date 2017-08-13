var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'React'
  },

  // TODO: use your component name here
  output: {
    filename: 'dist/react-loading-wrapper.js',
    libraryTarget: 'umd',
    library: 'ReactLoadingWrapper'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
