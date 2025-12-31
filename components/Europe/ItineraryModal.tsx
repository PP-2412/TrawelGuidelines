'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Sun, Sunset, Moon, MapPin, Clock, Calendar, Compass, Heart, Users, UserPlus, Mountain, Gem, Plane, Train, Download } from 'lucide-react'
import { TripType, calculateDistance } from './europeData'
import { Activity, generateFullItinerary } from './europeItineraryData'

interface SelectedCity {
  city: {
    id: string
    name: string
    country: string
    image: string
  }
  nights: number
  tripType: TripType | null
}

interface ItineraryModalProps {
  selectedCities: SelectedCity[]
  tripType: TripType | null // Keep for backwards compatibility, but per-city takes precedence
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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  
  // Generate the full itinerary with per-city trip types
  const itinerary = generateFullItinerary(
    selectedCities.map(sc => ({ 
      cityId: sc.city.id, 
      nights: sc.nights,
      tripType: sc.tripType ?? tripType // Use per-city tripType, fallback to global
    })),
    tripType // Still pass global as fallback
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

  // Download itinerary as HTML/PDF
  const handleDownloadItinerary = async () => {
    setIsGeneratingPDF(true)
    
    try {
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      const totalNights = selectedCities.reduce((sum, sc) => sum + sc.nights, 0)
      const totalActivities = itinerary.reduce((sum, d) => sum + d.activities.length, 0)

      // Build city list
      const cityList = selectedCities
        .map((sc, i) => {
          const tripLabel = sc.tripType ? ` (${tripTypeLabels[sc.tripType].name})` : ''
          return `${i + 1}. ${sc.city.name}, ${sc.city.country} - ${sc.nights} night${sc.nights > 1 ? 's' : ''}${tripLabel}`
        })
        .join(' → ')

      // Generate days HTML
      const daysHTML = itinerary
        .map((day) => {
          const tripBadge = day.tripType
            ? `<span class="trip-badge">${tripTypeLabels[day.tripType].name} Trip</span>`
            : ''

          const activitiesByTime = ['Morning', 'Afternoon', 'Evening']
            .map((time) => {
              const timeActivities = day.activities.filter((a) => a.time === time)
              if (timeActivities.length === 0) return ''

              const timeClass = time.toLowerCase()
              const timeIcon = time === 'Morning' ? '☀️' : time === 'Afternoon' ? '🌅' : '🌙'
              
              const activitiesHTML = timeActivities
                .map((activity) => {
                  const durationHTML = activity.duration
                    ? `<span class="duration">${activity.duration}</span>`
                    : ''
                  const specialBadge = activity.tripTypes
                    ? `<span class="special-badge">${activity.tripTypes.map((t) => tripTypeLabels[t].name).join(', ')}</span>`
                    : ''
                  return `
                    <div class="activity ${activity.tripTypes ? 'special-activity' : ''}">
                      <div class="activity-header">
                        <h4 class="activity-title">${activity.title}</h4>
                        ${specialBadge}
                        ${durationHTML}
                      </div>
                      <p class="activity-description">${activity.description}</p>
                    </div>
                  `
                })
                .join('')

              return `
                <div class="time-section">
                  <div class="time-header ${timeClass}">
                    <span class="time-icon">${timeIcon}</span>
                    <span class="time-label">${time}</span>
                  </div>
                  <div class="activities-list">
                    ${activitiesHTML}
                  </div>
                </div>
              `
            })
            .join('')

          return `
            <div class="day-card">
              <div class="day-header">
                <div class="day-info">
                  <span class="day-number">Day ${day.day}</span>
                  <span class="day-city">${day.cityName}</span>
                  ${tripBadge}
                </div>
                <h3 class="day-title">${day.title}</h3>
              </div>
              <div class="day-content">
                ${activitiesByTime}
              </div>
            </div>
          `
        })
        .join('')

      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your European Adventure - ${totalNights} Nights Itinerary</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
    
    :root {
      --primary: #12103d;
      --secondary: #43124a;
      --accent: #d19457;
      --accent-dark: #c77e36;
      --text: #44618b;
      --text-dark: #12103d;
      --bg: #f5f5f5;
      --white: #ffffff;
      --morning: #fef3c7;
      --morning-text: #92400e;
      --afternoon: #ffedd5;
      --afternoon-text: #c2410c;
      --evening: #e0e7ff;
      --evening-text: #3730a3;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--white);
      color: var(--text);
      line-height: 1.6;
      font-size: 11pt;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 30px;
    }
    
    /* Cover Page */
    .cover {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: var(--white);
      margin: -40px -30px 40px -30px;
      page-break-after: always;
    }
    
    .cover-logo {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    .cover h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 36pt;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .cover h1 span {
      color: var(--accent);
      font-style: italic;
    }
    
    .cover-subtitle {
      font-size: 14pt;
      opacity: 0.9;
      margin-bottom: 30px;
    }
    
    .cover-stats {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 40px;
    }
    
    .stat {
      text-align: center;
    }
    
    .stat-value {
      font-family: 'Playfair Display', serif;
      font-size: 28pt;
      font-weight: 700;
      color: var(--accent);
    }
    
    .stat-label {
      font-size: 10pt;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 0.8;
    }
    
    .cover-date {
      margin-top: 40px;
      font-size: 10pt;
      opacity: 0.7;
    }
    
    /* Overview Section */
    .overview {
      background: var(--bg);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 30px;
    }
    
    .overview h2 {
      font-family: 'Playfair Display', serif;
      font-size: 18pt;
      color: var(--text-dark);
      margin-bottom: 16px;
    }
    
    .route {
      font-size: 11pt;
      color: var(--text);
      line-height: 1.8;
    }
    
    /* Day Cards */
    .day-card {
      background: var(--white);
      border: 1px solid rgba(18, 16, 61, 0.1);
      border-radius: 12px;
      margin-bottom: 24px;
      overflow: hidden;
      page-break-inside: avoid;
    }
    
    .day-header {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: var(--white);
      padding: 20px 24px;
    }
    
    .day-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }
    
    .day-number {
      background: rgba(255,255,255,0.2);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 10pt;
      font-weight: 600;
    }
    
    .day-city {
      font-size: 10pt;
      opacity: 0.9;
    }
    
    .trip-badge {
      background: var(--accent);
      color: var(--white);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 9pt;
      font-weight: 600;
    }
    
    .day-title {
      font-family: 'Playfair Display', serif;
      font-size: 16pt;
      font-weight: 600;
    }
    
    .day-content {
      padding: 20px 24px;
    }
    
    /* Time Sections */
    .time-section {
      margin-bottom: 20px;
    }
    
    .time-section:last-child {
      margin-bottom: 0;
    }
    
    .time-header {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 10pt;
      font-weight: 500;
      margin-bottom: 12px;
      border: 1px solid;
    }
    
    .time-header.morning {
      background: var(--morning);
      color: var(--morning-text);
      border-color: #fcd34d;
    }
    
    .time-header.afternoon {
      background: var(--afternoon);
      color: var(--afternoon-text);
      border-color: #fdba74;
    }
    
    .time-header.evening {
      background: var(--evening);
      color: var(--evening-text);
      border-color: #a5b4fc;
    }
    
    .time-icon {
      font-size: 14px;
    }
    
    /* Activities */
    .activities-list {
      border-left: 2px solid rgba(18, 16, 61, 0.1);
      margin-left: 16px;
      padding-left: 16px;
    }
    
    .activity {
      position: relative;
      padding: 12px 0;
      border-bottom: 1px solid rgba(18, 16, 61, 0.05);
    }
    
    .activity:last-child {
      border-bottom: none;
    }
    
    .activity::before {
      content: '';
      position: absolute;
      left: -21px;
      top: 18px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--white);
      border: 2px solid rgba(18, 16, 61, 0.3);
    }
    
    .special-activity {
      background: linear-gradient(90deg, rgba(209, 148, 87, 0.05) 0%, transparent 100%);
      padding: 12px;
      margin: 8px 0;
      border-radius: 8px;
    }
    
    .special-activity::before {
      background: var(--accent);
      border-color: var(--accent);
    }
    
    .activity-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }
    
    .activity-title {
      font-family: 'Playfair Display', serif;
      font-size: 12pt;
      font-weight: 600;
      color: var(--text-dark);
    }
    
    .special-badge {
      background: var(--accent);
      color: var(--white);
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 8pt;
      font-weight: 600;
    }
    
    .duration {
      color: var(--text);
      font-size: 9pt;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .duration::before {
      content: '⏱';
    }
    
    .activity-description {
      font-size: 10pt;
      color: var(--text);
      line-height: 1.6;
    }
    
    /* Footer */
    .footer {
      text-align: center;
      padding: 30px 20px;
      margin-top: 40px;
      border-top: 1px solid rgba(18, 16, 61, 0.1);
    }
    
    .footer-logo {
      font-family: 'Playfair Display', serif;
      font-size: 14pt;
      color: var(--text-dark);
      margin-bottom: 8px;
    }
    
    .footer-logo span {
      color: var(--accent);
      font-style: italic;
    }
    
    .footer-text {
      font-size: 9pt;
      color: var(--text);
    }
    
    /* Print Styles */
    @media print {
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      .container {
        padding: 20px;
      }
      
      .cover {
        margin: -20px -20px 30px -20px;
      }
      
      .day-card {
        page-break-inside: avoid;
        break-inside: avoid;
      }
      
      .no-print {
        display: none !important;
      }
    }
    
    /* Download Button */
    .download-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--primary);
      padding: 12px 20px;
      display: flex;
      justify-content: center;
      gap: 16px;
      z-index: 100;
    }
    
