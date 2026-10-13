// Projeto em destaque: CryptoNet Lab (laboratorio virtual de criptografia, em andamento).
// Um unico card: cabecalho, cena animada em tela cheia e rodape com progresso, laboratorios e links.
export const CRYPTONET = {
  url: 'https://peotta.github.io/CryptoNet/#/',
  repo: 'https://github.com/peotta/CryptoNet',
  image: '/assets/img/cryptonet-lab.svg',
};

export default function Featured({ t }) {
  const f = t.featured;
  const ready = f.ready.length;
  const total = ready + f.planned.length;
  return (
    <section className="section featured-section" id="cryptonet" aria-labelledby="featured-title">
      <div className="container">
        <article className="featured-card">
          <header className="featured-head">
            <div className="featured-title">
              <p className="featured-kicker">
                <span className="status-dot" aria-hidden="true" />
                {f.kicker}
              </p>
              <h2 id="featured-title">CryptoNet <span>Lab</span></h2>
              <p className="featured-subtitle">{f.subtitle}</p>
            </div>
            <p className="featured-goal"><strong>{f.goalLabel}</strong> {f.goal}</p>
          </header>

          <a className="featured-stage" href={CRYPTONET.url} tabIndex={-1} aria-hidden="true">
            <img src={CRYPTONET.image} alt="" width="1200" height="520" loading="lazy" />
          </a>
          <p className="sr-only">{f.imageAlt}</p>

          <footer className="featured-foot">
            <div className="featured-progress" role="img" aria-label={f.progress(ready, total)}>
              <div className="featured-bar"><span style={{ width: `${Math.round((ready / total) * 100)}%` }} /></div>
              <p>{f.progress(ready, total)}</p>
            </div>

            <ul className="featured-labs" aria-label={f.labsLabel}>
              {f.ready.map((x, i) => (
                <li key={x} className="is-ready" style={{ '--i': i }}><span aria-hidden="true">✔</span> {x}</li>
              ))}
              {f.planned.map((x, i) => (
                <li key={x} className="is-planned" style={{ '--i': ready + i }}>{x}</li>
              ))}
            </ul>

            <div className="featured-bottom">
              <div className="featured-actions">
                <a className="button button-primary" href={CRYPTONET.url}>{f.cta}</a>
                <a className="button button-ghost" href={CRYPTONET.repo} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                  <span className="sr-only"> ({f.external})</span>
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}
