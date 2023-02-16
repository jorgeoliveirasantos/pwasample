if (!navigator.onLine) {
  document.getElementById("msg").innerHTML = 'Você não está conectado à internet.';
  document.getElementById("titulo").innerHTML = 'Desculpa';
  document.getElementById("img").setAttribute("src", "files/erro.svg");
} else {
  window.location.replace("https://aprendizado-jorgesouza.azurewebsites.net/");
}
