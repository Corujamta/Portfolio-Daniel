
$('.galeria').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  particlesJS("particles-js", // Aqui especificamos o seletor
    {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 2,
              "opacity_min": 1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 600,
              "line_linked": {
                "opacity": 0.1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
  );

  document.getElementById('sobreButton').addEventListener('click', function() {
    // Seleciona a seção "Sobre"
    const sobreSection = document.getElementById('sobremim');
    
    // Faz o scroll suave para a seção "Sobre"
    sobreSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('especiBotao').addEventListener('click', function() {
    // Seleciona a seção "Sobre"
    const sobreSection = document.getElementById('habilidadesid');
    
    // Faz o scroll suave para a seção "Sobre"
    sobreSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('projetoBotao').addEventListener('click', function() {
    // Seleciona a seção "Sobre"
    const sobreSection = document.getElementById('projetosid');
    
    // Faz o scroll suave para a seção "Sobre"
    sobreSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('contatoBotao').addEventListener('click', function() {
    // Seleciona a seção "Sobre"
    const sobreSection = document.getElementById('contatoid');
    
    // Faz o scroll suave para a seção "Sobre"
    sobreSection.scrollIntoView({ behavior: 'smooth' });
  });
