// Barra de progresso do scroll
window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Mostrar seções ao rolar
  document.querySelectorAll(".section").forEach(section => {
    const position = section.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

// Abrir e fechar modais
document.getElementById("loginBtn").onclick = () => {
  document.getElementById("loginModal").style.display = "flex";
};
document.getElementById("registerBtn").onclick = () => {
  document.getElementById("registerModal").style.display = "flex";
};
document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    const modalId = btn.getAttribute("data-close");
    document.getElementById(modalId).style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Navegação suave para as seções
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Slider depoimentos
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
