
const path = require('path')
const Html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const cwd = process.cwd()

const createConfig = () => {
    return {
        mode:"development",
        target: ['web', 'es5'],
        entry: path.resolve(cwd, 'src/index.tsx'),
        output: {
            filename: 'main.[contenthash:4].js',
            path: path.resolve(cwd, 'dist'),
        },
        resolve:{
            extensions: [".ts", ".tsx", ".js"]
        },
        // externals:{
        //     // lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
        //     "react": 'react',
        //     'react-dom': 'ReactDOM',
        // },     
        // externalsPresets:{
        //     web:true
        // }, 
        module:{
            rules:[
                { 
                    test: /\.tsx?$/, 
                    exclude:/node_modules/,
                    use:[
                        path.resolve(cwd,'loader/cleanLog.js'),
                        "ts-loader"
                    ] 
                }
            ]
        },
        plugins:[
            new Html({
                title:"react-webpack",
                template:path.resolve(cwd, 'public/index.ejs')
            }),
            new CleanWebpackPlugin()
        ]
    }
}
module.exports = {
    createConfig
}