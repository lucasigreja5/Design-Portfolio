/* ==========================================================================
   Lucas Igreja Portfolio — Smooth Motion Graphics & Sticky Rail Observer
   Respects prefers-reduced-motion; works with GSAP CDN or graceful fallback
   ========================================================================== */

(function attachPortfolioMotion(global) {
  let cleanupSticky = null;
  let currentProjectCount = 9;
  let lastActiveIdx = -1;
  let numAnim = null;

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function refreshSticky(totalCount) {
    currentProjectCount = totalCount || currentProjectCount;
    if (cleanupSticky) {
      cleanupSticky();
      cleanupSticky = null;
    }
    lastActiveIdx = -1;

    const cards = Array.from(document.querySelectorAll('.project-card'));
    if (!cards.length) return;

    const railEl = document.querySelector('.projects-rail');
    const numEl = document.getElementById('stickyCounterNum');
    const titleEl = document.getElementById('railTitle');
    const progressEl = document.getElementById('railProgressFill');

    function getAnchorY() {
      if (window.innerWidth <= 1023) {
        const rawBottom = railEl ? railEl.getBoundingClientRect().bottom : 140;
        const railBottom = Math.min(window.innerHeight * 0.5, Math.max(0, rawBottom));
        return railBottom + (window.innerHeight - railBottom) * 0.25;
      }
      return window.innerHeight * 0.42;
    }

    function updateActiveCard(animate) {
      const anchorY = getAnchorY();
      let activeIdx = 0;

      for (let i = 0; i < cards.length; i += 1) {
        if (cards[i].getBoundingClientRect().top <= anchorY) {
          activeIdx = i;
        } else {
          break;
        }
      }

      if (activeIdx === lastActiveIdx) return;

      const prevIdx = lastActiveIdx;
      lastActiveIdx = activeIdx;
      const card = cards[activeIdx];
      const idxStr = card.dataset.displayIndex || String(activeIdx + 1).padStart(2, '0');
      const idxNum = parseInt(idxStr, 10) || activeIdx + 1;

      if (numEl) {
        numEl.textContent = idxStr;
        if (animate && prevIdx !== -1 && !prefersReducedMotion() && typeof numEl.animate === 'function') {
          if (numAnim) numAnim.cancel();
          const dir = activeIdx > prevIdx ? 1 : -1;
          numAnim = numEl.animate(
            [
              { transform: `translateY(${dir * 12}px)`, opacity: 0.2 },
              { transform: 'translateY(0)', opacity: 1 }
            ],
            { duration: 240, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
          );
        }
      }
      if (titleEl) titleEl.textContent = card.dataset.title || '';
      if (progressEl) {
        const ratio = Math.min(1, Math.max(0.05, idxNum / currentProjectCount));
        progressEl.style.transform = `scaleX(${ratio})`;
      }
    }

    let rafId = 0;
    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveCard(true);
      });
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    cleanupSticky = () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    updateActiveCard(false);
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
