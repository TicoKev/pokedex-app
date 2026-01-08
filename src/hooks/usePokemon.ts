import { useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react';
import type { PokemonDetails } from '../shared';
import { URL } from '../URL/URL';

export default function usePokemon() {
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const requestIDRef = useRef(0);

    async function getPokemon() {
        if (!search.trim()) return;
        const searchNormalized = search.trim().toLowerCase();
        const basedURL = URL + searchNormalized;
        requestIDRef.current += 1;
        const currentRequestID = requestIDRef.current;
    
        setLoading(true);
        setError(null);
        setSearch('');
    
        try {
          const response = await fetch(basedURL);
    
          if (!response.ok) {
            throw new Error(
              `Error HTTP: ${response.status} - ${response.statusText}`
            );
          }
    
          const data = await response.json();
    
          if (currentRequestID === requestIDRef.current) {
            const searchedPokemon = {
              name: data.name,
              id: data.id,
              sprite: data.sprites.front_default,
              types: data.types,
              abilities: data.abilities
            };
    
            setPokemon(searchedPokemon);
            setLoading(false);
          }
        } catch (err) {
          if (currentRequestID === requestIDRef.current) {
            setError('Error while retrieving the data ' + err );
            console.error(err, error);
            setLoading(false);
          }
        }
      }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (search.trim() === '') {
        alert('The task cannot be empty');
        return;
      }
      getPokemon();
      setSearch('');
    }
  };

  const handleClearPokemon = () => {
    setPokemon(null)
  }


  const capitalizeFirstLetter = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return {
    pokemon,
    loading,
    error,
    search,
    setPokemon,
    setLoading,
    setError,
    setSearch,
    handleChange,
    handleInput,
    getPokemon,
    handleClearPokemon,
    capitalizeFirstLetter
  }
}
