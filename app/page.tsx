import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import Partners from '@/components/Partners'
import BookWithUs from '@/components/BookWithUs'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Partners />
      <BookWithUs />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
