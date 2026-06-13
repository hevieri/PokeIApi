export const maxStat = 120
const maxPokemonId = 1010

export function clampPokemonId(id) {
  if (id < 1) return maxPokemonId
  if (id > maxPokemonId) return 1
  return id
}

function titleCase(value) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function statValue(pokemon, statName) {
  return pokemon.stats.find((stat) => stat.stat.name === statName)?.base_stat || 0
}

function normalizeApiPokemon(pokemon) {
  const officialArt = pokemon.sprites?.other?.['official-artwork']?.front_default
  const sprite = officialArt || pokemon.sprites?.front_default || ''

  return {
    id: pokemon.id,
    name: titleCase(pokemon.name),
    types: pokemon.types.map((slot) => titleCase(slot.type.name)),
    height: `${(pokemon.height / 10).toFixed(1)} m`,
    weight: `${(pokemon.weight / 10).toFixed(1)} kg`,
    ability: titleCase(pokemon.abilities[0]?.ability?.name || 'Unknown'),
    sprite,
    stats: {
      HP: statValue(pokemon, 'hp'),
      ATK: statValue(pokemon, 'attack'),
      DEF: statValue(pokemon, 'defense'),
    },
  }
}

export async function loadFromPokeApi(query) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toString().toLowerCase()}`)

  if (!response.ok) {
    throw new Error('Pokemon not found')
  }

  const data = await response.json()
  return normalizeApiPokemon(data)
}
