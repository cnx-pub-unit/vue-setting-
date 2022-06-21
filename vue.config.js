const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-setting-/'
        : '/',
    outputDir: './docs/',
    assetsDir: './assets',
    pages: {
        index: {
            entry: path.resolve(__dirname, 'src/main.js'),
            template: path.resolve(__dirname,'public/index.html'),
            filename: 'index.html',
            title: 'Index page',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
    },
    devServer: {
        historyApiFallback: true,
        client: {
            overlay: {
                warnings: true,
                errors: true
            }
        }
    },
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
    lintOnSave: false,
    css: {
        sourceMap: true,
    },
    chainWebpack: config => {
        const scssRules = config.module.rule('scss');
        const imagesRule = config.module.rule('image');
        const svgRule = config.module.rule('svg');
        const videoRule = config.module.rule('video');
    }
});
