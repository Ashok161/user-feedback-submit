import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import feedbackRouter from './routes/feedback.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/feedback', feedbackRouter)

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI, {})
app.listen(PORT, () => console.log(`api on ${PORT}`))
