import { Callout, Card, CodeBox, DashList, Example, GuideSection } from './ui.jsx';
import VerificadorResumo from './VerificadorResumo.jsx';

export function Orientacoes() {
  return (
    <GuideSection id="orientacoes" title="Orientações gerais">
      <div className="g2">
        <Card title="Diretrizes principais">
          <DashList
            items={[
              'Redação na terceira pessoa do singular e com verbos na voz ativa.',
              'Todas as seções devem ser numeradas, conforme a NBR 6024.',
              'A NBR 14724:2024 adota o termo "seção" no lugar de "capítulo".',
              'Recomenda-se um parágrafo introdutório no início de cada nova seção.',
              'Nas referências, prefira o DOI a links longos; quando não houver DOI, mantenha a URL completa da fonte.',
            ]}
          />
          <Callout>
            Também é possível incluir uma lista de abreviaturas e siglas como elemento pré-textual opcional, em ordem alfabética e com o
            significado por extenso, conforme a NBR 14724:2024.
          </Callout>
        </Card>
        <Card title="Boas práticas e cuidados">
          <div className="g2 g2-tight">
            <div className="mini-card">
              <h4>Faça</h4>
              <ul className="check-list">
                <li>Escrever de forma clara, objetiva e impessoal.</li>
                <li>Manter coerência entre introdução, desenvolvimento e conclusão.</li>
                <li>Evitar parágrafos excessivamente longos.</li>
                <li>Revisar ortografia, concordância e padronização.</li>
              </ul>
            </div>
            <div className="mini-card mini-card-avoid">
              <h4>Evite</h4>
              <ul className="x-list">
                <li>Escrever em primeira pessoa.</li>
                <li>Inserir citações sem relação com o texto.</li>
                <li>Apresentar conclusões não discutidas anteriormente.</li>
                <li>Usar expressões vagas como “conforme abaixo”.</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Estrutura() {
  return (
    <GuideSection id="estrutura" title="Estrutura do trabalho" lead="Elementos pré-textuais, textuais e pós-textuais conforme a NBR 14724:2024.">
      <div className="g3">
        <Card title="Pré-textuais">
          <DashList
            items={[
              'Capa e folha de rosto',
              'Ficha catalográfica (verso da folha de rosto)',
              'Folha de aprovação',
              'Dedicatória, agradecimentos e epígrafe (opcionais)',
              'Resumo e resumo em língua estrangeira',
              'Listas de ilustrações, tabelas, abreviaturas e siglas (opcionais)',
              'Sumário',
            ]}
          />
        </Card>
        <Card title="Textuais">
          <ol className="number-list">
            <li>
              Introdução
              <ol>
                <li>Objetivo</li>
                <li>Objetivos Específicos</li>
                <li>Justificativa</li>
                <li>Organização do Trabalho</li>
              </ol>
            </li>
            <li>Fundamentos e Conceitos</li>
            <li>Referencial Teórico</li>
            <li>Metodologia</li>
            <li>Resultados e Discussão</li>
            <li>Conclusão</li>
          </ol>
        </Card>
        <Card title="Pós-textuais">
          <DashList
            items={[
              'Referências (obrigatório, sem numeração de seção)',
              'Glossário (opcional)',
              'Apêndices: material elaborado pelo autor (opcional)',
              'Anexos: material de terceiros (opcional)',
              'Índice (opcional)',
            ]}
          />
          <Callout>Pela NBR 14724:2024, as referências usadas apenas em um apêndice devem constar no próprio apêndice.</Callout>
        </Card>
      </div>
      <p className="note">
        Em artigos científicos (NBR 6022:2018), a estrutura é mais enxuta: título, autoria, resumo e palavras-chave, resumo em língua
        estrangeira, seções textuais e referências.
      </p>
    </GuideSection>
  );
}

export function Resumo() {
  return (
    <GuideSection id="resumo" title="Resumo e resumo em língua estrangeira">
      <div className="g2">
        <Card title="Resumo">
          <p className="muted">
            O resumo deve ser elaborado de forma concisa, informativa e objetiva, destacando os aspectos mais relevantes do conteúdo e das
            conclusões do trabalho.
          </p>
          <DashList
            items={[
              'Redação na terceira pessoa, com verbos na voz ativa.',
              'Texto do tipo informativo, em parágrafo único.',
              'Palavras-chave logo abaixo do resumo, precedidas de "Palavras-chave:", separadas por ponto e vírgula e finalizadas por ponto.',
              'Palavras-chave com iniciais minúsculas, exceto nomes próprios e nomes científicos.',
              'Quando publicado separadamente do documento, deve ser precedido da referência do trabalho (NBR 6023:2018).',
            ]}
          />
          <ul className="tag-cloud tag-cloud-sm" aria-label="Elementos do resumo">
            {['Tema', 'Objetivo', 'Metodologia', 'Resultados', 'Conclusão'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Card>
        <Card title="Extensão (NBR 6028:2021)">
          <table className="quadro compact">
            <caption className="sr-only">Extensão do resumo por tipo de documento</caption>
            <thead>
              <tr>
                <th>Tipo de documento</th>
                <th className="num">Palavras</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trabalhos acadêmicos (TCC, dissertação, tese) e relatórios</td>
                <td className="num">150 a 500</td>
              </tr>
              <tr>
                <td>Artigos de periódicos</td>
                <td className="num">100 a 250</td>
              </tr>
              <tr>
                <td>Documentos curtos (comunicações, eventos)</td>
                <td className="num">50 a 100</td>
              </tr>
            </tbody>
          </table>
          <h3 className="subhead">Resumo em língua estrangeira</h3>
          <DashList
            items={[
              'Tradução fiel do resumo em português (Abstract, Résumé, Resumen), com o mesmo conteúdo.',
              'Deve conter as mesmas palavras-chave, traduzidas.',
              'Em inglês, usar a expressão Keywords: (no plural), com a mesma pontuação das palavras-chave.',
            ]}
          />
        </Card>
      </div>

      <div className="g2">
        <Card title="Exemplo de resumo">
          <Example label="Resumo">
            <strong>Análise de Resiliência contra Ataques de Exfiltração em Ambientes de Nuvem</strong>
            <p>
              <mark>[Contexto]</mark> A crescente sofisticação de ataques de movimentação lateral em infraestruturas híbridas tem contornado
              firewalls tradicionais, expondo dados sensíveis de forma crítica. <mark>[Objetivo]</mark> Este trabalho propõe um algoritmo de
              detecção de anomalias baseado em comportamento de rede para identificar exfiltração de dados em tempo real.{' '}
              <mark>[Metodologia]</mark> A metodologia envolveu a simulação de ataques de Command &amp; Control (C2) em um ambiente
              controlado utilizando Kali Linux e monitoramento via logs do Zeek/Bro. <mark>[Resultados]</mark> Os testes demonstraram uma
              taxa de detecção de 94% para tráfego criptografado, com uma redução de 15% no overhead de processamento em relação a
              assinaturas estáticas. <mark>[Conclusão]</mark> Conclui-se que a abordagem fortalece a camada de detecção precoce, sendo
              essencial para a implementação de uma arquitetura Zero Trust.
            </p>
            <p>
              <strong>Palavras-chave:</strong> exfiltração de dados; segurança em nuvem; detecção de anomalias; Command and Control (C2);
              arquitetura Zero Trust.
            </p>
          </Example>
        </Card>
        <Card title="Exemplo em língua estrangeira">
          <Example label="Abstract">
            <strong>Resilience Analysis against Exfiltration Attacks in Cloud Environments</strong>
            <p>
              <mark>[Context]</mark> The growing sophistication of lateral movement attacks in hybrid infrastructures has bypassed
              traditional firewalls, critically exposing sensitive data. <mark>[Objective]</mark> This study proposes an anomaly detection
              algorithm based on network behavior to identify data exfiltration in real time. <mark>[Methodology]</mark> The methodology
              involved simulating Command and Control (C2) attacks in a controlled environment using Kali Linux, with monitoring through
              Zeek/Bro logs. <mark>[Results]</mark> Tests showed a 94% detection rate for encrypted traffic, with a 15% reduction in
              processing overhead compared to static signatures. <mark>[Conclusion]</mark> The approach strengthens the early detection
              layer and is essential for implementing a Zero Trust architecture.
            </p>
            <p>
              <strong>Keywords:</strong> data exfiltration; cloud security; anomaly detection; Command and Control (C2); Zero Trust
              architecture.
            </p>
          </Example>
        </Card>
      </div>

      <div id="verificador">
        <VerificadorResumo />
      </div>
    </GuideSection>
  );
}

export function Introducao() {
  return (
    <GuideSection id="introducao" title="Introdução, objetivo, justificativa e organização">
      <div className="g2">
        <Card title="Introdução">
          <p className="muted">A introdução situa o leitor no tema e apresenta de maneira clara a proposta do trabalho.</p>
          <DashList
            items={[
              'Definição do tema em linhas gerais.',
              'Delimitação do assunto estudado.',
              'Problema de pesquisa.',
              'Objetivo geral e objetivos específicos.',
              'Questões de pesquisa e hipóteses, quando houver.',
              'Justificativa, relevância e contribuições do estudo.',
              'Metodologia adotada.',
              'Organização do trabalho.',
            ]}
          />
        </Card>
        <Card title="Exemplo de abertura">
          <Example>
            Segurança da informação tornou-se elemento central na proteção de ativos digitais em organizações públicas e privadas. Nesse
            contexto, o aumento de incidentes cibernéticos evidencia a necessidade de investigar mecanismos mais eficazes de prevenção e
            resposta. O presente trabalho delimita-se à análise de controles de segurança aplicados a ambientes corporativos, buscando
            compreender sua efetividade diante de ameaças contemporâneas.
          </Example>
        </Card>
      </div>

      <div className="g2">
        <Card title="Objetivo">
          <p className="muted">Apresenta a finalidade geral do trabalho, isto é, o ponto a que a pesquisa pretende chegar.</p>
          <Example>
            O objetivo deste trabalho é apresentar um estudo de caso comparativo entre os três principais modelos de melhores práticas
            adotadas em desenvolvimento de software, analisando-os sob o aspecto de segurança da informação com base nas normas ISO 27001 e
            ISO 27002.
          </Example>
          <CodeBox label="modelos de frase">
            {'O objetivo deste trabalho é analisar...\nO objetivo deste trabalho é comparar...\nO objetivo deste trabalho é propor...'}
          </CodeBox>
        </Card>
        <Card title="Objetivos específicos">
          <DashList
            items={[
              'Identificar os principais controles de segurança aplicados ao contexto estudado.',
              'Comparar modelos ou abordagens existentes.',
              'Avaliar vantagens, limitações e aplicabilidade.',
              'Propor recomendações com base nos resultados obtidos.',
            ]}
          />
          <h3 className="subhead">Justificativa</h3>
          <p className="muted">
            Explica por que o tema foi escolhido, sua relevância acadêmica, científica, social ou profissional, as contribuições esperadas e a
            viabilidade da pesquisa.
          </p>
          <Example>
            Justifica-se a escolha do tema pela crescente incidência de ataques cibernéticos em ambientes corporativos, bem como pela
            necessidade de compreender quais práticas de segurança se mostram mais eficazes na mitigação desses riscos.
          </Example>
        </Card>
      </div>

      <Card title="Organização do trabalho">
        <Example>
          Este trabalho está organizado da seguinte forma: a Seção 2 apresenta os principais fundamentos e termos utilizados; a Seção 3 traz
          o referencial teórico com os principais trabalhos na área e suas contribuições; a Seção 4 descreve a metodologia adotada; a Seção
          5 apresenta e discute os resultados obtidos no estudo de caso; por fim, a Seção 6 apresenta as conclusões, os desafios enfrentados
          e sugestões de trabalhos futuros.
        </Example>
      </Card>
    </GuideSection>
  );
}

export function Fundamentos() {
  return (
    <GuideSection id="fundamentos" title="Fundamentos e referencial teórico">
      <div className="g2">
        <Card title="Fundamentos e conceitos">
          <p className="muted">
            Reúne conceitos básicos, definições e terminologias essenciais para a compreensão do trabalho, oferecendo uma base conceitual
            mínima antes do aprofundamento teórico e analítico.
          </p>
          <Example>
            Em um trabalho sobre redes de computadores, esta seção pode apresentar conceitos como protocolo, roteamento, firewall, IDS/IPS,
            autenticação, confidencialidade, integridade e disponibilidade.
          </Example>
        </Card>
        <Card title="Referencial teórico">
          <p className="muted">
            Análise dos trabalhos relevantes encontrados na pesquisa bibliográfica, construindo uma discussão articulada, crítica e
            reflexiva.
          </p>
          <DashList
            items={[
              'Apresentar a fundamentação teórica da pesquisa.',
              'Mostrar o estado atual do conhecimento.',
              'Apoiar a interpretação dos dados e fatos levantados.',
              'Permitir discussão dos resultados com base em autores e estudos anteriores.',
            ]}
          />
          <ul className="tag-cloud tag-cloud-sm" aria-label="Fontes para a pesquisa bibliográfica">
            {['Bibliotecas', 'Bases de dados', 'Periódicos científicos', 'Livros', 'Serviços de informação'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Card>
      </div>
      <Card title="Exemplo de abordagem crítica">
        <Example>
          Estudos recentes indicam diferentes abordagens para o problema investigado. Enquanto Autor A enfatiza o papel dos controles
          preventivos, Autor B destaca a importância do monitoramento contínuo. Já Autor C amplia a discussão ao defender uma integração
          entre governança, tecnologia e resposta a incidentes. Tais perspectivas revelam que o fenômeno não pode ser analisado de forma
          isolada.
        </Example>
      </Card>
    </GuideSection>
  );
}

export function Desenvolvimento() {
  return (
    <GuideSection
      id="desenvolvimento"
      title="Desenvolvimento: metodologia e resultados"
      lead="Parte central do trabalho. Recomenda-se dividi-la em Metodologia (como a pesquisa foi conduzida) e Resultados e Discussão (o que foi encontrado e como se relaciona com a literatura)."
    >
      <div className="g2">
        <Card title="O que pode compor a metodologia">
          <DashList
            items={[
              'Local e período de realização da pesquisa.',
              'Universo, população e amostra.',
              'Instrumentos ou equipamentos utilizados.',
              'Termo de consentimento dos participantes e aprovação em Comitê de Ética, quando houver pesquisa com seres humanos (Resoluções CNS 466/2012 e 510/2016), com tratamento de dados pessoais conforme a LGPD.',
              'Fontes utilizadas e justificativa da escolha (pesquisa documental).',
              'Normas, especificações técnicas e métodos empregados.',
              'Equipamentos especiais, laboratórios, máquinas, configurações e topologias.',
            ]}
          />
        </Card>
        <Card title="Reprodutibilidade">
          <p className="muted">
            Quadros, tabelas, gráficos e figuras podem ser utilizados. As informações devem permitir que outro pesquisador reproduza a
            pesquisa ou confira os dados.
          </p>
          <Example>
            A pesquisa foi realizada entre março e junho de 2025, em ambiente controlado de laboratório. Foram utilizados três servidores
            virtuais com sistemas Linux, configurados para simular tráfego legítimo e malicioso em rede corporativa. A coleta dos dados foi
            feita por meio de ferramentas de monitoramento e registros de eventos. Em seguida, aplicou-se análise comparativa dos resultados
            obtidos.
          </Example>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Conclusao() {
  return (
    <GuideSection id="conclusao" title="Conclusão">
      <div className="g2">
        <Card title="Diretrizes">
          <ul className="check-list">
            <li>Retomar os objetivos e, se houver, as hipóteses apresentadas na introdução.</li>
            <li>Sintetizar os principais resultados discutidos ao longo do trabalho.</li>
            <li>Indicar se os objetivos foram alcançados.</li>
            <li>Apresentar deduções de forma clara, sintética e ordenada.</li>
            <li>Apontar limitações e sugestões para pesquisas futuras.</li>
          </ul>
        </Card>
        <Card title="Não faça na conclusão">
          <ul className="x-list">
            <li>Apresentar fatos, argumentos ou dados novos.</li>
            <li>Inserir citações.</li>
            <li>Trazer dados quantitativos inéditos.</li>
            <li>Apresentar resultados ainda sujeitos à discussão.</li>
          </ul>
        </Card>
      </div>
      <Card title="Exemplo de conclusão">
        <Example>
          Conclui-se que os mecanismos analisados apresentam níveis distintos de eficácia conforme o contexto de aplicação. Os resultados
          evidenciaram que abordagens integradas tendem a oferecer maior robustez diante de ameaças complexas. O objetivo proposto foi
          alcançado, uma vez que se tornou possível comparar os modelos selecionados e identificar suas contribuições e limitações. Como
          desdobramento futuro, recomenda-se ampliar a investigação para cenários com maior diversidade tecnológica e amostras mais
          abrangentes.
        </Example>
      </Card>
    </GuideSection>
  );
}

export function Ilustracoes() {
  return (
    <GuideSection id="ilustracoes" title="Figuras, quadros e tabelas">
      <div className="g2">
        <Card title="Regras gerais">
          <DashList
            items={[
              'Toda ilustração (figura, gráfico, quadro) e toda tabela deve ser numerada.',
              'Todo elemento deve ter identificação e fonte.',
              'Todo elemento deve ser citado no texto e inserido o mais próximo possível do trecho a que se refere.',
              'Quadro: dados textuais, com bordas fechadas.',
              'Tabela: dados numéricos, sem bordas laterais, conforme as Normas de Apresentação Tabular do IBGE.',
            ]}
          />
          <Callout>Evita-se a expressão “conforme abaixo”. Prefira referência direta, como “Conforme a Figura 1...”.</Callout>
        </Card>
        <Card title="Identificação e fonte (NBR 14724:2024)">
          <DashList
            items={[
              'Identificação na parte superior, para figuras, gráficos, quadros e tabelas: palavra designativa, número e título.',
              'Fonte na parte inferior, obrigatória mesmo quando o material for produção do próprio autor.',
              'A indicação da fonte segue a NBR 10520:2023, por exemplo: Fonte: Silva (2024, p. 12).',
            ]}
          />
          <figure className="figure-demo">
            <figcaption>
              <strong>Figura 1</strong> - Arquitetura simplificada de rede segura
            </figcaption>
            <svg viewBox="0 0 320 90" role="img" aria-label="Diagrama: Internet, firewall e rede interna conectados em sequência">
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="8" y="28" width="80" height="34" rx="8" />
                <rect x="120" y="28" width="80" height="34" rx="8" />
                <rect x="232" y="28" width="80" height="34" rx="8" />
                <path d="M88 45h32M200 45h32" />
              </g>
              <g fill="currentColor" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
                <text x="48" y="49">Internet</text>
                <text x="160" y="49">Firewall</text>
                <text x="272" y="49">LAN</text>
              </g>
            </svg>
            <p className="table-note">
              <strong>Fonte:</strong> elaborado pelo próprio autor (2026).
            </p>
          </figure>
        </Card>
      </div>

      <div className="g2">
        <Card title="Exemplo de quadro (dados textuais)">
          <table className="quadro">
            <caption>Quadro 1 - Comparação entre mecanismos de autenticação</caption>
            <thead>
              <tr>
                <th>Mecanismo</th>
                <th>Vantagem</th>
                <th>Limitação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senha</td>
                <td>Simplicidade</td>
                <td>Baixa resistência a ataques</td>
              </tr>
              <tr>
                <td>Token</td>
                <td>Maior segurança</td>
                <td>Dependência de dispositivo</td>
              </tr>
              <tr>
                <td>Biometria</td>
                <td>Facilidade de uso</td>
                <td>Questões de privacidade</td>
              </tr>
            </tbody>
          </table>
          <p className="table-note">
            <strong>Fonte:</strong> elaborado pelo próprio autor (2026).
          </p>
        </Card>
        <Card title="Exemplo de tabela (dados numéricos)">
          <table className="tabela-ibge">
            <caption>Tabela 1 - Taxa de detecção por tipo de tráfego</caption>
            <thead>
              <tr>
                <th>Tipo de tráfego</th>
                <th className="num">Amostras</th>
                <th className="num">Detecção (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTTP</td>
                <td className="num">1.200</td>
                <td className="num">97,2</td>
              </tr>
              <tr>
                <td>HTTPS</td>
                <td className="num">2.450</td>
                <td className="num">94,0</td>
              </tr>
              <tr>
                <td>DNS</td>
                <td className="num">860</td>
                <td className="num">89,5</td>
              </tr>
            </tbody>
          </table>
          <p className="table-note">
            <strong>Fonte:</strong> elaborado pelo próprio autor (2026).
          </p>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Abreviaturas() {
  return (
    <GuideSection id="abreviaturas" title="Nova seção, abreviaturas e siglas">
      <div className="g2">
        <Card title="Abertura de nova seção">
          <p className="muted">
            Sempre que uma nova seção for iniciada, recomenda-se inserir um pequeno texto introdutório explicando o que será tratado ali. Isso
            melhora a fluidez e orienta o leitor.
          </p>
          <Example>
            Nesta seção são apresentados os principais conceitos e fundamentos necessários para a compreensão do problema investigado,
            servindo como base para a discussão teórica desenvolvida nas seções seguintes.
          </Example>
        </Card>
        <Card title="Abreviaturas e siglas">
          <p className="muted">
            Lista pré-textual opcional (NBR 14724:2024), em ordem alfabética e com o significado por extenso. No texto, a sigla aparece por
            extenso na primeira ocorrência, seguida da sigla entre parênteses.
          </p>
          <dl className="abbr-list">
            {[
              ['ABNT', 'Associação Brasileira de Normas Técnicas'],
              ['IDS', 'Intrusion Detection System'],
              ['ISO', 'International Organization for Standardization'],
              ['TCC', 'Trabalho de Conclusão de Curso'],
            ].map(([sigla, nome]) => (
              <div key={sigla}>
                <dt>{sigla}</dt>
                <dd>{nome}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Citacoes() {
  return (
    <GuideSection
      id="citacoes"
      title="Citações (NBR 10520:2023)"
      lead="Toda citação indica autoria e ano; nas citações diretas, também a página."
    >
      <div className="g2">
        <Card title="Indicação de autoria">
          <CodeBox label="formato">{'(Sobrenome, ano, p. X)\nSegundo Sobrenome (ano, p. X)...'}</CodeBox>
          <DashList
            items={[
              'Sobrenome com apenas a inicial maiúscula, dentro e fora dos parênteses: (Silva, 2020, p. 15) ou Segundo Silva (2020, p. 15).',
              'Entidades: nome completo ou sigla, em maiúsculas e minúsculas; siglas em maiúsculas, como (ABNT, 2023) ou (Organização das Nações Unidas, 2023).',
              'Até três autores: todos, separados por ponto e vírgula, como (Souza; Lima; Costa, 2022).',
              'Quatro ou mais autores: pode-se indicar o primeiro seguido de et al., como (Silva et al., 2024).',
            ]}
          />
        </Card>
        <Card title="Tipos de citação">
          <dl className="term-list">
            <div>
              <dt>Direta curta</dt>
              <dd>Até três linhas: no corpo do texto, entre aspas duplas, com indicação da página.</dd>
            </div>
            <div>
              <dt>Direta longa</dt>
              <dd>Mais de três linhas: parágrafo próprio com recuo de 4 cm da margem esquerda, fonte menor, espaçamento simples e sem aspas.</dd>
            </div>
            <div>
              <dt>Indireta</dt>
              <dd>Paráfrase, texto reescrito com as próprias palavras; a página é opcional.</dd>
            </div>
            <div>
              <dt>Citação de citação</dt>
              <dd>Usar apud apenas quando o original não estiver acessível, como (Freire, 1982 apud Silva, 2020, p. 8).</dd>
            </div>
            <div>
              <dt>Supressões e acréscimos</dt>
              <dd>Supressões são indicadas por [...] e acréscimos ou comentários por [ ].</dd>
            </div>
          </dl>
        </Card>
      </div>
      <Card title="Exemplos aplicados">
        <div className="g3 g-flat">
          <CodeBox label="direta curta">
            {'Para Silva (2020, p. 25), "a segurança da informação depende de controles técnicos e administrativos".'}
          </CodeBox>
          <CodeBox label="indireta">
            {'Controles preventivos reduzem a superfície de ataque, mas não substituem o monitoramento contínuo (Souza; Lima; Costa, 2022).'}
          </CodeBox>
          <CodeBox label="quatro ou mais autores">
            {'Abordagens baseadas em comportamento apresentaram menor taxa de falsos positivos (Almeida et al., 2024).'}
          </CodeBox>
        </div>
      </Card>
    </GuideSection>
  );
}

export function Referencias() {
  return (
    <GuideSection id="referencias" title="Referências (NBR 6023:2018)">
      <div className="g2">
        <Card title="Regras gerais">
          <DashList
            items={[
              'Título principal em destaque (negrito), de forma uniforme em toda a lista.',
              'Até três autores: todos. Quatro ou mais: convém indicar todos, sendo permitido usar o primeiro seguido de et al.',
              'Meses abreviados (jan., fev., mar.).',
              'Incluir o DOI sempre que existir.',
              'Lista em ordem alfabética, alinhada à margem esquerda e com espaçamento simples.',
            ]}
          />
        </Card>
        <Card title="Livro">
          <CodeBox label="modelo">
            SOBRENOME, Prenome. <strong>Título do livro</strong>: subtítulo. 2. ed. Local: Editora, ano.
          </CodeBox>
          <CodeBox label="exemplo">
            STALLINGS, William. <strong>Criptografia e segurança de redes</strong>: princípios e práticas. 6. ed. São Paulo: Pearson, 2015.
          </CodeBox>
        </Card>
      </div>
      <div className="g3">
        <Card title="Artigo de periódico">
          <CodeBox label="modelo">
            SOBRENOME, Prenome. Título do artigo. <strong>Nome do Periódico</strong>, local, v. X, n. Y, p. inicial-final, mês ano. DOI:
            10.xxxx/xxxxx.
          </CodeBox>
        </Card>
        <Card title="Capítulo de livro">
          <CodeBox label="modelo">
            SOBRENOME, Prenome. Título do capítulo. In: SOBRENOME, Prenome (org.). <strong>Título do livro</strong>. Local: Editora, ano. p.
            inicial-final.
          </CodeBox>
        </Card>
        <Card title="Documento on-line">
          <CodeBox label="modelo">
            AUTOR ou ENTIDADE. <strong>Título da página</strong>. Local, ano. Disponível em: https://endereco. Acesso em: 8 out. 2026.
          </CodeBox>
        </Card>
      </div>
    </GuideSection>
  );
}

const ROTEIRO = [
  ['Resumo', 'Tema, objetivo, método, resultados e conclusões. De 150 a 500 palavras em TCC e de 100 a 250 em artigos, com palavras-chave separadas por ponto e vírgula.'],
  ['Resumo em língua estrangeira', 'Tradução do resumo, com palavras-chave traduzidas (Keywords) e mesma formatação do resumo em português.'],
  ['Introdução', 'Tema, problema, objetivos, justificativa, metodologia e organização do trabalho.'],
  ['Fundamentos e Conceitos', 'Definições e conceitos essenciais para entendimento do tema.'],
  ['Referencial Teórico', 'Análise crítica da literatura relevante e do estado da arte.'],
  ['Metodologia, resultados e discussão', 'Materiais, métodos, análise e resultados, com detalhamento suficiente para reprodução.'],
  ['Conclusão', 'Retoma objetivos e resultados, sintetiza as conclusões e sugere trabalhos futuros, sem informações novas.'],
  ['Citações e referências', 'Citações conforme a NBR 10520:2023, como (Silva, 2024, p. 10), e lista de obras conforme a NBR 6023:2018.'],
];

export function Roteiro() {
  return (
    <GuideSection id="roteiro" title="Roteiro resumido">
      <ol className="roadmap">
        {ROTEIRO.map(([titulo, texto]) => (
          <li key={titulo}>
            <strong>{titulo}</strong>
            <span>{texto}</span>
          </li>
        ))}
      </ol>
    </GuideSection>
  );
}
