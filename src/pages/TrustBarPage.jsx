import { ClipboardList, Truck, MessageCircle, Phone, Calendar, Building2 } from 'lucide-react'
import { trustItems } from '../lib/includedData.js'

const iconMap = { ClipboardList, Truck, MessageCircle, Phone, Calendar, Building2 }

export default function TrustBarPage() {
  return (
    <div className="trust">
      {trustItems.map(({ icon, label }) => {
        const Icon = iconMap[icon]
        return (
          <div key={label} className="trust-item">
            <Icon size={16} strokeWidth={2} />
            {label}
          </div>
        )
      })}
    </div>
  )
}
