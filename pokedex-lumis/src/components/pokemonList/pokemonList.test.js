import { describe, it, expect } from 'vitest';
import { PokemonList } from './index.js';

describe('PokemonList Component', () => {
  const mockPokemons = [
    { id: 1, name: 'bulbasaur', image: 'img1.png', types: ['grass'] },
    { id: 4, name: 'charmander', image: 'img2.png', types: ['fire'] },
    { id: 7, name: 'squirtle', image: 'img3.png', types: ['water'] }
  ];

  it('deve renderizar a quantidade correta de cards', () => {
    const html = PokemonList(mockPokemons);
    
    expect(html).toContain('id="pokemon-grid"');
    
    const cardCount = (html.match(/<article/g) || []).length;
    expect(cardCount).toBe(mockPokemons.length);
  });

  it('deve aplicar as classes de grid responsivo do Tailwind', () => {
    const html = PokemonList(mockPokemons);
    
    expect(html).toContain('grid-cols-1');
    expect(html).toContain('sm:grid-cols-2');
    expect(html).toContain('md:grid-cols-3');
    expect(html).toContain('lg:grid-cols-6');
  });

  it('deve renderizar os nomes dos pokémons dentro da lista', () => {
    const html = PokemonList(mockPokemons);
    
    expect(html).toContain('bulbasaur');
    expect(html).toContain('charmander');
    expect(html).toContain('squirtle');
  });

  it('deve retornar um container vazio se a lista de pokémons estiver vazia', () => {
    const html = PokemonList([]);
    const cardCount = (html.match(/<article/g) || []).length;
    
    expect(cardCount).toBe(0);
    expect(html).toContain('id="pokemon-grid"');
  });
});