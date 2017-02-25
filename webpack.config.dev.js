var path = require('path')
var webpack = require('webpack')
const buildPath = path.resolve(__dirname, 'src/www');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './docs/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  // Webpack config options on how to obtain modules
  resolve: {
    // When requiring, you don't need to add these extensions
    extensions: ['.js', '.md', '.txt'],
    alias: {
      // pluralsight-ui requires will be searched in src folder, not in node_modules
      'pluralsight-ui': path.resolve(__dirname, '../src'),
    },
  },
  // Configuration for dev server
  devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    // Required for webpack-dev-server.
    outputPath: buildPath,
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: '/node_modules/'
    },
    {
      test: /\.css/,
      use: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]']
    },
    {
      test: /\.txt$/,
      use: 'raw-loader',
      include: path.resolve(__dirname, 'src/app/components/raw-code'),
    },
    {
      test: /\.md$/,
      use: 'raw-loader'
    }]
  }
}
