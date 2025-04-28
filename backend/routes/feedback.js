import express from 'express'
import Feedback from '../models/Feedback.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { userName, email, category, text } = req.body
  const doc = await Feedback.create({ userName, email, category, text })
  res.status(201).json(doc)
})

router.get('/', async (req, res) => {
  const { category } = req.query
  const filter = category ? { category } : {}
  const list = await Feedback.find(filter).sort({ createdAt: -1 })
  res.json(list)
})

export default router
