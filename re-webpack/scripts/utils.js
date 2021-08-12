
const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin  = require("css-minimizer-webpack-plugin");
const detect = require('detect-port')
const root = process.cwd()
const appName = require(path.resolve(root,'package.json')).name

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

const createConfig = (mode="development") => {

    const isDev = mode === 'development'
    const config = Object.create(null)

    config.mode = mode
    config.entry = path.resolve(root,'src','index.tsx')
    config.output = {
        path: path.resolve(root, 'dist'),
        publicPath: '/',
        filename: 'static/js/[name].[contenthash:5].js',
     
        chunkFilename:'static/js/[name].[contenthash:5].chunk.js'
    }
    config.resolve = {
        extensions: moduleFileExtensions.map(ext => '.' + ext),
        alias:{
            "@":path.resolve(root, 'src')
        }
    }

    // config.externals = {
    //     "react": 'React',
    //     "react-dom": 'ReactDOM'
    // }

    config.module = {
        rules:[
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [
                    !isDev && path.resolve(root,'loader','cleanLog.js'),
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [      
                                "@babel/preset-typescript",                          
                                "@babel/preset-react",
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false, // 会影响 dynamic-import
                                        corejs: 3,
                                        targets: { 
                                            "chrome": "90",
                                         },
                                        useBuiltIns: "usage",
                                    }
                                ], 
                            ],
                            plugins:[
                                [
                                    "@babel/plugin-transform-react-jsx",
                                    {
                                        "runtime": "automatic"
                                    }
                                ],                               
                                // "@babel/plugin-syntax-dynamic-import",
                            ]
                        },
                       
                    },
                    // "ts-loader", // 太慢了 用 @babel/preset-typescript 代替
                ].filter(Boolean)
            },
            {
                test:/.(css)$/i,
                use:[
                    isDev ? 'style-loader' :  MiniCssExtractPlugin.loader,               
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
    }

    config.plugins = [
        new Html({
            title:appName,
            template: path.resolve(root, 'public/index.ejs'),
            inject:'body'
        }),
        new CleanWebpackPlugin(),       
    ]

    if(isDev){
        config.plugins.push( 
            new webpack.HotModuleReplacementPlugin(),           
        )     
    }else{
        config.target = ['web', 'es5']  
        config.bail = true
        config.plugins.push(            
            new MiniCssExtractPlugin({
                filename:'static/css/app_v1_[name].[fullhash:6].css'
            }),
            new CssMinimizerPlugin()
        )  
        config.optimization = {
            // minimize:true,
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        name:"vendors",
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
            runtimeChunk: {
                name: entrypoint => `runtime-${entrypoint.name}`,
            },
        }
    }
    // console.log( config );
    return config
}

const clearConsole = () => {
    process.stdout.write(
      process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
    );
}

const choosePort = () => {
    detect(8558, (err, _port) => {
        if (err) {
          console.log(err);
        }
      
        if (port == _port) {
          console.log(`port: ${port} was not occupied`);
        } else {
          console.log(`port: ${port} was occupied, try port: ${_port}`);
        }
      });
}

module.exports = {
    root,
    appName,
    choosePort,
    clearConsole,
    createConfig,
    moduleFileExtensions
}