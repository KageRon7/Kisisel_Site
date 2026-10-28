// Site hangi alan adından açıldıysa onu al (ör. ferhttyurukk.abrdns.com)
const alanAdi = window.location.hostname.replace("www.", "");
document.getElementById("alanAdi").textContent = alanAdi || "Site bir alan adı üzerinden açılmadı";

// Üst alan adı: ferhttyurukk.abrdns.com -> abrdns.com
// NS kayıtları alt alan adında değil, üst alan adında tutulur.
const ustAlanAdi = alanAdi.split(".").slice(-2).join(".");

// Her kayıt türü: hangi adres sorgulanacak, DNS'teki tür numarası, kayıt yoksa ne yazılacak
const sorgular = [
  { tur: "A",     no: 1,  isim: alanAdi,    yoksa: "A kaydı yok" },
  { tur: "CNAME", no: 5,  isim: alanAdi,    yoksa: "CNAME yok (alan adı doğrudan IP'ye bağlı)" },
  { tur: "NS",    no: 2,  isim: ustAlanAdi, yoksa: "NS kaydı bulunamadı" },
  { tur: "MX",    no: 15, isim: alanAdi,    yoksa: "MX kaydı tanımlı değil: bu alan adı e-posta almıyor" }
];

async function dnsSorgula() {
  for (const sorgu of sorgular) {
    const hucre = document.getElementById("kayit-" + sorgu.tur);
    hucre.textContent = "Sorgulanıyor...";

    try {
      // Google'ın herkese açık DNS servisine soruyoruz (DNS over HTTPS)
      const cevap = await fetch("https://dns.google/resolve?name=" + sorgu.isim + "&type=" + sorgu.tur);
      const veri = await cevap.json();

      // Cevapta zincir halinde başka türler de gelebilir (ör. A sorgusunda önce CNAME),
      // sadece istediğimiz türdeki kayıtları alıyoruz
      const kayitlar = (veri.Answer || []).filter(kayit => kayit.type === sorgu.no);

      if (kayitlar.length > 0) {
        hucre.textContent = kayitlar.map(kayit => kayit.data).join(", ");
      } else {
        hucre.textContent = sorgu.yoksa;
      }
    } catch (hata) {
      hucre.textContent = "Sorgulanamadı (internet bağlantısını kontrol edin)";
    }
  }
}

document.getElementById("sorgulaButon").addEventListener("click", dnsSorgula);

document.getElementById("yil").textContent = new Date().getFullYear();
