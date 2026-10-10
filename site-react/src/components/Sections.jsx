import { useState } from 'react';
import { profiles, SPOTIFY_URL } from '../data.js';

function SectionHead({ id, title, lead }) {
  return (
    <div className="section-head">
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function About({ t }) {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container">
        <SectionHead id="sobre-title" title={t.about.title} />
        <div className="about-grid">
          <article className="card">
            <h3>{t.about.pathTitle}</h3>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </article>
          <aside className="card">
            <h3>{t.about.highlightsTitle}</h3>
            <ul className="check-list">
              {t.about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Work({ t }) {
  return (
    <section id="atuacao" className="section" aria-labelledby="atuacao-title">
      <div className="container">
        <SectionHead id="atuacao-title" title={t.work.title} />
        <ul className="tag-cloud">
          {t.work.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <dl className="focus-list card">
          {t.metrics.map((m) => (
            <div key={m.title}>
              <dt>{m.title}</dt>
              <dd>{m.text}</dd>
            </div>
          ))}
        </dl>
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
          <span className="prompt">©</span> {new Date().getFullYear()} {t.footer.text}
          <br />
          {t.footer.ai}
        </p>
        <div className="footer-links">
          <label className="switch">
            <input type="checkbox" checked={motion} onChange={(e) => onMotion(e.target.checked)} />
            <span className="switch-track" aria-hidden="true" />
            {t.footer.motion}
          </label>
          <a href="/classico.html">{t.footer.classic}</a>
          <a href="#topo">{t.footer.top} ↑</a>
        </div>
      </div>
    </footer>
  );
}
