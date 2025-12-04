import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { indonesiaData } from '@/components/Destinations/destinationsData'

export default function IndonesiaPage() {
  return (
    <main>
      <Navbar />
      <CountryHero country={indonesiaData} />
      <ToursSection tours={indonesiaData.tours} countryName={indonesiaData.name} />
      <ResortsSection resorts={indonesiaData.resorts} countryName={indonesiaData.name} />
      <Footer />
    </main>
  )
}
