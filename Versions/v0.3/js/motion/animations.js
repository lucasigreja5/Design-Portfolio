/* ==========================================================================
   Lucas Igreja Portfolio — Smooth Motion Graphics & Sticky Rail Observer
   Respects prefers-reduced-motion; works with GSAP CDN or graceful fallback
   ========================================================================== */

(function attachPortfolioMotion(global) {
  let stickyObserver = null;
  let currentProjectCount = 9;

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function refreshSticky(totalCount) {
    currentProjectCount = totalCount || currentProjectCount;
    if (stickyObserver) {
      stickyObserver.disconnect();
    }

    const cards = Array.from(document.querySelectorAll('.project-card'));
    if (!cards.length) return;

    const numEl = document.getElementById('stickyCounterNum');
    const eraEl = document.getElementById('railEra');
    const titleEl = document.getElementById('railTitle');
    const progressEl = document.getElementById('railProgressFill');

    const activateCard = (card) => {
      const idxStr = card.dataset.displayIndex || '01';
      const idxNum = parseInt(idxStr, 10) || 1;
      if (numEl) numEl.textContent = idxStr;
      if (eraEl) eraEl.textContent = card.dataset.era || '';
      if (titleEl) titleEl.textContent = card.dataset.title || '';
      if (progressEl) {
        const ratio = Math.min(1, Math.max(0.05, idxNum / currentProjectCount));
        progressEl.style.transform = `scaleX(${ratio})`;
      }
    };

    if (!('IntersectionObserver' in window)) return;

    stickyObserver = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
              bestEntry = entry;
            }
          }
        });
        if (bestEntry) activateCard(bestEntry.target);
      },
      {
        rootMargin: '-25% 0px -35% 0px',
        threshold: [0.15, 0.4, 0.7]
      }
    );

    cards.forEach((card) => stickyObserver.observe(card));
  }

  function initCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor || prefersReducedMotion()) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let cursorVisible = false;
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      const target = e.target.closest('[data-cursor-label]');
      if (target) {
        cursor.textContent = target.dataset.cursorLabel;
        if (!cursorVisible) {
          cursor.classList.add('is-visible');
          cursorVisible = true;
        }
      } else if (cursorVisible) {
        cursor.classList.remove('is-visible');
        cursorVisible = false;
      }
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-visible');
      cursorVisible = false;
    });
  }

  function initGSAPMotion() {
    if (prefersReducedMotion()) return;

    if (global.gsap && global.ScrollTrigger) {
      const gsap = global.gsap;
      gsap.registerPlugin(global.ScrollTrigger);

      // Hero headline entrance
      gsap.from('.hero-line-inner', {
        yPercent: 105,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      });

      // Scroll-zoom on Hero ambient showcase
      gsap.to('.hero-media-img', {
        scale: 1.14,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-media-frame',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6
        }
      });

      // Parallax on Disciplines ambient backdrop
      gsap.to('.disciplines-bg img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.disciplines-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6
        }
      });

      // Clean reveal on major sections
      gsap.utils.toArray('.reveal-block').forEach((block) => {
        gsap.from(block, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: block,
            start: 'top 86%',
            once: true
          }
        });
      });
    }
  }

  function init() {
    initCursor();
    initGSAPMotion();
    refreshSticky();
  }

  global.PortfolioMotion = {
    init,
    refreshSticky
  };
})(window);
