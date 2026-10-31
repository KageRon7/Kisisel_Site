// =====================================================
// 1) YAZI MAKİNESİ EFEKTİ
// Dizideki cümleleri harf harf yazar, sonra siler, sıradakine geçer.
// =====================================================
const cumleler = [
  "Bilgisayar Mühendisliği öğrencisi",
  "Yapay zeka & robotik meraklısı",
  "Erasmus+ staj yeri arıyor"
];
let cumleNo = 0;      // şu an hangi cümledeyiz
let harfNo = 0;       // o cümlenin kaçıncı harfindeyiz
let siliyorMu = false;
const yaziAlani = document.getElementById("yaziMakinesi");

function yaz() {
  const cumle = cumleler[cumleNo];

  if (siliyorMu) {
    harfNo--;
  } else {
    harfNo++;
  }
  yaziAlani.textContent = cumle.substring(0, harfNo);

  let bekleme = siliyorMu ? 40 : 80;

  if (!siliyorMu && harfNo === cumle.length) {
    // Cümle bitti: biraz bekle, sonra silmeye başla
    siliyorMu = true;
    bekleme = 1800;
  } else if (siliyorMu && harfNo === 0) {
    // Silme bitti: sıradaki cümleye geç (sona gelince başa dön)
    siliyorMu = false;
    cumleNo = (cumleNo + 1) % cumleler.length;
    bekleme = 400;
  }

  setTimeout(yaz, bekleme);
}
yaz();


// =====================================================
// 2) AÇIK / KOYU TEMA
// Bootstrap 5.3, <html data-bs-theme="dark"> olunca koyu temaya geçer.
// Seçimi localStorage'a kaydediyoruz ki sayfa yenilenince hatırlansın.
// =====================================================
const temaButonu = document.getElementById("temaButonu");
const html = document.documentElement;

function temaUygula(tema) {
  html.setAttribute("data-bs-theme", tema);
  temaButonu.innerHTML = tema === "dark"
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon-stars"></i>';
}

// Sayfa açılınca kayıtlı temayı yükle
let kayitliTema = "light";
try {
  kayitliTema = localStorage.getItem("tema") || "light";
} catch (e) { /* localStorage kapalıysa açık temada kal */ }
temaUygula(kayitliTema);

temaButonu.addEventListener("click", function () {
  const yeniTema = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  temaUygula(yeniTema);
  try { localStorage.setItem("tema", yeniTema); } catch (e) {}
});


// =====================================================
// 3) YETENEK FİLTRESİ
// Butondaki data-filtre ile kartlardaki data-kategori eşleşirse kart görünür.
// =====================================================
const filtreButonlari = document.querySelectorAll("[data-filtre]");
const yetenekler = document.querySelectorAll(".yetenek");

filtreButonlari.forEach(function (buton) {
  buton.addEventListener("click", function () {
    // Aktif butonu değiştir
    filtreButonlari.forEach(b => b.classList.remove("active"));
    buton.classList.add("active");

    const secilen = buton.dataset.filtre;
    yetenekler.forEach(function (kart) {
      if (secilen === "hepsi" || kart.dataset.kategori === secilen) {
        kart.classList.remove("gizli");
      } else {
        kart.classList.add("gizli");
      }
    });
  });
});


// =====================================================
// 4) İLETİŞİM FORMU DOĞRULAMA
// Sunucumuz olmadığı için form, kontrolden geçince kullanıcının
// e-posta programını hazır mesajla açar (mailto).
// =====================================================
const form = document.getElementById("iletisimFormu");
const adKutusu = document.getElementById("ad");
const epostaKutusu = document.getElementById("eposta");
const mesajKutusu = document.getElementById("mesaj");
const sayac = document.getElementById("karakterSayaci");
const sonuc = document.getElementById("formSonucu");

// Bir kutuyu geçerli/geçersiz olarak işaretler (Bootstrap sınıfları)
function isaretle(kutu, gecerliMi) {
  kutu.classList.toggle("is-valid", gecerliMi);
  kutu.classList.toggle("is-invalid", !gecerliMi);
  return gecerliMi;
}

// Mesaj yazıldıkça karakter sayısını güncelle
mesajKutusu.addEventListener("input", function () {
  sayac.textContent = mesajKutusu.value.length;
});

form.addEventListener("submit", function (olay) {
  olay.preventDefault(); // sayfanın yenilenmesini engelle

  const ad = adKutusu.value.trim();
  const eposta = epostaKutusu.value.trim();
  const mesaj = mesajKutusu.value.trim();

  // Basit e-posta kalıbı: bir şey @ bir şey . bir şey
  const epostaKalibi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const adTamam = isaretle(adKutusu, ad.length >= 3);
  const epostaTamam = isaretle(epostaKutusu, epostaKalibi.test(eposta));
  const mesajTamam = isaretle(mesajKutusu, mesaj.length >= 10);

  if (adTamam && epostaTamam && mesajTamam) {
    sonuc.textContent = "Teşekkürler " + ad + "! E-posta programınız açılıyor...";
    sonuc.classList.remove("d-none");

    const konu = encodeURIComponent("Kişisel siteden mesaj: " + ad);
    const govde = encodeURIComponent(mesaj + "\n\n— " + ad + " (" + eposta + ")");
    window.location.href = "mailto:yurukferhat595@gmail.com?subject=" + konu + "&body=" + govde;

    form.reset();
    sayac.textContent = "0";
    [adKutusu, epostaKutusu, mesajKutusu].forEach(k => k.classList.remove("is-valid"));
  } else {
    sonuc.classList.add("d-none");
  }
});


// =====================================================
// 5) YUKARI ÇIK BUTONU
// Sayfa 400px'ten fazla kaydırılınca görünür.
// =====================================================
const yukariButonu = document.getElementById("yukariButonu");

window.addEventListener("scroll", function () {
  yukariButonu.classList.toggle("goster", window.scrollY > 400);
});

yukariButonu.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// =====================================================
// 6) KAYDIRINCA BELİREN BÖLÜMLER
// IntersectionObserver: bir eleman ekrana girince haber verir.
// =====================================================
const bolumler = document.querySelectorAll("section .container");
bolumler.forEach(b => b.classList.add("belir"));

const gozcu = new IntersectionObserver(function (girdiler) {
  girdiler.forEach(function (girdi) {
    if (girdi.isIntersecting) {
      girdi.target.classList.add("gorundu");
      gozcu.unobserve(girdi.target); // bir kez belirmesi yeterli
    }
  });
}, { threshold: 0.15 });

bolumler.forEach(b => gozcu.observe(b));


// =====================================================
// 7) TELEFONDA MENÜDEN SEÇİM YAPINCA MENÜYÜ KAPAT
// =====================================================
document.querySelectorAll("#menuIcerik .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.getElementById("menuIcerik");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});


// =====================================================
// 8) ALT BİLGİDEKİ YIL
// =====================================================
document.getElementById("yil").textContent = new Date().getFullYear();
