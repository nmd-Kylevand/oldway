const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  // check if we are in development mode or not
  const dev = argv.mode === 'development';

  return ({
    // set the mode of our project
    mode: argv.mode,

    // your main js file
    entry: path.resolve(__dirname, 'src/scripts/appsn.js'),

    // define the output
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.min.js',
    },

    // define the different modules
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },

    // define the plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],

    // define our development server
    devServer: {
      port: process.env.PORT || 8080,
      contentBase: './src',
      historyApiFallback: false,
    },
  });
};