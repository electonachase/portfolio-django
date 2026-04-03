// ── Mobile menu ──────────────────────────────────────────────────────────────
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burgerBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── Skill bars animate on scroll ─────────────────────────────────────────────
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const pct = bar.getAttribute('data-pct');
    bar.style.width = pct + '%';
  });
}

const skillSection = document.querySelector('.skills-section');
if (skillSection) {
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(animateSkillBars, 200);
      obs.disconnect();
    }
  }, { threshold: 0.15 });
  obs.observe(skillSection);
} else {
  // If already on skills page, animate on load
  setTimeout(animateSkillBars, 300);
}

// ── Auto-dismiss toasts ───────────────────────────────────────────────────────
document.querySelectorAll('.toast-msg').forEach(t => {
  setTimeout(() => {
    t.style.transition = 'opacity .5s';
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 500);
  }, 4000);
});
