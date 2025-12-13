'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Sun, Sunset, Moon, MapPin, Clock, Calendar, Compass, Heart, Users, UserPlus, Mountain, Gem } from 'lucide-react'
import { TripType } from './europeData'
import { Activity, generateFullItinerary } from './europeItineraryData'

interface SelectedCity {
  city: {
    id: string
    name: string
    country: string
    image: string
  }
  nights: number
}

interface ItineraryModalProps {
  selectedCities: SelectedCity[]
  tripType: TripType | null
  onClose: () => void
}

const tripTypeLabels: Record<TripType, { name: string; icon: React.ComponentType<{ className?: string }> }> = {
  adventure: { name: 'Adventure', icon: Compass },
  romantic: { name: 'Romantic', icon: Heart },
  family: { name: 'Family', icon: Users },
  friends: { name: 'Friends', icon: UserPlus },
  cultural: { name: 'Cultural', icon: Mountain },
  luxury: { name: 'Luxury', icon: Gem },
}

const timeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Morning: Sun,
  Afternoon: Sunset,
  Evening: Moon,
}

const timeColors: Record<string, string> = {
  Morning: 'bg-amber-100 text-amber-700 border-amber-200',
  Afternoon: 'bg-orange-100 text-orange-700 border-orange-200',
  Evening: 'bg-indigo-100 text-indigo-700 border-indigo-200',
}

export default function ItineraryModal({ selectedCities, tripType, onClose }: ItineraryModalProps) {
  const [currentDayIndex, setCurrentDayIndex] = useState(0)
  
  // Generate the full itinerary
  const itinerary = generateFullItinerary(
    selectedCities.map(sc => ({ cityId: sc.city.id, nights: sc.nights })),
    tripType
  )

  const totalDays = itinerary.length
  const currentDayData = itinerary[currentDayIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentDayIndex > 0) {
        setCurrentDayIndex(prev => prev - 1)
      }
      if (e.key === 'ArrowRight' && currentDayIndex < totalDays - 1) {
        setCurrentDayIndex(prev => prev + 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentDayIndex, totalDays, onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!currentDayData) return null

  const TripIcon = tripType ? tripTypeLabels[tripType].icon : null

  // Group activities by time
  const groupedActivities = currentDayData.activities.reduce((acc, activity) => {
    if (!acc[activity.time]) acc[activity.time] = []
    acc[activity.time].push(activity)
    return acc
  }, {} as Record<string, Activity[]>)

  // Find current city image
  const currentCityData = selectedCities.find(sc => sc.city.name === currentDayData.cityName)
  const cityImage = currentCityData?.city.image || ''

  return (
    <div 
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with city image - Fixed height */}
        <div className="relative h-40 sm:h-48 md:h-56 flex-shrink-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cityImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12103d] via-[#12103d]/60 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 touch-target"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d]" />
          </button>

          {/* Trip type badge */}
          {tripType && TripIcon && (
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d19457] text-white text-xs sm:text-sm font-medium">
              <TripIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {tripTypeLabels[tripType].name} Trip
            </div>
          )}

          {/* Day info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-1">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{currentDayData.cityName}</span>
              <span className="text-white/50">•</span>
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Day {currentDayData.day} of {totalDays}</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-white">
              {currentDayData.title}
            </h2>
          </div>
        </div>

        {/* Day navigation - Fixed height */}
        <div className="bg-[#f5f5f5] border-b border-[#12103d]/10 px-4 sm:px-6 py-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentDayIndex(prev => Math.max(0, prev - 1))}
              disabled={currentDayIndex === 0}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all touch-target ${
                currentDayIndex === 0
                  ? 'text-[#44618b]/40 cursor-not-allowed'
                  : 'text-[#12103d] hover:bg-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous Day</span>
            </button>

            {/* Day dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-none scrollbar-hide">
              {itinerary.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDayIndex(index)}
                  className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                    index === currentDayIndex
                      ? 'bg-[#d19457] text-white'
                      : 'bg-white text-[#44618b] hover:bg-[#12103d]/10'
                  }`}
                  title={`Day ${day.day}: ${day.cityName}`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentDayIndex(prev => Math.min(totalDays - 1, prev + 1))}
              disabled={currentDayIndex === totalDays - 1}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all touch-target ${
                currentDayIndex === totalDays - 1
                  ? 'text-[#44618b]/40 cursor-not-allowed'
                  : 'text-[#12103d] hover:bg-white'
              }`}
            >
              <span className="hidden sm:inline">Next Day</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Activities content - Scrollable, takes remaining space */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-4 sm:p-6">
            <div className="space-y-6">
              {['Morning', 'Afternoon', 'Evening'].map((timeOfDay) => {
                const activities = groupedActivities[timeOfDay]
                if (!activities || activities.length === 0) return null

                const TimeIcon = timeIcons[timeOfDay]
                const colorClass = timeColors[timeOfDay]

                return (
                  <div key={timeOfDay}>
                    {/* Time of day header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${colorClass}`}>
                        <TimeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm font-medium">{timeOfDay}</span>
                      </div>
                    </div>

                    {/* Activities list */}
                    <div className="space-y-3 pl-2 border-l-2 border-[#12103d]/10 ml-4">
                      {activities.map((activity, actIndex) => (
                        <div 
                          key={actIndex}
                          className={`relative pl-4 ${
                            activity.tripTypes 
                              ? 'bg-gradient-to-r from-[#d19457]/5 to-transparent rounded-r-lg py-2 pr-2' 
                              : ''
                          }`}
                        >
                          {/* Timeline dot */}
                          <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                            activity.tripTypes 
                              ? 'bg-[#d19457] border-[#d19457]' 
                              : 'bg-white border-[#12103d]/30'
                          }`} />

                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-display text-base sm:text-lg text-[#12103d]">
                                  {activity.title}
                                </h4>
                                {activity.tripTypes && (
                                  <span className="px-2 py-0.5 bg-[#d19457] text-white text-[10px] sm:text-xs font-medium rounded-full">
                                    {activity.tripTypes.map(t => tripTypeLabels[t]?.name).join(', ')}
                                  </span>
                                )}
                              </div>
                              <p className="font-sans text-xs sm:text-sm text-[#44618b] mt-1 leading-relaxed">
                                {activity.description}
                              </p>
                            </div>
                            {activity.duration && (
                              <div className="flex items-center gap-1 text-[#44618b] flex-shrink-0">
                                <Clock className="w-3.5 h-3.5" />
                                <span className="text-xs font-medium">{activity.duration}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer with city summary - Fixed height, never shrinks */}
        <div className="bg-[#f5f5f5] border-t border-[#12103d]/10 px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-hide">
              {selectedCities.map((sc, index) => (
                <div 
                  key={sc.city.id}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium flex-shrink-0 whitespace-nowrap ${
                    sc.city.name === currentDayData.cityName
                      ? 'bg-[#12103d] text-white'
                      : 'bg-white text-[#44618b]'
                  }`}
                >
                  <span>{index + 1}.</span>
                  <span>{sc.city.name}</span>
                  <span className="opacity-70">({sc.nights}N)</span>
                </div>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-[#44618b] flex-shrink-0 whitespace-nowrap">
              Total: <span className="font-medium text-[#12103d]">{totalDays} nights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
