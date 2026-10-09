import { useEffect, useRef, useState } from 'react';
import { readStorage, writeStorage, useActiveSection, useScrollProgress } from '../../hooks.js';
import MatrixRain from '../../components/MatrixRain.jsx';

// Estrutura comum das páginas de guia: cabeçalho, sumário lateral agrupado, conteúdo e rodapé.
// toc: [{ id, label?, secoes: [{ id, label }] }]

function TocLinks({ toc, active, onNavigate }) {
  return toc.map((g) => (
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

function Header({ toc, active, progress, brandSub, menuLabel }) {
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
            <span className="brand-sub">{brandSub}</span>
          </span>
        </a>

        <nav id="menu-guia" className={`menu${open ? ' is-open' : ''}`} aria-label={menuLabel}>
          <TocLinks toc={toc} active={active} onNavigate={() => setOpen(false)} />
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

export default function GuideLayout({ toc, brandSub, menuLabel, hero, footerText, children }) {
  const [motion, setMotion] = useState(() => readStorage('site-motion', 'on') === 'on');
  const sectionIds = useRef(toc.flatMap((g) => g.secoes.map((s) => s.id))).current;
  const active = useActiveSection(sectionIds);
  const progress = useScrollProgress();

  const changeMotion = (on) => {
    setMotion(on);
    writeStorage('site-motion', on ? 'on' : 'off');
  };

  // Mantem o item ativo visivel no sumario lateral, que tem rolagem propria.
  const tocRef = useRef(null);
  useEffect(() => {
    const el = tocRef.current;
    const link = el?.querySelector('a.is-active');
    if (!el || !link) return;
    const top = link.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop;
    if (top < el.scrollTop + 40 || top > el.scrollTop + el.clientHeight - 60) {
      el.scrollTo({ top: top - el.clientHeight / 3 });
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
      <Header toc={toc} active={active} progress={progress} brandSub={brandSub} menuLabel={menuLabel} />
      <main id="conteudo-guia">
        {hero}
        <div className="container guide-layout">
          <aside ref={tocRef} className="guide-toc" aria-label="Nesta página">
            <p className="toc-title">Nesta página</p>
            <nav>
              <TocLinks toc={toc} active={active} />
            </nav>
          </aside>
          <div className="guide-body">{children}</div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            <span className="prompt">©</span> {new Date().getFullYear()} {footerText}
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
