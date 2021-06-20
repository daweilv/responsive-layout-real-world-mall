const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const Dev_Host_URL = 'https://toyosaku-develop.arium.shop';
console.log(`API connected ${Dev_Host_URL}`);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        before(app, server) {
            server._watch(`src/page/**.html`);
        },
        compress: true,
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        port: 1234,
        disableHostCheck: true,
        // host: '0.0.0.0',
        // useLocalIp: true,
        proxy: {
            '/api': {
                target: Dev_Host_URL,
                secure: false,
                changeOrigin: true,
            },
        },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
