const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  entry: {
    app: './src/index',
    common_react: ['react', 'react-dom', 'react-router', 'mobx-react', 'mobx']
  },

  output: {
    path: path.resolve(__dirname, '../static/pages'),
    publicPath: '/static/pages',  // publicPath：这个东西就是我们的服务器端的目录结构，会按这个目录加载js，css
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js'  // 按需加载
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
        {
            test: /\.js[x]?$/,  // ==> 正则匹配 .js .jsx
            use: {
              loader: "babel-loader",
              options: {
                presets: ['react', 'es2015', 'stage-1'],
                plugins: ['transform-decorators-legacy']
              }
            },
            include: path.resolve(__dirname, '../src'),  //需要绝对路径
            exclude: /node_modules/   // 告诉Babel不要处理node_modules文件夹中的文件
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
        },
        {
          test: /\.(png|jpg)$/,
          use: "url-loader?limit=8192"
        }
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: '我的APP',
    }),

    new ExtractTextPlugin('style.css'),
    
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common_react',
      minChunks: Infinity
    }),

    new webpack.optimize.UglifyJsPlugin({
        comments: false,        //去掉注释
        compress: {
            warnings: false  //忽略警告,要不然会有一大堆的黄色字体出现
        },
        except: ['$super', '$', 'exports', 'require']    //排除关键字
    })
  ]

};