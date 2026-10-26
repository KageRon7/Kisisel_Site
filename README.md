# Ferhat Yürük — Kişisel Tanıtım Sitesi

HTML, CSS, Bootstrap 5 ve JavaScript ile hazırlanmış tek sayfalık kişisel portfolyo sitesi.

## Klasör yapısı

```
ferhat-yuruk-site/
├── index.html        → Sayfanın iskeleti (HTML + Bootstrap sınıfları)
├── css/style.css     → Özel tasarım, renk teması, animasyonlar
├── js/script.js      → Etkileşimler (tema, filtre, form, animasyonlar)
├── assets/          → Profil fotoğrafı ve sekme ikonu
└── README.md
```

## Kullanılan teknolojiler

| Teknoloji | Ne için |
|---|---|
| HTML5 | Anlamsal yapı: `nav`, `header`, `section`, `footer`, form |
| CSS3 | CSS değişkenleri ile tema, flexbox, gradient, `@keyframes` animasyonlar, media query |
| Bootstrap 5.3 (CDN) | Grid sistemi, navbar, kartlar, form doğrulama, Toast, ScrollSpy, Collapse |
| Bootstrap Icons | İkonlar |
| JavaScript (ES6) | Tema değiştirme + localStorage, IntersectionObserver, sayaç, filtre, form doğrulama |
| Google Fonts | Inter ve JetBrains Mono yazı tipleri |
| Vercel | Yayınlama (hosting) ve alan adı |

## Yerelde çalıştırma

`index.html` dosyasına çift tıklamak yeterli. (İnternet bağlantısı gerekir; Bootstrap CDN'den yüklenir.)

## Vercel'e yükleme

1. Klasörü GitHub'a yükle (ör. `KageRon7/kisisel-site`).
2. vercel.com → GitHub ile giriş → **Add New → Project** → repoyu seç → **Deploy**.
3. Site `proje-adi.vercel.app` adresinde yayında olur. Ayarlar → **Domains** kısmından alan adı eklenebilir.
