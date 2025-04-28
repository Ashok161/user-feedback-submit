import { useState } from 'react'

export default function FeedbackDashboard({ feedbacks }) {
  const [dir,setDir]=useState('desc')
  const [cat,setCat]=useState('')
  const rows=[...feedbacks]
    .filter(f=>cat?f.category===cat:true)
    .sort((a,b)=>dir==='asc'?new Date(a.createdAt)-new Date(b.createdAt)
                            :new Date(b.createdAt)-new Date(a.createdAt))

  return(
    <>
      <div className="controls">
        <select value={cat} onChange={e=>setCat(e.target.value)} className="control">
          <option value="">All categories</option><option value="suggestion">Suggestion</option>
          <option value="bug">Bug</option><option value="feature">Feature</option><option value="general">General</option>
        </select>

        <button onClick={()=>setDir(dir==='asc'?'desc':'asc')} className="control">
          Sort {dir==='asc'?'▲ Oldest':'▼ Newest'}
        </button>
      </div>

      <div className="table-wrapper">
        <table className="feedback-table">
          <thead>
            <tr><th>Date</th><th>Name</th><th>Email</th><th>Category</th><th>Feedback</th></tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r._id}>
                <td>{new Date(r.createdAt).toLocaleString()}</td>
                <td>{r.userName}</td>
                <td>{r.email}</td>
                <td style={{textTransform:'capitalize'}}>{r.category}</td>
                <td>{r.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
