import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { For, createSignal } from 'solid-js';
import { FavoritePokemonCard } from './FavoritePokemonCard';

const getLocalStoragePokemons = (): FavoritePokemon[] =>
    JSON.parse(localStorage.getItem('favoritesPokemon') ?? '[]');

console.log('-->', getLocalStoragePokemons());

export const FavoritePokemons = () => {
    const [pokemos, setPokemos] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemos()}>{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}</For>
        </div>
    );
};
