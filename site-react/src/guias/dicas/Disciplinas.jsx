import { GuideSection } from './ui.jsx';

const OVERLEAF_URL =
  'https://www.overleaf.com/latex/templates/unbtex-a-class-for-bachelor-master-and-doctoral-thesis-at-the-university-of-brasilia-unb/rfsxjkzprztc';

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
      <OverleafCta />
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

// Chamada para escrever o trabalho no Overleaf com a classe UnBTeX.
function OverleafCta() {
  return (
    <aside id="overleaf" className="card overleaf-cta" aria-labelledby="overleaf-title">
      <div className="overleaf-copy">
        <p className="overleaf-kicker">LaTeX / Overleaf</p>
        <h3 id="overleaf-title">Escreva o projeto no Overleaf com o template UnBTeX</h3>
        <p className="muted">
          O UnBTeX é uma classe LaTeX para trabalhos de conclusão de curso, dissertações e teses da UnB, baseada no abnTeX. Capa, folha de
          rosto, resumos, listas, sumário e referências já seguem o padrão ABNT, e o texto pode ser editado on-line junto com o orientador.
        </p>
        <a className="button button-primary" href={OVERLEAF_URL} target="_blank" rel="noreferrer">
          Abrir template UnBTeX no Overleaf <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ol className="overleaf-steps">
        <li>
          <strong>Crie o projeto</strong>
          <span>Abra o template e use a opção Open as Template (é preciso ter conta gratuita no Overleaf).</span>
        </li>
        <li>
          <strong>Preencha os dados</strong>
          <span>Título, autoria, orientação, curso e data no arquivo principal.</span>
        </li>
        <li>
          <strong>Escreva por seções</strong>
          <span>Use este guia para o conteúdo de cada seção e para citações e referências.</span>
        </li>
        <li>
          <strong>Compile e revise</strong>
          <span>Gere o PDF com pdfLaTeX e BibTeX e confirme com o orientador as exigências da coordenação.</span>
        </li>
      </ol>
    </aside>
  );
}
