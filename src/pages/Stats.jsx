import Pokedex from '../components/pokedex/Pokedex.jsx'

export default function Stats() {
  return (
    <section>
      <header className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.45em] text-emerald-300/80">Estadísticas</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Consulta tu Pokédex</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
          Busca pokémon por nombre o ID y visualiza sus estadísticas básicas con datos reales desde PokéAPI.
        </p>
      </header>

      <Pokedex />
    </section>
  )
}
