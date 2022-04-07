import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import axios from 'axios';

function Formulario ( props ) {

    const [pokemon,setPokemon] = useState( [] );

    const usePokemonEncuentra = () => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then( datos => {
            console.log( datos );
            setPokemon( (listaPrev) => datos.data.results );
        })
        .catch ( err => {
            console.log( err );
        });
        
    } 
    return(
        <div>
            <button  onClick={usePokemonEncuentra}>
                Fetch Pokemon
            </button>
            {
                pokemon.map( (pokemon, indice) => {
                    return(
                        <Pokemon key={`pokemon_`+indice} pokemon={pokemon} />
                    )
                })
            }
        </div>
        );

}
export default Formulario; 