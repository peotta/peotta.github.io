import { Codes, GuideSection, PhaseBanner } from '../shared/ui.jsx';

const OVERLEAF_URL =
  'https://www.overleaf.com/latex/templates/unbtex-a-class-for-bachelor-master-and-doctoral-thesis-at-the-university-of-brasilia-unb/rfsxjkzprztc';

const ENE_TCC_URL = 'https://ene.unb.br/trabalho-de-conclusao-de-curso/';

// Blocos da página: regras da disciplina, uma etapa por disciplina e as normas comuns.
export const ETAPAS = [
  {
    id: 'regras',
    codigos: ['PFG 1', 'PFG 2'],
    titulo: 'Regras da disciplina',
    curto: 'Regras',
    foco: 'Matrícula, avaliação, prazos, modelo e estrutura do relatório',
    secoes: [
      { id: 'matricula', label: 'Matrícula' },
      { id: 'avaliacao', label: 'Avaliação e prazos' },
      { id: 'overleaf', label: 'Modelo do relatório' },
      { id: 'estrutura', label: 'Estrutura do documento' },
    ],
  },
  {
    id: 'pfg1',
    codigos: ['ENE0358'],
    titulo: 'Projeto Final de Graduação 1',
    curto: 'PFG 1',
    foco: 'Definição e início do projeto',
    texto:
      'Escolha do tema e do orientador, introdução, referencial teórico e metodologia, registrados no relatório do PFG 1, mais o plano de atividades do PFG 2.',
    secoes: [
      { id: 'tema', label: 'Tema e orientação' },
      { id: 'introducao', label: 'Introdução e objetivos' },
      { id: 'fundamentos', label: 'Fundamentos e referencial teórico' },
      { id: 'metodologia', label: 'Metodologia' },
      { id: 'relatorio-pfg1', label: 'Relatório do PFG 1 e plano do PFG 2' },
    ],
  },
  {
    id: 'pfg2',
    codigos: ['ENE0360', 'ENE0458'],
    titulo: 'Projeto Final de Graduação 2',
    curto: 'PFG 2',
    foco: 'Desenvolvimento, relatório final e defesa',
    texto:
      'Execução do plano, análise e discussão dos resultados, conclusão e resumo do relatório final, defesa oral, vídeo e pôster de divulgação.',
    secoes: [
      { id: 'resultados', label: 'Resultados e discussão' },
      { id: 'conclusao', label: 'Conclusão' },
      { id: 'resumo', label: 'Resumo' },
      { id: 'defesa', label: 'Defesa, vídeo e pôster' },
    ],
  },
  {
    id: 'normas',
    codigos: ['PFG 1', 'PFG 2'],
    titulo: 'Normas e redação',
    curto: 'Normas',
    foco: 'Comum aos relatórios do PFG 1 e do PFG 2',
    secoes: [
      { id: 'orientacoes', label: 'Redação' },
      { id: 'ilustracoes', label: 'Figuras e tabelas' },
      { id: 'citacoes', label: 'Citações' },
      { id: 'referencias', label: 'Referências' },
    ],
  },
];

export const DISCIPLINAS = ETAPAS.filter((e) => e.id.startsWith('pfg'));

export function VisaoGeral() {
  return (
    <GuideSection
      id="disciplinas"
      title="As disciplinas"
      lead="O projeto final é desenvolvido em duas disciplinas consecutivas. Este material acompanha as duas etapas, da escolha do tema à defesa."
    >
      <div className="g2">
        {DISCIPLINAS.map((e) => (
          <article key={e.id} className="card disc-card">
            <Codes items={e.codigos} />
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
        Matrícula, avaliação e prazos estão em <a href="#regras">Regras da disciplina</a>. Redação, citações, referências e demais normas
        valem para as duas disciplinas e estão em <a href="#normas">Normas e redação</a>. Os exemplos acompanham um mesmo trabalho
        fictício, sobre detecção de exfiltração de dados em redes.
      </p>
    </GuideSection>
  );
}

// Faixa que abre o bloco de conteúdo de cada etapa.
export function Etapa({ id }) {
  const e = ETAPAS.find((x) => x.id === id);
  return <PhaseBanner id={e.id} codes={e.codigos} title={e.titulo} focus={e.foco} />;
}

// Chamada para escrever o trabalho no Overleaf com a classe UnBTeX.
export function OverleafCta() {
  return (
    <div className="guide-section">
      <aside id="overleaf" className="card overleaf-cta" aria-labelledby="overleaf-title">
        <div className="overleaf-copy">
          <p className="overleaf-kicker">LaTeX / Overleaf</p>
          <h3 id="overleaf-title">Modelo do relatório: template UnBTeX no Overleaf</h3>
          <p className="muted">
            O regulamento exige que os relatórios sigam o modelo indicado pelo curso, e o{' '}
            <a href={ENE_TCC_URL} target="_blank" rel="noreferrer">
              Departamento de Engenharia Elétrica recomenda o UnBTeX
            </a>
            , classe LaTeX baseada no abnTeX. Capa, folha de rosto, resumos, listas, sumário e referências já seguem a ABNT, e o texto pode
            ser editado on-line com o orientador.
          </p>
          <p className="muted">
            O template permite referências autor-data ou numéricas. Este material usa o sistema autor-data da NBR 10520; combine a escolha
            com o orientador.
          </p>
          <a className="button button-primary" href={OVERLEAF_URL} target="_blank" rel="noreferrer">
            Abrir template UnBTeX no Overleaf <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ol className="step-list">
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
            <span>Use este material para o conteúdo de cada seção e para citações e referências.</span>
          </li>
          <li>
            <strong>Compile e revise</strong>
            <span>Gere o PDF com pdfLaTeX e BibTeX e confirme com o orientador as exigências da coordenação.</span>
          </li>
        </ol>
      </aside>
    </div>
  );
}
