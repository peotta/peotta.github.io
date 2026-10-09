import { Card, CodeBox, DashList, Example, GuideSection, LinkList } from '../shared/ui.jsx';
import { LINKS } from './links.js';

export function Problema() {
  return (
    <GuideSection
      id="problema"
      title="Problema e objetivos"
      lead="No mestrado profissional, o problema nasce da prática: um desafio real de segurança cibernética, tratado com método científico."
    >
      <div className="g2">
        <Card title="Como definir">
          <DashList
            items={[
              'Parta de um problema concreto do seu ambiente profissional ou de uma demanda da instituição parceira.',
              'Delimite contexto, escopo e limites do que será investigado.',
              'Formule a pergunta de pesquisa e, se couber, hipóteses.',
              'Defina um objetivo geral e objetivos específicos verificáveis.',
              'Situe o tema em uma das linhas de pesquisa do PPEE.',
            ]}
          />
        </Card>
        <Card title="Exemplo">
          <Example>
            O objetivo deste trabalho é propor e avaliar um modelo de detecção de exfiltração de dados, baseado no comportamento do tráfego de
            rede, aplicado à rede corporativa de um órgão público.
          </Example>
          <CodeBox label="objetivos específicos">
            {
              'Levantar as técnicas de exfiltração descritas na literatura.\nMontar um ambiente de testes com tráfego legítimo e malicioso.\nImplementar o modelo e compará-lo a um sistema baseado em assinaturas.\nAvaliar taxa de detecção, falsos positivos e custo de processamento.'
            }
          </CodeBox>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Revisao() {
  return (
    <GuideSection id="revisao" title="Revisão da literatura">
      <div className="g2">
        <Card title="Busca">
          <DashList
            items={[
              'Bases: IEEE Xplore, ACM Digital Library, Scopus, Web of Science e Portal de Periódicos CAPES.',
              'Registre strings de busca, bases, datas e critérios de inclusão e exclusão: isso torna a revisão reproduzível.',
              'Use um gerenciador de referências (Zotero, Mendeley ou BibTeX) desde o primeiro artigo.',
            ]}
          />
        </Card>
        <Card title="Escrita">
          <DashList
            items={[
              'Compare os trabalhos entre si em vez de resumir um por vez.',
              'Feche a revisão mostrando a lacuna que o seu trabalho ocupa.',
              'Um quadro comparativo dos trabalhos relacionados ajuda a banca a ver a contribuição.',
            ]}
          />
        </Card>
      </div>
    </GuideSection>
  );
}

export function Metodo() {
  return (
    <GuideSection id="metodo" title="Metodologia e desenvolvimento" lead="Descreva o suficiente para que outro pesquisador reproduza o trabalho.">
      <div className="g2">
        <Card title="O que descrever">
          <DashList
            items={[
              'Ambiente, ferramentas, versões e configurações utilizadas.',
              'Dados: origem, coleta, tratamento e anonimização.',
              'Procedimentos experimentais e métricas de avaliação.',
              'Ameaças à validade e limitações previstas.',
            ]}
          />
        </Card>
        <Card title="Produto do mestrado profissional">
          <DashList
            items={[
              'Quando o trabalho gera um artefato (software, processo, protocolo ou ferramenta), descreva-o como produto e mostre como foi validado.',
              'Software desenvolvido pode ser registrado pelo NUPITEC, o que também atende ao requisito de produção para a defesa.',
            ]}
          />
          <LinkList links={[LINKS.produtosTecnicos]} />
        </Card>
      </div>
    </GuideSection>
  );
}

export function ResultadosConclusoes() {
  return (
    <GuideSection id="resultados-ppee" title="Resultados e conclusões">
      <div className="g2">
        <Card title="Resultados e discussão">
          <DashList
            items={[
              'Apresente os resultados na ordem dos objetivos específicos.',
              'Apoie os dados em tabelas e figuras, sempre citadas no texto.',
              'Compare os resultados com os trabalhos da revisão da literatura.',
              'Explique resultados inesperados e o efeito das limitações.',
            ]}
          />
        </Card>
        <Card title="Conclusões">
          <DashList
            items={[
              'CONCLUSÕES é o último capítulo, obrigatório (Resolução 007/2026).',
              'Deduções lógicas, sucintas e fundamentadas nos resultados.',
              'Inclua as limitações do trabalho e recomendações para trabalhos futuros.',
              'Retome a pergunta de pesquisa e diga se os objetivos foram atingidos.',
            ]}
          />
        </Card>
      </div>
    </GuideSection>
  );
}

export function ResumoPpee() {
  return (
    <GuideSection id="resumo-ppee" title="Resumo e abstract" lead="Escreva por último, quando resultados e conclusões já estiverem definidos.">
      <Card>
        <DashList
          items={[
            'Até 350 palavras (Resolução 007/2026).',
            'Visão geral do problema, da metodologia e das principais conclusões.',
            'Abstract em inglês logo após o resumo; resumos em outras línguas são opcionais e podem dividir a mesma página.',
            'Dissertação em outra língua: título e resumo expandido em português (Regulamento, art. 37).',
            'Até quatro palavras-chave na ficha catalográfica.',
          ]}
        />
      </Card>
    </GuideSection>
  );
}
