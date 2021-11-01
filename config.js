const dotenv = require('dotenv')

dotenv.config()

const { PORT, STORE_API_BASE_URL } = process.env

module.exports = {
  port: PORT,
  storeApiBaseUrl: STORE_API_BASE_URL
}
