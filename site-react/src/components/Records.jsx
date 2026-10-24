import { useEffect, useState } from 'react';
import { awards, publications, registrations } from '../publicacoes.js';
import { Awards, PublicationList, Registrations } from './Publications.jsx';

const TABS = ['pubs', 'awards', 'regs'];

// Ancoras antigas e novas que abrem o bloco ja na aba correspondente.
const HASH_TAB = { publicacoes: 'pubs', premios: 'awards', registros: 'regs' };

const COUNTS = { pubs: publications.length, awards: awards.length, regs: registrations.length };

export default function Records({ t, lang }) {
  const [tab, setTab] = useState('pubs');

  useEffect(() => {
    const apply = () => {
      const target = HASH_TAB[decodeURIComponent(location.hash.slice(1))];
      if (target) {
        setTab(target);
        requestAnimationFrame(() => document.getElementById('producao')?.scrollIntoView());
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
    document.getElementById(`records-tab-${next}`)?.focus();
  };

  return (
    <div id="producao" className="records">
      <div className="catalog-toolbar records-tabs">
        <div className="filter-chips" role="tablist" aria-label={t.pubs.label} onKeyDown={onKeyDown}>
          {TABS.map((k) => (
            <button
              key={k}
              id={`records-tab-${k}`}
              type="button"
              role="tab"
              aria-selected={tab === k}
              aria-controls={`records-panel-${k}`}
              tabIndex={tab === k ? 0 : -1}
              className={tab === k ? 'is-active' : undefined}
              onClick={() => setTab(k)}
            >
              {t.pubs.tabs[k]}
              <span className="chip-count">{COUNTS[k]}</span>
            </button>
          ))}
        </div>
      </div>

      <div id={`records-panel-${tab}`} role="tabpanel" aria-labelledby={`records-tab-${tab}`}>
        {tab === 'pubs' && <PublicationList t={t} />}
        {tab === 'awards' && <Awards t={t} lang={lang} />}
        {tab === 'regs' && <Registrations t={t} />}
      </div>
    </div>
  );
}
