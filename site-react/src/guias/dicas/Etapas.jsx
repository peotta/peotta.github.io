import { Callout, Card, DashList, Example, GuideSection } from '../shared/ui.jsx';

export function TemaOrientacao() {
  return (
    <GuideSection
      id="tema"
      title="Tema e orientação"
      lead="O primeiro passo do PFG 1 acontece antes da matrícula: o formulário de inscrição exige título, descrição sumária e a assinatura do orientador."
    >
      <div className="g2">
        <Card title="Como escolher">
          <DashList
            items={[
              'Procure o orientador antes do período de matrícula e verifique os pré-requisitos da proposta dele.',
              'Escolha um tema viável em dois semestres, com acesso garantido a dados, equipamentos ou laboratório.',
              'Delimite o problema: o que será investigado, em que contexto e com quais limites.',
              'Em dupla, combinem a divisão de tarefas desde o início: na defesa, a arguição é individual.',
            ]}
          />
        </Card>
        <Card title="Descrição sumária do formulário">
          <p className="muted">Um parágrafo curto com problema, objetivo e forma de condução do trabalho.</p>
          <Example>
            <strong>Detecção de exfiltração de dados em redes híbridas por análise de comportamento</strong>
            <p>
              O trabalho investiga a detecção de exfiltração de dados em redes corporativas híbridas, nas quais o tráfego criptografado
              limita os sistemas baseados em assinaturas. Será proposto um algoritmo de detecção de anomalias, avaliado em ambiente
              controlado com tráfego legítimo e ataques de Command and Control (C2), e comparado a um sistema baseado em assinaturas.
            </p>
          </Example>
        </Card>
      </div>
    </GuideSection>
  );
}

export function RelatorioPfg1() {
  return (
    <GuideSection
      id="relatorio-pfg1"
      title="Relatório do PFG 1 e plano do PFG 2"
      lead="O PFG 1 termina com um relatório técnico avaliado pelo orientador. Para a matrícula no PFG 2, são exigidos esse relatório aprovado e o plano de atividades do PFG 2."
    >
      <div className="g2">
        <Card title="Relatório do PFG 1">
          <p className="muted">Conteúdo sugerido; confirme a estrutura com o orientador.</p>
          <DashList
            items={[
              'Elementos pré-textuais: capa, folha de rosto, resumo e sumário.',
              'Introdução com problema, objetivos, justificativa e organização.',
              'Referencial teórico.',
              'Metodologia planejada ou já em execução.',
              'Resultados preliminares, quando houver.',
              'Referências.',
            ]}
          />
          <Callout>Entregue ao orientador, impresso ou digital, na data combinada com ele.</Callout>
        </Card>
        <Card title="Plano de atividades do PFG 2">
          <DashList
            items={[
              'Objetivos que ainda faltam cumprir.',
              'Atividades de desenvolvimento, experimentos e análise.',
              'Cronograma por semana ou quinzena até a defesa.',
              'Entregas obrigatórias: relatório, vídeo, pôster e defesa.',
              'Riscos (acesso a equipamentos, dados, prazos) e como contorná-los.',
            ]}
          />
        </Card>
      </div>
      <Card title="Exemplo de cronograma do PFG 2">
        <table className="quadro compact">
          <caption>Quadro 2 - Cronograma de atividades do PFG 2</caption>
          <thead>
            <tr>
              <th>Período</th>
              <th>Atividade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semanas 1 a 4</td>
              <td>Implementação do algoritmo e ajustes no ambiente de testes</td>
            </tr>
            <tr>
              <td>Semanas 5 a 8</td>
              <td>Experimentos nos cenários HTTP, HTTPS e DNS</td>
            </tr>
            <tr>
              <td>Semanas 9 a 11</td>
              <td>Análise dos resultados e redação de resultados, discussão e conclusão</td>
            </tr>
            <tr>
              <td>Semanas 12 e 13</td>
              <td>Revisão do relatório, gravação do vídeo e produção do pôster</td>
            </tr>
            <tr>
              <td>Penúltima semana de aula</td>
              <td>Defesa oral, conforme o formulário de inscrição</td>
            </tr>
          </tbody>
        </table>
        <p className="table-note">
          <strong>Fonte:</strong> elaborado pelo próprio autor (2026).
        </p>
      </Card>
    </GuideSection>
  );
}

export function Defesa() {
  return (
    <GuideSection
      id="defesa"
      title="Defesa, vídeo e pôster"
      lead="A defesa oral, o vídeo e o pôster são obrigatórios para aprovação no PFG 2 e compõem a nota da defesa."
    >
      <div className="g3">
        <Card title="Apresentação (30 min)">
          <DashList
            items={[
              'Siga a lógica do relatório: problema e objetivos, metodologia, resultados e conclusão.',
              'Dê mais tempo aos resultados; a introdução deve ser breve.',
              'Ensaie com cronômetro; em dupla, os dois apresentam e são arguidos individualmente.',
              'Prepare respostas sobre limitações e escolhas metodológicas.',
              'Teste projetor, arquivos e a conexão quando houver membro por videoconferência.',
            ]}
          />
        </Card>
        <Card title="Vídeo (5 a 10 min)">
          <DashList
            items={[
              'Público não especialista: explique o problema e por que ele importa antes da solução técnica.',
              'Troque jargão por exemplos e imagens; inclua legendas.',
              'O vídeo é publicado no site do ENE e em mídias sociais.',
              'Envie o acesso aos membros da banca junto com o relatório.',
            ]}
          />
        </Card>
        <Card title="Pôster (A3)">
          <DashList
            items={[
              'Título, autores e orientador no topo.',
              'Problema, objetivo, método (com uma figura) e principais resultados (com um gráfico).',
              'Texto curto e legível a cerca de 1 metro de distância.',
              'Na Feira de PFGs, esteja disponível para apresentar o trabalho à comunidade externa.',
            ]}
          />
        </Card>
      </div>
    </GuideSection>
  );
}
