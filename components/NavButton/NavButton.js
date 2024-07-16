export function NavButton(label, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  button.className = "button";
  button.addEventListener("click", onClick);
  return button;
}
