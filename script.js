document.getElementById("selamButon").addEventListener("click", function () {
  document.getElementById("selamMesaj").textContent = "Merhaba! Siteme hoş geldin 👋";
});

document.getElementById("yil").textContent = new Date().getFullYear();
