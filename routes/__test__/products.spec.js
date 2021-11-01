const supertest = require('supertest')
const app = require('../../app')

const request = supertest(app)

describe('Products CRUD API Endpoints', () => {
  it('should create new product', async () => {
    const newProduct = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    const res = await request.post('/api/products/').send(newProduct)
    expect(res.status).toBe(200)
    const product = res.body.data
    expect(product.id).toBe(21)
    expect(product.title).toBe('test product')
    expect(product.description).toBe('lorem ipsum set')
    expect(product.price).toBe(13.5)
    expect(product.image).toBe('https://i.pravatar.cc')
    expect(product.category).toBe('electronic')
  })

  it('should get list of products', async () => {
    const res = await request.get('/api/products/')
    const products = res.body.data
    expect(res.status).toBe(200)
    expect(products).toBeInstanceOf(Array)
    expect(products.length).toBe(20)
  })

  it('should get product info', async () => {
    const res = await request.get('/api/products/1')
    const product = res.body.data
    expect(res.status).toBe(200)
    expect(product.id).toBe(1)
  })

  it('should update product info', async () => {
    const updatedProduct = {
      title: 'test product updated',
      price: 20,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    const res = await request.put('/api/products/1').send(updatedProduct)
    expect(res.status).toBe(200)
    const product = res.body.data
    expect(product.id).toBe('1')
    expect(product.title).toBe('test product updated')
    expect(product.description).toBe('lorem ipsum set')
    expect(product.price).toBe(20)
    expect(product.image).toBe('https://i.pravatar.cc')
    expect(product.category).toBe('electronic')
  })

  it('should delete product', async (done) => {
    const res = await request.delete('/api/products/1')
    const product = res.body.data
    expect(res.status).toBe(200)
    expect(product.id).toBe(1)
    done()
  })
})
