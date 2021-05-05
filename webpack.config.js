const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  plugins: [new Visualizer({
    filename: './statistics.html',
  }),
  // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.UglifyJsPlugin(), // minify everything
  new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
  ],
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
};
