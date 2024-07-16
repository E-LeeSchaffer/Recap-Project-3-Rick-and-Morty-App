export function NavPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.textContent = `${page} / ${maxPage}`;
  pagination.classList.add("navigation__pagination");
  return pagination;
}
