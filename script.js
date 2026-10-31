// =====================================================
// 1) PROJE BİLGİLERİ
// Her proje bir nesne (object). Karta tıklanınca bu bilgiler
// açılır pencereye (modal) yazılır. Galeriye görsel eklemek için
// "gorseller" dizisine { src: "img/dosya.jpg", aciklama: "..." } eklemek yeterli.
// Video için: { video: "img/dosya.mp4", kapak: "img/kapak.jpg", aciklama: "..." }
// =====================================================
const projeler = {
  petRobot: {
    baslik: "Masaüstü Pet Robot",
    tur: "Ekip projesi · Devam ediyor",
    gorseller: [
      { video: "img/petrobot-yuz-animasyonu.mp4", kapak: "img/petrobot-yuz-animasyonu-kapak.jpg", aciklama: "Yüz Atölyesi: kedinin ifade animasyonları" },
      { src: "img/petrobot-teknik-resim.jpg", aciklama: "Beta prototip teknik resmi" }
    ],
    bolumler: [
      {
        baslik: "Vizyon",
        metin: "Bilgisayar başında uzun saatler geçiren insanlara eşlik eden, evcil bir hayvan sıcaklığı veren masaüstü bir robot: 15 cm boyunda, kutu kafalı bir kedi. İlk sürümde konuşmuyor; duygularını beden diliyle ve yüzündeki ekranla gösteriyor."
      },
      {
        baslik: "Tasarım",
        liste: [
          "5 servo: gövde ±45°, baş sağ-sol ±90° ve yukarı-aşağı, iki kulak ayrı ayrı hareket ediyor.",
          "Kafanın ön yüzü 2.4\" bir ekran; gözler, kaşlar ve ağız burada çiziliyor.",
          "İfadeleri tasarlamak için \"Yüz Atölyesi\" adında bir araç yaptık: yüz ve motorlar ayarlanıyor, anahtar kareler dizilip animasyon kaydediliyor.",
          "Ağırlık tabanda: ESP32 ve güç girişi tabanın içinde, gövde bir rulman üzerinde dönüyor."
        ]
      },
      {
        baslik: "Mimari",
        liste: [
          "Robotun üzerinde zeka yok: ESP32 yalnızca servoları ve ekranı sürüyor, seri porttan JSON komut alıyor.",
          "Beyin bilgisayarda Python ile çalışıyor; kamera görüntüsünden kullanıcının yüz ifadesini algılıyor.",
          "Donanım hazır olana kadar ekip, sanal bir donanım simülasyonu (HAL) üzerinde geliştirme yapıyor."
        ]
      },
      {
        baslik: "Benim rolüm",
        metin: "7 kişilik ekibin lideriyim. Ekibi yapay zeka, gömülü sistemler ve görüntü işleme alt takımlarına ayırdım; mimariyi ve takımlar arası arayüzleri belirliyor, hocalarla ve tasarımcımızla iletişimi yürütüyorum."
      },
      {
        baslik: "Durum",
        metin: "Uçtan uca ilk demo çalıştı: kullanıcı gülümseyince ekrandaki kedi tepki veriyor. Sırada fiziksel gövde var."
      }
    ],
    etiketler: ["Python", "ESP32", "Görüntü işleme", "Servo", "Animasyon", "Ekip liderliği"],
    linkler: [{ yazi: "Kodu GitHub'da incele", ikon: "bi-github", adres: "https://github.com/KageRon7/pet-robot" }]
  },

  itfaiye: {
    baslik: "Otonom İtfaiye Robotu",
    tur: "Erasmus · Robotik dersi · 2026",
    gorseller: [
      { src: "img/itfaiye-robotu.jpg", aciklama: "Robotun son hali" },
      { src: "img/itfaiye-teknik-resim.jpg", aciklama: "Teknik resim: ön, sol ve üst görünüş" },
      { src: "img/itfaiye-baglanti-semasi.jpg", aciklama: "Elektrik bağlantı şeması" }
    ],
    bolumler: [
      {
        baslik: "Görev",
        metin: "Odalardan oluşan bir labirentte kendi başına dolaşıp yanan mumu bulan ve fanla söndüren robot. Portekiz'deki Erasmus dönemimde, robotik dersinde uluslararası bir öğrenci ekibiyle geliştirdik ve çalıştırdık. Teknik resmini ve bağlantı şemasını ben çizdim."
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
          "Arduino Mega 2560, L298N H-köprüsüyle sürülen 2 DC motor",
          "3 HC-SR04 ultrasonik sensör (ön, sol, sağ)",
          "I²C üzerinden IR kamera ve OLED ekran, UVTron alev dedektörü",
          "Çizgi sensörü, 2 tampon anahtarı, START/STOP butonları ve fan"
        ]
      },
      {
        baslik: "Yazılım",
        metin: "C++ ile yazıldı. Motor ve alev sensörü ayrı sınıflara (Motor, FlameSensor) ayrıldı; her alt sistem için ayrı test modları var."
      }
    ],
    etiketler: ["C++", "Arduino", "Sonlu durum makinesi", "P kontrol", "Sensörler", "Teknik çizim"],
    linkler: [
      { yazi: "Teknik resim (PDF)", ikon: "bi-file-earmark-pdf", adres: "img/itfaiye-teknik-resim.pdf" },
      { yazi: "Bağlantı şeması (PDF)", ikon: "bi-file-earmark-pdf", adres: "img/itfaiye-baglanti-semasi.pdf" },
      { yazi: "Kodu GitHub'da incele", ikon: "bi-github", adres: "https://github.com/KageRon7/firefighting-robot" }
    ]
  },

  medguard: {
    baslik: "MedGuard",
    tur: "Bireysel · Full-stack · Erasmus 2026",
    gorseller: [
      { src: "img/medguard-triyaj.jpg", aciklama: "Triyaj: Manchester protokolüyle öncelik" },
      { src: "img/medguard-sira.jpg", aciklama: "Önceliğe göre sıralanan bekleme sırası" },
      { src: "img/medguard-muayene.jpg", aciklama: "Muayene ve reçete kaydı" },
      { src: "img/medguard-taburcu.jpg", aciklama: "Taburcu ekranı" },
      { src: "img/medguard-giris.jpg", aciklama: "Giriş ekranı" },
      { src: "img/medguard-panel.jpg", aciklama: "Genel bakış paneli" },
      { src: "img/medguard-veritabani.jpg", aciklama: "PostgreSQL veritabanı şeması" },
      { src: "img/medguard-konsept-triyaj.jpg", aciklama: "Analiz aşaması: triyaj ekranı konsepti" },
      { src: "img/medguard-konsept-sira.jpg", aciklama: "Analiz aşaması: bekleme sırası konsepti" },
      { src: "img/medguard-planlama.jpg", aciklama: "Planlama: Trello panosu" }
    ],
    bolumler: [
      {
        baslik: "Proje",
        metin: "Hastane acil servisleri için hasta akışı yönetim sistemi. Hemşire hastanın şikayetlerini girer, sistem Manchester Triyaj Protokolü'ne göre bir renk (öncelik) atar; hasta geliş saatine göre değil önceliğine göre sıraya girer, doktor muayene eder ve taburcu eder. Portekiz'de geliştirdiğim için arayüz Portekizce."
      },
      {
        baslik: "Öne çıkanlar",
        liste: [
          "Manchester protokolü: belirtilere göre 5 renkten birini atayan servis (Kırmızı → Turuncu → Sarı → Yeşil → Mavi)",
          "Bekleme sırası geliş saatine göre değil, triyaj rengine göre sıralanıyor",
          "Portekiz sağlık numarası (9 hane) için Modulus 11 kontrol basamağı doğrulaması",
          "Uçtan uca akış: giriş → triyaj → bekleme sırası → muayene → taburcu"
        ]
      },
      {
        baslik: "Veritabanı",
        liste: [
          "PostgreSQL üzerinde 4 tablo: Hasta (Paciente), Doktor (Medico), Triyaj (Triagem), Muayene (Consulta)",
          "3. normal forma (3NF) göre tasarlandı; bir hastanın birden çok triyajı ve muayenesi olabiliyor (1–N ilişkiler)",
          "Şema EF Core migration'larıyla kuruluyor; .NET olmadan kurmak için düz SQL şema ve örnek veri dosyaları da var"
        ]
      },
      {
        baslik: "Mimari",
        liste: [
          "Arka yüz: ASP.NET Core Web API (.NET 8, C#), Swagger ile belgelenmiş REST uç noktaları",
          "Veri erişimi: Entity Framework Core + Npgsql",
          "Ön yüz: React 19, Vite, React Router, Tailwind CSS"
        ]
      },
      {
        baslik: "Süreç",
        metin: "Önce analiz aşamasında ekran konseptlerini tasarladım, sonra işi görevlere bölüp bir Trello panosunda takip ederek tek başıma geliştirdim."
      }
    ],
    etiketler: ["React", "C#", ".NET 8", "PostgreSQL", "EF Core", "REST API", "Algoritmalar"],
    linkler: [{ yazi: "Kodu GitHub'da incele", ikon: "bi-github", adres: "https://github.com/KageRon7/MedGuard" }]
  },

  sain: {
    baslik: "SAIN · Seydişehir Artificial Intelligence Network",
    tur: "Topluluk · Yönetim kurulu",
    gorseller: [
      { video: "img/sain-seminer.mp4", kapak: "img/sain-seminer-kapak.jpg", aciklama: "Seminerden kısa bir kurgu" },
      { src: "img/sain-sunum.jpg", aciklama: "Topluluk seminerinde sunum" }
    ],
    bolumler: [
      {
        baslik: "Topluluk",
        metin: "SAIN, Necmettin Erbakan Üniversitesi'nde yapay zeka ve veri bilimi üzerine çalışan bir öğrenci topluluğu. Topluluğun yönetim kurulunda yer alıyorum."
      },
      {
        baslik: "Neler yaptım?",
        liste: [
          "Toplulukta bir seminer düzenledim ve sunumu yaptım.",
          "Erasmus+ deneyimimi anlatan bir konuşma yaptım."
        ]
      }
    ],
    etiketler: ["Topluluk", "Sunum", "Etkinlik organizasyonu"],
    linkler: []
  },

  yegane: {
    baslik: "Yegane Natural",
    tur: "Müşteri projesi · E-ticaret vitrini",
    gorseller: [
      { src: "img/yegane-anasayfa.jpg", aciklama: "Ana sayfa" },
      { src: "img/yegane-cok-satanlar.jpg", aciklama: "Çok satanlar" },
      { src: "img/yegane-urunler.jpg", aciklama: "Ürün kartları ve WhatsApp'tan sipariş" }
    ],
    bolumler: [
      {
        baslik: "Proje",
        metin: "El yapımı, doğal içerikli kozmetik ve aromaterapi ürünleri üreten Yegane Natural için hazırladığım web vitrini. Gerçek bir müşteriyle çalıştım: ihtiyaçlarını dinleyip markanın sakin, doğal tarzına uygun bir tasarım çıkardım."
      },
      {
        baslik: "Sitede neler var?",
        liste: [
          "Kategorilere ayrılmış ürünler ve çok satanlar bölümü",
          "Fiyat, içerik ve değerlendirmeleri gösteren ürün kartları",
          "WhatsApp üzerinden tek tıkla sipariş",
          "Bakım rehberleri içeren blog bölümü ve indirim kodlu bülten kaydı"
        ]
      }
    ],
    etiketler: ["Web tasarım", "Responsive", "Müşteri projesi"],
    linkler: [{ yazi: "Kodu GitHub'da incele", ikon: "bi-github", adres: "https://github.com/KageRon7/yegane-natural" }]
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
    } else if (gorsel.video) {
      // Video: sessiz, döngüde, kontrollerle
      galeriHTML += `
        <div class="carousel-item${aktif}">
          <video src="${gorsel.video}" poster="${gorsel.kapak}" title="${gorsel.aciklama}" controls muted loop playsinline preload="none"></video>
        </div>`;
    } else {
      galeriHTML += `
        <div class="carousel-item${aktif}">
          <img src="${gorsel.src}" alt="${gorsel.aciklama}">
          <a href="${gorsel.src}" target="_blank" class="buyut-linki"><i class="bi bi-arrows-fullscreen"></i> Büyüt</a>
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

  // --- Alt kısım: proje linkleri (GitHub, PDF...) ---
  const alt = document.getElementById("modalAlt");
  alt.innerHTML = proje.linkler.map(link =>
    `<a href="${link.adres}" target="_blank" rel="noopener" class="btn btn-sm btn-cizgili"><i class="bi ${link.ikon}"></i> ${link.yazi}</a>`
  ).join("");
  alt.classList.toggle("d-none", proje.linkler.length === 0); // link yoksa alt kısmı gizle

  modal.show();
}

// Pencere açılınca ilk slayt video ise sessiz oynatmaya başla
modalElemani.addEventListener("shown.bs.modal", function () {
  const video = modalElemani.querySelector(".carousel-item.active video");
  if (video) video.play().catch(() => {}); // tarayıcı izin vermezse sorun değil
});

// Pencere kapanınca çalan video varsa durdur
modalElemani.addEventListener("hidden.bs.modal", function () {
  modalElemani.querySelectorAll("video").forEach(v => v.pause());
});

// data-proje özelliği olan her karta (projeler + topluluk) tıklama olayı ekle
document.querySelectorAll("[data-proje]").forEach(function (kart) {
  kart.addEventListener("click", function () {
    projeyiAc(kart.dataset.proje);
  });
});


// Deneyim bölümündeki seminer videosu: sadece ekranda görünürken oynasın.
// Kullanıcı sistemde "hareketi azalt" seçtiyse hiç oynatma, kapak resmi kalsın.
const sainVideo = document.querySelector(".sain-video");
const hareketAzalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (sainVideo && !hareketAzalt) {
  new IntersectionObserver(function (girdiler) {
    girdiler.forEach(function (girdi) {
      if (girdi.isIntersecting) {
        sainVideo.play().catch(() => {});
      } else {
        sainVideo.pause();
      }
    });
  }, { threshold: 0.4 }).observe(sainVideo);
}


// =====================================================
// 3) YAZI MAKİNESİ EFEKTİ
// Dizideki cümleleri harf harf yazar, sonra siler, sıradakine geçer.
// =====================================================
const cumleler = [
  "Bilgisayar Mühendisliği öğrencisi",
  "Yapay zeka ve robotik",
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
