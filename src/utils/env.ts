import dotenv from 'dotenv'
import path from 'node:path'

export default dotenv.config({
  path: path.resolve(__dirname, '../config/.env'),
})
