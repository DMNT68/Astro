import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { createSignal, Show, type Component } from 'solid-js';

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
    const [isVisible, setVisible] = createSignal(true);

    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem('favoritesPokemon') || '[]',
        ) as FavoritePokemon[];

        const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

        localStorage.setItem('favoritesPokemon', JSON.stringify(newFavorites));
        setVisible(false);
    };

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col items-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img
                        src={urlImg}
                        width={96}
                        height={96}
                        alt={pokemon.name}
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />
                    <p class="capitalize">
                        #{pokemon.id} {pokemon.name}
                    </p>
                </a>
                <button class="text-red-400" onClick={deleteFavorite}>
                    Borrar
                </button>
            </div>
        </Show>
    );
};
