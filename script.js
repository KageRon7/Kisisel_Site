// Butona basınca mesaj göster
document.getElementById("selamButon").addEventListener("click", function () {
  document.getElementById("selamMesaj").textContent = "Merhaba! Siteme hoş geldin 👋";
});

// Footer'a bu yılı yaz
document.getElementById("yil").textContent = new Date().getFullYear();
