import StatRow from './StatRow'

const visibleStats = ['HP', 'ATK', 'DEF']

export default function DataFrame({ pokemon, query, onQueryChange, onPrev, onNext, onScan, isLoading, error }) {
  return (
    <section className="rounded-[32px] border-2 border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/50">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Controles</p>
          <h3 className="text-2xl font-bold text-white">Datos</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-slate-700"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={onNext}
            className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-slate-700"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {visibleStats.map((name) => (
          <StatRow key={name} label={name} value={pokemon.stats?.[name] ?? 0} />
        ))}
      </div>

      <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={onScan}>
        <label className="block w-full rounded-2xl border border-slate-700 bg-slate-900/80 p-3 text-slate-300">
          <span className="sr-only">Buscar Pokémon</span>
          <input
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            type="search"
            placeholder="Nombre o ID"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
        <button
          type="submit"
          className="rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-emerald-400"
        >
          {isLoading ? 'Cargando...' : 'Scan'}
        </button>
      </form>

      {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
    </section>
  )
}
