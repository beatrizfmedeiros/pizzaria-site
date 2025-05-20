// Barra de navegação com responsividade para mobile com Jquery
$(document).ready(function() {
  $('#mobile_btn').on('click', function(){
    // Alterna a classe active no mobile_menu quando clicado, expandido seu conteúdo
    $('#mobile_menu').toggleClass('active');
    // Quando clicado, procura a tag <i> onde está o ícone menu 'hamburguer' dentro do botão mobile_btn e altera para um ícone de X.
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });
});

// Esta função é executada sempre que o usuário rola a página
window.onscroll = function () {
  // Calcula a quantidade rolada da página (do topo até a posição atual)
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Calcula a altura total que pode ser rolada (altura total - altura da janela)
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calcula a porcentagem rolada da página
  let scrolled = (winScroll / height) * 100;

  // Altera a largura da barra de progresso para refletir o scroll atual
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Anima a aparição das seções conforme entram na tela
  document.querySelectorAll(".section").forEach(section => {
    const position = section.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      section.classList.add("visible"); // Adiciona classe visível para aplicar animações CSS
    }
  });
};

// Ao clicar no botão "Login", exibe o modal correspondente
document.getElementById("loginBtn").onclick = () => {
  document.getElementById("loginModal").style.display = "flex";
};

// Ao clicar no botão "Cadastro", exibe o modal correspondente
document.getElementById("registerBtn").onclick = () => {
  document.getElementById("registerModal").style.display = "flex";
};

// Adiciona funcionalidade aos botões de fechar (X)
document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    const modalId = btn.getAttribute("data-close"); // Pega o ID do modal a ser fechado
    document.getElementById(modalId).style.display = "none";
  };
});

// Fecha o modal se o usuário clicar fora da área de conteúdo
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Rola a página suavemente até a seção com o ID informado
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
// Índice do slide atual
let currentSlide = 0;

// Seleciona todos os slides dentro do slider
const slides = document.querySelectorAll(".slide");

// Função para exibir um slide específico com base no índice
function showSlide(index) {
  // Se ultrapassar o último slide, volta ao primeiro
  if (index >= slides.length) currentSlide = 0;
  // Se for menor que o primeiro, vai para o último
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  // Move o slide para mostrar o slide atual
  const slider = document.querySelector(".slider");
  slider.style.transform = "translateX(-" + currentSlide * 100 + "%)";

  // Atualiza o destaque visual do slide atual
  slides.forEach((slide, idx) => {
    slide.classList.remove("active"); // Remove a classe de todos os slides
    if (idx === currentSlide) slide.classList.add("active"); // Adiciona no slide atual
  });
}

// Funções globais para os botões de navegação "Anterior" e "Próximo"
window.nextSlide = function () {
  showSlide(currentSlide + 1);
};

window.prevSlide = function () {
  showSlide(currentSlide - 1);
};

// Avança o slider automaticamente a cada 5 segundos
setInterval(function () {
  showSlide(currentSlide + 1);
}, 5000);


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // impede o envio real do formulário
  alert("Mensagem enviada com sucesso!");
  this.reset(); // limpa o formulário (opcional)
});