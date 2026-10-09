import { Callout, Card, CodeBox, DashList, GuideSection, LinkList } from '../shared/ui.jsx';
import { LINKS } from './links.js';

export function Modelo() {
  return (
    <GuideSection
      id="modelo"
      title="Modelo e formatação"
      lead="Quem usa LaTeX deve usar obrigatoriamente o template oficial do PPEE. Com outras ferramentas, vale integralmente a Resolução 007/2026."
    >
      <aside className="card overleaf-cta" aria-labelledby="ppee-overleaf-title">
        <div className="overleaf-copy">
          <p className="overleaf-kicker">LaTeX / Overleaf</p>
          <h3 id="ppee-overleaf-title">Template oficial do PPEE</h3>
          <p className="muted">
            O template já aplica capa, folha de aprovação, ficha catalográfica, listas, numeração por capítulo e espaçamentos da Resolução
            007/2026. Há versões em português, inglês e espanhol, e um modelo de apresentação para a defesa.
          </p>
          <a className="button button-primary" href={LINKS.overleafPt.href} target="_blank" rel="noreferrer">
            Abrir template em português <span aria-hidden="true">↗</span>
          </a>
          <LinkList links={[LINKS.overleafEn, LINKS.overleafEs, LINKS.overleafSlides]} />
        </div>
        <ol className="step-list">
          <li>
            <strong>Crie o projeto</strong>
            <span>Abra o template e use a opção Open as Template.</span>
          </li>
          <li>
            <strong>Compartilhe com o orientador</strong>
            <span>Dê acesso de edição para revisões e comentários direto no texto.</span>
          </li>
          <li>
            <strong>Escreva por capítulos</strong>
            <span>Um arquivo por capítulo facilita revisões e o controle de versões.</span>
          </li>
          <li>
            <strong>Mantenha o modelo</strong>
            <span>Não altere margens, fontes e estilos do template.</span>
          </li>
        </ol>
      </aside>
      <Card title="Formatação para quem não usa o template">
        <div className="g2 g2-tight">
          <DashList
            items={[
              'Papel A4, fonte Times New Roman 12.',
              'Margens de 25 mm.',
              'Espaçamento 1,5 no texto e 1,0 nas referências.',
              'Parágrafos sem recuo, justificados, com uma linha em branco entre eles.',
              'Extensão recomendada de 50 a 100 páginas, sem capas e anexos.',
            ]}
          />
          <DashList
            items={[
              'Preliminares numerados em romanos minúsculos (i, ii, iii); o "i" não aparece na folha de título.',
              'Texto numerado em arábicos a partir do Capítulo 1, na margem inferior, à direita.',
              'Unidades no Sistema Internacional (SI).',
              'Palavras estrangeiras em itálico; destaques entre aspas duplas.',
            ]}
          />
        </div>
      </Card>
      <LinkList links={[LINKS.res007]} />
    </GuideSection>
  );
}

export function EstruturaPpee() {
  return (
    <GuideSection id="estrutura-ppee" title="Estrutura da dissertação" lead="Preliminares, texto e complementares, nesta ordem (Resolução 007/2026, art. 8º).">
      <div className="g3">
        <Card title="Preliminares">
          <ol className="number-list">
            <li>Folha de título</li>
            <li>Folha de aprovação</li>
            <li>Folha catalográfica com cessão de direitos</li>
            <li>Dedicatória (opcional)</li>
            <li>Agradecimentos (opcional)</li>
            <li>Resumo (até 350 palavras)</li>
            <li>Abstract</li>
            <li>Resumos em outras línguas (opcional)</li>
            <li>Índice</li>
            <li>Lista de tabelas</li>
            <li>Lista de figuras</li>
            <li>Lista de símbolos, nomenclaturas e abreviações</li>
          </ol>
        </Card>
        <Card title="Texto (capítulos)">
          <ol className="number-list">
            <li>INTRODUÇÃO (obrigatório)</li>
            <li>Revisão de literatura ou fundamentos teóricos</li>
            <li>Materiais e métodos</li>
            <li>Resultados e discussão</li>
            <li>CONCLUSÕES (obrigatório, último capítulo)</li>
          </ol>
          <p className="muted">A divisão dos capítulos intermediários cabe ao aluno e ao orientador.</p>
        </Card>
        <Card title="Complementares">
          <DashList
            items={[
              'REFERÊNCIAS BIBLIOGRÁFICAS, sem número de capítulo, logo após as conclusões.',
              'Apêndices: material do autor (deduções, listagens de programas, estatísticas).',
              'Anexos: documentos de terceiros essenciais para a compreensão.',
              'Identificados por letras: A - NOME DO APÊNDICE.',
            ]}
          />
        </Card>
      </div>
      <Callout>
        A folha catalográfica reúne a ficha catalográfica (gerada no sistema da BCE), a referência bibliográfica da dissertação e a cessão de
        direitos.
      </Callout>
      <LinkList links={[LINKS.fichaBce]} />
    </GuideSection>
  );
}

