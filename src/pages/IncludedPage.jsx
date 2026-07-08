import { CheckCircle2 } from 'lucide-react'
import { includedItems } from '../lib/includedData.js'

export default function IncludedPage() {
  return (
    <section className="included">
      <div className="section-label" style={{ color: 'var(--accent)' }}>What's Included</div>
      <h2>We cover everything — you just pay the phone line</h2>
      <p className="sub">
        RoadsideWingman handles the full employment infrastructure for your towing virtual assistant.
        You get a ready-to-work VA with no overhead hassle.
      </p>
      <div className="inc-grid">
        {includedItems.map(item => (
          <div key={item.title} className="inc-item">
            <CheckCircle2 size={22} strokeWidth={2} className="inc-check-icon" />
            <div className="inc-text">
              <strong>{item.title}</strong>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="not-included">
        <p>
          The only thing not included:{' '}
          <span>a $60/month VOIP phone fee</span> for your VA's dedicated extension — billed
          transparently with no surprises.
        </p>
      </div>
    </section>
  )
}
