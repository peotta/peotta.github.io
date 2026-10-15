import { useMemo, useState } from 'react';
import { CHANNEL_URL, interviews, OUTLET_ICONS } from '../entrevistas.js';
import { normalize } from './Catalog.jsx';

const KINDS = ['video', 'audio', 'news', 'all'];

// Miniatura do YouTube; o player so e carregado (youtube-nocookie) quando a pessoa clica.
function VideoThumb({ item, t }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <div className="media-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&rel=0`}
          title={item.title}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className="media-frame media-play" onClick={() => setPlaying(true)}>
      <img src={`https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
      <span className="media-play-icon" aria-hidden="true">▶</span>
      <span className="sr-only">{t.media.play(item.title)}</span>
    </button>
  );
}

// Capa das materias e dos podcasts: imagem do veiculo escurecida (se carregar) com o icone e o nome do veiculo por cima.
function NewsCover({ item }) {
  const [failed, setFailed] = useState(false);
  const icon = OUTLET_ICONS[item.outlet];
  return (
    <a className={`media-frame media-cover${item.image && !failed ? '' : ' no-photo'}`} href={item.url} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
      {item.image && !failed && item.kind === 'audio' && (
        <>
          <img className="media-cover-blur" src={item.image} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
          <img className="media-cover-art" src={item.image} alt="" loading="lazy" referrerPolicy="no-referrer" />
        </>
      )}
      {item.image && !failed && item.kind !== 'audio' && (
        <img src={item.image} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      )}
      {!(item.kind === 'audio' && item.image && !failed) && (
        <span className="media-cover-outlet">
          {icon && <img src={icon} alt="" width="28" height="28" />}
          <span>{item.outlet}</span>
        </span>
      )}
    </a>
  );
}

function Card({ item, t }) {
  const link = item.kind === 'video' ? `https://www.youtube.com/watch?v=${item.youtube}` : item.url;
  const action = { video: t.media.watch, audio: t.media.listen, news: t.media.read }[item.kind];
  return (
    <li className="media-card card">
      {item.kind === 'video' && <VideoThumb item={item} t={t} />}
      {(item.kind === 'news' || item.kind === 'audio') && <NewsCover item={item} />}
      <div className="media-body">
        <p className="media-meta">
          <span className="media-kind">{t.media.kindLabel[item.kind]}</span>
          {item.outlet && <span>{item.outlet}</span>}
          <span className="media-year">{item.month ? `${t.media.months[item.month - 1]} ${item.year}` : item.year}</span>
        </p>
        <h3 className="media-title">{item.title}</h3>
        <ul className="media-topics" aria-label={t.media.topicsLabel}>
          {item.topics.map((k) => (
            <li key={k}>{t.media.topics[k]}</li>
          ))}
        </ul>
        <p className="pub-links">
          <a className="pub-action" href={link} target="_blank" rel="noreferrer">
            {action} <span aria-hidden="true">↗</span>
            <span className="sr-only"> ({t.media.external})</span>
          </a>
        </p>
      </div>
    </li>
  );
}

export default function Interviews({ t }) {
  const [kind, setKind] = useState('video');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c = { all: interviews.length };
    KINDS.filter((k) => k !== 'all').forEach((k) => (c[k] = interviews.filter((i) => i.kind === k).length));
    return c;
  }, [t]);

  const list = useMemo(() => {
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
    return interviews
      .filter((i) => {
        if (kind !== 'all' && i.kind !== kind) return false;
        const hay = normalize([i.title, i.outlet, String(i.year), ...i.topics.map((k) => t.media.topics[k])].join(' '));
        return terms.every((term) => hay.includes(term));
      })
      .sort((a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0));
  }, [kind, query, t]);

  return (
    <section id="midia" className="section" aria-labelledby="midia-title">
      <div className="container">
        <div className="section-head">
          <h2 id="midia-title">{t.media.title}</h2>
          <p className="lead">{t.media.lead}</p>
          <p className="media-channel">
            <a className="button button-ghost" href={CHANNEL_URL} target="_blank" rel="noreferrer">
              {t.media.channel} <span aria-hidden="true">↗</span>
              <span className="sr-only"> ({t.media.external})</span>
            </a>
          </p>
        </div>

        <div className="catalog-toolbar pub-toolbar">
          <div className="filter-chips" role="group" aria-label={t.media.title}>
            {KINDS.map((k) => (
              <button key={k} type="button" className={kind === k ? 'is-active' : undefined} aria-pressed={kind === k} onClick={() => setKind(k)}>
                {t.media.kinds[k]}
                <span className="chip-count">{counts[k]}</span>
              </button>
            ))}
          </div>
          <label className="catalog-search">
            <span className="sr-only">{t.media.searchLabel}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input type="search" value={query} placeholder={t.media.searchPlaceholder} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>

        <p className="catalog-count" aria-live="polite">{t.media.count(list.length)}</p>

        {list.length === 0 ? (
          <div className="empty-state">
            <p className="muted">{t.media.empty}</p>
            <button type="button" className="button button-ghost" onClick={() => { setQuery(''); setKind('video'); }}>
              {t.catalog.clear}
            </button>
          </div>
        ) : (
          <ul className="media-grid">
            {list.map((item) => (
              <Card key={item.id} item={item} t={t} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
