# Pokédex – Desafio Técnico Lumis

Aplicação web para exploração de Pokémons utilizando a **PokéAPI**, desenvolvida com foco em **performance**, **organização de código** e **experiência do usuário**, empregando **JavaScript Vanilla**, **Tailwind CSS** e **Vite**.

---

## 🌐 Demo Online

A aplicação está disponível em produção no link abaixo:

🔗 **https://lumis-phi.vercel.app/**

---

## 📌 Visão Geral

O projeto consiste em uma Pokédex interativa que permite:
- Navegação paginada pela lista completa de Pokémons
- Busca por **nome** ou **ID**
- Filtro contextual por **tipo elemental**
- Renderização eficiente com carregamento sob demanda

A aplicação foi projetada para evitar overfetching, reduzir o custo de renderização e manter uma base de código modular, testável e de fácil evolução.

---

## 🚀 Fluxo de Funcionamento

### 1. Inicialização da Aplicação
No carregamento inicial, a aplicação:
- Renderiza a estrutura semântica base (header, busca, listagem e paginação)
- Inicializa um **estado global centralizado**, garantindo consistência entre componentes
- Dispara o primeiro carregamento paginado de dados

---

### 2. Estratégia de Carregamento de Dados
A aplicação não carrega toda a PokéAPI de forma imediata.

- Cada página requisita apenas **18 Pokémons**
- Em paralelo, um processo em background indexa **nomes e IDs** de todos os Pokémons
- Esse índice local viabiliza buscas instantâneas sem novas requisições desnecessárias

Essa abordagem equilibra **tempo de resposta inicial** e **capacidade de busca eficiente**.

---

### 3. Paginação Dinâmica
A paginação utiliza o conceito de **janela deslizante**, exibindo apenas páginas relevantes ao contexto atual.

Ao trocar de página:
- O offset correto é calculado
- Novos dados são requisitados
- A viewport retorna suavemente ao topo, melhorando a UX

---

### 4. Busca Híbrida e Contextual
A barra de busca atua de forma adaptativa:

- **Nome ou ID:**  
  Busca instantânea via índice local, retornando diretamente o Pokémon correspondente.

- **Tipo Elemental:**  
  Ao identificar um tipo válido (ex: `fire`, `water`), a aplicação altera o contexto e passa a paginar apenas Pokémons daquele tipo.

- **Debounce:**  
  Um mecanismo de atraso evita múltiplas requisições enquanto o usuário digita, reduzindo carga na API.

---

## 🧠 Arquitetura e Decisões de Engenharia

### Arquitetura Modular
O código foi organizado em camadas bem definidas:

- **Services** – Comunicação exclusiva com a PokéAPI  
- **Logic** – Regras de negócio puras (paginação, filtros, validações)  
- **Components** – Unidades visuais reutilizáveis  

Essa separação melhora legibilidade, testabilidade e escalabilidade.

---

### Gerenciamento de Estado
O estado global atua como **single source of truth**, garantindo sincronização entre busca, paginação e renderização, inclusive em mudanças de contexto.

---

## 🛠️ Stack Tecnológica e Motivações

A escolha das ferramentas foi guiada por três pilares: **velocidade de desenvolvimento**, **performance final** e **confiabilidade**.

### 🍦 JavaScript Vanilla (ES6+)
A opção por **JavaScript Vanilla** foi intencional para evidenciar domínio dos **fundamentos da linguagem e das APIs nativas do navegador**.

- **Fundamentos sólidos:** Manipulação direta do DOM, controle manual de estado, lógica assíncrona e consumo de APIs sem abstrações.
- **Performance:** Ausência de overhead de bibliotecas resulta em tempos de carregamento e resposta mais rápidos.
- **Bundle enxuto:** Apenas código essencial para o funcionamento da aplicação.

### ⚡ Vite
- **HMR:** Atualizações instantâneas sem perda de estado
- **Build otimizado:** Bundles leves e eficientes via Rollup

### 🎨 Tailwind CSS
- **Utility-first:** Layouts responsivos com CSS mínimo
- **Tokens via `@theme`:** Padronização visual e baixo custo de manutenção

### 🧪 Vitest
- **Execução rápida:** Compartilha pipeline com o Vite
- **JSDOM:** Testes de componentes sem browser real

---

## ✅ Qualidade e Testes

- **Testes Unitários:** Funções puras e componentes isolados
- **Testes de Integração:** Fluxo completo  
  **Busca → Lógica → Renderização**

---

## 📦 Como Executar

```bash
npm install
npm run dev
npm test
