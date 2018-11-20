const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const argv = process.argv;


//const isFileCss = argv.includes('--styles');
const timestamp = Date.now();

const plugins = [
    new HtmlWebpackPlugin({
            template: './index.html',
            title: package.name,
            version: package.version
        }),
        new MiniCssExtractPlugin({filename:'style-' + timestamp + '.css'})
];

//if(isFileCss){
//    plugins.push(new MiniCssExtractPlugin({filename:'style.css'}));
//}


module.exports = {
    entry: {
        main: './app.js'
    },
    context: path.resolve(__dirname, '../src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
//            {
//                test: /\.s?css$/,
//                use: [isFileCss ? MiniCssExtractPlugin.loader : 'style-loader',
//                    {loader: "css-loader"},
//                     {loader: "sass-loader"}
//                ]
//            }
        ]
    },
    plugins,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
