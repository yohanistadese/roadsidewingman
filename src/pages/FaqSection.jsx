import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqData } from '../lib/faqData.js'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="faq" id="faq">
      <div className="section-label">Common Questions</div>
      <h2>Frequently asked questions</h2>
      <p className="sub">Everything tow truck companies ask before hiring a virtual assistant through RoadsideWingman.</p>
      <div className="faq-list">
        {faqData.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.q}
              className={`faq-item faq-accordion${isOpen ? ' faq-open' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="faq-question-row">
                <h3>{item.q}</h3>
                <ChevronDown
                  size={20}
                  strokeWidth={1.75}
                  className={`faq-chevron${isOpen ? ' faq-chevron-open' : ''}`}
                  aria-hidden="true"
                />
              </div>
              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
