const NAV_HEIGHT = 72;

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

const navLinks = document.querySelectorAll('.nav-links a');

function setActiveNav(id) {
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (id === '') {
      a.classList.toggle('active', href === '#');
    } else {
      a.classList.toggle('active', href === `#${id}`);
    }
  });
}

function highlightSection(id) {
  document.querySelectorAll('.section-highlight').forEach(el => {
    el.classList.remove('section-highlight');
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add('section-highlight');

  setTimeout(() => target.classList.remove('section-highlight'), 1800);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    if (!href || href === '#') {
      setActiveNav('');
      return;
    }

    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    setActiveNav(id);

    highlightSection(id);

    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

const sectionIds = ['heroes', 'skins', 'prep', 'guides', 'modes', 'mini', 'aibot'];

const visibleSections = new Set();

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.id;

    if (entry.isIntersecting) {
      visibleSections.add(id);
    } else {
      visibleSections.delete(id);
    }
  });

  const orderedVisible = sectionIds.filter(id => visibleSections.has(id));

  if (orderedVisible.length > 0) {
    let topMostId = orderedVisible[0];
    let topMostY = Infinity;

    orderedVisible.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top;
      if (y < topMostY && y < window.innerHeight * 0.65) {
        topMostY = y;
        topMostId = id;
      }
    });

    setActiveNav(topMostId);
  } else {
    if (window.scrollY < 100) setActiveNav('');
  }

}, {
  rootMargin: `-${NAV_HEIGHT}px 0px -35% 0px`,
  threshold: 0
});

sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) spyObserver.observe(el);
});

if (window.scrollY < 100) setActiveNav('');