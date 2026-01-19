export function PokemonCard(pokemon) {
  return `
    <article class="bg-card-bg rounded-card p-4 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer">
      <div class="flex justify-between w-full mb-2">
        <span class="text-type-grass text-[10px] font-bold uppercase tracking-wider">Planta</span>
        <span class="text-text-secondary text-xs font-bold">#0001</span>
      </div>
      
      <div class="w-32 h-32 flex items-center justify-center my-4">
        <img src="${pokemon.image}" alt="${pokemon.name}" class="w-full h-full object-contain">
      </div>
      
      <h2 class="text-text-main font-bold capitalize text-sm">${pokemon.name}</h2>
    </article>
  `;
}