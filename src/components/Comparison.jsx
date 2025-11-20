export default function Comparison(){
  const rows = [
    { feature: 'Typical COP (efficiency)', air: '3.0 - 4.0', ground: '3.5 - 4.5', hybrid: '2.5 - 3.5' },
    { feature: 'Warranty', air: '5-7 years', ground: '7-10 years', hybrid: '5 years' },
    { feature: 'Ideal for', air: 'Most UK homes', ground: 'Larger plots', hybrid: 'Boiler integration' },
    { feature: 'Price range', air: '£7k - £12k', ground: '£15k - £28k', hybrid: '£6k - £10k' },
    { feature: 'Maintenance', air: 'Low', ground: 'Low', hybrid: 'Medium' },
  ]
  return (
    <section id="compare" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/60 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Comparison</h2>
          <p className="mt-2 text-slate-600">Compare heat pump types across key factors.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="text-sm text-slate-600">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Air Source</th>
                <th className="p-4">Ground Source</th>
                <th className="p-4">Hybrid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {rows.map((r,i)=> (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">{r.feature}</td>
                  <td className="p-4">{r.air}</td>
                  <td className="p-4">{r.ground}</td>
                  <td className="p-4">{r.hybrid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
