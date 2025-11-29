const hotelPartners = [
  'The Luxury Collection',
  'Sheraton Hotels & Resorts',
  'IHG Hotels & Resorts',
  'Meliá Hotels International',
  'Four Seasons',
  'Ritz-Carlton',
  'Waldorf Astoria',
  'Mandarin Oriental',
]

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            Our Hotel <span className="font-accent text-[#d19457]">Partners</span>
          </h2>
          <p className="font-sans text-[#44618b] tracking-wider">
            Trusted by <span className="text-[#d19457] font-medium">World-Class</span> Hotel Brands
          </p>
        </div>
      </div>

      {/* Scrolling Partners */}
      <div className="relative">
        <div className="partners-track flex" style={{ width: 'max-content' }}>
          {[...hotelPartners, ...hotelPartners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 px-12 py-8 bg-[#f5f5f5] rounded-xl border border-gray-200 hover:bg-[#12103d]/5 transition-colors"
            >
              <span className="font-display text-xl text-[#44618b] whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
