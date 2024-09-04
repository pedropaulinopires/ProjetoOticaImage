const srcollToTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350)
    srcollToTop.classList.add("active");
  else
    srcollToTop.classList.remove("active");
});

let toTop = () => window.scrollTo(0, 0);

srcollToTop.addEventListener('click', () => toTop())