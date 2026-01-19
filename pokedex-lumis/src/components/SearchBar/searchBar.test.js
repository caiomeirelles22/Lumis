import { describe, it, expect, vi, beforeEach } from "vitest";
import { SearchBar } from "./index.js";
import { initSearchBar } from "./controller.js";

describe("SearchBar Component", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="search-root">${SearchBar()}</div>`;
  });

  it("deve renderizar o campo de input com o ID correto", () => {
    const input = document.querySelector("#search-input");

    expect(input).toBeTruthy();
    expect(input.tagName).toBe("INPUT");

    expect(input.id).toBe("search-input");
  });

  it("deve exibir o placeholder correto para orientar o utilizador", () => {
    const input = document.querySelector("#search-input");
    const expectedPlaceholder = "Faça uma busca pelo nome do pokémon";

    expect(input.getAttribute("placeholder")).toBe(expectedPlaceholder);
  });

  it("deve ter as classes de estilo do Tailwind para o design arredondado", () => {
    const input = document.querySelector("#search-input");

    expect(input.classList.contains("bg-input-bg")).toBe(true);
    expect(input.classList.contains("rounded-search")).toBe(true);
  });

  it("deve disparar a função de busca após o input do utilizador", async () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();

    initSearchBar(onSearch);

    const input = document.querySelector("#search-input");
    input.value = "Pikachu";
    input.dispatchEvent(new Event("input"));

    vi.advanceTimersByTime(300);

    expect(onSearch).toHaveBeenCalledWith("pikachu");
    vi.useRealTimers();
  });
});
