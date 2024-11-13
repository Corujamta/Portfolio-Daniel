
//wow 
new WOW().init();
// Banner
$('.slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Galeria

$('.galeria').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//  forms
function EnviarWhats() {

  var form = document.querySelector('.slick-active form[name="orcamento"]');

  if (form) {
    console.log("Formulário encontrado no slide ativo:", form);
  }



  var site = "Site Ideia Tech 360 - Orçamento";
  var form = document.forms['orcamento']

  var nome = form.elements['nome'].value;
  var email = form.elements['email'].value;
  var fone = form.elements['fone'].value;
  var mens = form.elements['mens'].value;

  if (nome === '') {
    alert('Por favor, Insira seu nome')
    return false;
  }
  // Expressão regular para validar formato de e-mail
   const exEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!exEmail.test(email)) {
    alert('Por favor, Insira um email valido')
    return false;
  }


  // Expressão regular para validar telefone no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  const exFone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  if (!exFone.test(fone)) {
    alert('Por favor, Insira um telefone valido no formato (XX) XXXXX-XXXX')
    return false;
  }

  if (mens === '') {
    alert('Por favor, Insira sua mensagem')
    return false;
  }
  if (mens.length < 10) {
    alert('Mensagem sem o minimo de caracteres ')
    return false;
  }

  var numWhats = '5511987995903';
  var quebraDeLinha = '%0A';

  nome = window.encodeURIComponent(nome);

  fone = window.encodeURIComponent(fone);

  email = window.encodeURIComponent(email);

  mens = window.encodeURIComponent(mens);

  window.open("https://wa.me/" + numWhats + "?text=" + site
    + quebraDeLinha + quebraDeLinha
    + nome + quebraDeLinha
    + email + quebraDeLinha
    + fone + quebraDeLinha
    + mens)

  window.open(url, '_blank');
}
document.querySelector(".abrir-menu").onclick = function () {
  document.documentElement.classList.add("menu-ativo")
}
document.querySelector(".fechar-menu").onclick = function () {
  document.documentElement.classList.remove("menu-ativo")
}

// Scroll
window.onscroll = function(){
  // console.log('testelog')
  var top = document.documentElement.scrolltop;
  // console.log(top)
  if(top > 400){
    document.getElementById("topo-fixo").classList.add('menu-fixo');
}
else{
  document.getElementById("topo-fixo").classList.remove('menu-fixo');
}
}