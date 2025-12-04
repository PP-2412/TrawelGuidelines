import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FavouriteTrips from '@/components/FavouriteTrips'
import WhyChoose from '@/components/WhyChoose'
import EuropeSection from '@/components/EuropeSection'
import Partners from '@/components/Partners'
import CruisesSection from '@/components/CruisesSection'
import Reviews from '@/components/Reviews'
import ThailandSection from '@/components/ThailandSection'
import MaldivesSection from '@/components/MaldivesSection'
import IndonesiaSection from '@/components/IndonesiaSection'
import VietnamSection from '@/components/VietnamSection'
import JapanSection from '@/components/JapanSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FavouriteTrips />
      <WhyChoose />
      <EuropeSection />
      <Partners />
      <CruisesSection />
      <Reviews />
      <ThailandSection />
      <MaldivesSection />
      <IndonesiaSection />
      <VietnamSection />
      <JapanSection />
      <Contact />
      <Footer />
    </main>
  )
}
