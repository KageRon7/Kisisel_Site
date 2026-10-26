/* =========================================================
   Ferhat Yürük — Kişisel Web Sitesi
   script.js : Sayfanın etkileşimli kısımları (saf JavaScript)
   ========================================================= */

// Sayfa (DOM) tamamen yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. Daktilo (typing) efekti ---------- */
  // Hero'daki yazı bu dizideki ifadeleri sırayla yazıp siler
  const words = [
    "Bilgisayar Mühendisi Adayı",
    "Yapay Zeka Meraklısı",
    "Robotik Geliştirici",
    "Ekip Lideri",
    "Oyun Tasarımcısı"
  ];
  const typedEl = document.getElementById("typed");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = words[wordIndex];
    // Silme modundaysak bir harf azalt, değilse bir harf ekle
    charIndex += deleting ? -1 : 1;
    typedEl.textContent = current.substring(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (!deleting && charIndex === current.length) {
      delay = 1800;           // kelime bitince biraz bekle
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length; // sonraki kelimeye geç
      delay = 400;
    }
    setTimeout(typeLoop, delay);
  }
  typeLoop();

  /* ---------- 2. Karanlık / aydınlık tema ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = themeBtn.querySelector("i");

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    themeIcon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }

  // Kullanıcının önceki seçimini tarayıcı hafızasından (localStorage) oku
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("theme"); } catch (e) { /* erişilemezse yoksay */ }
  applyTheme(savedTheme || "dark");

  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* yoksay */ }
  });

  /* ---------- 3. Navbar: kaydırınca arka plan + yukarı çık butonu ---------- */
  const navbar = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 50);
    backToTop.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Mobilde menüden bir linke tıklanınca menüyü kapat (Bootstrap Collapse API)
  const navMenu = document.getElementById("navMenu");
  document.querySelectorAll("#navMenu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  /* ---------- 4. Kaydırınca beliren öğeler (IntersectionObserver) ---------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // bir kez göster, sonra izlemeyi bırak
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* ---------- 5. Sayaç animasyonu ---------- */
  function animateCounter(el) {
    const target = Number(el.dataset.target);
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".counter").forEach(el => counterObserver.observe(el));

  /* ---------- 6. Proje filtreleme ---------- */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Aktif butonu değiştir
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      projects.forEach(project => {
        // data-category birden fazla kategori içerebilir: "ai robotics"
        const categories = project.dataset.category.split(" ");
        const show = filter === "all" || categories.includes(filter);
        project.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- 7. İletişim formu doğrulama ---------- */
  const form = document.getElementById("contactForm");
  // Bootstrap yüklenemezse (ör. internet yoksa) site yine çalışsın diye kontrol ediyoruz
  const toast = window.bootstrap ? bootstrap.Toast.getOrCreateInstance(document.getElementById("formToast")) : null;

  form.addEventListener("submit", event => {
    event.preventDefault(); // sayfanın yenilenmesini engelle

    // Bootstrap doğrulama stilleri: geçersiz alanlar kırmızı görünür
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Sunucumuz olmadığı için mesajı kullanıcının e-posta uygulamasında açıyoruz
    const subject = encodeURIComponent(`Web sitenden mesaj: ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:yurukferhat595@gmail.com?subject=${subject}&body=${body}`;

    if (toast) toast.show();
    form.reset();
    form.classList.remove("was-validated");
  });

  /* ---------- 8. Footer yılı ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
