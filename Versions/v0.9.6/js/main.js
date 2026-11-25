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
    drawer.inert = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    window.PortfolioUI?.setScrollLock?.('drawer', open);
    if (open) {
      closeDrawerBtn?.focus();
    } else if (restoreFocus) {
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

  // Smooth scroll-to-top for brand wordmark & eager reveal on section anchor clicks
  document.querySelector('.brand-wordmark')?.addEventListener('click', (e) => {
    e.preventDefault();
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#' || hash === '#top') return;
    anchor.addEventListener('click', () => {
      window.PortfolioMotion?.revealUpTo?.(hash.slice(1));
    });
  });

  if (window.location.hash && window.location.hash.length > 1) {
    window.PortfolioMotion?.revealUpTo?.(window.location.hash.slice(1));
  }

  document.addEventListener('keydown', (e) => {
    if (drawer?.classList.contains('is-open')) {
      if (e.key === 'Escape') {
        setDrawer(false, true);
      } else if (e.key === 'Tab') {
        window.PortfolioUI?.trapFocus?.(drawer, e);
      }
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 1024px)');
  desktopQuery.addEventListener?.('change', (e) => {
    if (e.matches && drawer?.classList.contains('is-open')) {
      setDrawer(false);
    }
  });
});
