import { useTypewriter } from '../hooks.js';

// Saidas do comando whoami; iguais nos tres idiomas.
const ROLES = ['cybersecurity researcher', 'network engineer', 'digital forensics', 'professor @ UnB'];

export default function Hero({ t }) {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Prof. Dr. Laerte Peotta de Melo</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="terminal-line" aria-label={`whoami: ${ROLES.join(', ')}`}>
            <span className="prompt" aria-hidden="true">peotta@unb:~$</span>
            <span className="cmd" aria-hidden="true">whoami</span>
            <span className="out" aria-hidden="true">
              {role}
              <span className="caret" />
            </span>
          </div>

          <p className="hero-text" dangerouslySetInnerHTML={{ __html: t.hero.text }} />

          <div className="hero-actions">
            <a className="button button-primary" href="#conteudos">
              {t.hero.cta}
            </a>
            <a className="button button-ghost" href="https://github.com/peotta" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="https://lattes.cnpq.br/0746844511320579" target="_blank" rel="noreferrer">
              Lattes <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-photo"
            src="/assets/img/foto-perfil-unb.webp"
            alt={t.hero.photoAlt}
            width="420"
            height="420"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
