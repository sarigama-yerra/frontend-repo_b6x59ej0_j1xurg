import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -inset-40 opacity-70"
          initial={{ background: "radial-gradient(800px circle at 20% 10%, rgba(56,189,248,0.15), transparent 40%), radial-gradient(600px circle at 80% 20%, rgba(34,197,94,0.15), transparent 35%), radial-gradient(700px circle at 50% 80%, rgba(14,165,233,0.15), transparent 40%)" }}
          animate={{ background: [
            "radial-gradient(800px circle at 15% 15%, rgba(56,189,248,0.18), transparent 42%), radial-gradient(600px circle at 85% 25%, rgba(34,197,94,0.16), transparent 36%), radial-gradient(700px circle at 55% 85%, rgba(14,165,233,0.16), transparent 41%)",
            "radial-gradient(800px circle at 25% 10%, rgba(56,189,248,0.14), transparent 40%), radial-gradient(600px circle at 75% 30%, rgba(34,197,94,0.18), transparent 38%), radial-gradient(700px circle at 45% 75%, rgba(14,165,233,0.18), transparent 42%)",
            "radial-gradient(800px circle at 20% 20%, rgba(56,189,248,0.16), transparent 41%), radial-gradient(600px circle at 80% 20%, rgba(34,197,94,0.15), transparent 36%), radial-gradient(700px circle at 50% 80%, rgba(14,165,233,0.17), transparent 41%)",
          ]}}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Trusted by UK homeowners & small businesses
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Smarter, Cleaner & Affordable Heat Pump Solutions
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Get the best heat-pump options for your home with transparent pricing & fast installation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#eligibility" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Check Eligibility</a>
              <a href="#compare" className="px-5 py-3 rounded-lg border border-slate-200 text-slate-900 hover:bg-slate-50">Compare Options</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-slate-500">
              <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-80"/>
              <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-80"/>
              <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-80"/>
              <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-80"/>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-white">
              <img src="https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWF0JTIwUHVtcHxlbnwwfDB8fHwxNzYzNjQ1NzM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Heat Pump" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
