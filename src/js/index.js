document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menuLinks = document.querySelector(".hamburgerMenuLinks");
  
    // Alterna o menu quando o ícone de hambúrguer é clicado
    hamburger.addEventListener("click", () => {
      menuLinks.classList.toggle("active");
    });
  
    // Monitora o redimensionamento da janela
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        menuLinks.classList.remove("active"); // Oculta o menu em telas maiores
      }
    });
  });
  