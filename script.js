// =====================================================
// 1) PROJE BİLGİLERİ
// Her proje bir nesne (object). Karta tıklanınca bu bilgiler
// açılır pencereye (modal) yazılır. Yeni görsel eklemek için
// "gorseller" dizisine { src: "img/dosya.jpg", aciklama: "..." } eklemek yeterli.
// Henüz hazır olmayan görseller için { yerTutucu: true, aciklama: "..." } kullanılıyor.
// =====================================================
const projeler = {
  petRobot: {
    baslik: "Masaüstü Pet Robot",
    tur: "Ekip projesi · Devam ediyor",
    gorseller: [
      { yerTutucu: true, ikon: "bi-brush", aciklama: "Konsept çizimleri (yakında)" },
      { yerTutucu: true, ikon: "bi-rulers", aciklama: "Teknik resim (yakında)" }
    ],
    bolumler: [
      {
        baslik: "Vizyon",
        metin: "Bilgisayar başında uzun saatler geçiren insanlara eşlik eden, evcil bir hayvan sıcaklığı veren masaüstü bir robot. Yaklaşık 15 cm boyunda, kutu kafalı sevimli bir kedi. İlk sürümde konuşmuyor; duygularını beden diliyle ve yüz ekranındaki ifadelerle gösteriyor."
      },
      {
        baslik: "Mimari",
        liste: [
          "Robotun üzerinde zeka yok: ESP32 yalnızca servoları sürüyor ve seri porttan JSON komut alıyor.",
          "Beyin bilgisayarda Python ile çalışıyor; kamera görüntüsünden kullanıcının yüz ifadesini algılıyor.",
          "Donanım hazır olana kadar ekip, sanal bir donanım simülasyonu (HAL) üzerinde geliştirme yapıyor.",
          "Takımlar arası iletişim, önceden yazılmış JSON arayüz sözleşmeleriyle sağlanıyor."
        ]
      },
      {
        baslik: "Benim rolüm",
        metin: "7 kişilik ekibin lideriyim. Ekibi yapay zeka, gömülü sistemler ve görüntü işleme alt takımlarına ayırdım; mimariyi ve arayüzleri belirliyor, hocalarla ve tasarımcımızla iletişimi yürütüyorum."
      },
      {
        baslik: "Durum",
        metin: "Uçtan uca ilk demo çalıştı: kullanıcı gülümseyince ekrandaki kedi tepki veriyor. Sırada yüz animasyonları ve fiziksel gövde var."
      }
    ],
    etiketler: ["Python", "ESP32", "Görüntü işleme", "Servo", "Ekip liderliği"],
    github: "https://github.com/KageRon7/pet-robot"
  },

  itfaiye: {
    baslik: "Otonom İtfaiye Robotu",
    tur: "Erasmus · Robotik dersi · 2026",
    gorseller: [
      { src: "img/itfaiye-robotu.jpg", aciklama: "Robotun son hali" },
      { yerTutucu: true, ikon: "bi-rulers", aciklama: "Teknik resim (hazırlanıyor)" }
    ],
    bolumler: [
      {
        baslik: "Görev",
        metin: "Odalardan oluşan bir labirentte kendi başına dolaşıp yanan mumu bulan ve fanla söndüren robot. Portekiz'deki Erasmus dönemimde, robotik dersinde uluslararası bir öğrenci ekibiyle geliştirdik ve çalıştırdık."
      },
      {
        baslik: "Nasıl çalışıyor?",
        liste: [
          "Kontrolcü bir sonlu durum makinesi: BEKLE → GEZİN → HİZALAN → SÖNDÜR.",
          "Gezinme: sağ duvarı takip ediyor; oransal (P) kontrolcü robotu duvardan 17 cm uzakta tutuyor.",
          "Önde engel varsa sola dönüyor, sağdaki duvar kaybolunca kapı ya da köşe olduğunu anlayıp manevra yapıyor.",
          "Alev görülünce IR kamerayla aleve doğru hizalanıyor, yaklaşıp alev sönene kadar fanı çalıştırıyor.",
          "STOP butonu tüm durumlardan bağımsız kontrol ediliyor; robot her an durdurulabiliyor."
        ]
      },
      {
        baslik: "Donanım",
        liste: [
          "Arduino Mega 2560, H-köprüsüyle sürülen 2 DC motor",
          "3 ultrasonik mesafe sensörü (ön, sol, sağ)",
          "IR kamera ve UVTron alev dedektörü",
          "Çizgi sensörü, 2 çarpma sensörü, OLED ekran ve fan"
        ]
      },
      {
        baslik: "Yazılım",
        metin: "C++ ile yazıldı. Motor ve alev sensörü ayrı sınıflara (Motor, FlameSensor) ayrıldı; her alt sistem için ayrı test modları var."
      }
    ],
    etiketler: ["C++", "Arduino", "Sonlu durum makinesi", "P kontrol", "Sensörler"],
    github: "https://github.com/KageRon7/firefighting-robot"
  },

  medguard: {
    baslik: "MedGuard",
    tur: "Bireysel · Full-stack · 2026",
    gorseller: [
      { yerTutucu: true, ikon: "bi-window", aciklama: "Ekran görüntüleri (yakında)" }
    ],
    bolumler: [
      {
        baslik: "Proje",
        metin: "Erasmus dönemimde baştan sona tek başıma geliştirdiğim full-stack web uygulaması."
      },
      {
        baslik: "Mimari",
        liste: [
          "Ön yüz: React + Vite, Tailwind CSS ile tasarım",
          "Arka yüz: C# .NET 8 ile yazılmış REST API",
          "Veri: Entity Framework Core ile bellek içi (in-memory) veritabanı; kurulum gerektirmeden çalışıyor"
        ]
      }
    ],
    etiketler: ["React", "Vite", "Tailwind", "C#", ".NET 8", "EF Core"],
    github: null
  },

  yegane: {
    baslik: "Yegane Natural",
    tur: "Müşteri projesi · Web",
    gorseller: [
      { yerTutucu: true, ikon: "bi-window", aciklama: "Site ekran görüntüleri (yakında)" }
    ],
    bolumler: [
      {
        baslik: "Proje",
        metin: "Gerçek bir müşteri için hazırladığım ürün vitrini web sitesi. Müşterinin ihtiyaçlarını dinleyip ürünlerini sergileyen bir site olarak teslim ettim."
      }
    ],
    etiketler: ["Web", "Müşteri projesi"],
    github: "https://github.com/KageRon7/yegane-natural"
  }
};


