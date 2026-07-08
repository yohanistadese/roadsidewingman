import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import toast from 'react-hot-toast'
import { RWM_WEBHOOK } from '../lib/config.js'

function buildSlackPayload({ name, email, msg, first }) {
  const time = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  })
  return {
    blocks: [
      { type: 'header', text: { type: 'plain_text', text: 'New Lead — RoadsideWingman.com', emoji: true } },
      { type: 'section', fields: [{ type: 'mrkdwn', text: '*Name:*\n' + name }, { type: 'mrkdwn', text: '*Email:*\n' + email }] },
      { type: 'section', text: { type: 'mrkdwn', text: '*Message:*\n>' + msg.replace(/\n/g, '\n>') } },
      { type: 'context', elements: [{ type: 'mrkdwn', text: time + ' ET  |  ' + window.location.href }] },
      {
        type: 'actions',
        elements: [{
          type: 'button',
          text: { type: 'plain_text', text: 'Reply via Email', emoji: true },
          url: 'mailto:' + email + '?subject=Re%3A Your RoadsideWingman inquiry&body=Hi ' + encodeURIComponent(first) + ',%0A%0AThank you for reaching out!%0A%0A',
          style: 'primary',
        }],
      },
    ],
  }
}

export default function ChatWidgetPage() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [botReply, setBotReply] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 45000)
    return () => clearTimeout(t)
  }, [])

  async function send() {
    if (!first.trim()) { toast.error('Please enter your first name.'); return }
    if (!email.includes('@')) { toast.error('Please enter a valid email address.'); return }
    if (!msg.trim()) { toast.error('Please enter a message.'); return }
    setSending(true)
    const name = first + (last ? ' ' + last : '')
    const payload = buildSlackPayload({ name, email, msg, first })
    try {
      await fetch(RWM_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      setBotReply('Got it! Our team has been notified and will reply to ' + email + ' shortly.')
      setSent(true)
      toast.success("Message sent! We'll reply shortly.")
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div id="rwm-chat-btn" onClick={() => setOpen(o => !o)} title="Chat with us">
        <MessageCircle size={26} strokeWidth={2} color="#fff" />
      </div>

      <div id="rwm-chat-box" className={open ? 'open' : ''}>
        <div id="rwm-chat-head">
          <div id="rwm-chat-head-avatar">RW</div>
          <div id="rwm-chat-head-info">
            <div id="rwm-chat-head-name">RoadsideWingman</div>
            <div id="rwm-chat-head-status">Online — we reply fast</div>
          </div>
          <div id="rwm-chat-close" onClick={() => setOpen(false)}>
            <X size={18} strokeWidth={2} />
          </div>
        </div>

        <div id="rwm-chat-msgs">
          <div className="rwm-msg-bot">
            Hi! Interested in a Towbook-trained virtual assistant for your tow company? Ask us anything or leave your info and we'll get back to you fast.
          </div>
          {sent && (
            <>
              <div className="rwm-msg-user">{msg}</div>
              <div className="rwm-msg-bot">{botReply}</div>
            </>
          )}
        </div>

        {!sent ? (
          <div id="rwm-chat-form">
            <div id="rwm-name-row">
              <input className="rwm-input-sm" type="text" placeholder="First name" value={first} onChange={e => setFirst(e.target.value)} required />
              <input className="rwm-input-sm" type="text" placeholder="Last name" value={last} onChange={e => setLast(e.target.value)} />
            </div>
            <input className="rwm-input-sm" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required />
            <textarea className="rwm-textarea" placeholder="Tell us about your towing operation or ask a question..." value={msg} onChange={e => setMsg(e.target.value)} />
            <button id="rwm-send-btn" onClick={send} disabled={sending}>
              {sending ? 'Sending...' : 'Send Message →'}
            </button>
          </div>
        ) : (
          <div id="rwm-success" style={{ display: 'block' }}>
            <div id="rwm-success-icon">✅</div>
            <h4>Message sent!</h4>
            <p>Our team has been notified and will reply to your email shortly. We typically respond within a few hours.</p>
          </div>
        )}
      </div>
    </>
  )
}
