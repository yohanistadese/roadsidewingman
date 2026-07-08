import { useState } from 'react'
import toast from 'react-hot-toast'
import { trackEvent } from '../lib/posthog.js'

export default function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function set(key, value) {
    setFields(prev => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    trackEvent('contact_form_submitted')
    setSubmitted(true)
    toast.success("Request received! We'll be in touch soon.")
  }

  return (
    <section className="contact" id="contact">
      <h2>Ready to hire your wingman?</h2>
      <p>
        Tell us a bit about your operation — a real person will reach out to match you with the
        right VA, usually within a few hours.
      </p>
      <div className="contact-form">
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>✅</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Thanks! We'll be in touch personally within a few hours.</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>No commitment — just a conversation.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="John Smith" value={fields.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" value={fields.phone} onChange={e => set('phone', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Business email</label>
              <input type="email" placeholder="john@smithtowing.com" value={fields.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Tell us about your tow operation</label>
              <textarea
                placeholder="e.g. Smith Towing LLC, 3 trucks, need coverage Mon–Fri 8am–5pm"
                value={fields.message}
                onChange={e => set('message', e.target.value)}
                style={{ height: 110 }}
              />
            </div>
            <button type="submit" className="form-submit">Let's Talk →</button>
            <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 12 }}>
              Free — no obligation.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
