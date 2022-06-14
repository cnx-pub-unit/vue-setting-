const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/vue-setting-/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  outputDir: './docs/',
  assetsDir: './assets',
  devServer: {
    historyApiFallback: true,
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  chainWebpack: config => {
    config
      .plugin('eslint')
      .tap(args => {
         args[0].fix = true
         return args
      })
    }
});
