import { Callout, Card, CodeBox, DashList, Example, GuideSection } from '../shared/ui.jsx';

export function Orientacoes() {
  return (
    <GuideSection id="orientacoes" title="Redação" lead="Regras de escrita que valem para os relatórios do PFG 1 e do PFG 2.">
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
    </GuideSection>
  );
}

export function Estrutura() {
  return (
    <GuideSection id="estrutura" title="Estrutura do documento" lead="Elementos pré-textuais, textuais e pós-textuais conforme a NBR 14724:2024.">
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
    </GuideSection>
  );
}

export function Resumo() {
  return (
    <GuideSection
      id="resumo"
      title="Resumo e resumo em língua estrangeira"
      lead="Escreva o resumo por último, quando resultados e conclusões já estiverem definidos."
    >
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
            ]}
          />
          <ul className="tag-cloud tag-cloud-sm" aria-label="Elementos do resumo">
            {['Tema', 'Objetivo', 'Metodologia', 'Resultados', 'Conclusão'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Card>
        <Card title="Extensão e idioma">
          <DashList
            items={[
              'Entre 150 e 500 palavras, conforme a NBR 6028:2021 para trabalhos acadêmicos.',
              'Relatório redigido em inglês: incluir também um resumo estendido em português (regulamento do PFG).',
            ]}
          />
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
              controlado utilizando Kali Linux e monitoramento via logs do Zeek/Bro. Foram avaliados três cenários de tráfego (HTTP,
              HTTPS e DNS), comparando o modelo proposto com um sistema de detecção baseado em assinaturas. <mark>[Resultados]</mark> Os testes demonstraram uma
              taxa de detecção de 94% para tráfego criptografado, com uma redução de 15% no overhead de processamento em relação a
              assinaturas estáticas. Os falsos positivos permaneceram abaixo de 3% em todos os cenários. <mark>[Conclusão]</mark> Conclui-se
              que a abordagem fortalece a camada de detecção precoce, sendo essencial para a implementação de uma arquitetura Zero Trust.
              Como trabalhos futuros, sugere-se validar o modelo em redes de produção e com maior diversidade de ataques.
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
              Zeek/Bro logs. Three traffic scenarios (HTTP, HTTPS, and DNS) were evaluated, comparing the proposed model with a
              signature-based detection system. <mark>[Results]</mark> Tests showed a 94% detection rate for encrypted traffic, with a 15% reduction in
              processing overhead compared to static signatures. False positives remained below 3% in all scenarios.{' '}
              <mark>[Conclusion]</mark> The approach strengthens the early detection layer and is essential for implementing a Zero Trust
              architecture. As future work, the model should be validated in production networks and against a wider variety of attacks.
            </p>
            <p>
              <strong>Keywords:</strong> data exfiltration; cloud security; anomaly detection; Command and Control (C2); Zero Trust
              architecture.
            </p>
          </Example>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Introducao() {
  return (
    <GuideSection id="introducao" title="Introdução e objetivos" lead="A introdução reúne tema, problema, objetivos, justificativa e a organização do relatório.">
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
            A migração de serviços para infraestruturas híbridas ampliou a superfície de ataque das organizações. Nesse contexto, ataques
            de movimentação lateral e de exfiltração de dados passaram a contornar firewalls tradicionais, muitas vezes ocultos em tráfego
            criptografado. O presente trabalho delimita-se à detecção de exfiltração de dados em redes corporativas híbridas, investigando
            se a análise do comportamento do tráfego permite identificar esses ataques em tempo real.
          </Example>
        </Card>
      </div>

      <div className="g2">
        <Card title="Objetivo">
          <p className="muted">Apresenta a finalidade geral do trabalho, isto é, o ponto a que a pesquisa pretende chegar.</p>
          <Example>
            O objetivo deste trabalho é propor e avaliar um algoritmo de detecção de anomalias, baseado no comportamento do tráfego de
            rede, capaz de identificar exfiltração de dados em tempo real em infraestruturas híbridas.
          </Example>
          <CodeBox label="modelos de frase">
            {'O objetivo deste trabalho é analisar...\nO objetivo deste trabalho é comparar...\nO objetivo deste trabalho é propor...'}
          </CodeBox>
        </Card>
        <Card title="Objetivos específicos">
          <DashList
            items={[
              'Levantar as técnicas de exfiltração e de Command and Control (C2) descritas na literatura.',
              'Montar um ambiente controlado de testes com tráfego legítimo e malicioso.',
              'Implementar o algoritmo e compará-lo a um sistema de detecção baseado em assinaturas.',
              'Avaliar taxa de detecção, falsos positivos e overhead de processamento.',
            ]}
          />
          <h3 className="subhead">Justificativa</h3>
          <p className="muted">
            Explica por que o tema foi escolhido, sua relevância acadêmica, científica, social ou profissional, as contribuições esperadas e a
            viabilidade da pesquisa.
          </p>
          <Example>
            Justifica-se a escolha do tema pela crescente incidência de exfiltração de dados em ambientes corporativos e pela limitação dos
            sistemas baseados em assinaturas diante de tráfego criptografado. O estudo contribui com um método de detecção avaliado em
            cenários reproduzíveis, útil a equipes de segurança de redes.
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
            No trabalho de exemplo, esta seção apresenta conceitos como exfiltração de dados, movimentação lateral, Command and Control
            (C2), IDS/IPS, detecção por assinatura e por anomalia e arquitetura Zero Trust.
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
          Estudos recentes divergem sobre a melhor forma de detectar exfiltração de dados. Enquanto Autor A defende sistemas baseados em
          assinaturas pela baixa taxa de falsos positivos, Autor B mostra que esses sistemas falham diante de tráfego criptografado. Já Autor
          C propõe abordagens híbridas, que combinam assinaturas e análise de comportamento. Tais perspectivas indicam que nenhuma técnica
          isolada resolve o problema.
        </Example>
      </Card>
    </GuideSection>
  );
}

export function Metodologia() {
  return (
    <GuideSection
      id="metodologia"
      title="Metodologia"
      lead="Descreve como a pesquisa será conduzida, com detalhamento suficiente para que outro pesquisador possa reproduzi-la ou conferir os dados."
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
        <Card title="Exemplo">
          <Example>
            A pesquisa foi realizada em ambiente controlado de laboratório. A topologia, apresentada na Figura 1, reúne três servidores
            virtuais Linux, um firewall e um sensor Zeek. Foram gerados tráfego legítimo e ataques de Command and Control (C2) com Kali
            Linux, em três cenários (HTTP, HTTPS e DNS). O algoritmo proposto e um sistema baseado em assinaturas foram comparados quanto à
            taxa de detecção, aos falsos positivos e ao overhead de processamento.
          </Example>
        </Card>
      </div>
    </GuideSection>
  );
}

export function Resultados() {
  return (
    <GuideSection
      id="resultados"
      title="Resultados e discussão"
      lead="Parte central do texto final: apresenta o que foi obtido com a metodologia e interpreta esses dados à luz do referencial teórico."
    >
      <div className="g2">
        <Card title="Como apresentar">
          <DashList
            items={[
              'Seguir a ordem dos objetivos específicos definidos na introdução.',
              'Apoiar os dados em quadros, tabelas, gráficos e figuras, sempre citados no texto.',
              'Separar o que foi medido ou observado da interpretação feita pelo autor.',
              'Informar condições, parâmetros e configurações que permitam conferir os dados.',
            ]}
          />
        </Card>
        <Card title="Como discutir">
          <DashList
            items={[
              'Comparar os resultados com os trabalhos apresentados no referencial teórico.',
              'Explicar resultados inesperados ou divergentes da literatura.',
              'Reconhecer as limitações do estudo e o efeito delas sobre os resultados.',
              'Indicar se cada objetivo específico foi atendido.',
            ]}
          />
        </Card>
      </div>
      <Card title="Exemplo">
        <Example>
          A Tabela 1 mostra que a taxa de detecção foi maior no tráfego HTTP (97,2%) do que no tráfego DNS (89,5%). Esse comportamento é
          compatível com o observado por Autor A, que atribui a menor taxa em DNS ao volume reduzido de dados por consulta. Ressalta-se,
          porém, que os testes foram realizados em ambiente controlado, o que limita a generalização dos resultados para redes em produção.
        </Example>
      </Card>
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
          Conclui-se que a análise do comportamento do tráfego permitiu detectar exfiltração de dados com taxa de 94% em tráfego
          criptografado, superando o sistema baseado em assinaturas e mantendo os falsos positivos abaixo de 3%. O objetivo proposto foi
          alcançado, uma vez que o algoritmo foi implementado e avaliado nos três cenários definidos. Como limitação, os testes ocorreram em
          ambiente controlado; como trabalho futuro, recomenda-se validar o modelo em redes de produção e com maior diversidade de ataques.
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
              <strong>Figura 1</strong> - Topologia do ambiente de testes
            </figcaption>
            <svg viewBox="0 0 320 90" role="img" aria-label="Diagrama: Internet, firewall e rede interna com sensor Zeek, conectados em sequência">
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="8" y="28" width="80" height="34" rx="8" />
                <rect x="120" y="28" width="80" height="34" rx="8" />
                <rect x="232" y="28" width="80" height="34" rx="8" />
                <path d="M88 45h32M200 45h32" />
              </g>
              <g fill="currentColor" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
                <text x="48" y="49">Internet</text>
                <text x="160" y="49">Firewall</text>
                <text x="272" y="49">LAN + Zeek</text>
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
            <caption>Quadro 1 - Comparação entre abordagens de detecção</caption>
            <thead>
              <tr>
                <th>Abordagem</th>
                <th>Vantagem</th>
                <th>Limitação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Assinatura</td>
                <td>Baixa taxa de falsos positivos</td>
                <td>Não detecta ataques desconhecidos</td>
              </tr>
              <tr>
                <td>Anomalia</td>
                <td>Detecta ataques desconhecidos</td>
                <td>Mais falsos positivos</td>
              </tr>
              <tr>
                <td>Híbrida</td>
                <td>Combina as duas abordagens</td>
                <td>Maior complexidade de implantação</td>
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
            {'Para Silva (2020, p. 25), "a exfiltração de dados raramente é detectada apenas por regras de firewall".'}
          </CodeBox>
          <CodeBox label="indireta">
            {'Sistemas baseados em assinaturas têm dificuldade em detectar ataques ocultos em tráfego criptografado (Souza; Lima; Costa, 2022).'}
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
