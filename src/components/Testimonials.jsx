export default function Testimonials(){
  const quotes = [
    { q: "Transparent quotes and fast install. Bills already down 30%.", a: "Sarah, Kent" },
    { q: "They handled the BUS grant and made everything simple.", a: "Andrew, Manchester" },
    { q: "Clear comparison helped us pick the right system for our office.", a: "Olivia, Bristol" },
  ]
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">What Customers Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {quotes.map((t,i)=> (
            <blockquote key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-800">“{t.q}”</p>
              <footer className="mt-3 text-sm text-slate-600">— {t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