export function Numeracao() {
  return (
    <GuideSection id="numeracao" title="Títulos e numeração">
      <div className="g2">
        <Card title="Modelo de numeração">
          <CodeBox label="anexo I da Resolução 007/2026">
            {'2. NOME DO CAPÍTULO\n2.1. PRIMEIRO NÍVEL DE SUBITEM\n2.1.1. Segundo Nível de Subitem\n(a) Terceiro Nível de Subitem\n(b) Terceiro Nível de Subitem'}
          </CodeBox>
        </Card>
        <Card title="Regras">
          <DashList
            items={[
              'Capítulos em algarismos arábicos e centralizados (ex.: 1. INTRODUÇÃO).',
              'Subitens numerados até o segundo nível; o terceiro usa letras (a) ou romanos (i).',
              'Capítulo e primeiro nível em maiúsculas e negrito; segundo nível em negrito com iniciais maiúsculas; terceiro sem negrito.',
              'Títulos de subitens alinhados à esquerda, sem tabulação.',
              'O índice traz capítulos, primeiro e segundo níveis.',
            ]}
          />
        </Card>
      </div>
    </GuideSection>
  );
}

export function IlustracoesPpee() {
  return (
    <GuideSection id="ilustracoes-ppee" title="Figuras, tabelas e equações">
      <div className="g2">
        <Card title="Identificação">
          <DashList
            items={[
              'Numeração por capítulo: Tabela 3.1, Figura 4.10, Equação 2.1.',
              'Tabelas e quadros: título na parte superior.',
              'Figuras: título na parte inferior.',
              'Título com número, traço e texto autoexplicativo (ex.: Tabela 1.1 - Volume de Tráfego do Caso 1).',
              'Citação no texto com inicial maiúscula: "conforme a Figura 2.1".',
              'Equações numeradas à direita, entre parênteses; todas as tabelas, quadros e figuras entram nas listas.',
            ]}
          />
        </Card>
        <Card title="Fonte">
          <DashList
            items={[
              'Material de terceiros: Fonte: Silva (2006).',
              'Material modificado: Fonte: adaptado de Silva (2006).',
              'Material elaborado pelo próprio autor não precisa de fonte.',
            ]}
          />
          <Callout>
            Estas regras diferem da ABNT (NBR 14724), que coloca o título da figura acima e exige fonte também no material próprio. No PPEE,
            vale a Resolução 007/2026.
          </Callout>
        </Card>
      </div>
      <div className="g2">
        <Card title="Exemplo de tabela">
          <table className="quadro compact">
            <caption>Tabela 4.1 - Taxa de detecção por cenário de tráfego</caption>
            <thead>
              <tr>
                <th>Cenário</th>
                <th className="num">Detecção (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTTP</td>
                <td className="num">97,2</td>
              </tr>
              <tr>
                <td>HTTPS</td>
                <td className="num">94,0</td>
              </tr>
              <tr>
                <td>DNS</td>
                <td className="num">89,5</td>
              </tr>
            </tbody>
          </table>
          <p className="table-note">Elaborada pelo autor: dispensa a indicação de fonte.</p>
        </Card>
        <Card title="Exemplo de figura">
          <figure className="figure-demo">
            <svg viewBox="0 0 320 90" role="img" aria-label="Diagrama: Internet, firewall e rede interna com sensor, conectados em sequência">
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
            <figcaption>
              <strong>Figura 3.1</strong> - Topologia do ambiente de testes
            </figcaption>
            <p className="table-note">Fonte: adaptado de Silva (2006).</p>
          </figure>
        </Card>
      </div>
    </GuideSection>
  );
}

export function ReferenciasPpee() {
  return (
    <GuideSection id="referencias-ppee" title="Referências e fontes">
      <Card>
        <DashList
          items={[
            'Liste apenas as referências consultadas e citadas no texto.',
            'Formatação: recuo especial de 1,25 cm, espaço simples entre linhas e 12 pt entre uma referência e outra.',
            'O estilo de citação e de referência segue o template oficial; confirme com o orientador antes de começar.',
            'Todo material retirado de fontes com copyright, texto ou ilustração, deve ser referenciado.',
          ]}
        />
      </Card>
    </GuideSection>
  );
}
