import { useState } from 'react'
import Home from './pages/Home.jsx'
import Stats from './pages/Stats.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <main className="min-h-screen bg-[#090b0f] text-white p-6">
      <div className="mx-auto max-w-6xl rounded-[32px] border-2 border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-emerald-300/80">Pokeappi</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Pokeappi</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Explora datos de Pokémon y consulta sus estadísticas con datos reales de PokéAPI.
          </p>
        </header>

        {page === 'home' ? (
          <Home onGoStats={() => setPage('stats')} />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.45em] text-emerald-300/80">Página</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Estadísticas</h2>
              </div>
              <button
                type="button"
                onClick={() => setPage('home')}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Volver al inicio
              </button>
            </div>

            <Stats />
          </div>
        )}
      </div>
    </main>
  )
}
