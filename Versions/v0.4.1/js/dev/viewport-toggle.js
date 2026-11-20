/* ==========================================================================
   DEV ONLY (PRE-v1.0 QA): Desktop / Tablet (820px) / Mobile (390px) Switcher
   Self-contained utility — remove <script> tag in index.html & this file before v1.0
   ========================================================================== */

(function initDevViewportToggle() {
  const params = new URLSearchParams(window.location.search);
  const vpParam = params.get('vp');
  if (vpParam === 'mobile' || vpParam === 'tablet' || window.self !== window.top) {
    return;
  }

  const PRESETS = {
    tablet: {
      width: 820,
      maxHeight: 1060,
      label: 'TABLET · 820PX · REMOVE BEFORE V1.0',
      title: 'Tablet 820px portfolio preview'
    },
    mobile: {
      width: 390,
      maxHeight: 880,
      label: 'MOBILE · 390PX · REMOVE BEFORE V1.0',
      title: 'Mobile 390px portfolio preview'
    }
  };

  function injectStyles() {
    if (document.getElementById('devViewportToggleStyles')) return;
    const style = document.createElement('style');
    style.id = 'devViewportToggleStyles';
    style.textContent = `
      #devViewportToggle {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 950;
        display: inline-flex;
        align-items: center;
        background: rgba(14, 14, 14, 0.94);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid #282828;
        border-radius: 9999px;
        padding: 4px 6px;
        gap: 4px;
        font-family: var(--font-mono);
      }

      .dev-vp-badge {
        font-size: 0.65rem;
        letter-spacing: 0.08em;
        color: var(--text-muted);
        padding: 4px 8px;
        border-right: 1px solid var(--border-subtle);
        text-transform: uppercase;
        user-select: none;
      }

      .dev-vp-btn {
        font-family: var(--font-mono);
        font-size: 0.68rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 6px 12px;
        border-radius: 9999px;
        color: var(--text-secondary);
        background: transparent;
        border: none;
        cursor: pointer;
        transition: color 180ms ease, background-color 180ms ease;
        white-space: nowrap;
      }

      .dev-vp-btn:hover:not(.is-active) {
        color: var(--text-primary);
      }

      .dev-vp-btn.is-active {
        background: var(--accent-lime-dim);
        color: var(--accent-lime);
      }

      @media (max-width: 540px) {
        #devViewportToggle {
          display: none;
        }
      }

      #devMobileOverlay {
        position: fixed;
        inset: 0;
        z-index: 900;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: rgba(4, 4, 4, 0.94);
        background-image:
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 32px 32px;
      }

      #devMobileOverlay.is-open {
        display: flex;
      }

      .dev-mobile-shell {
        width: 392px;
        max-width: 100%;
        height: min(880px, calc(100vh - 40px));
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border-strong);
        background: #000000;
        box-shadow: 0 32px 90px rgba(0, 0, 0, 0.85);
        border-radius: 0px;
        overflow: hidden;
        transition: width 240ms var(--ease-editorial), height 240ms var(--ease-editorial);
      }

      .dev-mobile-bar {
        height: 36px;
        flex-shrink: 0;
        padding: 0 12px;
        background: #0E0E0E;
        border-bottom: 1px solid #282828;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-family: var(--font-mono);
        font-size: 0.65rem;
        letter-spacing: 0.08em;
        color: var(--text-secondary);
        text-transform: uppercase;
      }

      .dev-mobile-actions {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }

      .dev-mobile-action {
        padding: 3px 8px;
        border: 1px solid #282828;
        border-radius: 0px;
        background: transparent;
        color: var(--text-secondary);
        font-family: var(--font-mono);
        font-size: 0.62rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 180ms ease, border-color 180ms ease;
      }

      .dev-mobile-action:hover {
        color: var(--accent-lime);
        border-color: var(--accent-lime);
      }

      #devMobileFrame {
        flex: 1;
        width: 100%;
        border: 0;
        display: block;
        background: #000000;
      }
    `;
    document.head.appendChild(style);
  }

  function buildPreviewUrl(mode) {
    const url = new URL(window.location.href);
    url.searchParams.set('vp', mode);
    return url.toString();
  }

  function mount() {
    if (document.getElementById('devViewportToggle')) return;
    injectStyles();

    const toggle = document.createElement('div');
    toggle.id = 'devViewportToggle';
    toggle.setAttribute('role', 'group');
    toggle.setAttribute('aria-label', 'QA viewport preview switcher');
    toggle.innerHTML = `
      <span class="dev-vp-badge">QA</span>
      <button class="dev-vp-btn is-active" type="button" data-dev-vp="web" aria-pressed="true">WEB</button>
      <button class="dev-vp-btn" type="button" data-dev-vp="tablet" aria-pressed="false">TABLET 820</button>
      <button class="dev-vp-btn" type="button" data-dev-vp="mobile" aria-pressed="false">MOBILE 390</button>
    `;

    const overlay = document.createElement('div');
    overlay.id = 'devMobileOverlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Responsive viewport preview frame');
    overlay.innerHTML = `
      <div class="dev-mobile-shell">
        <div class="dev-mobile-bar">
          <span id="devPreviewLabel">MOBILE · 390PX · REMOVE BEFORE V1.0</span>
          <div class="dev-mobile-actions">
            <button class="dev-mobile-action" type="button" data-dev-action="reload" aria-label="Reload viewport preview">RELOAD ↻</button>
            <button class="dev-mobile-action" type="button" data-dev-action="close" aria-label="Close viewport preview">CLOSE ✕</button>
          </div>
        </div>
        <iframe id="devMobileFrame" title="Responsive portfolio preview" src="about:blank"></iframe>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(toggle);

    const shell = overlay.querySelector('.dev-mobile-shell');
    const labelEl = document.getElementById('devPreviewLabel');
    const frame = document.getElementById('devMobileFrame');
    const buttons = toggle.querySelectorAll('[data-dev-vp]');
    let currentMode = 'web';

    function setMode(mode) {
      const preset = PRESETS[mode];
      currentMode = preset ? mode : 'web';

      buttons.forEach((btn) => {
        const active = btn.dataset.devVp === currentMode;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      if (preset) {
        shell.style.width = `min(${preset.width + 2}px, calc(100vw - 40px))`;
        shell.style.height = `min(${preset.maxHeight}px, calc(100vh - 40px))`;
        if (labelEl) labelEl.textContent = preset.label;
        frame.title = preset.title;
        frame.src = buildPreviewUrl(currentMode);
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.getElementById('customCursor')?.classList.remove('is-visible');
        document.body.style.overflow = 'hidden';
      } else {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        frame.src = 'about:blank';
        document.body.style.overflow = '';
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => setMode(btn.dataset.devVp));
    });

    overlay.querySelector('[data-dev-action="reload"]')?.addEventListener('click', () => {
      if (PRESETS[currentMode]) {
        frame.src = buildPreviewUrl(currentMode);
      }
    });

    overlay.querySelector('[data-dev-action="close"]')?.addEventListener('click', () => {
      setMode('web');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        setMode('web');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
