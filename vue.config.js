const path = require("path");
// // const htmlWebpackplugin = require("html-webpack-plugin");
// const ProgressBarPlugin = require("progress-bar-webpack-plugin");
// const { VueLoaderPlugin } = require("vue-loader");
// const MarkdownItContainer = require("markdown-it-container");
// const utils = require("./utils");

// const md = require("markdown-it")(); // 引入markdown-it
// const slugify = require("transliteration").slugify; // 引入transliteration中的slugify方法

module.exports = {
  //部署应用包时的基本 URL
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  //输出路劲
  outputDir: "ven-ui",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: "",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // indexPath: "index.html",
  // 修改 pages 入口
  pages: {
    index: {
      entry: "examples/main.js", // 入口
      template: "public/index.html", // 模板
      filename: "index.html", // 输出文件
    },
  },
  //减少打包编译的时间；
  // 避免在生产环境中用F12开发者工具在Sources中看到源码。
  productionSourceMap: false,
  parallel: false, //解决打包时,报错问题  https://github.com/QingWei-Li/vue-markdown-loader/issues/61
  // 组件样式内联

  css: {
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)，
    // 当作为一个库构建时，要将其设置为 false 免得用户自己导入 CSS。
    // https://cli.vuejs.org/zh/config/#css-extract
    extract: false,
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 src
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("src"));

    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .tap((options) => {
        options.fix = true;
        return options;
      });
    // 把 src 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule("js")
      .include.add(/src/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            preserveWhitespace: false,
          },
        };
      });
    //markdown 解析
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            preserveWhitespace: false,
          },
        };
      })
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .loader(path.resolve(__dirname, "./md-loader/index.js"));
  },
};
