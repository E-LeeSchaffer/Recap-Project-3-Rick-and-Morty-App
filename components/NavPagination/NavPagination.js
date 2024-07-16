export function NavPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.textContent = `${page} / ${maxPage}`;
  pagination.classList.add("navigation__pagination");
  // pagination.innerHTML = `<span class="navigation__pagination" data-js="pagination">page / maxPage111</span>

  return pagination;
}
