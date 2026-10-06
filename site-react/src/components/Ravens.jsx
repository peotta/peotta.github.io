import { useEffect, useState } from 'react';
import { RAVENS } from '../data.js';
import { awards, publications, registrations } from '../publicacoes.js';
import { PublicationList, Recognition } from './Publications.jsx';

const TABS = ['group', 'pubs', 'recognition'];

// Ancoras que abrem a secao ja na aba correspondente.
const HASH_TAB = { publicacoes: 'pubs', premios: 'recognition' };

const COUNTS = {
  pubs: publications.length,
  recognition: awards.length + registrations.length,
};

export default function Ravens({ t, lang }) {
  const r = t.ravens;
  const [tab, setTab] = useState('group');

  useEffect(() => {
    const apply = () => {
      const target = HASH_TAB[decodeURIComponent(location.hash.slice(1))];
      if (target) {
        setTab(target);
        requestAnimationFrame(() => document.getElementById('ravens')?.scrollIntoView());
      }
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  // Setas esquerda/direita alternam as abas, como em um tablist nativo.
  const onKeyDown = (e) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    const next = TABS[(TABS.indexOf(tab) + step + TABS.length) % TABS.length];
    setTab(next);
    document.getElementById(`ravens-tab-${next}`)?.focus();
  };

  return (
    <section id="ravens" className="section" aria-labelledby="ravens-title">
      <div className="container">
        <div className="section-head">
          <h2 id="ravens-title">{r.title}</h2>
          <p className="ravens-name">{r.name}</p>
        </div>

        <div className="catalog-toolbar ravens-tabs">
          <div className="filter-chips" role="tablist" aria-label={r.title} onKeyDown={onKeyDown}>
            {TABS.map((k) => (
              <button
                key={k}
                id={`ravens-tab-${k}`}
                type="button"
                role="tab"
                aria-selected={tab === k}
                aria-controls={`ravens-panel-${k}`}
                tabIndex={tab === k ? 0 : -1}
                className={tab === k ? 'is-active' : undefined}
                onClick={() => setTab(k)}
              >
                {r.tabs[k]}
                {COUNTS[k] && <span className="chip-count">{COUNTS[k]}</span>}
              </button>
            ))}
          </div>
        </div>

        <div
          className="ravens-panel"
          id={`ravens-panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`ravens-tab-${tab}`}
        >
          {tab === 'group' && (
            <div className="ravens">
              <a className="ravens-image" href={RAVENS.page}>
                <img src={RAVENS.logo} alt={r.logoAlt} width="800" height="800" loading="lazy" />
              </a>
              <div className="ravens-copy">
                <p className="lead">{r.text}</p>
                <h3>{r.linesTitle}</h3>
                <ul className="check-list">
                  {r.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="hero-actions">
                  <a className="button button-primary" href={RAVENS.page}>
                    {r.open}
                  </a>
                  <a className="button button-ghost" href={RAVENS.repo} target="_blank" rel="noreferrer">
                    {r.repo} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          )}
          {tab === 'pubs' && <PublicationList t={t} />}
          {tab === 'recognition' && <Recognition t={t} lang={lang} />}
        </div>
      </div>
    </section>
  );
}
