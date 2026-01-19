import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleSearchLogic } from '../logic/searchLogic.js';
import { PokemonList } from '../components/pokemonList/index.js';
import { state } from '../store.js';
import { pokemonService } from '../services/api.js';

vi.mock('../services/api.js', () => ({
  pokemonService: {
    fetchPokemonDetails: vi.fn(),
  }
}));

describe('Integração: Fluxo de Busca e Renderização', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="list-root"></div>
      <div id="pagination-root"></div>
    `;

    state.globalIndex = [
      { name: 'bulbasaur', id: '1', url: 'api/1' },
      { name: 'charmander', id: '4', url: 'api/4' }
    ];
  });

  it('deve filtrar e renderizar o card correto quando o utilizador pesquisa por nome', async () => {
    const listContainer = document.querySelector("#list-root");
    const term = 'char'; 

    const mockCharmander = { 
      id: 4, 
      name: 'charmander', 
      image: 'char.png', 
      types: ['fire'] 
    };
    pokemonService.fetchPokemonDetails.mockResolvedValue(mockCharmander);

    const result = await handleSearchLogic(term);

    expect(result.type).toBe('RENDER_DATA');

    listContainer.innerHTML = PokemonList(result.value);

    expect(listContainer.innerHTML).toContain('charmander');
    expect(listContainer.innerHTML).not.toContain('bulbasaur');
    
    expect(listContainer.innerHTML).toContain('#0004');
  });
});