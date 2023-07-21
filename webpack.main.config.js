const rules = require('./webpack.rules');

rules.push({
  test: /\.tsx?$/,
  exclude: /(node_modules|.webpack)/,
  use: [
    {
      loader: 'ts-loader',
      options: {transpileOnly: true},
    },
  ],
});

module.exports = {
  entry: './src/main/main.ts',
  module: {
    rules,
  },
};
