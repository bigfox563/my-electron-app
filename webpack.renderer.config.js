const path = require('path');
const rules = require('./webpack.rules');

// const resolve = (name) => path.join(path.dirname(__filename), name);

rules.push(
  {
    test: /\.css$/,
    use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|.webpack)/,
    use: [
      {
        loader: 'ts-loader',
        options: {transpileOnly: true},
      },
    ],
  },
);

module.exports = {
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.wasm'],
  },
};
