const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


if (process.env.NODE_ENV !== "production") {
  throw new Error(' Production builds must have NODE_ENV=production ');
}


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
    app: "./src/index"
  },

  output: {
    path: path.resolve(__dirname, "../dist/js"),
    publicPath: "/js/",  // publicPath：访问时文件的目录
    filename: "[name].[hash:8].bundle.js",
    chunkFilename: "[name].[chunkhash:5].chunk.js"  // 按需加载
  },

  resolve: {
    extensions: [".js", ".jsx", '.css', '.scss', '.sass']
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,  // ==> 正则匹配 .js .jsx
        use: {
          loader: "babel-loader"
          // options: {
          //   presets: ["react", "es2015", "stage-1"],
          //   plugins: ["transform-decorators-legacy"]
          // }
        },
        include: path.resolve(__dirname, "../src"),  //需要绝对路径
        exclude: /node_modules/   // 告诉Babel不要处理node_modules文件夹中的文件
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        //name 字段指定了在打包根目录（output.path）下生成名为 img 的文件夹，并在原图片名前加上8位 hash 值
        use: "url-loader?name=images/[hash:8].[name].[ext]&limit=8192"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        use: "file-loader?name=fonts/[hash:8].[name].[ext]"
      }
    ]
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./manifest.json")
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: path.resolve(__dirname, "../dist/index.html"),
      template: "./src/html-tpl/tpl.html",
      chunks: ["vendor", "app"]  // 允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,  // 最紧凑的输出
      comments: false,        //去掉注释
      compress: {
        warnings: false,  //忽略警告,要不然会有一大堆的黄色字体出现
        drop_console: true, // 删除所有的 `console` 语句
        collapse_vars: true, // 内嵌定义了但是只用到一次的变量
        reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
      },
      except: ["$super", "$", "exports", "require"]    //排除关键字
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new ExtractTextPlugin({ 
      filename: "[name].[contenthash].css", 
      disable: false, 
      allChunks: true 
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: {removeAll: true }}
    }),
    
    new webpack.NoEmitOnErrorsPlugin()
  ]

};
