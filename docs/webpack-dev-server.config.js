const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'src/www');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Entry point to the project
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
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
    hot: true,
    inline: true,
    port: 3000
  },
  devtool: 'eval',
  // Output file config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    // Allows for sync with browser while developing (like BrowserSync)
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: 'src/www/index.html'},
    ]),
  ],
  module: {
    // Allow loading of non-es
    loaders: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
        include: path.resolve(__dirname, 'src/app/components/raw-code'),
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]']
      },
    ],
  },
  //Necessary or webpack will throw error https://github.com/pugjs/pug-loader/issues/8#issuecomment-55568520
  node: {
    fs: "empty"
  }
};
