import { useState } from "react"

const items = [
  { q: "Will a heat pump work in winter?", a: "Yes. Modern systems operate efficiently even at low UK temperatures, using ambient air or ground to provide steady heating." },
  { q: "Do I need new radiators?", a: "Not always. We assess existing emitters and may recommend upsizing select radiators for best efficiency." },
  { q: "How long is installation?", a: "Typically 2–4 days for air source and 1–2 weeks for ground source depending on groundworks." },
  { q: "Is finance available?", a: "Yes, we can introduce you to FCA-regulated partners if finance is required." },
]

export default function FAQ(){
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">FAQ</h2>
        </div>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {items.map((it, i)=> (
            <details key={i} open={open===i} onClick={(e)=>{ e.preventDefault(); setOpen(open===i?-1:i) }} className="group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
                <span className="font-medium text-slate-900">{it.q}</span>
                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
