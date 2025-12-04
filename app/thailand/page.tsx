'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { thailandData } from '@/components/Destinations/destinationsData'

function ThailandContent() {
  const searchParams = useSearchParams()
  const tourId = searchParams.get('tour')
  const resortId = searchParams.get('resort')

  return (
    <>
      <CountryHero country={thailandData} />
      <ToursSection 
        tours={thailandData.tours} 
        countryName={thailandData.name} 
        initialTourId={tourId}
      />
      <ResortsSection 
        resorts={thailandData.resorts} 
        countryName={thailandData.name}
        initialResortId={resortId}
      />
    </>
  )
}

export default function ThailandPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p className="font-sans text-[#44618b]">Loading Thailand experiences...</p>
        </div>
      }>
        <ThailandContent />
      </Suspense>
      <Footer />
    </main>
  )
}
