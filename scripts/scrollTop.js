const srcollToTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 350) {
    srcollToTop.classList.add("active");
  } else {
    srcollToTop.classList.remove("active");
  }
});

function toTop() {
  window.scrollTo(0, 0);
}

srcollToTop.addEventListener('click',()=>toTop())