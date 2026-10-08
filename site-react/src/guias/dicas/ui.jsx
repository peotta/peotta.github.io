import { useRef, useState } from 'react';

export function GuideSection({ id, title, lead, children }) {
  return (
    <section id={id} className="guide-section" aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {children}
    </section>
  );
}

export function Card({ title, children, className = '' }) {
  return (
    <article className={`card ${className}`.trim()}>
      {title && <h3>{title}</h3>}
      {children}
    </article>
  );
}

export function DashList({ items }) {
  return (
    <ul className="dash-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function Example({ label = 'Exemplo', children }) {
  return (
    <div className="example">
      <span className="example-label">{label}</span>
      {children}
    </div>
  );
}

export function Callout({ children }) {
  return <p className="callout">{children}</p>;
}

// Bloco monoespaçado com botão de copiar (usa o texto renderizado, sem marcação).
export function CodeBox({ children, label }) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ref.current?.innerText.trim() || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard indisponivel (http ou permissao negada): ignora */
    }
  };

  return (
    <div className="code-box">
      {label && <span className="code-label">{label}</span>}
      <div ref={ref} className="code-body">{children}</div>
      <button type="button" className="copy-btn" onClick={copy} aria-label={label ? `Copiar ${label}` : 'Copiar'}>
        <span aria-live="polite">{copied ? '✓ copiado' : 'copiar'}</span>
      </button>
    </div>
  );
}
