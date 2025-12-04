import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { japanData } from '@/components/Destinations/destinationsData'

export default function JapanPage() {
  return (
    <main>
      <Navbar />
      <CountryHero country={japanData} />
      <ToursSection tours={japanData.tours} countryName={japanData.name} />
      <ResortsSection resorts={japanData.resorts} countryName={japanData.name} />
      <Footer />
    </main>
  )
}
