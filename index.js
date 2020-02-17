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

  // default depth is 2, we want at least 3 to print contents
  // of resources array in message.detail.resources
  if (message) console.dir(message, { depth: 3 })
  res.end()
})

app.listen(port, () => console.log(`SNS post parser listening on port ${port}`))
