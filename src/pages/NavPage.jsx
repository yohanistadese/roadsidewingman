import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'How it works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Towbook', href: '#towbook', id: 'towbook' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Contact', href: '#contact', id: 'contact' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export default function NavPage() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100
      let current = ''
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollY) current = item.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <a href="#" className="logo">Roadside<span>Wingman</span></a>
      <div className="nav-links">
        {navItems.map(({ label, href, id }) => (
          <a
            key={id}
            href={href}
            className={active === id ? 'nav-active' : ''}
          >
            {label}
          </a>
        ))}
      </div>
      <a href="#contact" className="nav-cta nav-links">Hire Your Wingman</a>
    </nav>
  )
}
