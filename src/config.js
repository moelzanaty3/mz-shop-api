import dotenv from 'dotenv'

dotenv.config()

const { PORT, STORE_API_BASE_URL } = process.env
export default {
  port: PORT,
  storeApiBaseUrl: STORE_API_BASE_URL,
}
