require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { 
  res.send('Hello World!')
}) 

app.get('/profile', (req, res) => {
    res.send("Surbhi Vandana");
})

app.get('/login', (req, res) => {
    res.send('<h1>Hey this is the login page</h1>'); // we can pass html code inside the send response.
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Surbhi Vandana welcome to youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})