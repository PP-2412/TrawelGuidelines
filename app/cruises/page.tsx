import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CruiseBuilder from '@/components/cruises/CruiseBuilder'

export default function CruisesPage() {
  return (
    <main>
      <Navbar />
      <CruiseBuilder />
      <Footer />
    </main>
  )
}
