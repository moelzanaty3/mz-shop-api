import supertest from 'supertest'
import app from '../app'

const request = supertest(app)

describe('API Test', () => {
  test('It should response the GET method', (done) => {
    request.get('/').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
  test('It Should response with error for wrong path', (done) => {
    request.get('/zanaty').then((response) => {
      expect(response.statusCode).toBe(404)
      done()
    })
  })
})
