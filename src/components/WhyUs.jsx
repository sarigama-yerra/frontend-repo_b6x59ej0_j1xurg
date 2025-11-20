import { Leaf, ShieldCheck, PoundSterling, BadgeCheck } from "lucide-react"

const points = [
  { icon: Leaf, title: "Energy Efficient", desc: "High SCOP ratings for lower bills and greener homes." },
  { icon: PoundSterling, title: "Low Running Cost", desc: "Optimised systems reduce monthly energy spend." },
  { icon: ShieldCheck, title: "UK Compliance", desc: "MCS-certified products with full Building Regs compliance." },
  { icon: BadgeCheck, title: "Certified Installers", desc: "Vetted, insured, and accredited installation partners." },
]

export default function WhyUs(){
  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Why Choose Us</h2>
          <p className="mt-2 text-slate-600">Affordable, efficient, and transparent heat-pump solutions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i)=> (
            <div key={i} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400 to-emerald-400 text-white flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
