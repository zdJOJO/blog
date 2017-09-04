const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


if (process.env.NODE_ENV !== "production") {
  throw new Error(' Production builds must have NODE_ENV=production ');
}

module.exports = {

  entry: {
    app: "./src/index",
    common_react: ["react", "react-dom", "react-router", "mobx-react", "mobx"]
  },

  output: {
    path: path.resolve(__dirname, "../static/pages"),
    publicPath: "/pages/",  // publicPath：这个东西就是我们的服务器端的目录结构，会按这个目录加载js，css
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
              loader: "css-loader"
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

    new webpack.optimize.UglifyJsPlugin({
      comments: false,        //去掉注释
      compress: {
        warnings: false  //忽略警告,要不然会有一大堆的黄色字体出现
      },
      except: ["$super", "$", "exports", "require"]    //排除关键字
    }),

    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "../static/index.html"),
      template: "./src/html-tpl/tpl.html"
    }),

    new ExtractTextPlugin({ 
      filename: "[name].[contenthash].css", 
      disable: false, 
      allChunks: true 
    }),
    
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: "common_react",
      minChunks: Infinity
    })
  ]

};
