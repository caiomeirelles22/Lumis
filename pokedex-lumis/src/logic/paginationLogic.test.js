import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getPaginationData } from './paginationLogic.js';
import { state } from '../store.js';
import { pokemonService } from '../services/api.js';

vi.mock('../services/api.js', () => ({
  pokemonService: {
    fetchPokemons: vi.fn(),
    fetchByType: vi.fn(),
  }
}));

describe('paginationLogic', () => {
  beforeEach(() => {
    state.itemsPerPage = 18;
    state.searchContext = 'all';
    state.currentType = null;
    vi.clearAllMocks();
  });

  it('deve calcular o offset correto e chamar fetchPokemons na lista geral', async () => {
    const pageToLoad = 2;
    const expectedOffset = 36;
    
    pokemonService.fetchPokemons.mockResolvedValue(new Array(18).fill({}));

    const result = await getPaginationData(pageToLoad);

    expect(pokemonService.fetchPokemons).toHaveBeenCalledWith(expectedOffset, state.itemsPerPage);
    expect(result.newPage).toBe(pageToLoad);
    expect(result.isLastPage).toBe(false);
  });

  it('deve chamar fetchByType quando o contexto for de tipo', async () => {
    state.searchContext = 'type';
    state.currentType = 'fire';
    const pageToLoad = 0;

    pokemonService.fetchByType.mockResolvedValue(new Array(10).fill({}));

    const result = await getPaginationData(pageToLoad);

    expect(pokemonService.fetchByType).toHaveBeenCalledWith('fire', 0);
    expect(result.isLastPage).toBe(true);
  });

  it('deve identificar a última página da lista geral (limite 1025)', async () => {
    const lastPagendex = 56; 
    pokemonService.fetchPokemons.mockResolvedValue(new Array(18).fill({}));

    const result = await getPaginationData(lastPagendex);

    expect(result.isLastPage).toBe(true);
  });

  it('deve retornar isLastPage false se a lista de tipos retornar exatamente 18 itens', async () => {
    state.searchContext = 'type';
    state.currentType = 'water';
    
    pokemonService.fetchByType.mockResolvedValue(new Array(18).fill({}));

    const result = await getPaginationData(0);

    expect(result.isLastPage).toBe(false);
  });
});