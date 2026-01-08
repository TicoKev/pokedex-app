export interface PokemonType {
  slot: number
  type: {
    name: string
  }
}

export interface PokemonAbilities {
  ability: {
    name: string
  }
  slot: number
}

export interface PokemonDetails {
  name: string
  id: number
  sprite: string | null
  types: PokemonType []
  abilities: PokemonAbilities[]
}