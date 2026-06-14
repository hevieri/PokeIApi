export default function Home({ onGoStats }) {
  return (
    <section className="space-y-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.45em] text-emerald-300/80">Bienvenido</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Pokeappi</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
          Explora datos de Pokémon, busca por nombre o ID y consulta las estadísticas reales de la PokéAPI.
        </p>
      </div>

      <button
        type="button"
        onClick={onGoStats}
        className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Ir a estadísticas
      </button>
    </section>
  )
}
