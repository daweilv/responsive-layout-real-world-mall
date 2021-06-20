const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const publicPath = ''; // for cdn
const pages = [
    'index',
    'cart',
    'item',
    'order',
    'confirm',
    'thanks',
    'contact',
    'contact_confirm',
    'classification',
];

let entry = {};
let htmlWebpackPlugins = [];
pages.forEach(page => {
    entry[page] = ['@babel/polyfill', `./src/page/${page}.js`];
    htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
            filename: `${page}.html`,
            template: `src/page/${page}.html`,
            chunks: [page],
        })
    );
});

module.exports = {
    entry,
    output: {
        filename: devMode
            ? 'js/[name]/index.[hash:8].js'
            : 'js/[name]/index.[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        ...htmlWebpackPlugins,
    ],
    resolve: {
        modules: ['node_modules'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    devMode
                        ? 'style-loader'
                        : {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                  publicPath: '../',
                              },
                          },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('autoprefixer'),
                                require('postcss-pxtorem')({
                                    rootValue: 50,
                                    propList: ['*'],
                                }),
                            ],
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp3)$/i,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: 'assets/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|otf|webp|ttf)$/i,
                loader: 'file-loader',
                options: {
                    name: 'css/font/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            minifyJS: true,
                            attrs: ['img:src'],
                        },
                    },
                ],
            },
        ],
    },
};
