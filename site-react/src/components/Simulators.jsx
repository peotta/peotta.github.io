import { simulators } from '../data.js';
import { ResourceCard } from './Catalog.jsx';

export default function Simulators({ t, lang }) {
  return (
    <section id="simuladores" className="section" aria-labelledby="simuladores-title">
      <div className="container">
        <div className="section-head">
          <h2 id="simuladores-title">{t.simulators.title}</h2>
          <p className="lead">{t.simulators.lead}</p>
        </div>
        <div className="resource-grid">
          {simulators.map((r) => (
            <ResourceCard key={r.id} r={r} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
