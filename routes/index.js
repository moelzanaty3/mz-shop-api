const express = require('express')
const productsRoutes = require('./api/products')

const routes = express.Router()

routes.use('/products', productsRoutes)

module.exports = routes
