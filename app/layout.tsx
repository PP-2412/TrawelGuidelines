import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trawel - Your Trusted Travel Partner',
  description: 'Curated journeys to Europe\'s finest destinations and exclusive cruise experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#12103d]">{children}</body>
    </html>
  )
}
