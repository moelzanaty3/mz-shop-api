const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')
const errorMiddleware = require('./middleware/error.middleware')

const app = express()

app.use(express.json())
// HTTP request logger middleware
app.use(morgan('dev'))
// enable CORS
app.use(cors())
// add routing for /api path
app.use('/api', routes)
// add live routing
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'I am live 😉'
  })
})
// error handler middleware
app.use(errorMiddleware)

module.exports = app
