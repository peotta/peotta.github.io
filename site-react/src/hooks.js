import { useEffect, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* armazenamento indisponivel (modo privado): ignora */
  }
}

// Retorna o id da secao visivel para destacar o item ativo do menu.
export function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.32;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return active;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return progress;
}

// Efeito de digitacao em loop para uma lista de palavras.
export function useTypewriter(words) {
  const [text, setText] = useState(words[0] || '');
  useEffect(() => {
    if (prefersReducedMotion() || words.length === 0) {
      setText(words[0] || '');
      return undefined;
    }
    let word = 0;
    let chars = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const target = words[word];
      chars += deleting ? -1 : 1;
      setText(target.slice(0, chars));
      let delay = deleting ? 38 : 85;
      if (!deleting && chars === target.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && chars === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 380;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}
