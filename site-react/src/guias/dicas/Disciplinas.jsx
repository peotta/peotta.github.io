import { GuideSection } from './ui.jsx';

// Divisão do material entre as duas disciplinas; as normas valem para ambas.
export const ETAPAS = [
  {
    id: 'pfg1',
    codigos: ['ENE0358'],
    titulo: 'Projeto Final de Graduação 1',
    curto: 'PFG 1',
    foco: 'Proposta do trabalho',
    texto: 'Definição do tema e do problema, objetivos, justificativa, levantamento do referencial teórico e planejamento da metodologia.',
    secoes: [
      { id: 'introducao', label: 'Introdução e objetivos' },
      { id: 'fundamentos', label: 'Referencial teórico' },
      { id: 'metodologia', label: 'Metodologia' },
    ],
  },
  {
    id: 'pfg2',
    codigos: ['ENE0360', 'ENE0458'],
    titulo: 'Projeto Final de Graduação 2',
    curto: 'PFG 2',
    foco: 'Execução e texto final',
    texto: 'Execução da metodologia, análise e discussão dos resultados, conclusão e montagem do documento final com resumo e elementos obrigatórios.',
    secoes: [
      { id: 'resultados', label: 'Resultados e discussão' },
      { id: 'conclusao', label: 'Conclusão' },
      { id: 'resumo', label: 'Resumo' },
      { id: 'ilustracoes', label: 'Figuras e tabelas' },
      { id: 'estrutura', label: 'Estrutura do documento' },
    ],
  },
  {
    id: 'normas',
    codigos: ['PFG 1', 'PFG 2'],
    titulo: 'Normas e formatação',
    curto: 'Normas',
    foco: 'Comum às duas disciplinas',
    texto: 'Citações, referências e padronização do texto conforme a ABNT, aplicadas desde a proposta até a versão final.',
    secoes: [
      { id: 'citacoes', label: 'Citações' },
      { id: 'referencias', label: 'Referências' },
      { id: 'abreviaturas', label: 'Abreviaturas e siglas' },
      { id: 'roteiro', label: 'Roteiro resumido' },
    ],
  },
];

function Codigos({ codigos }) {
  return (
    <span className="disc-codes">
      {codigos.map((c) => (
        <code key={c}>{c}</code>
      ))}
    </span>
  );
}

export function VisaoGeral() {
  return (
    <GuideSection
      id="disciplinas"
      title="As disciplinas"
      lead="O projeto final é desenvolvido em duas disciplinas consecutivas. Este material acompanha as duas etapas, da proposta ao texto final."
    >
      <div className="g2">
        {ETAPAS.slice(0, 2).map((e) => (
          <article key={e.id} className="card disc-card">
            <Codigos codigos={e.codigos} />
            <h3>{e.titulo}</h3>
            <p className="disc-foco">{e.foco}</p>
            <p className="muted">{e.texto}</p>
            <ol className="disc-steps">
              {e.secoes.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <p className="note">
        Citações, referências e demais normas valem para as duas disciplinas e estão reunidas em <a href="#normas">Normas e formatação</a>.
      </p>
    </GuideSection>
  );
}

// Faixa que abre o bloco de conteúdo de cada disciplina.
export function Etapa({ id }) {
  const e = ETAPAS.find((x) => x.id === id);
  return (
    <header id={e.id} className="phase-banner">
      <Codigos codigos={e.codigos} />
      <p className="phase-title">{e.titulo}</p>
      <p className="phase-foco">{e.foco}</p>
    </header>
  );
}
