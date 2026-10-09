import { Callout, Card, DashList, GuideSection, LinkList } from '../shared/ui.jsx';
import { LINKS, SECRETARIA } from './links.js';

const DOCUMENTOS_BANCA = [
  'Formulário de montagem da banca, preenchido',
  'Versão atual da dissertação',
  'Comprovante de publicação (certificado do congresso ou declaração de participação)',
  'Artigo publicado, na versão final',
  'Currículo Lattes do membro externo (e do suplente, se não for do PPEE)',
  'Aceite do membro interno',
  'Aceite do suplente',
  'Aceite do membro externo',
  'Histórico escolar',
];

export function Banca() {
  return (
    <GuideSection id="banca" title="Montagem da banca" lead="O aluno solicita a banca à CPG/PPEE, com o aval do orientador.">
      <div className="g2">
        <Card title="Prazo e composição">
          <DashList
            items={[
              'Pedido pelo menos 15 dias antes do prazo final do histórico escolar.',
              'A CPG se reúne às quintas-feiras: envie até a quarta-feira para entrar na pauta.',
              'Banca: orientador (preside, sem direito a julgamento), dois membros titulares, sendo ao menos um não vinculado ao PPEE, e um suplente.',
              'Até dois membros podem participar por videoconferência.',
              'Só é homologada com a produção exigida já publicada.',
            ]}
          />
        </Card>
        <Card title="Documentos (em PDF, para a secretaria)">
          <ol className="number-list">
            {DOCUMENTOS_BANCA.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ol>
        </Card>
      </div>
      <LinkList links={[LINKS.formBanca, LINKS.paginaBanca, LINKS.overleafSlides]} />
    </GuideSection>
  );
}

const RESULTADOS = [
  ['Aprovação', '15 dias', 'Entregar o trabalho definitivo.'],
  ['Aprovação com revisão de forma', '30 dias', 'Entregar a versão revisada.'],
  ['Reformulação', 'até 3 meses', 'Apresentar e defender uma nova versão.'],
  ['Reprovação', 'não se aplica', 'Desligamento do programa.'],
];

export function ResultadoDefesa() {
  return (
    <GuideSection
      id="resultado"
      title="Resultado da defesa"
      lead="A banca decide por maioria simples; cabe recurso apenas por vício de forma (Regulamento, art. 38)."
    >
      <Card>
        <table className="quadro compact">
          <caption>Decisões possíveis e prazos para homologação</caption>
          <thead>
            <tr>
              <th>Decisão</th>
              <th>Prazo</th>
              <th>O que fazer</th>
            </tr>
          </thead>
          <tbody>
            {RESULTADOS.map(([decisao, prazo, acao]) => (
              <tr key={decisao}>
                <td>{decisao}</td>
                <td>{prazo}</td>
                <td>{acao}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Callout>Perder esses prazos, ou não ser aprovado na reformulação, implica desligamento do programa.</Callout>
      </Card>
    </GuideSection>
  );
}

export function PosDefesa() {
  return (
    <GuideSection id="pos-defesa" title="Após a defesa">
      <Card>
        <ol className="step-list">
          <li>
            <strong>Confirme a formatação</strong>
            <span>Peça ao orientador o consentimento de que a versão final atende às normas de redação (Resolução 007/2026).</span>
          </li>
          <li>
            <strong>Envie à secretaria</strong>
            <span>
              Em PDF: versão final com o número de publicação, formulário após-defesa e carta de impacto (obrigatória para turmas
              específicas, facultativa para turmas abertas).
            </span>
          </li>
          <li>
            <strong>Assine pelo SEI</strong>
            <span>Termo de autorização e ata de defesa, como usuário externo do SEI/UnB.</span>
          </li>
          <li>
            <strong>Acompanhe no SIGAA</strong>
            <span>Ensino &gt; Acompanhar Procedimentos após Defesa. O diploma é emitido apenas em formato digital.</span>
          </li>
        </ol>
      </Card>
      <LinkList links={[LINKS.formAposDefesa, LINKS.cartaImpacto, LINKS.seiOrientacoes]} />
    </GuideSection>
  );
}

export function Documentos() {
  return (
    <GuideSection id="documentos" title="Documentos e contato">
      <div className="g2">
        <Card title="Regras">
          <LinkList links={[LINKS.regulamento, LINKS.res006, LINKS.res007, LINKS.res008, LINKS.resolucoes]} />
        </Card>
        <Card title="Formulários e páginas">
          <LinkList
            links={[LINKS.formBanca, LINKS.formAposDefesa, LINKS.formProrrogacao, LINKS.formTrancamento, LINKS.ofertaDisciplinas, LINKS.calendarioPos]}
          />
        </Card>
      </div>
      <Callout>
        Secretaria do PPEE: <a href={`mailto:${SECRETARIA.email}`}>{SECRETARIA.email}</a>, {SECRETARIA.telefone}. Envie sempre os documentos
        em PDF.
      </Callout>
    </GuideSection>
  );
}
