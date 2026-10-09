import { Callout, Card, DashList, GuideSection, LinkList } from '../shared/ui.jsx';
import { LINKS } from './links.js';

const LINHAS = [
  'Segurança dos sistemas de informação e das redes',
  'Segurança e inteligência cibernética',
  'Ciência e engenharia de dados',
  'Tomada de decisão em segurança e inteligência cibernética, processos, engenharia de dados e inteligência artificial',
  'Concepção e desenvolvimento de materiais estratégicos e críticos',
  'Segurança do processamento da informação e das comunicações nos sistemas eletro-eletrônicos-computacionais',
];

export function OPrograma() {
  return (
    <GuideSection
      id="programa"
      title="O programa"
      lead="O Mestrado Profissional em Engenharia Elétrica do PPEE/UnB tem área de concentração em Segurança Cibernética e forma profissionais para pesquisa aplicada e inovação."
    >
      <div className="g2">
        <Card title="Linhas de pesquisa">
          <ol className="number-list">
            {LINHAS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ol>
        </Card>
        <Card title="Em resumo">
          <dl className="term-list">
            <div>
              <dt>Duração</dt>
              <dd>De 12 a 24 meses, incluindo a defesa.</dd>
            </div>
            <div>
              <dt>Créditos</dt>
              <dd>20 créditos em disciplinas; a dissertação não gera créditos.</dd>
            </div>
            <div>
              <dt>Trabalho final</dt>
              <dd>Dissertação de autoria exclusiva, defendida em sessão pública.</dd>
            </div>
            <div>
              <dt>Para defender</dt>
              <dd>Artigo completo publicado, registro de software ou patente concedidos durante o mestrado.</dd>
            </div>
            <div>
              <dt>Idioma</dt>
              <dd>Português, espanhol ou inglês.</dd>
            </div>
          </dl>
        </Card>
      </div>
      <p className="note">
        Este material reúne, para os orientandos do Prof. Laerte Peotta, as regras do 2º Regulamento do PPEE (vigente desde 2021.1) e das
        resoluções internas de 2026. Em caso de dúvida, prevalecem os documentos oficiais, com links ao longo da página.
      </p>
    </GuideSection>
  );
}

const SEMESTRES = [
  [
    '1º semestre',
    'Disciplinas da cadeia obrigatória (mínimo de 8 créditos) e definição do problema com o orientador. Início da revisão da literatura.',
  ],
  ['2º semestre', 'Disciplinas restantes até 20 créditos. Metodologia definida, primeiros experimentos e escolha do veículo de publicação.'],
  [
    '3º semestre',
    'Matrícula em Elaboração de Trabalho Final. Desenvolvimento, resultados e submissão do artigo, que precisa estar publicado antes do pedido de banca.',
  ],
  ['4º semestre', 'Redação final, pedido de banca (até 15 dias antes do prazo final), defesa e entrega da versão definitiva.'],
];

export function LinhaDoTempo() {
  return (
    <GuideSection
      id="linha-tempo"
      title="Linha do tempo"
      lead="Sugestão de planejamento para concluir em 24 meses, o prazo máximo do regulamento."
    >
      <Card>
        <ol className="timeline">
          {SEMESTRES.map(([quando, oque]) => (
            <li key={quando}>
              <strong>{quando}</strong>
              <span>{oque}</span>
            </li>
          ))}
        </ol>
        <Callout>
          Entre a submissão e a publicação de um artigo podem se passar vários meses. Planeje submeter até o fim do 3º semestre: sem
          publicação, a banca não é homologada.
        </Callout>
      </Card>
    </GuideSection>
  );
}

export function Creditos() {
  return (
    <GuideSection id="creditos" title="Créditos e disciplinas" lead="Regulamento do PPEE, arts. 25 a 32.">
      <div className="g2">
        <Card title="Créditos">
          <DashList
            items={[
              '20 créditos em disciplinas; a dissertação não gera créditos.',
              'Mínimo de 8 créditos na cadeia obrigatória da área: Metodologia de Pesquisa Científica, Criptografia e Segurança de Dados ou Segurança Cibernética (4 créditos cada).',
              'Disciplinas de orientação (Estudo Orientado) somam no máximo 4 créditos.',
              'Domínio conexo: disciplinas de outros programas, combinadas com o orientador e aprovadas pela CPG.',
              'Aproveitamento de disciplinas cursadas antes do ingresso: até 8 créditos, com parecer do orientador.',
            ]}
          />
        </Card>
        <Card title="Matrícula e trancamento">
          <DashList
            items={[
              'Matrícula em disciplinas a cada período, nos prazos do calendário da pós-graduação.',
              'Depois de integralizar os créditos, matricule-se em Elaboração de Trabalho Final em todos os semestres até a defesa.',
              'Trancamento de disciplina: autorizado pela CPG, ouvido o orientador.',
              'Trancamento geral: só por impedimento involuntário comprovado, por um período letivo.',
            ]}
          />
          <Callout>
            Desligamento (art. 32): duas reprovações em disciplinas, reprovação na defesa, falta de matrícula em um período ou prazo máximo
            ultrapassado.
          </Callout>
        </Card>
      </div>
      <LinkList links={[LINKS.ofertaDisciplinas, LINKS.calendarioPos, LINKS.formTrancamento]} />
    </GuideSection>
  );
}

export function Prazos() {
  return (
    <GuideSection id="prazos" title="Prazos e prorrogação">
      <div className="g2">
        <Card title="Prazo do curso">
          <DashList
            items={[
              'Mínimo de 12 e máximo de 24 meses, incluindo a elaboração e a defesa da dissertação (art. 31).',
              'Excepcionalmente, a CCPG/FT pode estender o prazo por menos de 6 meses, com justificativa e cronograma viável.',
              'O prazo final de cada aluno aparece no histórico escolar.',
            ]}
          />
        </Card>
        <Card title="Pedido de prorrogação">
          <ol className="step-list">
            <li>
              <strong>Prepare os documentos</strong>
              <span>Formulário assinado pelo aluno e pelo orientador, estado atual da dissertação e artigos publicados ou em elaboração.</span>
            </li>
            <li>
              <strong>Envie com antecedência</strong>
              <span>Pelo menos 15 dias antes do prazo final, em PDF, para a secretaria.</span>
            </li>
            <li>
              <strong>Aguarde a CPG</strong>
              <span>A CPG se reúne às quintas-feiras; pedidos enviados até a quarta entram na pauta.</span>
            </li>
          </ol>
        </Card>
      </div>
      <LinkList links={[LINKS.formProrrogacao]} />
    </GuideSection>
  );
}

export function Orientacao() {
  return (
    <GuideSection id="orientacao" title="Orientação">
      <div className="g2">
        <Card title="Regras">
          <DashList
            items={[
              'Todo aluno tem um orientador credenciado no PPEE.',
              'O coorientador é opcional, avaliado pela CPG e aprovado pelo Colegiado.',
              'O orientador acompanha o trabalho e os prazos; o aluno mantém contato regular e apresenta o andamento.',
              'Troca de orientador ou coorientador: justificativa com a concordância dos envolvidos, enviada à coordenação.',
            ]}
          />
        </Card>
        <Card title="Dados de órgãos e empresas">
          <DashList
            items={[
              'Combine com a instituição, antes de coletar dados, o que pode ser publicado na dissertação e no artigo.',
              'Anonimize dados pessoais (LGPD) e informações sensíveis; informação classificada não entra no texto.',
              'Pesquisa com pessoas (entrevistas, questionários) pode exigir aprovação em Comitê de Ética (Resolução CNS 510/2016).',
            ]}
          />
        </Card>
      </div>
    </GuideSection>
  );
}

export function Producao() {
  return (
    <GuideSection
      id="producao"
      title="Produção exigida para a defesa"
      lead="Sem produção publicada, a banca não é homologada (Resolução PPEE 006/2026)."
    >
      <div className="g2">
        <Card title="Vale uma das opções">
          <DashList
            items={[
              'Artigo completo publicado em conferência nacional ou internacional (Engenharia Elétrica, Computação ou áreas afins).',
              'Artigo completo publicado em periódico nacional ou internacional.',
              'Registro de software concedido, feito pelo NUPITEC da UnB.',
              'Patente concedida, registrada pelo NUPITEC da UnB.',
            ]}
          />
        </Card>
        <Card title="Condições">
          <DashList
            items={[
              'Produção feita depois da matrícula no PPEE.',
              'No artigo, o aluno é o primeiro autor e o orientador é coautor.',
              'Só artigo completo: resumo, resumo expandido e pôster não valem.',
              'Carta de aceite não vale: é preciso a publicação efetiva.',
              'Exceção: com o artigo já apresentado em conferência e os anais em publicação, o orientador pode pedir flexibilização à CPG.',
              'A CPG avalia a pertinência à área na homologação da banca.',
            ]}
          />
        </Card>
      </div>
      <Card title="Registro de software e patente (Resolução 008/2026)">
        <DashList
          items={[
            'Submetido e processado pelo NUPITEC da UnB, no formulário e com as orientações do NUPITEC.',
            'Titularidade em nome de docente da UnB, com o orientador entre os titulares.',
            'O aluno aparece entre os autores ou inventores com vínculo acadêmico com a UnB.',
          ]}
        />
      </Card>
      <LinkList links={[LINKS.res006, LINKS.res008]} />
    </GuideSection>
  );
}

export function OndePublicar() {
  return (
    <GuideSection id="publicar" title="Onde publicar" lead="Critérios das Diretrizes do PPEE para publicações. Converse com o orientador antes de submeter.">
      <div className="g2">
        <Card title="Periódicos">
          <DashList
            items={[
              'Qualis Capes em Engenharias IV entre A1 e A4.',
              'Fator de impacto (JCR) idealmente acima de 2,5 e CiteScore elevado.',
              'Prefira acesso aberto (open access).',
              'Considere a lista de periódicos aderentes às Engenharias IV.',
            ]}
          />
        </Card>
        <Card title="Conferências">
          <DashList
            items={[
              'Qualis Capes em Ciência da Computação entre A1 e A4.',
              'Prefira conferências com anais em edições especiais de revistas classificadas.',
              'Verifique custos e prazos (fast-track, special issue).',
              'Apoio para inscrição e viagem: editais da FAP-DF, do DPG e do DPI.',
              'Agradeça bolsas e fomento na seção de agradecimentos.',
            ]}
          />
        </Card>
      </div>
      <LinkList links={[LINKS.diretrizesPub, LINKS.periodicosAderentes]} />
    </GuideSection>
  );
}
