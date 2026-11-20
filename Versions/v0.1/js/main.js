/* ==========================================================================
   Lucas Igreja Portfolio — Application Bootstrap
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (window.PortfolioUI) {
    window.PortfolioUI.init();
  }
  if (window.PortfolioMotion) {
    window.PortfolioMotion.init();
  }

  // Mobile Nav Drawer
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('mobileDrawerClose');

  function setDrawer(open) {
    if (!drawer || !menuBtn) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuBtn?.addEventListener('click', () => setDrawer(true));
  closeDrawerBtn?.addEventListener('click', () => setDrawer(false));
  drawer?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setDrawer(false));
  });

  // Back to Top
  document.getElementById('backToTopBtn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
