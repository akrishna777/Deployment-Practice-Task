const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors()) /* To avoid cross origin error */

app.use(express.json())

const PORT = process.env.PORT || 5000
const URL =
  'mongodb+srv://deployment:deployment123@cluster0.g23kn7u.mongodb.net/?retryWrites=true&w=majority'

const mongoose = require('mongoose')

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.on('open', () => console.log('MongoDB Connected'))

app.get('/', (req, res) =>
  res.send('Welcome to sample API deployment for task practice.'),
)

app.get('/data', (req, res) =>
  res.send([
    { name: 'Ram', email: 'Ram@gmail.com' },
    { name: 'Bob', email: 'bob32@gmail.com' },
  ]),
)

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))
