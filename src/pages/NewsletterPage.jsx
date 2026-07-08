import { useState } from 'react'
import toast from 'react-hot-toast'

export default function NewsletterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !email.includes('@')) return
    setSubmitted(true)
    toast.success('Subscribed! Welcome aboard.')
  }

  return (
    <section className="nlstrip">
      <div className="nlstrip-inner">
        <h3>Stay in the loop</h3>
        <p>Tow industry tips, product updates, and news — straight to your inbox.</p>
        {submitted ? (
          <div className="nlstrip-success">Thanks — you're subscribed!</div>
        ) : (
          <form className="nlstrip-form" onSubmit={handleSubmit} noValidate>
            <input
              className="nlstrip-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              className="nlstrip-input"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="nlstrip-btn">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}
