'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { maldivesData } from '@/components/Destinations/destinationsData'

function MaldivesContent() {
  const searchParams = useSearchParams()
  const tourId = searchParams.get('tour')
  const resortId = searchParams.get('resort')

  return (
    <>
      <CountryHero country={maldivesData} />
      <ToursSection 
        tours={maldivesData.tours} 
        countryName={maldivesData.name} 
        initialTourId={tourId}
      />
      <ResortsSection 
        resorts={maldivesData.resorts} 
        countryName={maldivesData.name}
        initialResortId={resortId}
      />
    </>
  )
}

export default function MaldivesPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p className="font-sans text-[#44618b]">Loading Maldives experiences...</p>
        </div>
      }>
        <MaldivesContent />
      </Suspense>
      <Footer />
    </main>
  )
}
