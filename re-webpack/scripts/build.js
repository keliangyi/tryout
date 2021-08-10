const webpack = require('webpack')


const { createConfig } = require('./utils')


const compiler = webpack(createConfig('production'))

console.log('打包中...')

compiler.run((err, stats) => {    
    if(err){
        console.error(err)
    }
    compiler.close((closeErr) => {
        // ...
        console.log('closeErr:', closeErr);
    })
})