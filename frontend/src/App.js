import { useEffect, useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackDashboard from './components/FeedbackDashboard'
import { getFeedback, postFeedback } from './services/api'

function App() {
  const [data, setData] = useState([])
  const load = async () => setData(await getFeedback())
  const handle = async v => { await postFeedback(v); load() }

  useEffect(() => { load() }, [])

  return (
    <main className="wrapper">
      <section className="card">
        <h1 style={{marginBottom:'2rem',fontSize:'1.8rem',fontWeight:600,color:'var(--primary)'}}>
          Submit Feedback
        </h1>
        <FeedbackForm onSubmit={handle} />
      </section>

      <section className="card">
        <h2 style={{marginBottom:'2rem',fontSize:'1.5rem',fontWeight:600,color:'var(--primary)'}}>
          All Submissions
        </h2>
        <FeedbackDashboard feedbacks={data} />
      </section>
    </main>
  )
}

export default App
