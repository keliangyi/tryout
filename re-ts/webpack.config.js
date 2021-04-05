const path = require('path')
const Html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode:"development",
    entry:"./src/app.ts",

    resolve:{// import 省略 文件扩展名
        extensions:['.ts',".js"],
    },

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        environment:{ // 打包结果不用箭头函数
            arrowFunction:false,
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use:[// loader 从下到上
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            'chrome':87,
                                            'ie':11
                                        },
                                        corejs:3, 
                                        useBuiltIns:'usage' // 按需加载
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new Html({
            template:"./src/index.html"
        }),

        new CleanWebpackPlugin()
    ],


    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open:true
    },
    devtool:false,


}