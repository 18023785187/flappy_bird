const { resolve } = require('path')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const getNetworkIp = require('./getNetworkIp');

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                pulgins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                pulgins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 8000,
        host: getNetworkIp(),
        disableHostCheck: true,
        open: true,
        progress:true,
        hot:true
    }
})
