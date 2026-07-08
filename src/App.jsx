import { Toaster } from 'react-hot-toast'
import NavPage from './pages/NavPage'
import HeroPage from './pages/HeroPage'
import TrustBarPage from './pages/TrustBarPage'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import SchedulePage from './pages/SchedulePage'
import TowbookPage from './pages/TowbookPage'
import IncludedPage from './pages/IncludedPage'
import PricingSection from './pages/PricingSection'
import ContactPage from './pages/ContactPage'
import FaqSection from './pages/FaqSection'
import NewsletterPage from './pages/NewsletterPage'
import FooterPage from './pages/FooterPage'
import ChatWidgetPage from './pages/ChatWidgetPage'

export default function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 4000, style: { fontSize: 14, fontWeight: 600 } }} />
      <NavPage />
      <HeroPage />
      <TrustBarPage />
      <ServicesPage />
      <HowItWorksPage />
      <SchedulePage />
      <TowbookPage />
      <IncludedPage />
      <PricingSection />
      <ContactPage />
      <FaqSection />
      <NewsletterPage />
      <FooterPage />
      <ChatWidgetPage />
    </>
  )
}
