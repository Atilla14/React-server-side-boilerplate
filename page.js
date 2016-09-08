import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './public/js/app'

module.exports = function() {

  return ReactDOMServer.renderToString(
    <html>
      <head>
        <meta charset="utf-8" />
        <title>React isomorphic app</title>
      </head>
      <body>
        <div id='content'>
          <App />
        </div>
        <script src="./bundle.js" type="text/javascript" />
      </body>
    </html>
  )
}
