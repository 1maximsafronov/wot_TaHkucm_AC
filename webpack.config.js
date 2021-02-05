const path = require("path");

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        include: [
          path.resolve(__dirname, './public/img/')
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: './public/img/[hash].[ext]',
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2|png|jpg|jpeg|svg|gif)$/,
        loader: 'url-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: `source-map`,
}
