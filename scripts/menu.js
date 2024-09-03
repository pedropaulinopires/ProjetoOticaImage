let btnMenu = document.getElementById("btn-menu");
let divsMenuMobile = [...btnMenu.children];

let menuAtivo = (bool) => {
    if (bool) {
      divsMenuMobile.forEach((ele) => {
        ele.classList.add("active");
      });
    } else {
      divsMenuMobile.forEach((ele) => {
        ele.classList.remove("active");
      });
    }
  };

  btnMenu.addEventListener("click", () => btnMenu.classList.toggle("active"))