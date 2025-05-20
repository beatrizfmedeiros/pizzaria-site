// Redirecionamento de login para Index
document.addEventListener("DOMContentLoaded", function () {
  const login = document.getElementById("login");

  if (login) {
    login.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "index.html";
    });
  }
// Redirecionamento de Casdastro para login
  const cadastro = document.getElementById("cadastro");

  if (cadastro) {
    cadastro.addEventListener("submit", function (event) {
      event.preventDefault(); 
      window.location.href = "login.html";
    });
  }
});
