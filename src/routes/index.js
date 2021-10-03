import express from 'express'
import productsRoutes from './api/products'

const routes = express.Router()

routes.use('/products', productsRoutes)

export default routes
