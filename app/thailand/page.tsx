import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { thailandData } from '@/components/Destinations/destinationsData'

export default function ThailandPage() {
  return (
    <main>
      <Navbar />
      <CountryHero country={thailandData} />
      <ToursSection tours={thailandData.tours} countryName={thailandData.name} />
      <ResortsSection resorts={thailandData.resorts} countryName={thailandData.name} />
      <Footer />
    </main>
  )
}
