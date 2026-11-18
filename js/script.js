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

const botaoMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const linksMenu = document.querySelectorAll(".nav-links a");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
});

const secoes = document.querySelectorAll("main section");

function marcarSecaoAtual() {
  let secaoAtual = "";

  secoes.forEach(function (secao) {
    if (window.scrollY >= secao.offsetTop - 150) {
      secaoAtual = secao.id;
    }
  });

  linksMenu.forEach(function (link) {
    link.classList.remove("ativo");

    if (link.getAttribute("href") === "#" + secaoAtual) {
      link.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", marcarSecaoAtual);
marcarSecaoAtual();

const campoNivel = document.getElementById("nivel-agua");
const botaoSimular = document.getElementById("btn-simular");
const resultado = document.getElementById("resultado-simulador");
const textoResultado = resultado.querySelector(".result-text");
const botoesTeste = document.querySelectorAll(".quick-values button");

function simularAlerta() {
  const nivel = Number(campoNivel.value);

  if (campoNivel.value === "" || nivel < 0 || nivel > 500) {
    resultado.className = "simulator-result erro";
    textoResultado.textContent = "Digite uma altura entre 0 e 500 cm.";
    return;
  }

  if (nivel >= 30) {
    resultado.className = "simulator-result perigo";
    textoResultado.textContent = "PERIGO: não atravesse. Saia de perto da água e procure um lugar seguro.";
  } else if (nivel >= 15) {
    resultado.className = "simulator-result atencao";
    textoResultado.textContent = "ATENÇÃO: evite a rua alagada e avise quem estiver por perto.";
  } else {
    resultado.className = "simulator-result normal";
    textoResultado.textContent = "NORMAL: a água está abaixo do limite. Continue acompanhando.";
  }
}

botaoSimular.addEventListener("click", simularAlerta);

campoNivel.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    simularAlerta();
  }
});

botoesTeste.forEach(function (botao) {
  botao.addEventListener("click", function () {
    campoNivel.value = botao.getAttribute("data-level");
    simularAlerta();
  });
});