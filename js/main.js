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
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const closeDrawerBtn = document.getElementById('mobileDrawerClose');

  function setDrawer(open, restoreFocus = false) {
    if (!drawer || !menuBtn) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open && restoreFocus) {
      menuBtn.focus();
    }
  }

  menuBtn?.addEventListener('click', () => {
    setDrawer(!drawer?.classList.contains('is-open'));
  });
  closeDrawerBtn?.addEventListener('click', () => setDrawer(false, true));
  backdrop?.addEventListener('click', () => setDrawer(false, true));
  drawer?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setDrawer(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('is-open')) {
      setDrawer(false, true);
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 1024px)');
  desktopQuery.addEventListener?.('change', (e) => {
    if (e.matches && drawer?.classList.contains('is-open')) {
      setDrawer(false);
    }
  });
});
