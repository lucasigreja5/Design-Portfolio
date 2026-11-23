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

    const track = document.getElementById('projectsStack');
    const cards = track ? Array.from(track.querySelectorAll('.project-card')) : [];
    if (!track || !cards.length) return;

    const numEl = document.getElementById('stickyCounterNum');
    const titleEl = document.getElementById('railTitle');
    const progressEl = document.getElementById('railProgressFill');
    const prevBtn = document.getElementById('projectsPrevBtn');
    const nextBtn = document.getElementById('projectsNextBtn');

    function getTargetLeft(idx) {
      const clamped = Math.max(0, Math.min(cards.length - 1, idx));
      const baseLeft = cards[0].offsetLeft;
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      return Math.min(maxScroll, Math.max(0, cards[clamped].offsetLeft - baseLeft));
    }

    function updateNavButtons(activeIdx) {
      if (prevBtn) prevBtn.disabled = activeIdx <= 0;
      if (nextBtn) nextBtn.disabled = activeIdx >= cards.length - 1;
    }

    function updateActiveCard(animate) {
      const baseLeft = cards[0].offsetLeft;
      const scrollLeft = track.scrollLeft;
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);

      let activeIdx = 0;
      if (maxScroll > 0 && scrollLeft >= maxScroll - 4) {
        activeIdx = cards.length - 1;
      } else {
        let bestDist = Infinity;
        for (let i = 0; i < cards.length; i += 1) {
          const offset = Math.max(0, cards[i].offsetLeft - baseLeft);
          const dist = Math.abs(scrollLeft - offset);
          if (dist < bestDist) {
            bestDist = dist;
            activeIdx = i;
          }
        }
      }

      updateNavButtons(activeIdx);

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
              { transform: `translateX(${dir * 12}px)`, opacity: 0.2 },
              { transform: 'translateX(0)', opacity: 1 }
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

    function scrollToIndex(idx) {
      const targetIdx = Math.max(0, Math.min(cards.length - 1, idx));
      track.scrollTo({
        left: getTargetLeft(targetIdx),
        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
      });
    }

    let rafId = 0;
    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveCard(true);
      });
    };

    const onPrevClick = () => scrollToIndex((lastActiveIdx >= 0 ? lastActiveIdx : 0) - 1);
    const onNextClick = () => scrollToIndex((lastActiveIdx >= 0 ? lastActiveIdx : 0) + 1);
    const onTrackKeydown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex((lastActiveIdx >= 0 ? lastActiveIdx : 0) + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex((lastActiveIdx >= 0 ? lastActiveIdx : 0) - 1);
      }
    };

    track.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    prevBtn?.addEventListener('click', onPrevClick);
    nextBtn?.addEventListener('click', onNextClick);
    track.addEventListener('keydown', onTrackKeydown);

    cleanupSticky = () => {
      track.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      prevBtn?.removeEventListener('click', onPrevClick);
      nextBtn?.removeEventListener('click', onNextClick);
      track.removeEventListener('keydown', onTrackKeydown);
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

      // Scroll-zoom on Hero banner image
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

      // Parallax on Disciplines atmospheric backdrop
      gsap.to('.disciplines-bg', {
        yPercent: 6,
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

  function initHeroTilt() {
    if (prefersReducedMotion()) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    const frame = document.getElementById('heroMediaFrame');
    const img = document.getElementById('heroBannerImg');
    if (!frame || !img) return;

    frame.addEventListener('mousemove', (e) => {
      const rect = frame.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.09) translate(${nx * -14}px, ${ny * -10}px)`;
    });

    frame.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  }

  function init() {
    initCursor();
    initHeroTilt();
    initGSAPMotion();
    refreshSticky();
  }

  global.PortfolioMotion = {
    init,
    refreshSticky
  };
})(window);
