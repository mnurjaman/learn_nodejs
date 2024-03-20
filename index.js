
const express = require('express')
const app = express()
const port = 3000

// routes/URL/endpoint

app.get('/', (req, res) => {
  res.send("UTAMA")
})
app.get('/hello', (req, res) => {
  res.send('Cukurukuk!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})