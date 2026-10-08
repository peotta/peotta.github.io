import { useEffect, useRef, useState } from 'react';
import { readStorage, writeStorage, useActiveSection, useScrollProgress, useTypewriter } from '../../hooks.js';
import MatrixRain from '../../components/MatrixRain.jsx';
import {
  Citacoes,
  Conclusao,
  Estrutura,
  Fundamentos,
  Ilustracoes,
  Introducao,
  Metodologia,
  Orientacoes,
  Referencias,
  Resultados,
  Resumo,
} from './Secoes.jsx';
import { DISCIPLINAS, ETAPAS, Etapa, OverleafCta, VisaoGeral } from './Disciplinas.jsx';
import { Avaliacao, Matricula } from './Regras.jsx';
import { Defesa, RelatorioPfg1, TemaOrientacao } from './Etapas.jsx';

// Sumário agrupado: visão geral, regras, uma etapa por disciplina e normas comuns.
const TOC = [
  { id: 'topo', label: 'Visão geral', secoes: [{ id: 'disciplinas', label: 'As disciplinas' }] },
  ...ETAPAS.map((e) => ({
    id: e.id,
    label: e.id.startsWith('pfg') ? `${e.curto}: ${e.foco.toLowerCase()}` : e.titulo,
    secoes: e.secoes,
  })),
];

const SECTION_IDS = TOC.flatMap((g) => g.secoes.map((s) => s.id));
const NORMAS = ['NBR 14724:2024', 'NBR 10520:2023', 'NBR 6023:2018', 'NBR 6028:2021'];

function TocLinks({ active, onNavigate }) {
  return TOC.map((g) => (
    <div key={g.id} className="toc-group">
      {g.label && (
        <a className="toc-group-label" href={`#${g.id}`} onClick={onNavigate}>
          {g.label}
        </a>
      )}
      {g.secoes.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={active === s.id ? 'is-active' : undefined}
          aria-current={active === s.id ? 'true' : undefined}
          onClick={onNavigate}
        >
          {s.label}
        </a>
      ))}
    </div>
  ));
}

function Header({ active, progress }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header guide-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">LP</span>
          <span className="brand-text">
            <span className="brand-name">Laerte Peotta</span>
            <span className="brand-sub">disciplinas / projeto final</span>
          </span>
        </a>

        <nav id="menu-guia" className={`menu${open ? ' is-open' : ''}`} aria-label="Seções da disciplina">
          <TocLinks active={active} onNavigate={() => setOpen(false)} />
        </nav>

        <div className="nav-tools">
          <a className="button button-ghost button-sm back-link" href="/">
            <span aria-hidden="true">←</span> Site principal
          </a>
          <button
            type="button"
            className={`menu-toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="menu-guia"
            aria-label={open ? 'Fechar seções' : 'Abrir seções'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}

function Hero() {
  const norma = useTypewriter(NORMAS);
  return (
    <section className="hero guide-hero" id="topo" aria-labelledby="guia-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Disciplinas de graduação / UnB</p>
          <h1 id="guia-title">Projeto Final de Graduação 1 e 2</h1>
          <div className="terminal-line" aria-label={`Normas vigentes: ${NORMAS.join(', ')}`}>
            <span className="prompt" aria-hidden="true">abnt:~$</span>
            <span className="cmd" aria-hidden="true">normas --vigentes</span>
            <span className="out" aria-hidden="true">
              {norma}
              <span className="caret" />
            </span>
          </div>
          <p className="hero-text">
            Material de apoio às disciplinas de Projeto Final de Graduação: regras de matrícula e avaliação, orientações para cada etapa e
            normas para os relatórios, conforme a ABNT.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#matricula">
              Como se matricular
            </a>
            <a className="button button-ghost" href="#pfg1">
              PFG 1
            </a>
            <a className="button button-ghost" href="#pfg2">
              PFG 2
            </a>
          </div>
        </div>

        <dl className="card hero-summary">
          {DISCIPLINAS.map((e) => (
            <div key={e.id}>
              <dt>
                <span className="disc-codes">
                  {e.codigos.map((c) => (
                    <code key={c}>{c}</code>
                  ))}
                </span>
                {e.titulo}
              </dt>
              <dd>{e.foco}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function DicasApp() {
  const [motion, setMotion] = useState(() => readStorage('site-motion', 'on') === 'on');
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  const changeMotion = (on) => {
    setMotion(on);
    writeStorage('site-motion', on ? 'on' : 'off');
  };

  // Mantem o item ativo visivel no sumario lateral, que tem rolagem propria.
  const tocRef = useRef(null);
  useEffect(() => {
    const toc = tocRef.current;
    const link = toc?.querySelector('a.is-active');
    if (!toc || !link) return;
    const top = link.getBoundingClientRect().top - toc.getBoundingClientRect().top + toc.scrollTop;
    if (top < toc.scrollTop + 40 || top > toc.scrollTop + toc.clientHeight - 60) {
      toc.scrollTo({ top: top - toc.clientHeight / 3 });
    }
  }, [active]);

  // O navegador tenta rolar para a ancora antes do React renderizar; repete apos o render.
  useEffect(() => {
    const key = decodeURIComponent(location.hash.slice(1));
    if (key) requestAnimationFrame(() => document.getElementById(key)?.scrollIntoView());
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo-guia">
        Pular para o conteúdo
      </a>
      <MatrixRain enabled={motion} />
      <Header active={active} progress={progress} />
      <main id="conteudo-guia">
        <Hero />
        <div className="container guide-layout">
          <aside ref={tocRef} className="guide-toc" aria-label="Nesta página">
            <p className="toc-title">Nesta página</p>
            <nav>
              <TocLinks active={active} />
            </nav>
          </aside>
          <div className="guide-body">
            <VisaoGeral />

            <Etapa id="regras" />
            <Matricula />
            <Avaliacao />
            <OverleafCta />
            <Estrutura />

            <Etapa id="pfg1" />
            <TemaOrientacao />
            <Introducao />
            <Fundamentos />
            <Metodologia />
            <RelatorioPfg1 />

            <Etapa id="pfg2" />
            <Resultados />
            <Conclusao />
            <Resumo />
            <Defesa />

            <Etapa id="normas" />
            <Orientacoes />
            <Ilustracoes />
            <Citacoes />
            <Referencias />

          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            <span className="prompt">©</span> {new Date().getFullYear()} Prof. Dr. Laerte Peotta de Melo - Projeto Final de Graduação 1 e
            2.
          </p>
          <div className="footer-links">
            <label className="switch">
              <input type="checkbox" checked={motion} onChange={(e) => changeMotion(e.target.checked)} />
              <span className="switch-track" aria-hidden="true" />
              Animação de fundo
            </label>
            <a href="#topo">Topo ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
