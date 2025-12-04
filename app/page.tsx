import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/Home/Hero'
import FavouriteTrips from '@/components/Home/FavouriteTrips'
import WhyChoose from '@/components/Home/WhyChoose'
import EuropeSection from '@/components/Home/EuropeSection'
import Partners from '@/components/Home/Partners'
import CruisesSection from '@/components/Home/CruisesSection'
import Reviews from '@/components/Home/Reviews'
import ThailandSection from '@/components/Home/ThailandSection'
import MaldivesSection from '@/components/Home/MaldivesSection'
import IndonesiaSection from '@/components/Home/IndonesiaSection'
import VietnamSection from '@/components/Home/VietnamSection'
import JapanSection from '@/components/Home/JapanSection'
import Contact from '@/components/shared/Contact'
import Footer from '@/components/shared/Footer'

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
