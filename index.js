const express = require('express')
const app = express()
const port = 3000

app.get('/kienit', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  
  res.send('Hello World!43')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})