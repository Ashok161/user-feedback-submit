import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, default: 'general' },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Feedback', schema)
