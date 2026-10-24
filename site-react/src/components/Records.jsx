import { Awards, PublicationList, Registrations } from './Publications.jsx';

// Lista aberta pelos links de Trajetoria: publicacoes (com tipo), premios ou registros.
export default function Records({ t, lang, view, onType }) {
  return (
    <div id="producao" className="records" aria-live="polite">
      <h3 className="records-title">{t.pubs.tabs[view.kind]}</h3>
      {view.kind === 'pubs' && <PublicationList t={t} type={view.type} onType={onType} />}
      {view.kind === 'awards' && <Awards t={t} lang={lang} />}
      {view.kind === 'regs' && <Registrations t={t} />}
    </div>
  );
}
