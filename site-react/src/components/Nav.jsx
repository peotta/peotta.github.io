import { useEffect, useState } from 'react';
import { LANGS } from '../i18n.js';

export const NAV_ITEMS = [
  { id: 'sobre', key: 'about' },
  { id: 'atuacao', key: 'work' },
  { id: 'conteudos', key: 'content' },
  { id: 'ravens', key: 'ravens' },
  { id: 'podcast', key: 'podcast' },
  { id: 'contato', key: 'contact' },
];

// Bandeiras simplificadas em SVG (emoji de bandeira nao aparece no Windows).
const FLAGS = {
  pt: (
    <>
      <rect width="20" height="20" fill="#009b3a" />
      <path d="M10 3.2 17.4 10 10 16.8 2.6 10Z" fill="#ffdf00" />
      <circle cx="10" cy="10" r="3.6" fill="#002776" />
    </>
  ),
  en: (
    <>
      <rect width="20" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * (20 / 13)} width="20" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="9" height={(20 / 13) * 7} fill="#3c3b6e" />
    </>
  ),
  es: (
    <>
      <rect width="20" height="20" fill="#aa151b" />
      <rect y="5" width="20" height="10" fill="#f1bf00" />
    </>
  ),
};

function Flag({ code }) {
  return (
    <svg className="flag" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      {FLAGS[code]}
    </svg>
  );
}

export default function Nav({ t, lang, onLang, active, progress, onSearch }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#topo" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">LP</span>
          <span className="brand-text">
            <span className="brand-name">Laerte Peotta</span>
            <span className="brand-sub">Prof. Dr. • UnB</span>
          </span>
        </a>

        <nav id="menu-principal" className={`menu${open ? ' is-open' : ''}`} aria-label="Principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : undefined}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="nav-tools">
          <button type="button" className="search-trigger" onClick={onSearch} aria-label={t.nav.search}>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="search-label">{t.nav.search}</span>
            <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>

          <div className="lang-switcher" role="group" aria-label="Idioma / Language">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                className={lang === l.code ? 'is-active' : undefined}
                aria-pressed={lang === l.code}
                aria-label={l.name}
                onClick={() => onLang(l.code)}
              >
                <Flag code={l.code} />
                <span className="lang-code">{l.label}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`menu-toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
