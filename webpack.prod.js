const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const entrys = Object.keys(common.entry);
module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: (module, chunks) => {
                        // 所有 entry 均包含的公共组件
                        const names = chunks.map(c => c.name).filter(Boolean);
                        return (
                            entrys.length &&
                            entrys.every(entry =>
                                names.some(name => name === entry)
                            )
                        );
                    },
                    chunks: 'initial',
                    priority: 10,
                    minChunks: 2,
                },
            },
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    compress: {
                        warnings: false,
                        comparisons: false,
                        drop_console: true,
                    },
                    output: {
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    ],
});
