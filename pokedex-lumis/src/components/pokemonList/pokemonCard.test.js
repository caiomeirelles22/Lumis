import { describe, it, expect } from "vitest";
import { PokemonCard } from "./pokemonCard.js";

describe("PokemonCard Component", () => {
  const mockPokemon = {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["grass", "poison"],
  };

  it("deve renderizar o nome do pokémon corretamente", () => {
    const html = PokemonCard(mockPokemon);

    expect(html).toContain("bulbasaur");
  });

  it("deve formatar o ID com zeros à esquerda (ex: #0001)", () => {
    const html = PokemonCard(mockPokemon);

    expect(html).toContain("#0001");
  });

  it("deve exibir a imagem com o src e alt corretos", () => {
    const html = PokemonCard(mockPokemon);
    expect(html).toContain(`src="${mockPokemon.image}"`);
    expect(html).toContain(`alt="${mockPokemon.name}"`);
  });

  it("deve aplicar a cor correta baseada no tipo primário", () => {
    const html = PokemonCard(mockPokemon);

    expect(html).toContain('style="color: #11b047"');
    expect(html).toContain("grass");
  });

  it("deve renderizar a estrutura de article com as classes do Tailwind", () => {
    const html = PokemonCard(mockPokemon);
    expect(html).toContain("article");
    expect(html).toContain("bg-card-bg");
    expect(html).toContain("rounded-card");
  });
  it('deve aplicar as classes de largura mínima e máxima para o Flexbox', () => {
  const mockPokemon = { id: 1, name: 'bulbasaur', image: 'img.png', types: ['grass'] };
  const html = PokemonCard(mockPokemon);
  
  expect(html).toContain('min-w-40');
  expect(html).toContain('max-w-55');
  expect(html).toContain('flex-1');
});
});
