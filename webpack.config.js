/**
 * Created by Artsiom_Papou on 3/29/2016.
 */
'use strict';
var webpack = require('webpack');
module.exports = {
    entry: [/*'babel-polyfill', */"./components/main"],
    output: {
        filename: "bundle.js",
        library: 'main' //глобальная переменная для доступа к внут методам
    },
    watch: true, //автосэйв
    watchOptions: {
        aggregateTimeout: 100 //через 100мс
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exlude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }/*,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]*/
};
