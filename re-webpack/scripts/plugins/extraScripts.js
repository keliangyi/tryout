
const HtmlWebpackPlugin = require('html-webpack-plugin')

class ExtraScripts {

    scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi

    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('MyPlugin', (compilation) => {

            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                'ExtraScripts',
                (data, cb) => {
                    if (Array.isArray(this.options.styles) && this.options.styles.length > 0) {
                        let styles = ''
                        this.options.styles.forEach(css => {
                            styles += `<link rel="stylesheet" href=${css} />`
                        })
                        data.html = data.html.replace('</head>', `${styles}</head>`)
                    }

                    if (Array.isArray(this.options.scripts) && this.options.scripts.length > 0) {
                        const originalScript = data.html.match(this.scriptReg) || []
                        console.log(originalScript);
                        this.options.scripts = this.options.scripts.concat(originalScript)
                        data.html = data.html.replace(this.scriptReg, '')
                        let scripts = ''
                        this.options.scripts.forEach(script => {
                            scripts += script.startsWith('<script') ? script : `<script src="${script}"></script>`
                        })
                        data.html = data.html.replace('</body>', `${scripts}</body>`)
                    }
                    cb(null, data)
                }
            )
        })
    }
}


module.exports = ExtraScripts