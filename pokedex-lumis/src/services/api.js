const BASE_URL = "https://pokeapi.co/api/v2";

export const pokemonService = {
  /**
   
   * @param {number} offset
   * @param {number} limit 
   */

  async fetchPokemons(offset = 0, limit = 18) {
    try {
      const response = await fetch(
        `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
      );
      const data = await response.json();

      const detailPromises = data.results.map((pokemon) =>
        this.fetchPokemonDetails(pokemon.url),
      );
      return await Promise.all(detailPromises);
    } catch (error) {
      console.error("Erro ao buscar lista de pokémons:", error);
      throw error;
    }
  },

  async fetchPokemonDetails(urlOrName) {
    try {
      const response = await fetch(urlOrName);
      const data = await response.json();

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((t) => t.type.name),
      };
    } catch (error) {
      console.error(`Erro ao buscar detalhes do pokémon ${urlOrName}:`, error);
      return null;
    }
  },
};
