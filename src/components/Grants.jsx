export default function Grants(){
  return (
    <section id="grants" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Grants & Funding Support</h2>
            <p className="mt-3 text-slate-600">Save up to £7,500 through government grant eligibility via the Boiler Upgrade Scheme (BUS). We’ll check your property and handle the paperwork.</p>
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
              <p className="text-sm font-medium">BUS Grant</p>
              <p className="mt-1 text-2xl font-semibold">Save up to £7,500</p>
              <p className="mt-1 text-sm opacity-80">Subject to eligibility & property assessment</p>
              <a href="#eligibility" className="mt-4 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Check Grant Eligibility</a>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1647345009661-91dd6a5da03e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFudCUyMHN1cHBvcnR8ZW58MHwwfHx8MTc2MzY0NTczNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Grant support" className="rounded-2xl border border-slate-200 shadow-sm"/>
          </div>
        </div>
      </div>
    </section>
  )
}
