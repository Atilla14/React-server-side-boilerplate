var path = require('path')

const client = {
  name: 'client side',
  context: __dirname,
  entry: './public/js/entry.jsx',
  output: {
    filename: 'bundle.js',
    path: './'
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015', 'stage-0'
          ]
        }
      }
    ]
  }
}

const server = {
  name: 'server side',
  entry: './server/page.js',
  target: 'node',
  output: {
    filename: 'page.bundle.js',
    path: './server/',
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015', 'stage-0'
          ]
        }
      }
    ]
  }
}

module.exports = [
  client, server
]
