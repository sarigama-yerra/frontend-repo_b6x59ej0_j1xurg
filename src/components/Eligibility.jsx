import { useState } from "react"

export default function Eligibility(){
  const [stage, setStage] = useState(1)
  const [basic, setBasic] = useState({ name: "", email: "", postcode: "" })
  const [details, setDetails] = useState({ propertyType: "House", bedrooms: "3", insulation: "Average" })

  const onSubmitBasic = (e) => {
    e.preventDefault()
    setStage(2)
  }
  const onSubmitDetails = (e) => {
    e.preventDefault()
    setStage(3)
  }

  return (
    <section id="eligibility" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Eligibility Checker</h2>
          <p className="mt-2 text-slate-600">See if your property qualifies for a heat pump and grant support.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {stage === 1 && (
              <form onSubmit={onSubmitBasic} className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-700">Name</label>
                  <input value={basic.name} onChange={e=>setBasic({...basic, name:e.target.value})} required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                </div>
                <div>
                  <label className="text-sm text-slate-700">Email</label>
                  <input type="email" value={basic.email} onChange={e=>setBasic({...basic, email:e.target.value})} required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                </div>
                <div>
                  <label className="text-sm text-slate-700">Postcode</label>
                  <input value={basic.postcode} onChange={e=>setBasic({...basic, postcode:e.target.value})} required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                </div>
                <button className="mt-2 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Continue</button>
              </form>
            )}

            {stage === 2 && (
              <form onSubmit={onSubmitDetails} className="grid gap-4 animate-in">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-slate-700">Property Type</label>
                    <select value={details.propertyType} onChange={e=>setDetails({...details, propertyType:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                      <option>House</option>
                      <option>Flat</option>
                      <option>Bungalow</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">Bedrooms</label>
                    <select value={details.bedrooms} onChange={e=>setDetails({...details, bedrooms:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                      {[1,2,3,4,5].map(n=> <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">Insulation</label>
                    <select value={details.insulation} onChange={e=>setDetails({...details, insulation:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                      {['Poor','Average','Good','Excellent'].map(v=> <option key={v}>{v}</option>)}
                    </select>
                  </div>
                </div>
                <button className="mt-2 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Check</button>
              </form>
            )}

            {stage === 3 && (
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">✓</div>
                <h3 className="text-xl font-semibold text-slate-900">You likely qualify</h3>
                <p className="mt-2 text-slate-600">A specialist will confirm your grant options and provide tailored recommendations.</p>
                <a href="#compare" className="mt-4 inline-block rounded-lg border border-slate-200 px-4 py-2 text-slate-900 hover:bg-slate-50">See Options</a>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">What you’ll get</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Transparent, itemised pricing comparison</li>
              <li>• Advice on BUS grant worth up to £7,500</li>
              <li>• Installation timelines and warranty info</li>
              <li>• Optional green tariff recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
