import { CheckCircle, Home, Wrench, Sparkles } from "lucide-react"

const steps = [
  { icon: Home, title: "Assessment", desc: "Free property survey to understand your heating needs." },
  { icon: CheckCircle, title: "Recommendation", desc: "Clear proposal with product options & transparent pricing." },
  { icon: Wrench, title: "Installation", desc: "Certified engineers install with minimal disruption." },
  { icon: Sparkles, title: "Aftercare", desc: "System optimisation, support and warranty registration." },
]

export default function HowItWorks(){
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">How It Works</h2>
          <p className="mt-2 text-slate-600">Simple, guided steps from first chat to warm home.</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i)=> (
            <li key={i} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">{i+1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
