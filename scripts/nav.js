document.addEventListener("DOMContentLoaded", function() {
    // Scroll suave ao clicar no menu
    var menuLinks = document.querySelectorAll('.nav');
    
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        debugger
        const targetId = this.getAttribute('data-navigation');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 90,  // Compensa a altura do menu fixo
          behavior: 'smooth'
        });
      });
    });
  
    // // Destacar sessão ativa no menu conforme o scroll
    // const sections = document.querySelectorAll('.section');
    // const options = {
    //   threshold: 0.7,  // Quando 70% da sessão está visível, considera ativa
    // };
  
    // const observer = new IntersectionObserver(function(entries) {
    //   entries.forEach(entry => {
    //     const id = entry.target.getAttribute('id');
    //     const link = document.querySelector(`a[href="#${id}"]`);
  
    //     if (entry.isIntersecting) {
    //       document.querySelectorAll('.menu-nav').forEach(link => link.classList.remove('active'));
    //       link.classList.add('active');
    //     }
    //   });
    // }, options);
  
    // sections.forEach(section => {
    //   observer.observe(section);
    // });
  });