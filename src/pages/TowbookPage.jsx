import { towbookChecklist, vaActivityStats } from '../lib/includedData.js'

export default function TowbookPage() {
  return (
    <section className="towbook-sect" id="towbook">
      <div className="tb-content">
        <div className="section-label" style={{ textAlign: 'left' }}>Towbook Ready</div>
        <h2>Pre-trained on Towbook — zero ramp-up time</h2>
        <p>
          Your wingman doesn't need to learn Towbook on your dime. Every RoadsideWingman virtual
          assistant is trained on Towbook dispatch software and towing company workflows before they
          ever touch your account.
        </p>
        <ul className="check-list">
          {towbookChecklist.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="tb-mockup">
        <div className="tb-top-bar">
          <div className="tb-brand">TOWBOOK</div>
          <div className="tb-tabs">
            <div className="tb-tab active">Dispatch</div>
            <div className="tb-tab">Drivers</div>
            <div className="tb-tab">Impound</div>
          </div>
        </div>

        <div className="dispatch-row">
          <div className="dispatch-card">
            <div className="dc-label">Job #TW-2841</div>
            <div className="dc-val">Flatbed Tow</div>
            <div className="dc-status s-green">● Active</div>
          </div>
          <div className="dispatch-card">
            <div className="dc-label">Job #TW-2840</div>
            <div className="dc-val">Jump Start</div>
            <div className="dc-status s-amber">● En Route</div>
          </div>
        </div>
        <div className="dispatch-row">
          <div className="dispatch-card">
            <div className="dc-label">Job #TW-2839</div>
            <div className="dc-val">Lockout</div>
            <div className="dc-status s-blue">● Completed</div>
          </div>
          <div className="dispatch-card">
            <div className="dc-label">IMP-0041</div>
            <div className="dc-val">Lien Notice</div>
            <div className="dc-status s-amber">● Sent</div>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 10, marginTop: 4 }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            VA activity today
          </div>
          {vaActivityStats.map(({ label, value, color }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>{label}</span>
              <span style={{ color, fontSize: 11, fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
