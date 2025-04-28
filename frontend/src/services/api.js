import axios from 'axios'
const api = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000' })
export const getFeedback = async () => (await api.get('/feedback')).data
export const postFeedback = async d => (await api.post('/feedback', d)).data
