import { Suspense, use, useState } from "react"

export default function UseExample(){
    const [name, setName] = useState("");

    const fetchPokemon = () => {
        if (!name) return Promise.resolve();
        
        return fetch("https://pokeapi.co/api/v2/pokemon/"+ name).then(res => {
            if (res.ok) return res.json();
            return {error: true, message: "No found"};
        });
    };
    
    return (
        <>
        <form>
            <input
                placeholder="Ej. pikachu"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
        </form>
        <Suspense fallback= {<div>Cargando</div>}>
            <ShowPokemon pokemonPromise={fetchPokemon()}></ShowPokemon>
        </Suspense>
        </>
    );
}

function ShowPokemon({pokemonPromise}) {
    const pokemon = use(pokemonPromise);

    if (! pokemon) return null;
    if (pokemon?.error){
        return <div>Error: {pokemon.message}</div>
    }
    
    return(
        <div>
            Resultado:
            <article>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.nam}></img>
                <p>{pokemon.description}</p>
            </article>
        </div>
    );
}