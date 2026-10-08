import { useEffect, useState } from 'react';
import { readStorage, writeStorage, useActiveSection, useScrollProgress, useTypewriter } from '../../hooks.js';
import MatrixRain from '../../components/MatrixRain.jsx';
import {
  Abreviaturas,
  Citacoes,
  Conclusao,
  Desenvolvimento,
  Estrutura,
  Fundamentos,
  Ilustracoes,
  Introducao,
  Orientacoes,
  Referencias,
  Resumo,
  Roteiro,
} from './Secoes.jsx';

const TOC = [
  { id: 'orientacoes', label: 'Orientações gerais' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'resumo', label: 'Resumo' },
  { id: 'introducao', label: 'Introdução' },
  { id: 'fundamentos', label: 'Referencial teórico' },
  { id: 'desenvolvimento', label: 'Desenvolvimento' },
  { id: 'conclusao', label: 'Conclusão' },
  { id: 'ilustracoes', label: 'Figuras e tabelas' },
  { id: 'abreviaturas', label: 'Abreviaturas' },
  { id: 'citacoes', label: 'Citações' },
  { id: 'referencias', label: 'Referências' },
  { id: 'roteiro', label: 'Roteiro resumido' },
];

const SECTION_IDS = TOC.map((s) => s.id);
const NORMAS = ['NBR 14724:2024', 'NBR 10520:2023', 'NBR 6023:2018', 'NBR 6028:2021', 'NBR 6022:2018'];

const RESUMO_HERO = [
  ['Redação', 'Terceira pessoa, voz ativa e linguagem impessoal.'],
  ['Organização', 'Seções numeradas (NBR 6024) e introdução breve em cada seção.'],
  ['Resumo', '150 a 500 palavras em TCC; 100 a 250 em artigos.'],
  ['Citações', 'Sobrenome em maiúsculas e minúsculas: (Silva, 2024).'],
];

function TocLinks({ active, onNavigate }) {
  return TOC.map((s) => (
    <a
      key={s.id}
      href={`#${s.id}`}
      className={active === s.id ? 'is-active' : undefined}
      aria-current={active === s.id ? 'true' : undefined}
      onClick={onNavigate}
    >
      {s.label}
    </a>
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
            <span className="brand-sub">guias / escrita acadêmica</span>
          </span>
        </a>

        <nav id="menu-guia" className={`menu${open ? ' is-open' : ''}`} aria-label="Seções do guia">
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
          <p className="eyebrow">Escrita acadêmica / TCC / artigo científico</p>
          <h1 id="guia-title">Guia para Escrita de TCC ou Artigo Científico</h1>
          <div className="terminal-line" aria-label={`Normas vigentes: ${NORMAS.join(', ')}`}>
            <span className="prompt" aria-hidden="true">abnt:~$</span>
            <span className="cmd" aria-hidden="true">normas --vigentes</span>
            <span className="out" aria-hidden="true">
              {norma}
              <span className="caret" />
            </span>
          </div>
          <p className="hero-text">
            Consulta rápida sobre estrutura acadêmica, redação, resumo, citações, figuras, tabelas e referências, atualizada conforme as
            normas ABNT vigentes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#verificador">
              Verificar meu resumo
            </a>
            <a className="button button-ghost" href="#citacoes">
              Como citar
            </a>
            <a className="button button-ghost" href="#roteiro">
              Roteiro resumido
            </a>
          </div>
        </div>

        <dl className="card hero-summary">
          {RESUMO_HERO.map(([titulo, texto]) => (
            <div key={titulo}>
              <dt>{titulo}</dt>
              <dd>{texto}</dd>
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
          <aside className="guide-toc" aria-label="Nesta página">
            <p className="toc-title">Nesta página</p>
            <nav>
              <TocLinks active={active} />
            </nav>
          </aside>
          <div className="guide-body">
            <Orientacoes />
            <Estrutura />
            <Resumo />
            <Introducao />
            <Fundamentos />
            <Desenvolvimento />
            <Conclusao />
            <Ilustracoes />
            <Abreviaturas />
            <Citacoes />
            <Referencias />
            <Roteiro />
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            <span className="prompt">©</span> {new Date().getFullYear()} Prof. Dr. Laerte Peotta de Melo - guia de apoio à escrita
            acadêmica.
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
