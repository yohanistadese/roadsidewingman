import { steps } from '../lib/stepsData.js'

export default function HowItWorksPage() {
  return (
    <section className="how" id="how-it-works">
      <div className="section-label" style={{ color: 'var(--accent)' }}>Simple Process</div>
      <h2>Your towing virtual assistant is ready in 48 hours</h2>
      <p className="sub">
        We match you with a trained VA, integrate with your Towbook account, set up their VOIP
        extension, and they start working your schedule — fast.
      </p>
      <div className="steps">
        {steps.map(s => (
          <div key={s.n} className="step">
            <div className="step-num">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
