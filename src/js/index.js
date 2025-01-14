document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menuLinks = document.querySelector(".hamburgerMenuLinks");

  // Caminhos dos ícones
  const hamburgerIcon = "src/assets/Header/burger.svg";
  const closeIcon = "src/assets/Header/x-symbol.svg";

  // Alterna o menu quando o ícone de hambúrguer é clicado
  hamburger.addEventListener("click", () => {
      menuLinks.classList.toggle("active");

      // Alterna o ícone do menu hambúrguer
      const isActive = menuLinks.classList.contains("active");
      hamburger.querySelector("img").src = isActive ? closeIcon : hamburgerIcon;
  });

  // Monitora o redimensionamento da janela
  window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
          menuLinks.classList.remove("active"); // Oculta o menu em telas maiores
          hamburger.querySelector("img").src = hamburgerIcon; // Garante que o ícone volte para hambúrguer
      }
  });
});
