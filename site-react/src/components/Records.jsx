import { useEffect, useRef } from 'react';
import { Awards, PublicationList, Registrations } from './Publications.jsx';

// Popup (dialog nativo) com a lista aberta pelos links de Trajetoria.
export default function Records({ t, lang, view, count, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (view && !dialog.open) dialog.showModal();
    if (!view && dialog.open) dialog.close();
  }, [view]);

  const title = view
    ? view.kind === 'pubs'
      ? `${t.pubs.tabs.pubs} · ${t.pubs.types[view.type]}`
      : t.pubs.tabs[view.kind]
    : '';

  return (
    <dialog
      ref={ref}
      className="records-dialog"
      aria-labelledby="records-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      {view && (
        <div className="records-dialog-inner">
          <header className="records-dialog-head">
            <h3 id="records-dialog-title">{title}</h3>
            <span className="records-dialog-count">{t.pubs.items(count)}</span>
            <button type="button" className="records-dialog-close" onClick={() => ref.current.close()} aria-label={t.pubs.close}>
              <span aria-hidden="true">✕</span>
            </button>
          </header>
          <div className="records-dialog-body">
            {view.kind === 'pubs' && <PublicationList t={t} type={view.type} />}
            {view.kind === 'awards' && <Awards t={t} lang={lang} />}
            {view.kind === 'regs' && <Registrations t={t} />}
          </div>
        </div>
      )}
    </dialog>
  );
}
