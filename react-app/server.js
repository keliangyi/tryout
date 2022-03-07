

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './src/pages/v3-ssr/home'

const app = express()

app.use(express.static('./build', { index: false }))

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <Home />
    )

    return res.send(`
        <html>
            <body>
                <div id="root">${reactApp}</div>
            </body>
        </html>
    `)
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})