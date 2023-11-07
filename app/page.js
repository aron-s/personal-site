import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative z-0 ">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        <Hero />  
      </div>
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  )
}
