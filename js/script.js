// ============================================================
// ChuvAlerta - Global Solution 2026.2 - CitizenTech
// Disciplina: Web Development
// JavaScript puro, sem frameworks.
//
// A pagina precisa ter os elementos com os ids e classes
// listados no arquivo guia-webdev.md.
// ============================================================

// ---------------- 1. SLIDESHOW COM 3 IMAGENS ----------------

var slides = document.querySelectorAll(".slide");          // as 3 imagens
var botaoAnterior = document.getElementById("btn-anterior");
var botaoProximo = document.getElementById("btn-proximo");
var legenda = document.getElementById("legenda-slide");
var slideAtual = 0;
var TEMPO_TROCA_MS = 5000;

// Mostra so a imagem da posicao pedida e esconde as outras
function mostrarSlide(posicao) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[posicao].style.display = "block";

  // a legenda usa o texto alternativo da imagem
  if (legenda) {
    legenda.textContent = slides[posicao].alt + " (" + (posicao + 1) + " de " + slides.length + ")";
  }
}

function proximoSlide() {
  slideAtual = slideAtual + 1;
  if (slideAtual >= slides.length) {
    slideAtual = 0;                 // depois da ultima volta para a primeira
  }
  mostrarSlide(slideAtual);
}

function slideAnterior() {
  slideAtual = slideAtual - 1;
  if (slideAtual < 0) {
    slideAtual = slides.length - 1; // antes da primeira vai para a ultima
  }
  mostrarSlide(slideAtual);
}

if (slides.length > 0) {
  mostrarSlide(slideAtual);
  botaoProximo.addEventListener("click", proximoSlide);
  botaoAnterior.addEventListener("click", slideAnterior);
  setInterval(proximoSlide, TEMPO_TROCA_MS);   // troca sozinho a cada 5 segundos
}

// ---------------- 2. FORMULARIO COM VALIDACAO ----------------

var formulario = document.getElementById("form-contato");
var campoNome = document.getElementById("nome");
var campoEmail = document.getElementById("email");
var campoMensagem = document.getElementById("mensagem");
var avisoFormulario = document.getElementById("aviso-form");

// Marca o campo com erro e escreve a mensagem embaixo dele
function mostrarErro(campo, texto) {
  campo.style.borderColor = "#c8452c";
  var erro = document.getElementById("erro-" + campo.id);
  if (erro) {
    erro.textContent = texto;
  }
}

function limparErro(campo) {
  campo.style.borderColor = "";
  var erro = document.getElementById("erro-" + campo.id);
  if (erro) {
    erro.textContent = "";
  }
}

function validarFormulario(evento) {
  evento.preventDefault();          // impede o envio ate conferir os campos
  var formularioValido = true;

  limparErro(campoNome);
  limparErro(campoEmail);
  limparErro(campoMensagem);

  if (campoNome.value.trim() === "") {
    mostrarErro(campoNome, "Digite seu nome.");
    formularioValido = false;
  }

  if (campoEmail.value.trim() === "") {
    mostrarErro(campoEmail, "Digite seu e-mail.");
    formularioValido = false;
  } else if (campoEmail.value.indexOf("@") === -1 || campoEmail.value.indexOf(".") === -1) {
    mostrarErro(campoEmail, "Digite um e-mail valido, com @ e ponto.");
    formularioValido = false;
  }

  if (campoMensagem.value.trim() === "") {
    mostrarErro(campoMensagem, "Escreva sua mensagem.");
    formularioValido = false;
  }

  if (formularioValido) {
    avisoFormulario.textContent = "Mensagem recebida. Obrigado, " + campoNome.value.trim() + "!";
    avisoFormulario.style.color = "#2e8b57";
    formulario.reset();
  } else {
    avisoFormulario.textContent = "Confira os campos destacados.";
    avisoFormulario.style.color = "#c8452c";
  }
}

if (formulario) {
  formulario.addEventListener("submit", validarFormulario);
}

// ---------------- 3. MENU RESPONSIVO (DOM + CSS) ----------------

var botaoMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu");

// Em telas pequenas, o botao abre e fecha o menu trocando uma classe.
// O CSS da pagina decide como a classe "aberto" aparece.
if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("aberto");
  });
}

// ---------------- 4. SIMULADOR DE RISCO (DOM) ----------------
// Usa os mesmos limites do sensor e do programa em Python.

var campoNivel = document.getElementById("nivel-agua");
var botaoSimular = document.getElementById("btn-simular");
var resultadoSimulador = document.getElementById("resultado-simulador");
var LIMITE_ATENCAO = 15;
var LIMITE_PERIGO = 30;

function simularRisco() {
  var nivel = Number(campoNivel.value);

  if (campoNivel.value.trim() === "" || isNaN(nivel) || nivel < 0) {
    resultadoSimulador.textContent = "Digite a altura da agua em centimetros.";
    resultadoSimulador.style.color = "#c8452c";
    return;
  }

  if (nivel >= LIMITE_PERIGO) {
    resultadoSimulador.textContent = "PERIGO: nao atravesse. Va para um lugar alto.";
    resultadoSimulador.style.color = "#c8452c";
  } else if (nivel >= LIMITE_ATENCAO) {
    resultadoSimulador.textContent = "ATENCAO: evite a rua e avise os vizinhos.";
    resultadoSimulador.style.color = "#b37a00";
  } else {
    resultadoSimulador.textContent = "NORMAL: passagem livre. Continue acompanhando.";
    resultadoSimulador.style.color = "#2e8b57";
  }
}

if (botaoSimular) {
  botaoSimular.addEventListener("click", simularRisco);
}
