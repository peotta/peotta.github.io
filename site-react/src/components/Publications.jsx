import { useMemo, useState } from 'react';
import { awards, publications, registrations, toBibtex } from '../publicacoes.js';

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

export function PublicationList({ t, type }) {
  const byYear = useMemo(() => {
    const groups = new Map();
    publications
      .filter((p) => p.type === type)
      .forEach((p) => groups.set(p.year, [...(groups.get(p.year) ?? []), p]));
    return [...groups.entries()].sort((a, b) => b[0] - a[0]);
  }, [type]);

  return (
    <>
      {byYear.map(([year, items]) => (
        <div className="pub-year" key={year}>
          <h3 className="pub-year-label">{year}</h3>
          <ol className="pub-list">
            {items.map((p) => (
              <li key={p.id} className="pub-item">
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
      ))}
    </>
  );
}

export function Awards({ t, lang }) {
  return (
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
  );
}

export function Registrations({ t }) {
  return (
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
  );
}
