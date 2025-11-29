import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#12103d] via-[#43124a] to-[#44618b] pt-32 pb-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d19457] opacity-15 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#8550a2] opacity-25 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
          Discover the World in
          <span className="block font-accent text-[#d19457] mt-2">
            Unparalleled Luxury
          </span>
        </h1>
        <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto mb-10 font-normal tracking-wide">
          Curated journeys to Europe&apos;s finest destinations and exclusive cruise experiences
        </p>
        <Link 
          href="#book-with-us"
          className="inline-block bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs font-bold tracking-[2px] uppercase px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Explore Destinations
        </Link>
      </div>
    </section>
  )
}
