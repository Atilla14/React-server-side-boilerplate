var express = require('express')
var app = express()
var port = process.env.PORT || 5000
var page = require('./page.bundle.js')

app.listen(port, function() {
  console.log('Listening to ' + port)
  console.log(page)
})

app.get('/', function(req, res) {
  res.send(page())
})
