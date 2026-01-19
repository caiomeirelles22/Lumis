import { describe, it, expect, vi, beforeEach } from "vitest";
import { handleSearchLogic } from "./searchLogic.js";
import { state } from "../store.js";
import { pokemonService } from "../services/api.js";

vi.mock("../services/api.js", () => ({
  pokemonService: {
    fetchPokemonDetails: vi.fn(),
  },
}));

describe("searchLogic", () => {
  beforeEach(() => {
    state.searchContext = "all";
    state.currentType = null;
    state.globalIndex = [
      {
        name: "pikachu",
        id: "25",
        url: "https://pokeapi.co/api/v2/pokemon/25/",
      },
      {
        name: "bulbasaur",
        id: "1",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
    ];
    vi.clearAllMocks();
  });

  it("deve retornar LOAD_PAGE quando o termo for vazio para resetar a lista", async () => {
    const result = await handleSearchLogic("");
    expect(result.type).toBe("LOAD_PAGE");
    expect(result.value).toBe(0);
    expect(state.searchContext).toBe("all");
  });

  it("deve identificar um tipo de pokemon e ativar o contexto de tipo", async () => {
    const result = await handleSearchLogic("fire");
    expect(result.type).toBe("LOAD_PAGE");
    expect(state.searchContext).toBe("type");
    expect(state.currentType).toBe("fire");
  });

  it("deve filtrar pokémons por nome no índice global", async () => {
    const mockDetails = {
      id: 25,
      name: "pikachu",
      image: "img.png",
      types: ["electric"],
    };
    pokemonService.fetchPokemonDetails.mockResolvedValue(mockDetails);

    const result = await handleSearchLogic("pika");

    expect(result.type).toBe("RENDER_DATA");
    expect(result.value).toHaveLength(1);
    expect(result.value[0].name).toBe("pikachu");
  });

  it("deve filtrar pokémons por ID exato no índice global", async () => {
    const mockDetails = {
      id: 1,
      name: "bulbasaur",
      image: "img.png",
      types: ["grass"],
    };
    pokemonService.fetchPokemonDetails.mockResolvedValue(mockDetails);

    const result = await handleSearchLogic("1");

    expect(result.type).toBe("RENDER_DATA");
    expect(result.value[0].id).toBe(1);
  });

  it("deve retornar EMPTY quando nenhum pokémon for encontrado", async () => {
    const result = await handleSearchLogic("pokemon-inexistente");
    expect(result.type).toBe("EMPTY");
    expect(result.value).toBe("pokemon-inexistente");
  });
});
