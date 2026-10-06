import { useCallback, useEffect, useState } from 'react';
import { LANGS, strings } from './i18n.js';
import { readStorage, writeStorage, useActiveSection, useScrollProgress } from './hooks.js';
import MatrixRain from './components/MatrixRain.jsx';
import Nav, { NAV_ITEMS } from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Catalog from './components/Catalog.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import Ravens from './components/Ravens.jsx';
import { About, Contact, Footer, Podcast, Work } from './components/Sections.jsx';

// Ancoras do site classico redirecionadas para o catalogo ja filtrado.
const LEGACY_HASH = {
  labs: 'labs',
  cursos: 'courses',
  disciplinas: 'disciplines',
  simuladores: 'simulators',
  certificacoes: 'courses',
};

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

function initialLang() {
  const saved = readStorage('site-lang', '');
  if (strings[saved]) return saved;
  const nav = (navigator.language || 'pt').slice(0, 2);
  return strings[nav] ? nav : 'pt';
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [motion, setMotion] = useState(() => readStorage('site-motion', 'on') === 'on');
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const t = strings[lang];
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  useEffect(() => {
    const meta = LANGS.find((l) => l.code === lang);
    document.documentElement.lang = meta.html;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    writeStorage('site-lang', lang);
  }, [lang, t]);

  const changeMotion = (on) => {
    setMotion(on);
    writeStorage('site-motion', on ? 'on' : 'off');
  };

  // Suporte aos links antigos (#labs, #cursos...) e atalho de teclado da paleta.
  useEffect(() => {
    const applyHash = () => {
      const key = decodeURIComponent(location.hash.slice(1));
      if (LEGACY_HASH[key]) {
        setFilter(LEGACY_HASH[key]);
        setQuery('');
        requestAnimationFrame(() => document.getElementById('conteudos')?.scrollIntoView({ behavior: 'smooth' }));
      } else if (key) {
        // O navegador tenta rolar antes do React renderizar a secao; repete apos o render.
        requestAnimationFrame(() => document.getElementById(key)?.scrollIntoView());
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const openPalette = useCallback(() => setPaletteOpen(true), []);

  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === '/' && !typing) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = paletteOpen ? 'hidden' : '';
  }, [paletteOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">{t.skip}</a>
      <MatrixRain enabled={motion} />
      <Nav t={t} lang={lang} onLang={setLang} active={active} progress={progress} onSearch={openPalette} />
      <main id="conteudo-principal">
        <Hero t={t} />
        <About t={t} />
        <Work t={t} />
        <Catalog t={t} lang={lang} filter={filter} onFilter={setFilter} query={query} onQuery={setQuery} />
        <Ravens t={t} lang={lang} />
        <Podcast t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} motion={motion} onMotion={changeMotion} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} t={t} lang={lang} />
    </>
  );
}
