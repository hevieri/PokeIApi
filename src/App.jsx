import Pokedex from './components/pokedex/Pokedex.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-[#090b0f] text-white p-6">
      <div className="mx-auto max-w-6xl rounded-[32px] border-2 border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-emerald-300/80">Pokédex</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Pokeappi</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Busca pokémon por nombre o ID y visualiza sus estadísticas básicas con datos reales desde PokéAPI.
          </p>
        </header>

        <Pokedex />
      </div>
    </main>
  )
}
