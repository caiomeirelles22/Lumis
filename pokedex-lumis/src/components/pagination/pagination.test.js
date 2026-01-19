import { describe, it, expect, vi, beforeEach } from "vitest";
import { Pagination } from "./index.js";
import { initPagination } from "./controller.js";

describe("Pagination Component", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="pagination-root"></div>';
  });

  it("deve renderizar os botões Anterior e Próximo", () => {
    const html = Pagination(0);
    document.querySelector("#pagination-root").innerHTML = html;

    expect(document.querySelector("#prev-page")).toBeTruthy();
    expect(document.querySelector("#next-page")).toBeTruthy();
  });

  it("deve mostrar a janela de páginas 1, 2, 3 quando estiver na página 1 (index 0)", () => {
    const html = Pagination(0);
    document.querySelector("#pagination-root").innerHTML = html;

    const pageButtons = document.querySelectorAll("[data-page]");
    expect(pageButtons[0].textContent.trim()).toBe("1");
    expect(pageButtons[1].textContent.trim()).toBe("2");
    expect(pageButtons[2].textContent.trim()).toBe("3");
  });

  it("deve deslizar a janela para 9, 10, 11 quando estiver na página 10 (index 9)", () => {
    const html = Pagination(9);
    document.querySelector("#pagination-root").innerHTML = html;

    const pageButtons = document.querySelectorAll("[data-page]");
    expect(pageButtons[0].textContent.trim()).toBe("9");
    expect(pageButtons[1].textContent.trim()).toBe("10");
    expect(pageButtons[2].textContent.trim()).toBe("11");
  });

  it("deve destacar a página atual com as classes de estilo ativas", () => {
    const currentPage = 5;
    const html = Pagination(currentPage);
    document.querySelector("#pagination-root").innerHTML = html;

    const activeButton = document.querySelector(`[data-page="${currentPage}"]`);
    expect(activeButton.classList.contains("bg-text-active")).toBe(true);
    expect(activeButton.classList.contains("text-white")).toBe(true);
  });

  it("deve chamar o callback onPageChange ao clicar no botão Próximo", () => {
    const onPageChange = vi.fn();
    document.querySelector("#pagination-root").innerHTML = Pagination(0);

    initPagination(onPageChange);

    document.querySelector("#next-page").click();
    expect(onPageChange).toHaveBeenCalledWith("next");
  });

  it("deve chamar o callback com o número correto ao clicar num botão de página", () => {
    const onPageChange = vi.fn();
    document.querySelector("#pagination-root").innerHTML = Pagination(0);

    initPagination(onPageChange);

    const pageThreeButton = document.querySelector('[data-page="2"]');
    pageThreeButton.click();

    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
