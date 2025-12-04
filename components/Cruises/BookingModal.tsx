import { X } from 'lucide-react'
import { Cruise } from './cruisesData'

interface BookingModalProps {
  cruise: Cruise
  onClose: () => void
}

export default function BookingModal({ cruise, onClose }: BookingModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
        <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">Book Your Cruise</h2>
            <p className="font-sans text-sm text-white/70">{cruise.name}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="space-y-4 mb-6">
            <div>
              <label className="font-sans text-sm text-[#44618b] mb-1 block">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50" 
                placeholder="Enter your name" 
              />
            </div>
            <div>
              <label className="font-sans text-sm text-[#44618b] mb-1 block">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50" 
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label className="font-sans text-sm text-[#44618b] mb-1 block">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50" 
                placeholder="Enter your phone" 
              />
            </div>
            <div>
              <label className="font-sans text-sm text-[#44618b] mb-1 block">Number of Guests</label>
              <select className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-[#44618b]">Estimated Total</span>
              <span className="font-display text-2xl font-bold text-[#12103d]">${cruise.price * 2}</span>
            </div>
            <p className="font-sans text-xs text-[#44618b] mt-1">For 2 guests • Final price after consultation</p>
          </div>

          <button className="w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
            Request Quote
          </button>
          <p className="font-sans text-xs text-[#44618b] text-center mt-4">
            Our cruise specialist will contact you within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}
