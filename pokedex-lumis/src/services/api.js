const BASE_URL = "https://pokeapi.co/api/v2";

export const pokemonService = {
  async fetchPokemons(offset = 0, limit = 18) {
    const response = await fetch(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
    );
    const data = await response.json();
    const detailPromises = data.results.map((p) =>
      this.fetchPokemonDetails(p.url),
    );
    return await Promise.all(detailPromises);
  },

  async fetchAllNames() {
    const response = await fetch(`${BASE_URL}/pokemon?limit=1500`);
    const data = await response.json();
    return data.results.map((p) => ({
      name: p.name,
      id: p.url.split("/").filter(Boolean).pop(),
      url: p.url,
    }));
  },

  async fetchPokemonDetails(urlOrName) {
    const response = await fetch(urlOrName);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map((t) => t.type.name),
      abilities: data.abilities.map((a) => a.ability.name),
    };
  },
  async fetchByType(typeName, offset = 0) {
    const response = await fetch(`${BASE_URL}/type/${typeName}`);
    const data = await response.json();

    const pokemonUrls = data.pokemon
      .slice(offset, offset + 18)
      .map((p) => p.pokemon.url);

    const detailPromises = pokemonUrls.map((url) =>
      this.fetchPokemonDetails(url),
    );
    return await Promise.all(detailPromises);
  },
};
