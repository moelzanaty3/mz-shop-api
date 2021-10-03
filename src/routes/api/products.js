import { Router } from 'express'
import axios from 'axios'
import config from '../../config'

const routes = Router()

routes.post('/', async (req, res, next) => {
  try {
    const response = await axios.post(`${config.storeApiBaseUrl}/products`, req.body)
    const product = response.data
    res.json({
      status: 'success',
      data: product,
      message: 'Product created successfully',
    })
  } catch (err) {
    next(err)
  }
})

routes.get('/', async (_req, res, next) => {
  try {
    const response = await axios.get(`${config.storeApiBaseUrl}/products`)
    const products = response.data
    return res.json({
      status: 'success',
      data: products,
      message: 'Products retrieved successfully',
    })
  } catch (err) {
    next(err)
  }
})

routes.get('/:id', async (req, res, next) => {
  try {
    const productId = +req.params.id
    const response = await axios.get(`${config.storeApiBaseUrl}/products/${productId}`)
    const product = response.data
    res.json({
      status: 'success',
      data: product,
      message: 'Product retrieved successfully',
    })
  } catch (err) {
    next(err)
  }
})

routes.put('/:id', async (req, res, next) => {
  try {
    const productId = +req.params.id
    const updatedProduct = req.body
    const response = await axios.put(
      `${config.storeApiBaseUrl}/products/${productId}`,
      updatedProduct
    )
    const product = response.data
    res.json({
      status: 'success',
      data: product,
      message: 'Product updated successfully',
    })
  } catch (err) {
    next(err)
  }
})

routes.delete('/:id', async (req, res, next) => {
  try {
    const productId = +req.params.id
    const response = await axios.delete(`${config.storeApiBaseUrl}/products/${productId}`)
    const product = response.data
    res.json({
      status: 'success',
      data: product,
      message: 'Product deleted successfully',
    })
  } catch (err) {
    next(err)
  }
})

export default routes
