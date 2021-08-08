


const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')


const { createConfig } = require('../config/1index')

const Html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin  = require("css-minimizer-webpack-plugin");
const cwd = process.cwd()



const isBuild = process.argv.includes("b")

const moduleFileExtensions = [
    'web.mjs',
    "mjs",
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
]
// const config = createConfig()
const config = {
    mode: isBuild ? 'production' : "development",  
    entry: path.resolve(cwd,'src','index.tsx'),
    output: {
        filename: 'main.[fullhash:5].js',
        path: path.resolve(cwd, 'dist'),
    },
    resolve: {
        extensions: moduleFileExtensions.map(ext => '.' + ext),
        alias:{
            "@":path.resolve(cwd, 'src')
        }
    },
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [
                    path.resolve(cwd, 'loader/cleanLog.js'),
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-react",
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: 'commonjs',
                                        corejs: 3,
                                        targets: { ie: 11 },
                                        useBuiltIns: "usage",
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader",
                ]
            },
            {
                test:/.(css)$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules: {
                                auto: (resourcePath) => {   
                                    return !/global.(le|c)ss$/.test(resourcePath)
                                },
                            },
                        }
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env',{
                                        autoprefixer:true
                                    }]
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new Html({
            title: "react-webpack",
            template: path.resolve(cwd, 'public/index.ejs'),
            inject:'body'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/wxq_[name].[fullhash:6].css'
        }),
        new CssMinimizerPlugin()
    ],
    
}
const options = {
    hot: true,
    host: 'localhost',
}

if(isBuild){ // 影响hmr
    config['target'] =  ['web', 'es5'] // 打包结果没有箭头函数
}

// DevServer.addDevServerEntrypoints(config,options)
const compiler = webpack(config)


if (isBuild) {
    compiler.run((err, stats) => {
        console.log('run：', err);

        compiler.close((closeErr) => {
            // ...
            console.log('closeErr:', closeErr);
        })
    })
} else {
   
  
    const server = new DevServer(compiler, options)

    server.listen(8080, '0.0.0.0', () => {
        console.log("Starting server on http://localhost:8080");
    })
}