// =====================================================
// 2) PROJE DETAY PENCERESİ (MODAL)
// Karttaki data-proje değeriyle "projeler" nesnesinden doğru proje bulunur,
// HTML metni oluşturulur ve modalın içine yazılır.
// =====================================================
const modalElemani = document.getElementById("projeModal");
const modal = new bootstrap.Modal(modalElemani);

function projeyiAc(anahtar) {
  const proje = projeler[anahtar];

  document.getElementById("modalBaslik").textContent = proje.baslik;
  document.getElementById("modalTur").textContent = proje.tur;

  // --- Galeri: her görsel için bir carousel-item ---
  let galeriHTML = "";
  proje.gorseller.forEach(function (gorsel, sira) {
    const aktif = sira === 0 ? " active" : ""; // ilk görsel aktif başlar
    if (gorsel.yerTutucu) {
      galeriHTML += `
        <div class="carousel-item${aktif}">
          <div class="yer-tutucu">
            <i class="bi ${gorsel.ikon}"></i>
            <span>${gorsel.aciklama}</span>
          </div>
        </div>`;
    } else {
      galeriHTML += `
        <div class="carousel-item${aktif}">
          <img src="${gorsel.src}" alt="${gorsel.aciklama}">
          <div class="carousel-caption">${gorsel.aciklama}</div>
        </div>`;
    }
  });
  document.getElementById("galeriIcerik").innerHTML = galeriHTML;

  // Tek görsel varsa ileri/geri oklarını gizle
  const oklar = modalElemani.querySelectorAll(".carousel-control-prev, .carousel-control-next");
  oklar.forEach(ok => ok.classList.toggle("d-none", proje.gorseller.length < 2));

  // --- Metin bölümleri: paragraf ya da madde listesi ---
  let icerikHTML = "";
  proje.bolumler.forEach(function (bolum) {
    icerikHTML += `<h6 class="detay-baslik">${bolum.baslik}</h6>`;
    if (bolum.liste) {
      icerikHTML += "<ul>" + bolum.liste.map(madde => `<li>${madde}</li>`).join("") + "</ul>";
    } else {
      icerikHTML += `<p>${bolum.metin}</p>`;
    }
  });
  icerikHTML += '<div class="etiketler mt-3">' +
    proje.etiketler.map(etiket => `<span>${etiket}</span>`).join("") +
    "</div>";
  document.getElementById("modalIcerik").innerHTML = icerikHTML;

  // --- Alt kısım: GitHub linki varsa göster ---
  const alt = document.getElementById("modalAlt");
  alt.innerHTML = proje.github
    ? `<a href="${proje.github}" target="_blank" rel="noopener" class="btn btn-ana"><i class="bi bi-github"></i> Kodu GitHub'da incele</a>`
    : '<span class="text-body-secondary small">Kod şu an herkese açık değil.</span>';

  modal.show();
}

// Her proje kartına tıklama olayı ekle
document.querySelectorAll(".proje-karti").forEach(function (kart) {
  kart.addEventListener("click", function () {
    projeyiAc(kart.dataset.proje);
  });
});


// =====================================================
// 3) YAZI MAKİNESİ EFEKTİ
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
// 4) AÇIK / KOYU TEMA
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
// 5) YETENEK FİLTRESİ
// Butondaki data-filtre ile kartlardaki data-kategori eşleşirse kart görünür.
// =====================================================
const filtreButonlari = document.querySelectorAll("[data-filtre]");
const yetenekler = document.querySelectorAll(".yetenek");

filtreButonlari.forEach(function (buton) {
  buton.addEventListener("click", function () {
    // Aktif butonu değiştir
    filtreButonlari.forEach(b => b.classList.remove("aktif"));
    buton.classList.add("aktif");

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
// 6) İLETİŞİM FORMU DOĞRULAMA
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
// 7) YUKARI ÇIK BUTONU
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
// 8) KAYDIRINCA BELİREN BÖLÜMLER
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
// 9) TELEFONDA MENÜDEN SEÇİM YAPINCA MENÜYÜ KAPAT
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
// 10) ALT BİLGİDEKİ YIL
// =====================================================
document.getElementById("yil").textContent = new Date().getFullYear();
