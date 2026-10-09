import { useTypewriter } from '../../hooks.js';
import GuideLayout from '../shared/GuideLayout.jsx';
import {
  Citacoes,
  Conclusao,
  Estrutura,
  Fundamentos,
  Ilustracoes,
  Introducao,
  Metodologia,
  Orientacoes,
  Referencias,
  Resultados,
  Resumo,
} from './Secoes.jsx';
import { DISCIPLINAS, ETAPAS, Etapa, OverleafCta, VisaoGeral } from './Disciplinas.jsx';
import { Avaliacao, Matricula } from './Regras.jsx';
import { Defesa, RelatorioPfg1, TemaOrientacao } from './Etapas.jsx';

// Sumário agrupado: visão geral, regras, uma etapa por disciplina e normas comuns.
const TOC = [
  { id: 'topo', label: 'Visão geral', secoes: [{ id: 'disciplinas', label: 'As disciplinas' }] },
  ...ETAPAS.map((e) => ({
    id: e.id,
    label: e.id.startsWith('pfg') ? `${e.curto}: ${e.foco.toLowerCase()}` : e.titulo,
    secoes: e.secoes,
  })),
];

const NORMAS = ['NBR 14724:2024', 'NBR 10520:2023', 'NBR 6023:2018', 'NBR 6028:2021'];

function Hero() {
  const norma = useTypewriter(NORMAS);
  return (
    <section className="hero guide-hero" id="topo" aria-labelledby="guia-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Disciplinas de graduação / UnB</p>
          <h1 id="guia-title">Projeto Final de Graduação 1 e 2</h1>
          <div className="terminal-line" aria-label={`Normas vigentes: ${NORMAS.join(', ')}`}>
            <span className="prompt" aria-hidden="true">abnt:~$</span>
            <span className="cmd" aria-hidden="true">normas --vigentes</span>
            <span className="out" aria-hidden="true">
              {norma}
              <span className="caret" />
            </span>
          </div>
          <p className="hero-text">
            Material de apoio às disciplinas de Projeto Final de Graduação: regras de matrícula e avaliação, orientações para cada etapa e
            normas para os relatórios, conforme a ABNT.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#matricula">
              Como se matricular
            </a>
            <a className="button button-ghost" href="#pfg1">
              PFG 1
            </a>
            <a className="button button-ghost" href="#pfg2">
              PFG 2
            </a>
          </div>
        </div>

        <dl className="card hero-summary">
          {DISCIPLINAS.map((e) => (
            <div key={e.id}>
              <dt>
                <span className="disc-codes">
                  {e.codigos.map((c) => (
                    <code key={c}>{c}</code>
                  ))}
                </span>
                {e.titulo}
              </dt>
              <dd>{e.foco}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function DicasApp() {
  return (
    <GuideLayout
      toc={TOC}
      brandSub="disciplinas / projeto final"
      menuLabel="Seções da disciplina"
      hero={<Hero />}
      footerText="Prof. Dr. Laerte Peotta de Melo - Projeto Final de Graduação 1 e 2."
    >
      <VisaoGeral />

      <Etapa id="regras" />
      <Matricula />
      <Avaliacao />
      <OverleafCta />
      <Estrutura />

      <Etapa id="pfg1" />
      <TemaOrientacao />
      <Introducao />
      <Fundamentos />
      <Metodologia />
      <RelatorioPfg1 />

      <Etapa id="pfg2" />
      <Resultados />
      <Conclusao />
      <Resumo />
      <Defesa />

      <Etapa id="normas" />
      <Orientacoes />
      <Ilustracoes />
      <Citacoes />
      <Referencias />
    </GuideLayout>
  );
}
