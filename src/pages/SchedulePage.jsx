import { CalendarDays, CheckCircle2 } from 'lucide-react'
import { scheduleRows, scheduleChecklist } from '../lib/scheduleData.js'

export default function SchedulePage() {
  return (
    <section className="schedule-sect">
      <div className="sched-content">
        <div className="section-label" style={{ textAlign: 'left' }}>Your Hours, Your Rules</div>
        <h2>Your towing VA works when you need them — not a fixed shift</h2>
        <p>
          Unlike a towing call center, your RoadsideWingman assistant mirrors your actual business
          schedule. Most tow companies run daytime office hours with some evening dispatch overlap —
          but you set the schedule.
        </p>
        <ul className="check-list">
          {scheduleChecklist.map(item => (
            <li key={item}>
              <CheckCircle2 size={18} strokeWidth={2} className="check-icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="sched-visual">
        <div className="sched-card">
          <div className="sched-title">
            <CalendarDays size={15} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
            Sample VA schedule — fully customizable
          </div>
          {scheduleRows.map(row => (
            <div key={row.day} className="sched-row">
              <span className="sched-day">{row.day}</span>
              <span className="sched-hours">{row.hours}</span>
              <span className={`sched-badge ${row.cls}`}>{row.label}</span>
            </div>
          ))}
          <div style={{ marginTop: 14, background: '#F0F8FF', borderRadius: 8, padding: '10px 12px', fontSize: 12, color: 'var(--muted)', border: '1px solid #D0E8F8' }}>
            Schedule is fully customizable — adjust anytime based on your towing business needs.
          </div>
        </div>
      </div>
    </section>
  )
}
