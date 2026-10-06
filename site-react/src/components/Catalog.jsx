import { useMemo } from 'react';
import { CATEGORY_ORDER, resources } from '../data.js';

export const normalize = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function searchResources(query, lang) {
  const q = normalize(query.trim());
  if (!q) return resources;
  const terms = q.split(/\s+/);
  return resources.filter((r) => {
    const hay = normalize(
      [r.title[lang], r.text[lang], r.meta?.[lang] ?? '', r.code ?? '', ...(r.tags ?? [])].join(' '),
    );
    return terms.every((term) => hay.includes(term));
  });
}

function ResourceCard({ r, lang, t }) {
  const label = r.categories.map((c) => t.catalog.categories[c]);
  return (
    <article className={`resource-card${r.featured ? ' is-featured' : ''}`}>
      <div className="resource-top">
        {r.code ? (
          <span className="resource-code">{r.code}</span>
        ) : r.unb ? (
          <span className="resource-code">UnB</span>
        ) : null}
        <span className="resource-cats">{label.join(' / ')}</span>
      </div>
      <h3>{r.title[lang]}</h3>
      <p>{r.text[lang]}</p>
      {r.meta && <p className="resource-meta">{r.unb && <span className="unb-dot" aria-hidden="true" />}{r.meta[lang]}</p>}
      {r.tags?.length > 0 && (
        <ul className="resource-tags">
          {r.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <a
        className="resource-link"
        href={r.href}
        {...(r.external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {r.cta[lang]}
        <span aria-hidden="true">{r.external ? '↗' : '→'}</span>
        {r.external && <span className="sr-only"> ({t.catalog.external})</span>}
      </a>
    </article>
  );
}

export default function Catalog({ t, lang, filter, onFilter, query, onQuery }) {
  const counts = useMemo(() => {
    const c = { all: resources.length };
    CATEGORY_ORDER.forEach((cat) => {
      c[cat] = resources.filter((r) => r.categories.includes(cat)).length;
    });
    return c;
  }, []);

  const visible = useMemo(() => {
    const matched = searchResources(query, lang);
    return filter === 'all' ? matched : matched.filter((r) => r.categories.includes(filter));
  }, [filter, query, lang]);

  const chips = ['all', ...CATEGORY_ORDER];

  return (
    <section id="conteudos" className="section" aria-labelledby="conteudos-title">
      <div className="container">
        <div className="section-head">
          <h2 id="conteudos-title">{t.catalog.title}</h2>
          <p className="lead">{t.catalog.lead}</p>
        </div>

        <div className="catalog-toolbar">
          <div className="filter-chips" role="group" aria-label={t.catalog.searchLabel}>
            {chips.map((c) => (
              <button
                key={c}
                type="button"
                className={filter === c ? 'is-active' : undefined}
                aria-pressed={filter === c}
                onClick={() => onFilter(c)}
              >
                {c === 'all' ? t.catalog.all : t.catalog.categories[c]}
                <span className="chip-count">{counts[c]}</span>
              </button>
            ))}
          </div>
          <label className="catalog-search">
            <span className="sr-only">{t.catalog.searchLabel}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              placeholder={t.catalog.searchPlaceholder}
              onChange={(e) => onQuery(e.target.value)}
            />
          </label>
        </div>

        <p className="catalog-count" aria-live="polite">
          {t.catalog.count(visible.length)}
        </p>

        {visible.length > 0 ? (
          <div className="resource-grid">
            {visible.map((r) => (
              <ResourceCard key={r.id} r={r} lang={lang} t={t} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="muted">{t.catalog.empty}</p>
            <button
              type="button"
              className="button button-ghost"
              onClick={() => {
                onQuery('');
                onFilter('all');
              }}
            >
              {t.catalog.clear}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
