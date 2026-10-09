import { Callout, Card, DashList, GuideSection, LinkList } from '../shared/ui.jsx';

// Regras extraídas do Regulamento do PFG de Engenharia de Redes de Comunicação (ENE/UnB, 2022),
// do formulário de inscrição da Coordenação de Redes e da página da Secretaria do ENE.
const ENE = 'https://ene.unb.br';

const LINKS_MATRICULA = [
  { href: `${ENE}/wp-content/uploads/2025/08/formulario_de_inscricao_PFG_Redes.pdf`, label: 'Formulário de inscrição' },
  { href: `${ENE}/secretaria/#tcc_matricula`, label: 'Envio on-line na Secretaria do ENE' },
  { href: `${ENE}/wp-content/uploads/2025/04/regulamento_PFG_ERC.pdf`, label: 'Regulamento do PFG' },
];

const LINKS_BANCA = [
  { href: `${ENE}/secretaria/#tcc_banca`, label: 'Solicitação de banca na Secretaria do ENE' },
  { href: `${ENE}/wp-content/uploads/2025/04/Ata_PFG_-_Eng_Redes.pdf`, label: 'Ata de defesa (Redes)' },
];

export function Matricula() {
  return (
    <GuideSection
      id="matricula"
      title="Matrícula"
      lead="Conforme o Regulamento do PFG e o formulário de inscrição do curso de Engenharia de Redes de Comunicação (ENE/UnB). As datas exatas seguem o Calendário de PFG divulgado pela Coordenação a cada semestre."
    >
      <div className="g2">
        <Card title="Requisitos">
          <h4>PFG 1 (ENE0358)</h4>
          <DashList
            items={[
              '80% da carga horária em componentes obrigatórios integralizada até o semestre anterior, incluindo os pré-requisitos do fluxograma.',
              'Atender aos pré-requisitos da proposta apresentada pelo orientador.',
              'Orientador do quadro permanente da UnB, de área afim ao curso. Coorientação interna ou externa é permitida.',
              'Trabalho individual ou em dupla.',
            ]}
          />
          <h4 className="subhead">PFG 2 (ENE0360/ENE0458)</h4>
          <DashList
            items={[
              'Aprovação em PFG 1.',
              'Mesmo tema e mesma orientação do PFG 1, salvo exceção aprovada pela Comissão de Graduação.',
              'Relatório do PFG 1 aprovado e plano de atividades do PFG 2.',
            ]}
          />
        </Card>
        <Card title="Como solicitar">
          <ol className="step-list">
            <li>
              <strong>Combine tema e orientação</strong>
              <span>Defina o tema com o orientador (e o coorientador, se houver).</span>
            </li>
            <li>
              <strong>Preencha o formulário</strong>
              <span>Marque PFG 1 ou PFG 2, informe o período, alunos, orientador, título e descrição sumária. Assinam o aluno e o orientador.</span>
            </li>
            <li>
              <strong>Envie pela Secretaria do ENE</strong>
              <span>Envie o PDF assinado pelo formulário on-line no período de matrícula regular. No PFG 2, anexe o relatório do PFG 1.</span>
            </li>
            <li>
              <strong>Aguarde a efetivação</strong>
              <span>A Coordenação e a Comissão de Graduação analisam os pedidos e efetivam a matrícula no período de ajuste.</span>
            </li>
          </ol>
        </Card>
      </div>
      <Card title="Documentos e contato">
        <LinkList links={LINKS_MATRICULA} />
        <Callout>
          Dúvidas sobre prazos e documentos: Secretaria do ENE, <a href="mailto:secene@ene.unb.br">secene@ene.unb.br</a>, (61) 3107-5510.
        </Callout>
        <p className="note">
          Engenharia Elétrica tem disciplinas e regras próprias (TCC 1 e TCC 2, ENE0368 e ENE0452): consulte o{' '}
          <a href={`${ENE}/wp-content/uploads/2025/04/regulamento_TCC_EE.pdf`} target="_blank" rel="noreferrer">
            regulamento do TCC de Engenharia Elétrica
          </a>
          .
        </p>
      </Card>
    </GuideSection>
  );
}

