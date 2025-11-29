import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#12103d] to-[#43124a] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-display text-xl font-bold">T</span>
            </div>
            <span className="font-display text-2xl text-white">
              Trawel
            </span>
          </Link>

          {/* Copyright */}
          <p className="font-sans text-sm text-white/70 tracking-wider">
            © 2025 Trawel. Your Trusted Travel Partner.
          </p>
        </div>
      </div>
    </footer>
  )
}
