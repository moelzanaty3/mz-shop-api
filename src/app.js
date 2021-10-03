import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import errorMiddleware from './middleware/error.middleware'

const app = express()

app.use(express.json())
// HTTP request logger middleware
app.use(morgan('dev'))
app.use(cors())
// HTTP security middleware headers
app.use(helmet())
// add routing for /api path
app.use('/api', routes)
// add live routing
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'I am live 😉',
  })
})
// error handler middleware
app.use(errorMiddleware)

export default app
