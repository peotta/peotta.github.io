import { useEffect, useMemo, useRef, useState } from 'react';
import { searchResources, normalize } from './Catalog.jsx';
import { NAV_ITEMS } from './Nav.jsx';

// Paleta de comandos (Ctrl/Cmd + K): navega por secoes e conteudos pelo teclado.
export default function CommandPalette({ open, onClose, t, lang }) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const items = useMemo(() => {
    const q = normalize(query.trim());
    const sections = NAV_ITEMS.filter((s) => !q || normalize(t.nav[s.key]).includes(q)).map((s) => ({
      group: 'sections',
      id: `s-${s.id}`,
      label: t.nav[s.key],
      href: `#${s.id}`,
      icon: '#',
    }));
    const found = searchResources(query, lang).map((r) => ({
      group: 'results',
      id: r.id,
      label: r.title[lang],
      sub: r.categories.map((c) => t.catalog.categories[c]).join(' / '),
      href: r.href,
      external: r.external,
      icon: '›',
    }));
    return [...sections, ...found];
  }, [query, lang, t]);

  useEffect(() => setIndex(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  if (!open) return null;

  const go = (item) => {
    if (!item) return;
    onClose();
    if (item.external) window.open(item.href, '_blank', 'noopener');
    else if (item.href.startsWith('#')) {
      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', item.href);
    } else window.location.href = item.href;
  };

  const onKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(items[index]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  let lastGroup = '';

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.search}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="palette-input">
          <span className="prompt" aria-hidden="true">❯</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKey}
            placeholder={t.palette.placeholder}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={items[index] ? `pal-${items[index].id}` : undefined}
          />
          <kbd>Esc</kbd>
        </div>
        <ul id="palette-list" className="palette-list" role="listbox" ref={listRef}>
          {items.length === 0 && <li className="palette-empty">{t.palette.none}</li>}
          {items.map((item, i) => {
            const header = item.group !== lastGroup ? t.palette[item.group] : null;
            lastGroup = item.group;
            return [
              header && (
                <li key={`h-${item.group}`} className="palette-group" role="presentation">
                  {header}
                </li>
              ),
              <li
                key={item.id}
                id={`pal-${item.id}`}
                role="option"
                aria-selected={i === index}
                className="palette-item"
                onMouseEnter={() => setIndex(i)}
                onClick={() => go(item)}
              >
                <span className="palette-icon" aria-hidden="true">{item.icon}</span>
                <span className="palette-label">
                  {item.label}
                  {item.sub && <small>{item.sub}</small>}
                </span>
                <span className="palette-go" aria-hidden="true">{item.external ? '↗' : '↵'}</span>
              </li>,
            ];
          })}
        </ul>
        <div className="palette-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> {t.palette.hint}</span>
          <span><kbd>↵</kbd> ok</span>
        </div>
      </div>
    </div>
  );
}
