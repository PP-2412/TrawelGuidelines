'use client'

import { Plane, Train, Bus, MapPin } from 'lucide-react'
import { TransportHub } from './cityDetailsData'

interface TransportationHubsProps {
  cityName: string
  hubs: TransportHub[]
}

const hubIcons: Record<TransportHub['type'], React.ReactNode> = {
  airport: <Plane className="w-5 h-5" />,
  train: <Train className="w-5 h-5" />,
  bus: <Bus className="w-5 h-5" />,
}

const hubColors: Record<TransportHub['type'], string> = {
  airport: 'bg-blue-100 text-blue-600',
  train: 'bg-emerald-100 text-emerald-600',
  bus: 'bg-amber-100 text-amber-600',
}

const hubLabels: Record<TransportHub['type'], string> = {
  airport: 'Airport',
  train: 'Train Station',
  bus: 'Bus Station',
}

export default function TransportationHubs({ cityName, hubs }: TransportationHubsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[#d19457] mb-3">
            <MapPin className="w-5 h-5" />
            <span className="font-sans text-sm font-medium uppercase tracking-wider">Getting There</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[#12103d] mb-3">
            Transportation Hubs
          </h2>
          <p className="text-[#12103d]/60 font-sans max-w-2xl mx-auto">
            Key arrival points and connections for reaching {cityName}
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {hubs.map((hub, index) => (
            <div 
              key={index}
              className="flex gap-4 p-5 bg-[#f8f7f4] rounded-2xl hover:bg-[#f0efe9] transition-colors"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${hubColors[hub.type]} flex items-center justify-center`}>
                {hubIcons[hub.type]}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg text-[#12103d] truncate">
                    {hub.name}
                  </h3>
                  <span className="flex-shrink-0 px-2 py-0.5 bg-[#12103d]/10 rounded text-[10px] font-medium text-[#12103d]/70 uppercase">
                    {hubLabels[hub.type]}
                  </span>
                </div>
                <p className="text-[#12103d]/60 text-sm mb-1">
                  {hub.description}
                </p>
                {hub.distance && (
                  <p className="text-[#d19457] text-sm font-medium">
                    📍 {hub.distance}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
