import { maxStat } from './pokedexData'

export default function StatRow({ label, value }) {
  const width = Math.min(100, Math.round((value / maxStat) * 100))

  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-xs uppercase tracking-[0.16em] text-slate-300">{label}</span>
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${width}%` }} />
      </div>
      <span className="w-10 text-right text-sm font-semibold text-white">{value}</span>
    </div>
  )
}
