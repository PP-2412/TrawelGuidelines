'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountryHero from '@/components/Destinations/CountryHero'
import ToursSection from '@/components/Destinations/ToursSection'
import ResortsSection from '@/components/Destinations/ResortsSection'
import { indonesiaData } from '@/components/Destinations/destinationsData'

function IndonesiaContent() {
  const searchParams = useSearchParams()
  const tourId = searchParams.get('tour')
  const resortId = searchParams.get('resort')

  return (
    <>
      <CountryHero country={indonesiaData} />
      <ToursSection 
        tours={indonesiaData.tours} 
        countryName={indonesiaData.name} 
        initialTourId={tourId}
      />
      <ResortsSection 
        resorts={indonesiaData.resorts} 
        countryName={indonesiaData.name}
        initialResortId={resortId}
      />
    </>
  )
}

export default function IndonesiaPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p className="font-sans text-[#44618b]">Loading Indonesia experiences...</p>
        </div>
      }>
        <IndonesiaContent />
      </Suspense>
      <Footer />
    </main>
  )
}
