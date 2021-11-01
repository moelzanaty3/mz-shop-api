const errorMiddleware = (error, _req, res, _next) => {
  const status = error.status || 500
  const message = error.message || 'Whoops!! something went wrong'
  res.status(status).json({ status: 'error', message })
}

module.exports = errorMiddleware
