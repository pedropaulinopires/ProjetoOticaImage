let btnMenu = document.getElementById("btn-menu");
let meunContent = document.getElementById("menu-mobile-content");
let divsMenuMobile = [...btnMenu.children];
let itensMenu = [...document.querySelectorAll("#menu-mobile-content a")];

let ativarDesativarMenu = () => {
  btnMenu.classList.toggle("active");
  meunContent.classList.toggle("active");
  document.body.classList.toggle("remove-scrolling");
}

btnMenu.addEventListener("click", () => ativarDesativarMenu());

itensMenu.forEach((ele) => {
  ele.addEventListener("click", () => {
    ativarDesativarMenu();
  });
});

window.addEventListener('resize', () =>{
  btnMenu.classList.remove("active");
  meunContent.classList.remove("active");
  document.body.classList.remove("remove-scrolling");
});