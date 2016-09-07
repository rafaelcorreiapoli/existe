var path = require('path');
module.exports = {
  devtool: 'source-map',
  modules: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
        include: path.join(__dirname, 'node_modules'), // oops, this also includes flexboxgrid
        exclude: /flexboxgrid/, // so we have to exclude it
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      },
    ],
  },
}
