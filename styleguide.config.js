var path = require('path');

module.exports = {
  title: 'Pluralsight UI',
  defaultExample: true,
  skipComponentsWithoutExample: true,
  components: './src/**/[A-Z]*.js',
  getComponentPathLine: function (componentPath) {
    var name = path.basename(componentPath, '.js');
    return 'import ' + name + ' from \'pluralsight-ui/' + name + '\';';
  },
  updateWebpackConfig(webpackConfig) {
    const dir = path.join(__dirname, 'src');
    webpackConfig.module.loaders.push(
      // Babel loader will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        include: dir,
        exclude: ['/node_modules/', '*.test.js', 'index.js'],
        loader: 'babel-loader'
      }
    );
    return webpackConfig;
  },
};
