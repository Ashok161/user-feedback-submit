import { useState } from 'react'

function Field({ label, children }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
    </div>
  )
}

export default function FeedbackForm({ onSubmit }) {
  const [userName, setUserName] = useState('')
  const [email,     setEmail]    = useState('')
  const [category,  setCategory] = useState('')
  const [text,      setText]     = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ userName, email, category, text })
    setUserName(''); setEmail(''); setCategory(''); setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <Field label="Name">
        <input
          className="form-input"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
      </Field>

      <Field label="Email">
        <input
          type="email"
          className="form-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </Field>

      <Field label="Category">
        <select
          className="form-input"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">General</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>
      </Field>

      <Field label="Feedback">
        <textarea
          className="form-input"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
      </Field>

      <div>
        <button type="submit" className="btn-primary">Submit</button>
      </div>
    </form>
  )
}
