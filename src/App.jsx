/**
 * App
 *
 * Componente raíz de la aplicación. Maneja la navegación entre las
 * páginas usando un estado local simple (page). Incluye el NavBall
 * como navegación flotante. El estado pendingPokemonId permite
 * navegar a un Pokémon específico desde otras páginas.
 */

import { useState, useCallback } from 'react'
import Home from './pages/Home.jsx'
import TrainerPage from './pages/TrainerPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import GiftPage from './pages/GiftPage.jsx'
import Stats from './pages/Stats.jsx'
import PokedexPage from './pages/PokedexPage.jsx'
import About from './pages/About.jsx'
import CarePage from './pages/CarePage.jsx'
import NavBall from './components/NavBall.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [pendingPokemonId, setPendingPokemonId] = useState(null)

  const goToGift = useCallback(() => setPage('gift'), [])
  const goToWelcome = useCallback(() => setPage('welcome'), [])
  const goToStats = useCallback((id) => {
    setPendingPokemonId(id ?? null)
    setPage('stats')
  }, [])
  const goToCare = useCallback((id) => {
    setPendingPokemonId(id ?? null)
    setPage('care')
  }, [])

  const renderPage = () => {
    switch (page) {
      case 'trainer':
        return <TrainerPage onGoGift={goToGift} onGoWelcome={goToWelcome} />
      case 'welcome':
        return <WelcomePage onComplete={() => setPage('trainer')} />
      case 'gift':
        return <GiftPage onComplete={() => setPage('trainer')} />
      case 'stats':
        return <Stats key={pendingPokemonId ?? 'default'} initialPokemonId={pendingPokemonId} onGoCare={goToCare} />
      case 'care':
        return <CarePage pokemonId={pendingPokemonId} onBack={() => setPage('stats')} />
      case 'pokedex':
        return <PokedexPage onGoStats={goToStats} />
      case 'about':
        return <About />
      case 'home':
      default:
        return <Home onGoStats={() => setPage('trainer')} />
    }
  }

  return (
    <main className="min-h-screen px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 pb-20">
      {renderPage()}
      <NavBall currentPage={page} onNavigate={setPage} />
    </main>
  )
}
