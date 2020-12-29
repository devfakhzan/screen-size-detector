const path = require("path");
const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "screen-size-detector.min.js",
    library: "ScreenSizeDetector"
  },
};

module.exports = config;
