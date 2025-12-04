'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { japanData } from '@/components/Destinations/destinationsData'

function JapanContent() {
  const searchParams = useSearchParams()
  const tourId = searchParams.get('tour')
  const resortId = searchParams.get('resort')

  return (
    <>
      <CountryHero country={japanData} />
      <ToursSection 
        tours={japanData.tours} 
        countryName={japanData.name} 
        initialTourId={tourId}
      />
      <ResortsSection 
        resorts={japanData.resorts} 
        countryName={japanData.name}
        initialResortId={resortId}
      />
    </>
  )
}

export default function JapanPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p className="font-sans text-[#44618b]">Loading Japan experiences...</p>
        </div>
      }>
        <JapanContent />
      </Suspense>
      <Footer />
    </main>
  )
}
