const slides = document.querySelectorAll(".slide");
const botaoAnterior = document.getElementById("btn-anterior");
const botaoProximo = document.getElementById("btn-proximo");
const legenda = document.getElementById("legenda-slide");
let slideAtual = 0;

function mostrarSlide(numero) {
  if (numero < 0) {
    numero = slides.length - 1;
  }

  if (numero >= slides.length) {
    numero = 0;
  }

  slides.forEach(function (slide) {
    slide.classList.remove("ativo");
  });

  slides[numero].classList.add("ativo");
  legenda.textContent = (numero + 1) + " / " + slides.length;
  slideAtual = numero;
}

botaoAnterior.addEventListener("click", function () {
  mostrarSlide(slideAtual - 1);
});

botaoProximo.addEventListener("click", function () {
  mostrarSlide(slideAtual + 1);
});

setInterval(function () {
  mostrarSlide(slideAtual + 1);
}, 6000);

mostrarSlide(0);
