const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/App/index.js",
  output: {
    path: path.resolve(__dirname, "assets/scripts"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
