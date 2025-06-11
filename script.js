document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      alert(`Você clicou em: ${link.textContent}`);
    });
  });
});
