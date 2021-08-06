


const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')


const { createConfig } = require('../config')

const Html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
const compiler = webpack({
    mode: isBuild ? 'production' : "development",
    target: ['web', 'es5'], // 打包结果没有箭头函数
    entry: path.resolve(cwd, 'src/index.tsx'),
    output: {
        filename: 'main.[fullhash:5].js',
        path: path.resolve(cwd, 'dist'),
    },
    resolve: {
        extensions: moduleFileExtensions.map(ext => '.' + ext)
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
            }
        ]
    },
    plugins: [
        new Html({
            title: "react-webpack",
            template: path.resolve(cwd, 'public/index.ejs')
        }),
        new CleanWebpackPlugin()
    ]
})


if (isBuild) {
    compiler.run((err, stats) => {
        console.log('run：', err);

        compiler.close((closeErr) => {
            // ...
            console.log('closeErr:', closeErr);
        })
    })
} else {
    DevServer.addDevServerEntrypoints({}, {
        hot: true
    })
    const server = new DevServer(compiler, {
        // open:true,
        hot: true
    })

    server.listen(8080, '0.0.0.0', () => {
        console.log("Starting server on http://localhost:8080");
    })
}


