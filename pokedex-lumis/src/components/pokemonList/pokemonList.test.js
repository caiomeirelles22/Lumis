import { describe, it, expect } from "vitest";
import { PokemonList } from "./index.js";

describe("PokemonList Component (Flexbox Layout)", () => {
  const mockPokemons = [
    { id: 1, name: "bulbasaur", image: "img1.png", types: ["grass"] },
    { id: 4, name: "charmander", image: "img2.png", types: ["fire"] },
  ];

  it("deve renderizar o container com as novas classes Flexbox", () => {
    const html = PokemonList(mockPokemons);

    expect(html).toContain("flex");
    expect(html).toContain("flex-wrap");
    expect(html).toContain("justify-center");
    expect(html).not.toContain("grid-cols-1");
  });

  it("deve renderizar a quantidade correta de cards", () => {
    const html = PokemonList(mockPokemons);
    const cardCount = (html.match(/<article/g) || []).length;
    expect(cardCount).toBe(2);
  });
});
