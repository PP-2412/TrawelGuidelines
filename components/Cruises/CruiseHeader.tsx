import { Anchor } from 'lucide-react'

export default function CruiseHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg">
          <Anchor className="w-7 h-7 text-white" />
        </div>
      </div>
      <h1 className="font-display text-4xl md:text-6xl text-[#12103d] mb-4">
        Luxury <span className="font-accent text-[#d19457]">Cruises</span>
      </h1>
      <p className="font-sans text-[#44618b] max-w-2xl mx-auto">
        Set sail on unforgettable journeys across the world&apos;s most beautiful waters
      </p>
    </div>
  )
}
