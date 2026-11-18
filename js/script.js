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
const formulario = document.getElementById("form-contato");
const campos = formulario.querySelectorAll("input, textarea");
const avisoForm = document.getElementById("aviso-form");

function mostrarErro(campo, texto) {
  const erro = document.getElementById("erro-" + campo.id);
  erro.textContent = texto;

  if (texto === "") {
    campo.parentElement.classList.remove("invalido");
  } else {
    campo.parentElement.classList.add("invalido");
  }
}

function validarCampo(campo) {
  const valor = campo.value.trim();

  if (valor === "") {
    mostrarErro(campo, "Preencha este campo.");
    return false;
  }

  if (campo.id === "email" && (valor.indexOf("@") === -1 || valor.indexOf(".") === -1)) {
    mostrarErro(campo, "Digite um e-mail válido.");
    return false;
  }

  mostrarErro(campo, "");
  return true;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let tudoCerto = true;

  campos.forEach(function (campo) {
    if (!validarCampo(campo)) {
      tudoCerto = false;
    }
  });

  if (tudoCerto) {
    const nome = document.getElementById("nome").value.trim();
    avisoForm.className = "aviso-form sucesso";
    avisoForm.textContent = "Obrigado, " + nome + "! Recebemos o seu aviso.";
    formulario.reset();
  } else {
    avisoForm.className = "aviso-form falha";
    avisoForm.textContent = "Preencha todos os campos antes de enviar.";
  }
});

campos.forEach(function (campo) {
  campo.addEventListener("input", function () {
    if (campo.parentElement.classList.contains("invalido")) {
      validarCampo(campo);
    }
  });
});
