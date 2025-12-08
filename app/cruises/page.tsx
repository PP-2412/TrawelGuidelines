'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CruiseHeader from '@/components/Cruises/CruiseHeader'
import CategoryFilter from '@/components/Cruises/CategoryFilter'
import CruiseCard from '@/components/Cruises/CruiseCard'
import CruiseDetails from '@/components/Cruises/CruiseDetails'
import BookingModal from '@/components/Cruises/BookingModal'
import CruiseModal from '@/components/Cruises/CruiseModal'
import { cruises, CruiseCategory, categories, Cruise } from '@/components/Cruises/cruisesData'

function CruisesContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<CruiseCategory>('all')
  const [selectedCruise, setSelectedCruise] = useState<Cruise | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showCruiseModal, setShowCruiseModal] = useState(false)

  useEffect(() => {
    const cruiseId = searchParams.get('cruise')
    if (cruiseId) {
      const cruise = cruises.find((c: Cruise) => c.id === cruiseId)
      if (cruise) {
        setSelectedCruise(cruise)
        setSelectedCategory(cruise.region)
        setShowCruiseModal(true)
      }
    }
  }, [searchParams])

  const filteredCruises = selectedCategory === 'all' 
    ? cruises 
    : cruises.filter((c: Cruise) => c.region === selectedCategory)

  const handleCruiseSelect = (cruise: Cruise) => {
    setSelectedCruise(cruise)
    setShowCruiseModal(true)
  }

  const handleBookClick = () => {
    setShowCruiseModal(false)
    setShowBookingModal(true)
  }

  return (
    <>
      <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-[#f5f5f5] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <CruiseHeader />
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cruise List */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCruises.map((cruise) => (
                  <CruiseCard
                    key={cruise.id}
                    cruise={cruise}
                    isSelected={selectedCruise?.id === cruise.id}
                    onSelect={handleCruiseSelect}
                  />
                ))}
              </div>
            </div>

            {/* Cruise Details Sidebar */}
            <div className="lg:col-span-1">
              <CruiseDetails 
                cruise={selectedCruise}
                onBookClick={handleBookClick}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cruise Modal Popup */}
      {showCruiseModal && selectedCruise && (
        <CruiseModal 
          cruise={selectedCruise}
          onClose={() => setShowCruiseModal(false)}
          onBookClick={handleBookClick}
        />
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedCruise && (
        <BookingModal 
          cruise={selectedCruise}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </>
  )
}

export default function CruisesPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      }>
        <CruisesContent />
      </Suspense>
      <Footer />
    </main>
  )
}