    .download-btn {
      background: var(--accent);
      color: var(--white);
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-family: 'Inter', sans-serif;
      font-size: 12pt;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .download-btn:hover {
      background: var(--accent-dark);
      transform: scale(1.02);
    }
    
    .download-btn.secondary {
      background: transparent;
      border: 2px solid var(--white);
    }
    
    .download-btn.secondary:hover {
      background: rgba(255,255,255,0.1);
    }
    
    @media print {
      .download-bar {
        display: none !important;
      }
      
      .container {
        padding-top: 20px;
      }
    }
    
    @media screen {
      .container {
        padding-top: 80px;
      }
    }
  </style>
</head>
<body>
  <div class="download-bar no-print">
    <button class="download-btn" onclick="window.print()">📥 Save as PDF</button>
    <button class="download-btn secondary" onclick="window.close()">✕ Close</button>
  </div>
  
  <div class="container">
    <!-- Cover Page -->
    <div class="cover">
      <div class="cover-logo">🏔️</div>
      <h1>Your European <span>Adventure</span></h1>
      <p class="cover-subtitle">A Personalized Travel Itinerary</p>
      
      <div class="cover-stats">
        <div class="stat">
          <div class="stat-value">${selectedCities.length}</div>
          <div class="stat-label">Cities</div>
        </div>
        <div class="stat">
          <div class="stat-value">${totalNights}</div>
          <div class="stat-label">Nights</div>
        </div>
        <div class="stat">
          <div class="stat-value">${totalActivities}</div>
          <div class="stat-label">Activities</div>
        </div>
      </div>
      
      <p class="cover-date">Created on ${currentDate}</p>
    </div>
    
    <!-- Route Overview -->
    <div class="overview">
      <h2>Your Journey</h2>
      <p class="route">${cityList}</p>
    </div>
    
    <!-- Day by Day Itinerary -->
    ${daysHTML}
    
    <!-- Footer -->
    <div class="footer">
      <div class="footer-logo">Trawel <span>Guidelines</span></div>
      <p class="footer-text">Thank you for planning your European adventure with us!</p>
      <p class="footer-text">Safe travels and unforgettable memories await.</p>
    </div>
  </div>
  
  <script>
    // Auto-trigger print dialog hint
    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function(mql) {
        if (!mql.matches) {
          // After print dialog closes
        }
      });
    }
  </script>
