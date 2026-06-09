const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    navbar.classList.add('fixada');
  } else {
    navbar.classList.remove('fixada');
  }

}); 
const elementosReveal = document.querySelectorAll('.reveal');

const observador = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, 

  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
); 

elementosReveal.forEach(function (elemento) {
  observador.observe(elemento);
});

const linksAncora = document.querySelectorAll('a[href^="#"]');

linksAncora.forEach(function (link) {
  link.addEventListener('click', function (evento) {
    evento.preventDefault();
    const destino = link.getAttribute('href');
    const elementoDestino = document.querySelector(destino);
    if (elementoDestino) {
      elementoDestino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 
