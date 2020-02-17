const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

// AWS SNS messages are 'text/plain'
app.use(bodyParser.text())

app.use(function(req, res) {
  res.setHeader('Content-Type', 'text/plain')

  let json = JSON.parse(req.body)
  let message = JSON.parse(json.Message)

  if (message) console.log(message)
  res.end()
})

app.listen(port, () => console.log(`SNS post parser listening on port ${port}`))
