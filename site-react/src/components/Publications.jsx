import { useMemo, useState } from 'react';
import { awards, publications, registrations, toBibtex } from '../publicacoes.js';
import { normalize } from './Catalog.jsx';

const TYPES = ['all', 'journal', 'conference', 'chapter'];

// Destaca o nome do professor na lista de autores.
function Authors({ list }) {
  if (list.length === 0) return null;
  return (
    <p className="pub-authors">
      {list.map((name, i) => (
        <span key={name}>
          {/Peotta/.test(name) ? <strong>{name}</strong> : name}
          {i < list.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}

function CiteButton({ pub, t }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toBibtex(pub));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('BibTeX', toBibtex(pub));
    }
  };
  return (
    <button type="button" className="pub-action" onClick={copy} aria-live="polite">
      {copied ? t.pubs.copied : t.pubs.cite}
    </button>
  );
}

export function PublicationList({ t }) {
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(
    () => ({
      all: publications.length,
      journal: publications.filter((p) => p.type === 'journal').length,
      conference: publications.filter((p) => p.type === 'conference').length,
      chapter: publications.filter((p) => p.type === 'chapter').length,
    }),
    [],
  );

  const byYear = useMemo(() => {
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
    const list = publications.filter((p) => {
      if (type !== 'all' && p.type !== type) return false;
      const hay = normalize([p.title, p.venue, p.details ?? '', p.publisher ?? '', ...p.authors, String(p.year)].join(' '));
      return terms.every((term) => hay.includes(term));
    });
    const groups = new Map();
    list.forEach((p) => groups.set(p.year, [...(groups.get(p.year) ?? []), p]));
    return [...groups.entries()].sort((a, b) => b[0] - a[0]);
  }, [type, query]);

  const total = byYear.reduce((n, [, items]) => n + items.length, 0);

  return (
    <>
      <div className="catalog-toolbar pub-toolbar">
        <div className="filter-chips" role="group" aria-label={t.pubs.listTitle}>
          {TYPES.map((k) => (
            <button
              key={k}
              type="button"
              className={type === k ? 'is-active' : undefined}
              aria-pressed={type === k}
              onClick={() => setType(k)}
            >
              {t.pubs.types[k]}
              <span className="chip-count">{counts[k]}</span>
            </button>
          ))}
        </div>
        <label className="catalog-search">
          <span className="sr-only">{t.pubs.searchLabel}</span>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            placeholder={t.pubs.searchPlaceholder}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <p className="catalog-count" aria-live="polite">
        {t.pubs.count(total)}
      </p>

      {total === 0 ? (
        <div className="empty-state">
          <p className="muted">{t.pubs.empty}</p>
          <button
            type="button"
            className="button button-ghost"
            onClick={() => {
              setQuery('');
              setType('all');
            }}
          >
            {t.catalog.clear}
          </button>
        </div>
      ) : (
        byYear.map(([year, items]) => (
          <div className="pub-year" key={year}>
            <h3 className="pub-year-label">{year}</h3>
            <ol className="pub-list">
              {items.map((p) => (
                <li key={p.id} className="pub-item">
                  <span className="pub-type">{t.pubs.typeLabel[p.type]}</span>
                  <p className="pub-title">{p.title}</p>
                  <Authors list={p.authors} />
                  <p className="pub-venue">
                    {p.editors && `In: ${p.editors.join('; ')} (${t.pubs.eds}). `}
                    <em>{p.venue}</em>
                    {p.publisher ? `. ${p.publisher}` : ''}
                    {p.details ? `, ${p.details}` : ''}, {p.year}
                  </p>
                  <p className="pub-links">
                    {p.pdf && (
                      <a className="pub-action" href={p.pdf} target="_blank" rel="noreferrer">
                        PDF
                      </a>
                    )}
                    {p.amazon && (
                      <a className="pub-action" href={p.amazon} target="_blank" rel="noreferrer">
                        {t.pubs.amazon} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {p.doi && (
                      <a className="pub-action" href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">
                        DOI <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {p.authors.length > 0 && <CiteButton pub={p} t={t} />}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ))
      )}
    </>
  );
}

export function Recognition({ t, lang }) {
  return (
    <div className="recognition-grid">
      <div className="card">
        <h3>{t.pubs.awardsTitle}</h3>
        <ul className="recognition-list">
          {awards.map((a) => (
            <li key={a.id}>
              <span className="recognition-year">{a.year}</span>
              <div>
                <strong>{a.title[lang]}</strong>
                <p>{a.event[lang]}</p>
                <p className="pub-links">
                  <a className="pub-action" href={a.pdf} target="_blank" rel="noreferrer">
                    {t.pubs.certificate}
                  </a>
                  {a.link && (
                    <a className="pub-action" href={a.link} target="_blank" rel="noreferrer">
                      {t.pubs.results} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>{t.pubs.regsTitle}</h3>
        <ul className="recognition-list">
          {registrations.map((r) => (
            <li key={r.id}>
              <span className="recognition-year">{r.year}</span>
              <div>
                <strong>{r.name}</strong>
                <p>{r.title}</p>
                <p className="pub-links">
                  <code>{r.process}</code>
                  <a className="pub-action" href={r.pdf} target="_blank" rel="noreferrer">
                    {t.pubs.certificate}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
