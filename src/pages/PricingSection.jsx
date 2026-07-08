import { plans } from '../lib/pricingData.js'

export default function PricingSection() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-label">Simple Pricing</div>
      <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 800, color: 'var(--navy)', marginBottom: 10 }}>
        Transparent, all-inclusive pricing
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '0 auto 44px', lineHeight: 1.6 }}>
        One-time $995 setup fee. Then a flat monthly rate — VOIP line included.
      </p>
      <div className="plans">
        {plans.map(plan => (
          <div key={plan.title} className={`plan${plan.badge ? ' featured' : ''}`}>
            {plan.badge && <div className="plan-badge">{plan.badge}</div>}
            <h3>{plan.title}</h3>
            <div className="price">
              {plan.price}
              {plan.unit && <span>{plan.unit}</span>}
            </div>
            <div className="tagline">{plan.tagline}</div>
            <ul className="plan-features">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href={plan.cta.href} className={`plan-btn ${plan.cta.style}`}>
              {plan.cta.label}
            </a>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, marginTop: 28 }}>
        One-time $995 setup fee. No long-term contracts.
      </p>
    </section>
  )
}
