import { PhoneCall, Truck, Database, Scale, Building2, MessageCircle } from 'lucide-react'
import { services } from '../lib/servicesData.js'

const iconMap = { PhoneCall, Truck, Database, Scale, Building2, MessageCircle }

export default function ServicesPage() {
  return (
    <section className="section" id="services">
      <div className="section-label">What Your Wingman Does</div>
      <h2>One virtual assistant. Every task your tow company needs.</h2>
      <p className="sub">
        Your RoadsideWingman virtual assistant comes fully trained on Towbook and towing industry
        workflows — ready to plug into your operation from day one with zero ramp-up time.
      </p>
      <div className="cards">
        {services.map(s => {
          const Icon = iconMap[s.icon]
          return (
            <div key={s.title} className="card">
              <div className="card-icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
