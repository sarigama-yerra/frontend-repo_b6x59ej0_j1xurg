import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Eligibility from './components/Eligibility'
import Grants from './components/Grants'
import Comparison from './components/Comparison'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Categories />
        <HowItWorks />
        <Eligibility />
        <Grants />
        <Comparison />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
