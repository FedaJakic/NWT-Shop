import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
const ENVIROMENT = process.env.NODE_ENV || 'development'

app.listen(
  PORT,
  console.log(
    `Server is running in ${ENVIROMENT} on port ${PORT}`.green.italic.bold
  )
)
