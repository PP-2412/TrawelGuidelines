'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { vietnamData } from '@/components/Destinations/destinationsData'

function VietnamContent() {
  const searchParams = useSearchParams()
  const tourId = searchParams.get('tour')
  const resortId = searchParams.get('resort')

  return (
    <>
      <CountryHero country={vietnamData} />
      <ToursSection 
        tours={vietnamData.tours} 
        countryName={vietnamData.name} 
        initialTourId={tourId}
      />
      <ResortsSection 
        resorts={vietnamData.resorts} 
        countryName={vietnamData.name}
        initialResortId={resortId}
      />
    </>
  )
}

export default function VietnamPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p className="font-sans text-[#44618b]">Loading Vietnam experiences...</p>
        </div>
      }>
        <VietnamContent />
      </Suspense>
      <Footer />
    </main>
  )
}
