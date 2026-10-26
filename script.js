const alanAdi = window.location.hostname.replace("www.", "");
document.getElementById("alanAdi").textContent = alanAdi || "Site bir alan adı üzerinden açılmadı";

const sorgular = [
  { tur: "A", isim: alanAdi },
  { tur: "CNAME", isim: "www." + alanAdi },
  { tur: "NS", isim: alanAdi },
  { tur: "MX", isim: alanAdi }
];

async function dnsSorgula() {
  for (const sorgu of sorgular) {
    const hucre = document.getElementById("kayit-" + sorgu.tur);
    hucre.textContent = "Sorgulanıyor...";

    try {
      const cevap = await fetch("https://dns.google/resolve?name=" + sorgu.isim + "&type=" + sorgu.tur);
      const veri = await cevap.json();

      if (veri.Answer) {
        hucre.textContent = veri.Answer.map(kayit => kayit.data).join(", ");
      } else {
        hucre.textContent = "Kayıt bulunamadı";
      }
    } catch (hata) {
      hucre.textContent = "Sorgulanamadı";
    }
  }
}

document.getElementById("sorgulaButon").addEventListener("click", dnsSorgula);

document.getElementById("yil").textContent = new Date().getFullYear();
