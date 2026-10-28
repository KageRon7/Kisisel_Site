// Site hangi alan adından açıldıysa onu al (ör. ferhttyurukk.abrdns.com)
const alanAdi = window.location.hostname.replace("www.", "");
document.getElementById("alanAdi").textContent = alanAdi || "Site bir alan adı üzerinden açılmadı";

// NS kayıtları alt alan adında değil, üst alan adında tutulur (abrdns.com)
const ustAlanAdi = alanAdi.split(".").slice(-2).join(".");

// Kayıt türleri, DNS'teki tür numaraları ve sorgulanacak adresler
// CNAME için önce alan adının kendisine, yoksa www adresine bakılır
const sorgular = [
  { tur: "A",     no: 1,  isimler: [alanAdi] },
  { tur: "CNAME", no: 5,  isimler: [alanAdi, "www." + alanAdi] },
  { tur: "NS",    no: 2,  isimler: [ustAlanAdi] },
  { tur: "TXT",   no: 16, isimler: [alanAdi] }
];

// Google'ın herkese açık DNS servisinden (DNS over HTTPS) bir kaydı sorgular
async function kayitGetir(isim, tur, no) {
  const cevap = await fetch("https://dns.google/resolve?name=" + isim + "&type=" + tur);
  const veri = await cevap.json();
  // Cevapta başka türler de olabilir (ör. A sorgusunda CNAME), sadece istenen türü al
  return (veri.Answer || []).filter(kayit => kayit.type === no).map(kayit => kayit.data);
}

// Sayfa açılınca tüm kayıtları otomatik sorgula ve tabloya yaz
async function dnsSorgula() {
  for (const sorgu of sorgular) {
    const hucre = document.getElementById("kayit-" + sorgu.tur);
    hucre.textContent = "Sorgulanıyor...";
    try {
      let sonuc = "Kayıt yok";
      for (const isim of sorgu.isimler) {
        const kayitlar = await kayitGetir(isim, sorgu.tur, sorgu.no);
        if (kayitlar.length > 0) {
          sonuc = (isim !== alanAdi ? isim + " → " : "") + kayitlar.join(", ");
          break;
        }
      }
      hucre.textContent = sonuc;
    } catch (hata) {
      hucre.textContent = "Sorgulanamadı (internet bağlantısını kontrol edin)";
    }
  }
}

dnsSorgula();

document.getElementById("yil").textContent = new Date().getFullYear();
