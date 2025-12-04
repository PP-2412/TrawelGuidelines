import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { maldivesData } from '@/components/Destinations/destinationsData'

export default function MaldivesPage() {
  return (
    <main>
      <Navbar />
      <CountryHero country={maldivesData} />
      <ToursSection tours={maldivesData.tours} countryName={maldivesData.name} />
      <ResortsSection resorts={maldivesData.resorts} countryName={maldivesData.name} />
      <Footer />
    </main>
  )
}
