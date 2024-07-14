const path = require("path");

const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 指定入口文件
  mode: "development",
  entry: "./src/index.js",

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后的文件
    filename: "bundle.js",
    clean: true,
    // 告诉webpack最后打包的文件不使用箭头函数 兼容ie
    environment: {
      arrowFunction: false,
    },
  },

  // 指定webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,

        // 要使用的loader
        //   现将ts文件转为js文件，再将js转为低版本的js
        use: [
          // 配置babel
          {
            //   指定加载器
            loader: "babel-loader",
            //   设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    //  要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                      //   ie: "11",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],

        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },

  //  配置webpack 插件
  plugins: [
    new HTMLwebpackPlugin({
      title: "这是一个自定义的title",
      // 为生成的html提供一个模板
      template: "./src/index.html",
    }),
  ],
  // 用来设置哪些文件可以作为模块被引入进来
  resolve: {
    extensions: [".ts", ".js"],
  },
};
