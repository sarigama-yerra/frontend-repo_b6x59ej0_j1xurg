export default function Categories(){
  return (
    <section id="categories" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Heat Pump Categories</h2>
          <p className="mt-2 text-slate-600">Choose the right type for your property and budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Air Source", "Ground Source", "Hybrid"].map((name, i)=> (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img src={`https://placehold.co/1200x800?text=${encodeURIComponent(name+' Heat Pump')}`} alt={name} className="aspect-[4/3] w-full object-cover"/>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{name} Heat Pump</h3>
                <p className="mt-2 text-sm text-slate-600">Efficient, reliable, and tailored to UK homes.</p>
                <a href="#compare" className="mt-4 inline-block text-slate-900 font-medium hover:underline">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
