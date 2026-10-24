import { RAVENS } from '../data.js';

export default function Ravens({ t }) {
  const r = t.ravens;

  return (
    <section id="ravens" className="section" aria-labelledby="ravens-title">
      <div className="container">
        <div className="section-head">
          <h2 id="ravens-title">{r.title}</h2>
          <p className="ravens-name">{r.name}</p>
        </div>

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
      </div>
    </section>
  );
}
