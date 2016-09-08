var path = require('path')
var express = require('express')
var app = express()
var port = process.env.PORT || 5000
var page = require('./page.bundle.js')

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, function() {
  console.log('Listening to ' + port)
})

app.get('/', function(req, res) {
  var html = page()
  res.send(html)
})
