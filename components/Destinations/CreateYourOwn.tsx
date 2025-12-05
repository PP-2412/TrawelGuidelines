'use client'

import { useState } from 'react'
import { Sparkles, Calendar, Wallet, Users, Heart, Mountain, UserPlus, Coins, Send, Minus, Plus } from 'lucide-react'

const travelTypes = [
  { id: 'adventure', name: 'Adventure', icon: Mountain, color: 'from-[#44618b] to-[#12103d]' },
  { id: 'romantic', name: 'Romantic', icon: Heart, color: 'from-[#8550a2] to-[#43124a]' },
  { id: 'family', name: 'Family Friendly', icon: Users, color: 'from-[#d19457] to-[#c77e36]' },
  { id: 'friends', name: 'Friend Trip', icon: UserPlus, color: 'from-[#43124a] to-[#230c33]' },
]

const budgetOptions = [
  { id: 'budget', name: 'Budget', range: '₹25K - ₹50K', icon: Coins },
  { id: 'comfort', name: 'Comfort', range: '₹50K - ₹1L', icon: Wallet },
  { id: 'premium', name: 'Premium', range: '₹1L - ₹2L', icon: Sparkles },
  { id: 'luxury', name: 'Luxury', range: '₹2L+', icon: Sparkles },
]

interface CreateYourOwnProps {
  countryName: string
}

export default function CreateYourOwn({ countryName }: CreateYourOwnProps) {
  const [nights, setNights] = useState(5)
  const [selectedTravelType, setSelectedTravelType] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate submission - in production, this would send to an API
    setTimeout(() => {
      setIsSubmitting(false)
      alert(`Thank you! We'll create a custom ${nights}-night ${selectedTravelType} trip to ${countryName} within your ${selectedBudget} budget. Our team will contact you soon!`)
    }, 1500)
  }

  const isFormComplete = selectedTravelType && selectedBudget && nights >= 2

  return (
    <section id="create-your-own" className="py-20 bg-gradient-to-br from-[#12103d] via-[#230c33] to-[#43124a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d19457] opacity-10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8550a2] opacity-10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-8 h-8 text-[#d19457]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Create Your <span className="font-accent text-[#d19457]">Dream Trip</span>
          </h2>
          <p className="font-sans text-white/70 max-w-xl mx-auto">
            Design your perfect {countryName} adventure. Tell us your preferences and we&apos;ll craft a personalized itinerary just for you.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12">
            
            {/* Step 1: Number of Nights */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#d19457] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">How many nights?</h3>
                  <p className="font-sans text-xs text-white/50">Select your trip duration</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => setNights(Math.max(2, nights - 1))}
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20"
                >
                  <Minus className="w-6 h-6 text-white" />
                </button>
                
                <div className="text-center min-w-[120px]">
                  <span className="font-display text-6xl text-[#d19457]">{nights}</span>
                  <p className="font-sans text-sm text-white/60 mt-1">Nights</p>
                </div>
                
                <button
                  onClick={() => setNights(Math.min(21, nights + 1))}
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20"
                >
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Quick select buttons */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {[3, 5, 7, 10, 14].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNights(n)}
                    className={`px-4 py-2 rounded-full font-sans text-sm transition-all ${
                      nights === n
                        ? 'bg-[#d19457] text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {n} Nights
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-8" />

            {/* Step 2: Travel Type */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#8550a2] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">What type of trip?</h3>
                  <p className="font-sans text-xs text-white/50">Choose your travel style</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {travelTypes.map((type) => {
                  const Icon = type.icon
                  const isSelected = selectedTravelType === type.id
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedTravelType(type.id)}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 group ${
                        isSelected
                          ? 'border-[#d19457] bg-gradient-to-br ' + type.color
                          : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center transition-all ${
                        isSelected ? 'bg-white/20' : 'bg-white/10 group-hover:bg-white/15'
                      }`}>
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-white/70'}`} />
                      </div>
                      <h4 className={`font-sans text-sm font-medium ${isSelected ? 'text-white' : 'text-white/80'}`}>
                        {type.name}
                      </h4>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#12103d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-8" />

            {/* Step 3: Budget */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#44618b] flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">What&apos;s your budget?</h3>
                  <p className="font-sans text-xs text-white/50">Per person estimate</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {budgetOptions.map((budget) => {
                  const isSelected = selectedBudget === budget.id
                  return (
                    <button
                      key={budget.id}
                      onClick={() => setSelectedBudget(budget.id)}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                        isSelected
                          ? 'border-[#d19457] bg-[#d19457]/20'
                          : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                      <h4 className={`font-display text-lg mb-1 ${isSelected ? 'text-[#d19457]' : 'text-white'}`}>
                        {budget.name}
                      </h4>
                      <p className={`font-sans text-xs ${isSelected ? 'text-white/90' : 'text-white/50'}`}>
                        {budget.range}
                      </p>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#d19457] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                disabled={!isFormComplete || isSubmitting}
                className={`inline-flex items-center gap-3 px-12 py-5 rounded-full font-sans text-sm font-bold tracking-[2px] uppercase transition-all duration-300 ${
                  isFormComplete
                    ? 'bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white shadow-xl hover:shadow-2xl hover:scale-105'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating Your Trip...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get Custom Itinerary
                  </>
                )}
              </button>
              
              {!isFormComplete && (
                <p className="font-sans text-xs text-white/40 mt-4">
                  Please select your travel type and budget to continue
                </p>
              )}
              
              <p className="font-sans text-xs text-white/50 mt-4">
                Our travel experts will contact you within 24 hours with a personalized itinerary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
