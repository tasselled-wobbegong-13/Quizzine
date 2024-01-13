const path = require("path");
// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js",
  },

  // plugins: [new HtmlWebPackPlugin()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  target: "web",

  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    //if theres a 404 error, dev server will refernce index.html. (for react client side routing)
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:8080/',
        secure: false,
        changeOrigin: true,
      }
    },
  },
};

