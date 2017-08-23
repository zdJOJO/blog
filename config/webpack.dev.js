const path = require('path');
const webpack = require('webpack');

let port = 3002; 

module.exports = {

  devtool: 'eval',

  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname, '../static/pages'),
    publicPath: '/static/pages/',
    filename: 'bundle.js',
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
          test: /\.js[x]?$/,  // ==> 正则匹配 .js .jsx
          use: "eslint-loader",
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader"
            ]
        },
        {
            test: /\.less$/,
            use: [
              "style-loader",
              "css-loader",
              "less-loader"
            ]
        },
        {
            test: /\.(png|jpg)$/,
            use: "url-loader?limit=8192"
        }
    ]
  },

  plugins: [

    new webpack.HotModuleReplacementPlugin(),

    //当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    new webpack.NamedModulesPlugin(),

    //在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。
    //这样可以确保输出资源不会包含错误。
    //对于所有资源，统计资料(stat)的 emitted 标识都是 false
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    host: "127.0.0.1",
    port: port,
    hot: true,
    historyApiFallback: true
  }

};