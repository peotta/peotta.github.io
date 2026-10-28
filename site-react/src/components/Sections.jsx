import { useEffect, useState } from 'react';
import { profiles, SPOTIFY_URL } from '../data.js';
import { awards, publications, registrations } from '../publicacoes.js';
import Records from './Records.jsx';

function SectionHead({ id, title, lead }) {
  return (
    <div className="section-head">
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

const PUB_TYPES = ['journal', 'conference', 'chapter', 'book'];

// Ancoras que abrem a lista de producao ja na visao correspondente.
const HASH_VIEW = {
  publicacoes: { kind: 'pubs', type: 'journal' },
  periodicos: { kind: 'pubs', type: 'journal' },
  congressos: { kind: 'pubs', type: 'conference' },
  capitulos: { kind: 'pubs', type: 'chapter' },
  livros: { kind: 'pubs', type: 'book' },
  premios: { kind: 'awards' },
  registros: { kind: 'regs' },
};

export function About({ t, lang }) {
  const [view, setView] = useState(null);

  useEffect(() => {
    const apply = () => {
      const target = HASH_VIEW[decodeURIComponent(location.hash.slice(1))];
      if (target) setView(target);
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const close = () => {
    setView(null);
    // Sai da ancora do popup para que o mesmo link possa abrir de novo.
    if (HASH_VIEW[decodeURIComponent(location.hash.slice(1))]) history.replaceState(null, '', '#sobre');
  };
  const current = (kind, type) => view?.kind === kind && (kind !== 'pubs' || view.type === type);
  const count = (type) => publications.filter((p) => p.type === type).length;
  const viewCount = !view ? 0 : view.kind === 'pubs' ? count(view.type) : view.kind === 'awards' ? awards.length : registrations.length;

  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container">
        <SectionHead id="sobre-title" title={t.about.title} />
        <div className="about-grid">
          <article className="card">
            <h3>{t.about.pathTitle}</h3>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <nav className="path-links" aria-label={t.pubs.label}>
              <div>
                <span className="path-label">{t.pubs.tabs.pubs}</span>
                <ul>
                  {PUB_TYPES.map((k) => (
                    <li key={k}>
                      <button type="button" aria-current={current('pubs', k) ? 'true' : undefined} onClick={() => setView({ kind: 'pubs', type: k })}>
                        {t.pubs.types[k]} <span className="chip-count">{count(k)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button type="button" className="path-single" aria-current={current('awards') ? 'true' : undefined} onClick={() => setView({ kind: 'awards' })}>
                  {t.pubs.tabs.awards} <span className="chip-count">{awards.length}</span>
                </button>
                <button type="button" className="path-single" aria-current={current('regs') ? 'true' : undefined} onClick={() => setView({ kind: 'regs' })}>
                  {t.pubs.tabs.regs} <span className="chip-count">{registrations.length}</span>
                </button>
              </div>
            </nav>
          </article>
          <aside className="card">
            <dl className="focus-list">
              {t.metrics.map((m) => (
                <div key={m.title}>
                  <dt>{m.title}</dt>
                  <dd>{m.text}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
        <section className="card about-areas" aria-labelledby="areas-title">
          <h3 id="areas-title">{t.work.title}</h3>
          <ul className="tag-cloud">
            {t.work.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </section>
        <Records t={t} lang={lang} view={view} count={viewCount} onClose={close} />
      </div>
    </section>
  );
}

export function Podcast({ t }) {
  return (
    <section id="podcast" className="section" aria-labelledby="podcast-title">
      <div className="container podcast-grid">
        <div className="podcast-copy">
          <h2 id="podcast-title">{t.podcast.title}</h2>
          <p className="lead">{t.podcast.text}</p>
          <a className="button button-primary" href={SPOTIFY_URL} target="_blank" rel="noreferrer">
            {t.podcast.listen} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="podcast-cover" href={SPOTIFY_URL} target="_blank" rel="noreferrer">
          <img src="/assets/img/latencia-zero-podcast.webp" alt={t.podcast.alt} loading="lazy" />
        </a>
      </div>
    </section>
  );
}

export function Contact({ t }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('peotta@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = 'mailto:peotta@gmail.com';
    }
  };

  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="container">
        <SectionHead id="contato-title" title={t.contact.title} lead={t.contact.lead} />
        <div className="contact-hero card">
          <div>
            <span className="contact-label">{t.contact.email}</span>
            <a className="contact-email" href="mailto:peotta@gmail.com">peotta@gmail.com</a>
          </div>
          <button type="button" className="button button-primary" onClick={copy} aria-live="polite">
            {copied ? `✓ ${t.contact.copied}` : t.contact.copy}
          </button>
        </div>
        <ul className="profile-grid">
          {profiles
            .filter((p) => p.id !== 'email')
            .map((p) => (
              <li key={p.id}>
                <a className="profile-card" href={p.href} target="_blank" rel="noreferrer">
                  <span className="profile-icon" aria-hidden="true">{p.icon}</span>
                  <span className="profile-body">
                    <strong>{p.label}</strong>
                    <span className="muted">{t.contact.profiles[p.id]}</span>
                    <code>{p.value}</code>
                  </span>
                  <span className="profile-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer({ t, motion, onMotion }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          <span className="prompt">©</span> {new Date().getFullYear()} {t.footer.text} - {t.footer.ai}
        </p>
        <div className="footer-links">
          <label className="switch">
            <input type="checkbox" checked={motion} onChange={(e) => onMotion(e.target.checked)} />
            <span className="switch-track" aria-hidden="true" />
            {t.footer.motion}
          </label>
          <a href="#topo">{t.footer.top} ↑</a>
        </div>
      </div>
    </footer>
  );
}
