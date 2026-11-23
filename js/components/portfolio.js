/* ==========================================================================
   Lucas Igreja Portfolio — Interactive UI, Art-Directed Covers & Modals
   ========================================================================== */

(function attachPortfolioUI(global) {
  let lang = 'en';
  let activeFilter = 'all';
  let activeDisciplineId = 'uiux';
  let activeCareerTab = 'experience';
  let currentModalProjectId = null;
  let lastFocusedEl = null;
  let toastTimer = null;

  const DATA = global.PORTFOLIO_DATA;

  function getNestedCopy(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : ''), obj);
  }

  function showToast(message) {
    const toast = document.getElementById('siteToast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  function getFilteredProjects() {
    if (activeFilter === 'all') return DATA.projects;
    return DATA.projects.filter((p) => p.category === activeFilter);
  }

  /* Bespoke SVG/HTML cover art matching each of the 9 Behance projects */
  function renderCoverVisual(project, currentLang) {
    const loc = project[currentLang];
    if (project.image) {
      return `<img src="${project.image}" alt="${loc.title}" class="project-photo" loading="lazy" />`;
    }

    switch (project.coverStyle) {
      case 'sonar-bsb':
        return `
          <div class="art-canvas art-sonar-bsb">
            <div>
              <span class="art-badge-mono" style="color: #D4FF00;">FREQUENCY FOUND · V1.0</span>
              <div class="art-headline">SONAR<br/>BSB</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-phone-frame" aria-hidden="true">
              <div style="height: 10px; width: 55%; background: #0A0A0C;"></div>
              <div style="flex: 1; background: linear-gradient(145deg, #4C1D95 0%, #D4FF00 100%); display: flex; align-items: flex-end; padding: 8px;">
                <div style="width: 100%; height: 14px; background: #0A0A0C;"></div>
              </div>
              <div style="height: 8px; width: 85%; background: #D4D2CC;"></div>
              <div style="height: 8px; width: 62%; background: #D4D2CC;"></div>
            </div>
          </div>`;

      case 'olivias-coffee':
        return `
          <div class="art-canvas art-olivias-coffee">
            <div>
              <span class="art-badge-mono" style="color: #E7D8B1;">ECO-FIRST ESPRESSO</span>
              <div class="art-headline" style="color: #F4EFE4;">OLIVIA'S<br/>COFFEE</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-phone-frame" style="background: #103324; border-color: #E7D8B1;" aria-hidden="true">
              <div style="width: 34px; height: 34px; border-radius: 50%; border: 2px solid #E7D8B1; margin: 0 auto;"></div>
              <div style="height: 46%; background: #E7D8B1;"></div>
              <div style="height: 8px; width: 80%; background: rgba(231,216,177,0.45);"></div>
              <div style="height: 8px; width: 55%; background: rgba(231,216,177,0.3);"></div>
            </div>
          </div>`;

      case 'gdf-undf':
        return `
          <div class="art-canvas art-gdf-undf">
            <div>
              <span class="art-badge-mono" style="color: #60A5FA;">GDF / FUNAB · 2021</span>
              <div class="art-headline">UNDF<br/>IDENTITY</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-emblem-card" aria-hidden="true">
              <svg viewBox="0 0 140 120" width="120" height="104" fill="none">
                <polygon points="36,20 74,48 36,76 20,64 46,48 20,32" fill="#0F2F61" />
                <polygon points="62,20 100,48 62,76 46,64 72,48 46,32" fill="#2563EB" />
                <polygon points="88,20 126,48 88,76 72,64 98,48 72,32" fill="#60A5FA" />
                <text x="70" y="106" text-anchor="middle" fill="#0A192F" font-family="Inter, sans-serif" font-weight="700" font-size="18" letter-spacing="2">UnDF</text>
              </svg>
            </div>
          </div>`;

      case 'gdf-economia':
        return `
          <div class="art-canvas art-gdf-economia">
            <div>
              <span class="art-badge-mono" style="color: #93C5FD;">GDF · 2021</span>
              <div class="art-headline">SECRETARIA<br/>DE ECONOMIA</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-emblem-card" aria-hidden="true">
              <svg viewBox="0 0 120 120" width="110" height="110" fill="none">
                <circle cx="60" cy="60" r="46" fill="#1E40AF" />
                <polygon points="60,26 68,52 94,60 68,68 60,94 52,68 26,60 52,52" fill="#FACC15" />
                <rect x="55" y="42" width="10" height="36" fill="#16A34A" />
                <rect x="42" y="55" width="36" height="10" fill="#16A34A" />
              </svg>
            </div>
          </div>`;

      case 'gdf-clube':
        return `
          <div class="art-canvas art-gdf-clube">
            <div>
              <span class="art-badge-mono" style="color: #FB923C;">GDF · 2020</span>
              <div class="art-headline">CLUBE DE<br/>DESCONTO</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-emblem-card" aria-hidden="true">
              <svg viewBox="0 0 120 120" width="110" height="110" fill="none">
                <rect x="22" y="38" width="38" height="48" fill="#F97316" />
                <rect x="46" y="30" width="38" height="56" fill="#2563EB" opacity="0.9" />
                <rect x="64" y="42" width="34" height="44" fill="#38BDF8" opacity="0.88" />
                <path d="M40 72 Q60 88 80 72" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" />
              </svg>
            </div>
          </div>`;

      case 'gdf-fabrica':
        return `
          <div class="art-canvas art-gdf-fabrica">
            <div>
              <span class="art-badge-mono" style="color: #FBBF24;">GDF / SECOM · 2020</span>
              <div class="art-headline">FÁBRICA<br/>SOCIAL</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-emblem-card" aria-hidden="true">
              <svg viewBox="0 0 120 120" width="110" height="110" fill="none">
                <circle cx="44" cy="74" r="22" stroke="#1D4ED8" stroke-width="10" stroke-dasharray="9 6" />
                <circle cx="76" cy="78" r="16" stroke="#2563EB" stroke-width="8" stroke-dasharray="7 5" />
                <circle cx="64" cy="44" r="11" fill="#F59E0B" />
                <circle cx="78" cy="28" r="7" fill="#FB923C" />
              </svg>
            </div>
          </div>`;

      case 'volvo-xc60':
        return `
          <div class="art-canvas art-volvo-xc60">
            <div>
              <span class="art-badge-mono" style="color: #CBD5E1;">CHAMPION VOLVO · 2018</span>
              <div class="art-headline">NOVO XC60<br/>EMPENA OOH</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-editorial-sheet" style="background: #14181D; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.22);" aria-hidden="true">
              <span class="font-mono" style="font-size: 0.65rem; color: #94A3B8;">OUTDOOR / EMPENA</span>
              <div>
                <div class="font-display" style="font-size: 1.5rem; line-height: 0.95;">O CARRO QUE DIRIGE COM VOCÊ.</div>
                <div style="height: 2px; width: 48px; background: #FFFFFF; margin-top: 12px;"></div>
              </div>
            </div>
          </div>`;

      case 'volvo-selekt':
        return `
          <div class="art-canvas art-volvo-selekt">
            <div>
              <span class="art-badge-mono" style="color: #93C5FD;">CHAMPION VOLVO · 2018</span>
              <div class="art-headline">VOLVO<br/>SELEKT</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-editorial-sheet" style="background: #F8FAFC; color: #0F172A;" aria-hidden="true">
              <svg viewBox="0 0 120 70" width="110" height="64" fill="none">
                <path d="M12 62 C26 16, 94 16, 108 62 Z" fill="#CBD5E1" />
                <rect x="8" y="62" width="104" height="4" fill="#0F172A" />
              </svg>
              <div>
                <div class="font-display" style="font-size: 1.25rem; line-height: 1;">BRASÍLIA DESIGN</div>
                <span class="font-mono" style="font-size: 0.62rem; color: #475569;">PRINT ADVERTISING</span>
              </div>
            </div>
          </div>`;

      case 'caubr-editorial':
      default:
        return `
          <div class="art-canvas art-caubr-editorial">
            <div>
              <span class="art-badge-mono" style="color: #7DD3FC;">CAU/BR · 2015</span>
              <div class="art-headline">INFORMES<br/>EDITORIAIS</div>
              <p class="art-subcopy">${loc.subtitle}</p>
            </div>
            <div class="art-editorial-sheet" style="background: #0284C7; color: #FFFFFF;" aria-hidden="true">
              <div class="font-display" style="font-size: 1.1rem; line-height: 1.05;">ELEIÇÕES DO CAU/BR</div>
              <div style="background: #FFFFFF; padding: 10px; display: flex; flex-direction: column; gap: 6px;">
                <div style="height: 6px; width: 90%; background: #0F172A;"></div>
                <div style="height: 6px; width: 75%; background: #94A3B8;"></div>
                <div style="height: 6px; width: 82%; background: #94A3B8;"></div>
              </div>
            </div>
          </div>`;
    }
  }

  function renderProjects() {
    const stack = document.getElementById('projectsStack');
    const totalEl = document.getElementById('stickyCounterTotal');
    const numEl = document.getElementById('stickyCounterNum');
    const titleEl = document.getElementById('railTitle');
    const progressEl = document.getElementById('railProgressFill');
    if (!stack) return;

    const list = getFilteredProjects();
    const copy = DATA.copy[lang].projects;

    stack.innerHTML = '';
    list.forEach((proj, idx) => {
      const loc = proj[lang];
      const displayNum = String(idx + 1).padStart(2, '0');
      const card = document.createElement('article');
      card.className = 'project-card';
      card.dataset.projectId = proj.id;
      card.dataset.displayIndex = displayNum;
      card.dataset.era = loc.era;
      card.dataset.title = loc.title;
      card.innerHTML = `
        <button class="project-trigger" type="button" data-open-project="${proj.id}" aria-label="${loc.title} — ${copy.viewCase}">
          <div class="project-media-box">
            <div class="project-artwork">
              ${renderCoverVisual(proj, lang)}
            </div>
          </div>
          <div class="project-caption-bar">
            <h3 class="project-caption-title">${displayNum} / ${loc.title}</h3>
            <span class="project-caption-meta">${proj.year} · ${loc.categoryLabel}</span>
          </div>
        </button>
      `;
      stack.appendChild(card);
    });

    if (list.length > 0) {
      const firstLoc = list[0][lang];
      if (numEl) numEl.textContent = '01';
      if (totalEl) totalEl.textContent = `/ ${String(list.length).padStart(2, '0')}`;
      if (titleEl) titleEl.textContent = firstLoc.title;
      if (progressEl) progressEl.style.transform = `scaleX(${1 / list.length})`;
    }

    stack.querySelectorAll('[data-open-project]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openProjectModal(btn.dataset.openProject, btn);
      });
    });

    const prevBtn = document.getElementById('projectsPrevBtn');
    const nextBtn = document.getElementById('projectsNextBtn');
    if (prevBtn && copy.prevProject) prevBtn.setAttribute('aria-label', copy.prevProject);
    if (nextBtn && copy.nextProject) nextBtn.setAttribute('aria-label', copy.nextProject);

    if (global.PortfolioMotion && typeof global.PortfolioMotion.refreshSticky === 'function') {
      global.PortfolioMotion.refreshSticky(list.length);
    }
  }

  function syncCareerToggle() {
    document.querySelectorAll('#careerToggle .career-option').forEach((btn) => {
      const isCurrent = btn.dataset.careerTab === activeCareerTab;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-selected', String(isCurrent));
    });
    const panel = document.getElementById('careerContent');
    if (panel) {
      panel.setAttribute(
        'aria-labelledby',
        activeCareerTab === 'education' ? 'careerTabEducation' : 'careerTabExperience'
      );
    }
  }

  function renderCareer() {
    const container = document.getElementById('careerContent');
    if (!container) return;

    syncCareerToggle();

    const items = DATA.evolution.filter((item) => item.category === activeCareerTab);
    const rowsHtml = items
      .map((item) => {
        const loc = item[lang];
        return `
          <div class="evolution-row">
            <div class="font-mono evolution-period">${item.period}</div>
            <div>
              <h3 class="evolution-role">${loc.role}</h3>
              <div class="evolution-org">${loc.org}</div>
              <p class="evolution-detail">${loc.detail}</p>
            </div>
          </div>`;
      })
      .join('');

    container.innerHTML = `<div class="evolution-list">${rowsHtml}</div>`;
  }

  function setCareerTab(nextTab) {
    if ((nextTab !== 'experience' && nextTab !== 'education') || nextTab === activeCareerTab) return;
    activeCareerTab = nextTab;
    renderCareer();
    if (global.ScrollTrigger && typeof global.ScrollTrigger.refresh === 'function') {
      global.ScrollTrigger.refresh();
    }
  }

  function renderDisciplines() {
    const listEl = document.getElementById('disciplinesList');
    const copyEl = document.getElementById('disciplineCopy');
    const bgLayers = document.querySelectorAll('.disc-bg-layer');
    if (!listEl) return;

    listEl.innerHTML = '';
    DATA.disciplines.forEach((disc) => {
      const loc = disc[lang];
      const isActive = disc.id === activeDisciplineId;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.role = 'tab';
      btn.className = `discipline-tab${isActive ? ' is-active' : ''}`;
      btn.setAttribute('aria-selected', String(isActive));
      btn.dataset.discId = disc.id;
      btn.innerHTML = `
        <span class="word-primary">${loc.primary}</span>
        <span class="word-secondary">${loc.secondary}</span>
      `;

      const activate = () => {
        activeDisciplineId = disc.id;
        listEl.querySelectorAll('.discipline-tab').forEach((el) => {
          const active = el.dataset.discId === disc.id;
          el.classList.toggle('is-active', active);
          el.setAttribute('aria-selected', String(active));
        });
        bgLayers.forEach((layer) => {
          layer.classList.toggle('is-active', layer.dataset.discBg === disc.id);
        });
        if (copyEl) copyEl.textContent = loc.description;
      };

      btn.addEventListener('click', activate);
      btn.addEventListener('mouseenter', activate);
      listEl.appendChild(btn);

      if (isActive) {
        if (copyEl) copyEl.textContent = loc.description;
      }
    });
  }

  function applyStaticCopy() {
    const copy = DATA.copy[lang];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getNestedCopy(copy, el.dataset.i18n);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('#langToggle .lang-option').forEach((btn) => {
      const isCurrent = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
    });
  }

  /* ------------------------------------------------------------------------
     MODALS (CASE STUDY)
     ------------------------------------------------------------------------ */
  function getModalNeighbors(projectId) {
    const activeList = getFilteredProjects();
    const listForNav = activeList.some((p) => p.id === projectId) ? activeList : DATA.projects;
    const idx = listForNav.findIndex((p) => p.id === projectId);
    const safeIdx = idx >= 0 ? idx : 0;
    return {
      listForNav,
      project: listForNav[safeIdx],
      prevProj: listForNav[(safeIdx - 1 + listForNav.length) % listForNav.length],
      nextProj: listForNav[(safeIdx + 1) % listForNav.length]
    };
  }

  function openProjectModal(projectId, triggerEl, focusTargetId) {
    const backdrop = document.getElementById('caseModalBackdrop');
    const bodyEl = document.getElementById('caseModalContent');
    if (!backdrop || !bodyEl) return;

    const { project, prevProj, nextProj } = getModalNeighbors(projectId);
    if (!project) return;

    const wasAlreadyOpen = backdrop.classList.contains('is-open');
    currentModalProjectId = project.id;
    if (!wasAlreadyOpen || triggerEl) {
      lastFocusedEl = triggerEl || document.activeElement;
    }

    const loc = project[lang];
    const m = DATA.copy[lang].modal;
    const pCopy = DATA.copy[lang].projects;
    const toolsHtml = project.tools.map((tool) => `<li>${tool}</li>`).join('');

    bodyEl.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-index">${project.index}</span>
          <h2 class="modal-title" id="modalHeading">${loc.title}</h2>
        </div>
        <div class="modal-header-actions">
          <div class="modal-header-nav" role="group" aria-label="${pCopy.heading}">
            <button
              class="modal-step-btn"
              id="modalPrevBtn"
              type="button"
              data-modal-jump="${prevProj.id}"
              aria-label="${pCopy.prevProject} — ${prevProj[lang].title}"
              title="${prevProj.index} · ${prevProj[lang].title}"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M16 10H4M4 10L9 5M4 10L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="square" />
              </svg>
              <span class="roll-wrap modal-step-label">
                <span class="roll-track">
                  <span>${m.prevShort}</span>
                  <span aria-hidden="true">${m.prevShort}</span>
                </span>
              </span>
            </button>
            <span class="modal-step-sep" aria-hidden="true">/</span>
            <button
              class="modal-step-btn"
              id="modalNextBtn"
              type="button"
              data-modal-jump="${nextProj.id}"
              aria-label="${pCopy.nextProject} — ${nextProj[lang].title}"
              title="${nextProj.index} · ${nextProj[lang].title}"
            >
              <span class="roll-wrap modal-step-label">
                <span class="roll-track">
                  <span>${m.nextShort}</span>
                  <span aria-hidden="true">${m.nextShort}</span>
                </span>
              </span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="square" />
              </svg>
            </button>
          </div>
          <span class="modal-header-divider" aria-hidden="true"></span>
          <button class="modal-close-icon-btn" type="button" id="modalCloseBtn" aria-label="${m.closeBtn}">
            <span class="drawer-close-icon" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-hero-art">${renderCoverVisual(project, lang)}</div>
        <div class="modal-narrative-grid">
          <div class="modal-narrative-col modal-overview-col">
            <h4>${m.overview}</h4>
            <p>${loc.context}</p>
            <p>${loc.approach}</p>
            <p>${loc.outcome}</p>
          </div>
          <div class="modal-narrative-col modal-tools-col">
            <h4>${m.toolsHeading}</h4>
            <ul class="modal-tools-list">${toolsHtml}</ul>
          </div>
        </div>
      </div>
    `;

    bodyEl.scrollTop = 0;
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modalCloseBtn');
    closeBtn?.addEventListener('click', closeModal);

    bodyEl.querySelectorAll('[data-modal-jump]').forEach((btn) => {
      btn.addEventListener('click', () => openProjectModal(btn.dataset.modalJump, lastFocusedEl, btn.id));
    });

    const targetFocus = focusTargetId ? document.getElementById(focusTargetId) : closeBtn;
    targetFocus?.focus();
  }

  function closeModal() {
    const backdrop = document.getElementById('caseModalBackdrop');
    if (!backdrop || !backdrop.classList.contains('is-open')) return;
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentModalProjectId = null;
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function setLanguage(nextLang) {
    if (!nextLang || (nextLang !== 'en' && nextLang !== 'pt') || nextLang === lang) return;
    lang = nextLang;
    applyStaticCopy();
    renderProjects();
    renderCareer();
    renderDisciplines();

    if (currentModalProjectId) {
      openProjectModal(currentModalProjectId, lastFocusedEl);
    }
  }

  function toggleLanguage() {
    setLanguage(lang === 'en' ? 'pt' : 'en');
  }

  function init() {
    applyStaticCopy();
    renderProjects();
    renderCareer();
    renderDisciplines();

    // Language toggle (clicking inactive switches to it; clicking active or '/' toggles)
    const langToggle = document.getElementById('langToggle');
    langToggle?.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-option');
      if (opt && opt.dataset.lang && opt.dataset.lang !== lang) {
        setLanguage(opt.dataset.lang);
      } else {
        toggleLanguage();
      }
    });

    // Career section toggle (clicking option activates it; clicking '/' flips between tabs)
    const careerToggle = document.getElementById('careerToggle');
    careerToggle?.addEventListener('click', (e) => {
      const opt = e.target.closest('.career-option');
      if (opt && opt.dataset.careerTab) {
        setCareerTab(opt.dataset.careerTab);
      } else if (e.target.closest('.career-sep')) {
        setCareerTab(activeCareerTab === 'experience' ? 'education' : 'experience');
      }
    });
    careerToggle?.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const next = activeCareerTab === 'experience' ? 'education' : 'experience';
        setCareerTab(next);
        const nextBtn = careerToggle.querySelector(`[data-career-tab="${next}"]`);
        nextBtn?.focus();
      }
    });

    // Modal backdrop + Esc + ArrowLeft/ArrowRight navigation
    const backdrop = document.getElementById('caseModalBackdrop');
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (!currentModalProjectId) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const { prevProj } = getModalNeighbors(currentModalProjectId);
        openProjectModal(prevProj.id, lastFocusedEl, 'modalPrevBtn');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const { nextProj } = getModalNeighbors(currentModalProjectId);
        openProjectModal(nextProj.id, lastFocusedEl, 'modalNextBtn');
      }
    });
  }

  global.PortfolioUI = {
    init,
    openProjectModal,
    closeModal
  };
})(window);
