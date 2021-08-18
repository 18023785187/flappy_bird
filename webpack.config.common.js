const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'flappy_bird.js',
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    //图片小于8kb，就会被base64处理
                    //优点：减小请求数量
                    //缺点：图片体积会更大
                    limit: 8 * 1024,
                    /*url-loader默认使用es6模块化解析，而html-loader引入图片是使用common.js，
                      解析时会出现问题:[object Module]
                      解决方案：关闭url-loader的es6模块化，使用common.js
                    */
                    esModule: false,
                    //给图片进行重命名 [hash:10]取哈希值前10位，[ext]取原来的扩展名
                    // name: '[hash:10].[ext]',
                    //打包到build文件夹下面的images文件夹内
                    outputPath: 'images'
                }
            },
            {
                test: /\.html$/,
                //处理html文件的img图片(负责引入img，从而能被url-loader处理)
                loader: 'html-loader',
                options: {
                    esModule: false,
                }
            },
            //打包其他资源（除了html，css，js）
            {
                //排除html,css,js文件
                exclude: /\.(html|css|less|js|ts|json|jpg|png|gif)$/,
                loader: 'file-loader'
            },
            {
                //ts文件使用了babel，ts-loader
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                                        },
                                        'corejs': '3',
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public/index.html'),
            collapseWhitespace: true,
            removeComments: true,
            inject: 'body'
        }),
        new CssMinimizerWebpackPlugin()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'network': '@/network',
            'assets': '@/assets',
            'utils': '@/utils'
        },
        extensions: ['.ts', '.js', '.json'],
    },
    optimization: {
        // 表示只导出那些外部使用了的那些成员
        usedExports: true,
        // 压缩模块
        minimize: true,
        // 合并模块
        concatenateModules: true
    },
}