const PRAZOS_PFG2 = [
  ['2 semanas antes', 'O orientador propõe a banca: orientador e mais dois membros, com pelo menos um docente da UnB além do orientador.'],
  ['1 semana antes', 'A Coordenação divulga a banca.'],
  ['5 dias úteis antes', 'O aluno entrega a cada membro da banca o relatório e o acesso ao vídeo e ao pôster.'],
  ['Penúltima semana de aula', 'Defesa pública: 30 minutos de apresentação e até 45 minutos de arguição. Membros podem participar por videoconferência.'],
  ['Até 10 dias depois', 'Versão corrigida, em formato digital e nas normas da BCE, entregue à Secretaria do Curso.'],
];

export function Avaliacao() {
  return (
    <GuideSection
      id="avaliacao"
      title="Avaliação e prazos"
      lead="O PFG 1 é avaliado pelo orientador; o PFG 2, por uma banca examinadora com defesa oral pública."
    >
      <div className="g2">
        <Card title="PFG 1">
          <DashList
            items={[
              'O relatório técnico é entregue ao orientador, impresso ou digital, em data combinada com ele.',
              'O orientador avalia o relatório e lança a menção até o prazo do calendário acadêmico.',
              'O relatório aprovado é exigido para a matrícula no PFG 2, junto com o plano de atividades.',
            ]}
          />
          <h3 className="subhead">Banca do PFG 2</h3>
          <DashList
            items={[
              'Orientador e mais dois membros, com pelo menos um docente da UnB além do orientador.',
              'Membros externos e coorientador podem compor a banca.',
              'A banca é presidida pelo orientador.',
            ]}
          />
        </Card>
        <Card title="Prazos do PFG 2">
          <ol className="timeline">
            {PRAZOS_PFG2.map(([quando, oque]) => (
              <li key={quando}>
                <strong>{quando}</strong>
                <span>{oque}</span>
              </li>
            ))}
          </ol>
        </Card>
      </div>
      <div className="g2">
        <Card title="Composição da nota do PFG 2">
          <table className="quadro compact">
            <caption className="sr-only">Composição da nota do PFG 2</caption>
            <thead>
              <tr>
                <th>Critério</th>
                <th className="num">Peso</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-group">
                <th scope="rowgroup" colSpan={2}>Relatório (0 a 6)</th>
              </tr>
              <tr><td>Integração de conhecimentos</td><td className="num">20%</td></tr>
              <tr><td>Conteúdo técnico</td><td className="num">30%</td></tr>
              <tr><td>Metodologia</td><td className="num">20%</td></tr>
              <tr><td>Redação (clareza e normas)</td><td className="num">30%</td></tr>
              <tr className="row-group">
                <th scope="rowgroup" colSpan={2}>Defesa oral (0 a 4)</th>
              </tr>
              <tr><td>Apresentação</td><td className="num">35%</td></tr>
              <tr><td>Arguição</td><td className="num">35%</td></tr>
              <tr><td>Vídeo e pôster de divulgação</td><td className="num">30%</td></tr>
            </tbody>
          </table>
          <p className="table-note">Nota final = relatório + defesa (0 a 10). Em dupla, a defesa é avaliada individualmente.</p>
        </Card>
        <Card title="Condições para aprovação no PFG 2">
          <DashList
            items={[
              'Entrega do relatório, em português ou inglês (em inglês, com resumo estendido em português).',
              'Entrega do vídeo de divulgação e apresentação do pôster na Feira de PFGs (30 horas de extensão).',
              'Defesa oral: quem não participa é reprovado.',
              'Todo material de outras fontes (texto, figura, diagrama ou vídeo) deve ser referenciado.',
            ]}
          />
          <LinkList links={LINKS_BANCA} />
        </Card>
      </div>
    </GuideSection>
  );
}
