import { useTypewriter } from '../../hooks.js';
import GuideLayout from '../shared/GuideLayout.jsx';
import { PhaseBanner } from '../shared/ui.jsx';
import { Creditos, LinhaDoTempo, OndePublicar, OPrograma, Orientacao, Prazos, Producao } from './Programa.jsx';
import { Metodo, Problema, ResultadosConclusoes, ResumoPpee, Revisao } from './Dissertacao.jsx';
import { EstruturaPpee, IlustracoesPpee, Modelo, Numeracao, ReferenciasPpee } from './Normas.jsx';
import { Banca, Documentos, PosDefesa, ResultadoDefesa } from './Defesa.jsx';

const BLOCOS = {
  regras: { codes: ['Regulamento 2021'], title: 'Regras do programa', focus: 'Créditos, prazos, orientação e produção exigida' },
  dissertacao: { codes: ['Dissertação'], title: 'A dissertação', focus: 'Do problema às conclusões' },
  normas: { codes: ['Res. 007/2026'], title: 'Normas de redação do PPEE', focus: 'Modelo, estrutura, numeração e ilustrações' },
  defesa: { codes: ['Arts. 34 a 39'], title: 'Defesa e diplomação', focus: 'Banca, resultado e procedimentos finais' },
};

const TOC = [
  {
    id: 'topo',
    label: 'Visão geral',
    secoes: [
      { id: 'programa', label: 'O programa' },
      { id: 'linha-tempo', label: 'Linha do tempo' },
    ],
  },
  {
    id: 'regras',
    label: 'Regras do programa',
    secoes: [
      { id: 'creditos', label: 'Créditos e disciplinas' },
      { id: 'prazos', label: 'Prazos e prorrogação' },
      { id: 'orientacao', label: 'Orientação' },
      { id: 'producao', label: 'Produção para a defesa' },
      { id: 'publicar', label: 'Onde publicar' },
    ],
  },
  {
    id: 'dissertacao',
    label: 'A dissertação',
    secoes: [
      { id: 'problema', label: 'Problema e objetivos' },
      { id: 'revisao', label: 'Revisão da literatura' },
      { id: 'metodo', label: 'Metodologia e desenvolvimento' },
      { id: 'resultados-ppee', label: 'Resultados e conclusões' },
      { id: 'resumo-ppee', label: 'Resumo e abstract' },
    ],
  },
  {
    id: 'normas',
    label: 'Normas de redação',
    secoes: [
      { id: 'modelo', label: 'Modelo e formatação' },
      { id: 'estrutura-ppee', label: 'Estrutura da dissertação' },
      { id: 'numeracao', label: 'Títulos e numeração' },
      { id: 'ilustracoes-ppee', label: 'Figuras, tabelas e equações' },
      { id: 'referencias-ppee', label: 'Referências e fontes' },
    ],
  },
  {
    id: 'defesa',
    label: 'Defesa e diplomação',
    secoes: [
      { id: 'banca', label: 'Montagem da banca' },
      { id: 'resultado', label: 'Resultado da defesa' },
      { id: 'pos-defesa', label: 'Após a defesa' },
      { id: 'documentos', label: 'Documentos e contato' },
    ],
  },
];

const REQUISITOS = ['20 créditos', 'artigo completo publicado', 'até 24 meses', 'banca com membro externo'];

const RESUMO_HERO = [
  ['Área', 'Segurança Cibernética'],
  ['Prazo', 'De 12 a 24 meses, com a defesa'],
  ['Créditos', '20, com mínimo de 8 na cadeia obrigatória'],
  ['Para defender', 'Artigo completo publicado, registro de software ou patente'],
];

function Hero() {
  const requisito = useTypewriter(REQUISITOS);
  return (
    <section className="hero guide-hero" id="topo" aria-labelledby="guia-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Orientação de mestrado / PPEE / UnB</p>
          <h1 id="guia-title">Mestrado Profissional PPEE: guia do orientando</h1>
          <div className="terminal-line" aria-label={`Requisitos: ${REQUISITOS.join(', ')}`}>
            <span className="prompt" aria-hidden="true">ppee:~$</span>
            <span className="cmd" aria-hidden="true">requisitos --defesa</span>
            <span className="out" aria-hidden="true">
              {requisito}
              <span className="caret" />
            </span>
          </div>
          <p className="hero-text">
            Material para os orientandos do Prof. Laerte Peotta no Programa de Pós-Graduação Profissional em Engenharia Elétrica (PPEE/UnB):
            regras do programa, etapas da dissertação, produção exigida para a defesa e normas de redação.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#producao">
              Requisitos para defender
            </a>
            <a className="button button-ghost" href="#linha-tempo">
              Linha do tempo
            </a>
            <a className="button button-ghost" href="#modelo">
              Template e normas
            </a>
          </div>
        </div>

        <dl className="card hero-summary">
          {RESUMO_HERO.map(([titulo, texto]) => (
            <div key={titulo}>
              <dt>{titulo}</dt>
              <dd>{texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Bloco({ id }) {
  const b = BLOCOS[id];
  return <PhaseBanner id={id} codes={b.codes} title={b.title} focus={b.focus} />;
}

export default function MestradoApp() {
  return (
    <GuideLayout
      toc={TOC}
      brandSub="orientação / mestrado PPEE"
      menuLabel="Seções do guia"
      hero={<Hero />}
      footerText="Prof. Dr. Laerte Peotta de Melo - orientação de Mestrado Profissional (PPEE/UnB)."
    >
      <OPrograma />
      <LinhaDoTempo />

      <Bloco id="regras" />
      <Creditos />
      <Prazos />
      <Orientacao />
      <Producao />
      <OndePublicar />

      <Bloco id="dissertacao" />
      <Problema />
      <Revisao />
      <Metodo />
      <ResultadosConclusoes />
      <ResumoPpee />

      <Bloco id="normas" />
      <Modelo />
      <EstruturaPpee />
      <Numeracao />
      <IlustracoesPpee />
      <ReferenciasPpee />

      <Bloco id="defesa" />
      <Banca />
      <ResultadoDefesa />
      <PosDefesa />
      <Documentos />
    </GuideLayout>
  );
}
