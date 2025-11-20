export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3 items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-emerald-400 to-cyan-500" />
              <p className="font-semibold text-slate-900">HeatPump Compare UK</p>
            </div>
            <p className="mt-2 text-sm text-slate-600">Affordable, efficient, and transparent heat-pump solutions.</p>
          </div>
          <div className="text-sm text-slate-600">
            <p>MCS • TrustMark • RECC • NAPIT</p>
            <p className="mt-1">Company No. 12345678 • VAT GB123456789</p>
          </div>
          <div className="text-sm text-slate-600 md:text-right">
            <p>© {new Date().getFullYear()} HeatPump Compare UK. All rights reserved.</p>
            <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
