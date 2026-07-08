import { jsonLd } from '../lib/config.js'

export default function HeroPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="hero-text">
          <div className="hero-badge">★ Pre-Trained on Towbook &amp; Tow Truck Operations</div>
          <h1>Your dedicated towing <span>Virtual Assistant</span> — on your schedule</h1>
          <p>RoadsideWingman provides skilled virtual assistants exclusively for tow truck companies. Your VA handles Towbook dispatch, call answering, data entry, lien sale support, and motor club calls — working your hours, reachable on WhatsApp, with a VOIP extension on your phone tree.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Hire Your Wingman</a>
            <a href="#how-it-works" className="btn-outline">See How It Works</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="va-card">
            <div className="va-avatar">
              <div className="avatar-img">
                <svg viewBox="0 0 110 132" xmlns="http://www.w3.org/2000/svg" width="110" height="132">
                  <rect width="110" height="132" fill="#1E3A5F"/>
                  <rect x="18" y="87" width="74" height="55" rx="8" fill="#1B4F72"/>
                  <rect x="44" y="87" width="22" height="6" rx="2" fill="#0D1F2D"/>
                  <rect x="51" y="93" width="8" height="18" rx="2" fill="#E67E22"/>
                  <rect x="44" y="73" width="22" height="18" rx="6" fill="#C68642"/>
                  <ellipse cx="55" cy="58" rx="26" ry="28" fill="#C68642"/>
                  <ellipse cx="55" cy="34" rx="26" ry="14" fill="#1A0A00"/>
                  <rect x="29" y="34" width="10" height="30" rx="5" fill="#1A0A00"/>
                  <rect x="71" y="34" width="10" height="30" rx="5" fill="#1A0A00"/>
                  <ellipse cx="44" cy="58" rx="5" ry="5.5" fill="#fff"/>
                  <ellipse cx="66" cy="58" rx="5" ry="5.5" fill="#fff"/>
                  <ellipse cx="44" cy="58" rx="3" ry="3.5" fill="#3B1A00"/>
                  <ellipse cx="66" cy="58" rx="3" ry="3.5" fill="#3B1A00"/>
                  <ellipse cx="45" cy="57" rx="1.2" ry="1.2" fill="#fff"/>
                  <ellipse cx="67" cy="57" rx="1.2" ry="1.2" fill="#fff"/>
                  <path d="M38 51 Q44 48 50 51" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M60 51 Q66 48 72 51" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <ellipse cx="55" cy="64" rx="3" ry="2" fill="#B8763A"/>
                  <path d="M46 72 Q55 78 64 72" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M29 52 Q29 30 55 30 Q81 30 81 52" stroke="#2D2D2D" strokeWidth="4" fill="none"/>
                  <rect x="23" y="50" width="10" height="14" rx="4" fill="#2D2D2D"/>
                  <rect x="77" y="50" width="10" height="14" rx="4" fill="#2D2D2D"/>
                  <path d="M23 60 Q16 65 16 72" stroke="#2D2D2D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <ellipse cx="16" cy="73" rx="4" ry="3" fill="#1B4F72"/>
                </svg>
              </div>
              <div className="online-dot"></div>
            </div>

            <div className="va-info">
              <div className="wa-chat">
                <div className="wa-header">
                  <div className="wa-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.75.75 0 00.92.92l6.025-1.476A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.95-1.355l-.355-.212-3.676.901.917-3.55-.232-.366A9.715 9.715 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="wa-name">Maria — Your Wingman</div>
                    <div className="wa-status">Online now</div>
                  </div>
                </div>
                <div className="wa-bubble-them">
                  <p>Good morning! I've entered last night's 4 jobs into Towbook and sent the lien notices for the 2 impounds. Anything else before opening?</p>
                  <div className="wa-time">8:04 AM</div>
                </div>
                <div className="wa-bubble-you">
                  <p>Perfect. Can you call AAA back on job #2840?</p>
                  <div className="wa-time">8:06 AM</div>
                </div>
                <div className="wa-bubble-them">
                  <p>On it now ✓</p>
                  <div className="wa-time">8:06 AM</div>
                </div>
              </div>

              <div className="voip-badge">
                <div className="voip-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.09a16 16 0 006 9.91l.37-.81a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7a2 2 0 011.62 2.05z"/>
                  </svg>
                </div>
                <div className="voip-text">
                  VOIP ext. <span className="voip-ext">Ext. 102</span> — live on your phone tree<br />
                  Forward calls directly during business hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
