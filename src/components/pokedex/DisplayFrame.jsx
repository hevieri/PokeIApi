export default function DisplayFrame({ pokemon, status }) {
  return (
    <section className="rounded-[32px] border-2 border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/50">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pokédex</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">{pokemon.name}</h2>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-100">
          {status}
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[200px_1fr]">
        <div className="flex items-center justify-center rounded-3xl bg-slate-900/80 p-4">
          {pokemon.sprite ? (
            <img src={pokemon.sprite} alt={pokemon.name} className="h-40 w-40 object-contain" />
          ) : (
            <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-slate-800 text-sm text-slate-500">
              Sin imagen
            </div>
          )}
        </div>

        <div className="grid gap-3 rounded-3xl bg-slate-900/80 p-5">
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="rounded-2xl bg-slate-950/80 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">ID</p>
              <p className="mt-2 text-xl font-semibold text-white">#{String(pokemon.id).padStart(3, '0')}</p>
            </div>
            <div className="rounded-2xl bg-slate-950/80 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Tipo</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {pokemon.types.map((type) => (
                  <span key={type} className="rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-emerald-300">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="rounded-2xl bg-slate-950/80 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Altura</p>
              <p className="mt-2 text-lg font-semibold text-white">{pokemon.height}</p>
            </div>
            <div className="rounded-2xl bg-slate-950/80 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Peso</p>
              <p className="mt-2 text-lg font-semibold text-white">{pokemon.weight}</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Habilidad</p>
            <p className="mt-2 text-base font-semibold text-white">{pokemon.ability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
