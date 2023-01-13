const connetToMongo = require('./db');
const express = require('express')

connetToMongo();

const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res)=>{
  res.send("Hello World")
})

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})