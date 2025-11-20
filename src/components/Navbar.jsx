import { Menu, Phone } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-emerald-400 to-cyan-500 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight text-slate-800">HeatPump Compare UK</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#why" className="hover:text-slate-900 transition-colors">Why Us</a>
            <a href="#categories" className="hover:text-slate-900 transition-colors">Products</a>
            <a href="#how" className="hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#grants" className="hover:text-slate-900 transition-colors">Grants</a>
            <a href="#compare" className="hover:text-slate-900 transition-colors">Compare</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#eligibility" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Check Eligibility</a>
            <a href="tel:+440203000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Phone className="h-4 w-4" /> 0203 000 0000
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-slate-700">
              <a href="#why" className="px-2 py-2 rounded hover:bg-slate-50">Why Us</a>
              <a href="#categories" className="px-2 py-2 rounded hover:bg-slate-50">Products</a>
              <a href="#how" className="px-2 py-2 rounded hover:bg-slate-50">How It Works</a>
              <a href="#grants" className="px-2 py-2 rounded hover:bg-slate-50">Grants</a>
              <a href="#compare" className="px-2 py-2 rounded hover:bg-slate-50">Compare</a>
              <a href="#faq" className="px-2 py-2 rounded hover:bg-slate-50">FAQ</a>
              <a href="#eligibility" className="mt-2 px-3 py-2 rounded-lg bg-slate-900 text-white">Check Eligibility</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