</body>
</html>
      `

      // Create a blob and download
      const blob = new Blob([html], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      
      // Open in new window for printing
      const printWindow = window.open(url, '_blank')
      
      if (printWindow) {
        printWindow.focus()
      } else {
        // Fallback: download the file
        const a = document.createElement('a')
        a.href = url
        a.download = `europe-itinerary-${totalNights}-nights.html`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
      
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating itinerary:', error)
      alert('Failed to generate itinerary. Please try again.')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  if (!currentDayData) return null

  // Get the trip type for the current day's city
  const currentCityTripType = currentDayData.tripType
  const TripIcon = currentCityTripType ? tripTypeLabels[currentCityTripType].icon : null

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
    <>
      <style>{`
        @keyframes fly {
          0%, 100% { transform: translateX(-8px) translateY(0); }
          50% { transform: translateX(8px) translateY(-2px); }
        }
        @keyframes slide {
          0%, 100% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
        }
      `}</style>
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

            {/* Download button */}
            <button
              onClick={handleDownloadItinerary}
              disabled={isGeneratingPDF}
              className="absolute top-3 sm:top-4 right-14 sm:right-16 w-8 h-8 sm:w-10 sm:h-10 bg-[#d19457] backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#c77e36] transition-colors shadow-lg z-10 touch-target disabled:opacity-50"
              title="Download Itinerary"
            >
              {isGeneratingPDF ? (
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              )}
            </button>

            {/* Trip type badge - now shows per-city trip type */}
            {currentCityTripType && TripIcon && (
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d19457] text-white text-xs sm:text-sm font-medium">
                <TripIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tripTypeLabels[currentCityTripType].name} Trip
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
              <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none scrollbar-hide">
                {itinerary.map((day, index) => {
                  // Determine if next day is in a different city
                  const nextDay = itinerary[index + 1]
                  const isDifferentCity = nextDay && day.cityName !== nextDay.cityName
                  
                  // Find the selected cities to calculate distance
                  const currentCity = selectedCities.find(sc => sc.city.name === day.cityName)
                  const nextCity = selectedCities.find(sc => sc.city.name === nextDay?.cityName)
                  const distance = (isDifferentCity && currentCity && nextCity) 
                    ? calculateDistance(currentCity.city.id, nextCity.city.id) 
                    : 0
                  const isLongDistance = distance > 1000
                  const TransportIcon = isLongDistance ? Plane : Train
                  
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <button
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
                      
                      {/* Transport mode indicator between cities */}
                      {isDifferentCity && (
                        <div className="flex items-center justify-center px-1 relative">
                          <div className="w-4 h-[1px] bg-[#44618b]/30" />
                          <TransportIcon className={`absolute w-3 h-3 text-[#44618b] ${
                            isLongDistance 
                              ? 'animate-[fly_2s_ease-in-out_infinite]' 
                              : 'animate-[slide_2s_ease-in-out_infinite]'
                          }`} />
                        </div>
                      )}
                    </div>
                  )
                })}
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

          {/* Footer with city summary and download button - Fixed height, never shrinks */}
          <div className="bg-[#f5f5f5] border-t border-[#12103d]/10 px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-hide flex-1">
                {selectedCities.map((sc, index) => {
                  // Calculate distance to next city for transport mode
                  const nextCity = selectedCities[index + 1]
                  const distance = nextCity ? calculateDistance(sc.city.id, nextCity.city.id) : 0
                  const isLongDistance = distance > 1000
                  const TransportIcon = isLongDistance ? Plane : Train
                  
                  // Get the trip type icon for this city
                  const cityTripType = sc.tripType
                  const CityTripIcon = cityTripType ? tripTypeLabels[cityTripType].icon : null
                  
                  return (
                    <div key={sc.city.id} className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                      <div 
                        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                          sc.city.name === currentDayData.cityName
                            ? 'bg-[#12103d] text-white'
                            : 'bg-white text-[#44618b]'
                        }`}
                      >
                        <span>{index + 1}.</span>
                        <span>{sc.city.name}</span>
                        {CityTripIcon && (
                          <CityTripIcon className={`w-3 h-3 ${
                            sc.city.name === currentDayData.cityName ? 'text-[#d19457]' : 'text-[#d19457]'
                          }`} />
                        )}
                        <span className="opacity-70">({sc.nights}N)</span>
                      </div>
                      
                      {/* Transport mode indicator between cities */}
                      {nextCity && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white text-[#44618b] text-[10px] sm:text-xs">
                          <TransportIcon className="w-3 h-3" />
                          <span className="hidden sm:inline">{distance}km</span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-xs sm:text-sm text-[#44618b] whitespace-nowrap">
                  Total: <span className="font-medium text-[#12103d]">{totalDays} nights</span>
                </div>
                <button
                  onClick={handleDownloadItinerary}
                  disabled={isGeneratingPDF}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#d19457] text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#c77e36] transition-colors disabled:opacity-50"
                >
                  {isGeneratingPDF ? (
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
