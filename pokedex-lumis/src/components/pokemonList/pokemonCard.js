const typeColors = {
  grass: '#11b047',
  bug: '#a6b91a',
  dark: '#705746',
  dragon: '#6f35fc',
  electric: '#f7d02c',
  fairy: '#d685ad',
  fighting: '#c22e28',
  fire: '#ee8130',
  flying: '#a98ff3',
  ghost: '#735797',
  ground: '#e2bf65',
  ice: '#96d9d6',
  normal: '#a8a77a',
  poison: '#a33ea1',
  psychic: '#f95587',
  rock: '#b6a136',
  steel: '#b7b7ce',
  water: '#6390f0',
};

export function PokemonCard(pokemon) {
  const primaryType = pokemon.types[0].toLowerCase();
  const typeColor = typeColors[primaryType] || '#000000';

  return `
    <article class="flex-1 min-w-40 max-w-55 bg-card-bg rounded-card p-4 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-gray-200">
      <div class="flex justify-between w-full mb-2">
        <span class="text-[10px] font-bold uppercase tracking-wider" style="color: ${typeColor}">
          ${primaryType}
        </span>
        <span class="text-text-secondary text-xs font-bold">#${String(pokemon.id).padStart(4, "0")}</span>
      </div>
      
      <div class="w-full aspect-square flex items-center justify-center my-4">
        <img src="${pokemon.image}" alt="${pokemon.name}" class="w-full h-full object-contain" loading="lazy">
      </div>
      
      <h2 class="text-text-main font-bold capitalize text-sm text-center">${pokemon.name}</h2>
    </article>
  `;
}
