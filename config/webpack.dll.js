const path = require("path");
const webpack = require("webpack");

const vendors =[
  "react", 
  "react-dom", 
  "react-router", 
  "react-router-dom",
  "mobx",
  "mobx-react",
  "@blueprintjs/core",
  "simplemde"
];

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, "../static/js"),  //文件的输出路径
    filename: "[name]_[chunkhash].js",
    library: "[name]_[chunkhash]"
    // filename: "[name].js",
    // library: "[name]"
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.DllPlugin({
      path: path.join(__dirname, "manifest.json"), // path是manifest文件的输出路径
      name: "[name]_[chunkhash]",  //name是dll暴露的对象名，要跟output.library保持一致
      context: __dirname  //context是解析包路径的上下文，这个要跟接下来配置的dll user一致
    }),

    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};