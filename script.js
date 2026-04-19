/* ============================
   SCRIPT.JS – Portfolio Interactive
   ============================ */

// ===== NAVBAR: Scroll & Active Link =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu on nav-link click (mobile)
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 16);
}

// ===== SCROLL REVEAL OBSERVER =====
const revealTargets = document.querySelectorAll(
  '.project-card, .skill-category, .cert-card, .timeline-card, .about-grid, .contact-card-item, .contact-form, .info-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('reveal', 'visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== COUNTER TRIGGER on HERO =====
const counterEls = document.querySelectorAll('.stat-number[data-count]');
const heroSection = document.getElementById('home');
let counterTriggered = false;

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterTriggered) {
      counterTriggered = true;
      counterEls.forEach(el => animateCounter(el));
    }
  });
}, { threshold: 0.5 });

heroObserver.observe(heroSection);

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.dataset.width;
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 150);
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach((card, i) => {
      const category = card.dataset.category;
      const show = filter === 'all' || category === filter;

      if (show) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => { card.style.display = 'none'; }, 350);
      }
    });
  });
});

// ===== CONTACT FORM – Kirim ke WhatsApp =====
const contactForm = document.getElementById('contact-form');
const WA_NUMBER = '6287824889090'; // 087824889090 → format internasional

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  // Label topik yang lebih ramah
  const subjectLabel = {
    magang: 'Tawaran Magang',
    kolaborasi: 'Kolaborasi Proyek',
    konsultasi: 'Konsultasi Keuangan',
    lainnya: 'Lainnya',
  }[subject] || subject || 'Tidak disebutkan';

  // Susun teks pesan WA
  const waText =
    `Halo Dila 👋\n\n` +
    `Perkenalkan, saya ${name}.\n\n` +
    `📌 *Detail Kontak*\n` +
    `Nama     : ${name}\n` +
    `Email    : ${email}\n` +
    `Keperluan: ${subjectLabel}\n\n` +
    `💬 *Pesan*\n` +
    `${message}\n\n` +
    `Terima kasih atas waktunya 🙏\n\n` +
    `_Pesan ini dikirim melalui website portofolio_`;

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;

  // Buka WhatsApp di tab baru
  window.open(waUrl, '_blank');

  // Feedback tombol
  const btn = document.getElementById('btn-submit');
  const originalContent = btn.innerHTML;

  btn.innerHTML = `<span>Membuka WhatsApp… ✓</span>`;
  btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  btn.style.boxShadow = '0 8px 30px rgba(34,197,94,0.35)';

  setTimeout(() => {
    btn.innerHTML = originalContent;
    btn.style.background = '';
    btn.style.boxShadow = '';
    contactForm.reset();
  }, 3000);
});

// ===== SMOOTH SCROLL for NAV =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== FLOATING CARDS: Reset on mobile =====
function handleMobileLayout() {
  const floatingCards = document.querySelectorAll('.floating-card');
  if (window.innerWidth < 768) {
    floatingCards.forEach(c => c.style.display = 'none');
  } else {
    floatingCards.forEach(c => c.style.display = '');
  }
}

handleMobileLayout();
window.addEventListener('resize', handleMobileLayout);

// ===== PARALLAX EFFECT on ORBS =====
document.addEventListener('mousemove', (e) => {
  if (window.innerWidth < 1024) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  document.querySelectorAll('.orb').forEach((orb, i) => {
    const depth = (i + 1) * 0.5;
    orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});

// ===== PROFILE IMAGE FALLBACK =====
const profileImg = document.getElementById('profile-img');
if (profileImg) {
  profileImg.onerror = () => {
    profileImg.src = '';
    profileImg.style.background = 'linear-gradient(135deg, #7e22ce, #c084fc)';
    profileImg.alt = 'DF';

    // Create initials fallback
    const ring = profileImg.parentElement;
    profileImg.style.display = 'none';
    const initials = document.createElement('div');
    initials.textContent = 'DF';
    initials.style.cssText = `
      width:100%; height:100%; display:flex; align-items:center; justify-content:center;
      font-family:var(--font-serif); font-size:4rem; font-weight:700; color:white;
      border-radius:50%; background:linear-gradient(135deg,#7e22ce,#c084fc);
    `;
    ring.appendChild(initials);
  };
}

// ===== CURSOR GLOW EFFECT =====
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed; width: 300px; height: 300px; pointer-events: none;
  background: radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%);
  border-radius: 50%; transform: translate(-50%, -50%);
  transition: left 0.1s ease, top 0.1s ease;
  z-index: 0; mix-blend-mode: screen;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth < 1024) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

console.log('%c Portofolio dhila fadliah', 'color: #c084fc; font-size: 20px; font-weight: bold; font-family: serif;');
console.log('%c Mahasiswi Akuntansi | UNPAD 2022', 'color: #a855f7; font-size: 12px;');
