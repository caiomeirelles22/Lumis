export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="w-full py-8 mt-auto border-t border-gray-50">
      <div class="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <p class="text-text-secondary text-xs md:text-sm font-medium">
          &copy; ${currentYear} - Todos os direitos reservados. Desenvolvido por Caio Meirelles para o Desafio Lumis.
        </p>
      </div>
    </footer>
  `;
}
