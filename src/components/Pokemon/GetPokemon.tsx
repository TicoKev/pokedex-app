import usePokemon from '../../hooks/usePokemon';

export default function GetPokemon() {
  
  const { pokemon, loading, search, error, handleChange, handleInput, getPokemon, handleClearPokemon, capitalizeFirstLetter } = usePokemon()

  return (
    <>
        <div className='flex flex-col gap-1.5 mt-10'>
          <h1 className='font-bold text-5xl'>Pokédex</h1>
          <span className='text-xs'>Type a pokémon name to see its stats</span>
        </div>

        <div 
          className='flex gap-2 items-center justify-center h-9 text-md px-3 mb-10'
        >
          <label htmlFor='name'>Name:</label>
          <input 
            onChange={handleChange} 
            type='text'
            id='name' 
            value={search} 
            onKeyDown={handleInput}
            className='border border-gray-500 rounded-md shadow-sm py-1.5'
            />

          <button 
            onClick={getPokemon} 
            className='bg-yellow-400 rounded-md px-3 py-1.5 text-center shadow-sm'
          >
            Search
          </button>

        </div>

        {loading && <p className='font-bold text-xl'>Loading...</p>}

        {error && <p className=' font-bold text-xl text-red-500'>{error}</p>}

        {!loading && !error && pokemon && (
          
          <div className='flex flex-col gap-5 w-dvw justify-center items-center'>

            <div>
              <h2 className='font-bold text-3xl'>{capitalizeFirstLetter(pokemon?.name)}</h2>
            </div>
            
            <div>
              {pokemon.sprite && (
                <img src={pokemon?.sprite} alt={`${search} sprite`} className='w-44' />
              )}

              <div>
                <p className='text-xl px-2 py-1.5 font-medium'>Type:</p>
                <ul className='flex gap-5 justify-center text-xl '>
                  {pokemon.types.map(t => (
                    <li 
                      key={t.slot}
                      className='py-1.5'
                    >
                      {capitalizeFirstLetter(t.type.name)}
                    
                    </li>
                  ))}
                </ul>
                <p className='text-xl px-2 py-1.5 font-medium'>Abilities:</p>

                <ul className='flex gap-5 justify-center items-center text-xl'>
                  
                  {pokemon.abilities.map(a =>(
                    <li 
                      key={a.slot}
                      className='py-1.5'
                    >
                      {capitalizeFirstLetter(a.ability.name)}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>

            <div>
              <button 
                onClick={handleClearPokemon}
                className='p-2 bg-red-600 text-white font-bold text-xl rounded-md'
              >
                Clear Pokémon
              </button>
            </div>  
            
          </div>
        )}
    </>
  );
}
