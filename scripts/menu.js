let btnMenu = document.getElementById("btn-menu");
let btnMenuClose = document.getElementById("btn-close-menu");
let meunContent = document.getElementById("menu-mobile-content");
let divsMenuMobile = [...btnMenu.children];
let itensMenu = [...document.querySelectorAll(".item-menu")];



let ativarDesativarMenu = () => {

  let timeOutMenu = (ele) => {
    ele.classList.add('active');
  };

  btnMenu.classList.toggle("active");
  meunContent.classList.toggle("active");
  document.body.classList.toggle("remove-scrolling");

  clearTimeout(timeOutMenu);

  itensMenu.forEach((ele, index) => {
    if (ele.classList.contains('active')) {
      ele.classList.remove('active')
    } else {
      setTimeout(() => {
        timeOutMenu(ele)
      }, index * 200);
    }
  })
}

btnMenu.addEventListener("click", () => ativarDesativarMenu());
btnMenuClose.addEventListener("click", () => ativarDesativarMenu());

itensMenu.forEach((ele) => {
  ele.addEventListener("click", () => {
    ativarDesativarMenu();
  });
});

window.addEventListener('resize', () => {
  btnMenu.classList.remove("active");
  meunContent.classList.remove("active");
  document.body.classList.remove("remove-scrolling");
  itensMenu.forEach((ele) => {
    ele.classList.remove("active")
  })
});