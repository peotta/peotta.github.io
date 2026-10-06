// Producao cientifica. Dados extraidos dos proprios PDFs (autores, veiculo, ano, DOI).
// Para incluir um trabalho novo, acrescente uma entrada e coloque o PDF em /arquivos/publicacoes/.
// type: 'journal' (periodico) ou 'conference' (congresso).

const PDF = '/arquivos/publicacoes/';

export const publications = [
  {
    id: 'cose-2026-devsecops',
    type: 'journal',
    year: 2026,
    title: 'Cybersecurity risks, DevSecOps challenges, and emerging security priorities: An empirical study across Brazilian organizations',
    authors: ['Edna Dias Canedo', 'Stefano Luppi Spósito', 'Laerte Peotta', 'Rafael Rabelo Nunes', 'Marcelo Ladeira'],
    venue: 'Computers & Security',
    details: 'Elsevier, art. 105026',
    doi: '10.1016/j.cose.2026.105026',
    pdf: `${PDF}2026-cybersecurity-risks-devsecops-brazilian-organizations.pdf`,
  },
  {
    id: 'access-2026-prompt-injection',
    type: 'journal',
    year: 2026,
    title: 'A Systematic Review of Prompt Injection Attacks on Large Language Models: Trends, Taxonomy, Evaluation, Defenses and Opportunities',
    authors: ['Jaqueline D. Duarte', 'Guilherme D. Cândido', 'José Ricardo A. de Britto Filho', 'João Souza Neto', 'Elena J. Costa', 'João Paulo J. da Costa', 'Laerte Peotta de Melo'],
    venue: 'IEEE Access',
    doi: '10.1109/ACCESS.2026.3656849',
    pdf: `${PDF}2026-systematic-review-prompt-injection-llm.pdf`,
  },
  {
    id: 'saner-2026-sast',
    type: 'conference',
    year: 2026,
    title: 'From Legacy Designs to Vulnerability Fixes: Understanding SAST Adoption in Non-Technological Companies',
    authors: ['Luis Amaral', 'Michael Schlichtig', 'Wagner Emanuel', 'Joilton Almeida', 'Carine Ferreira', 'Jerome Kempf', 'Rodrigo Bonifácio', 'Eric Bodden', 'Laerte Peotta', 'Gustavo Pinto', 'Márcio Ribeiro'],
    venue: 'IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER 2026)',
    doi: '10.1109/SANER67736.2026.00039',
    pdf: `${PDF}2026-legacy-designs-vulnerability-fixes-sast.pdf`,
  },
  {
    id: 'sbseg-2026-estilometria',
    type: 'conference',
    year: 2026,
    title: 'Detecção de Mensagens de Phishing Geradas por Modelos Generativos de Linguagem em Português por Meio de Atributos Estilométricos Resilientes a Vieses de Geração Sintética',
    authors: ['Jeanderson Medeiros da Silva', 'Jaqueline Damacena Duarte', 'Fabio Lucio Lopes de Mendonça', 'Laerte Peotta de Melo'],
    venue: 'XXVI Simpósio Brasileiro de Cibersegurança (SBSeg 2026)',
    details: 'Trilha principal',
    pdf: `${PDF}2026-phishing-llm-atributos-estilometricos.pdf`,
  },
  {
    id: 'sbseg-2026-injecao-indireta',
    type: 'conference',
    year: 2026,
    title: 'Método Reprodutível para Avaliar a Resiliência de Agentes LLM a Ataques de Injeção Indireta de Prompt',
    authors: ['Marcos Paulo Pereira da Silva', 'Eric Hans Messias', 'João José Costa Gondim', 'Laerte Peotta de Melo'],
    venue: 'XXVI Simpósio Brasileiro de Cibersegurança (SBSeg 2026)',
    details: 'Anais Estendidos, Workshop de Cibersegurança em IA',
    pdf: `${PDF}2026-agentes-llm-injecao-indireta-prompt.pdf`,
  },
  {
    id: 'semish-2026-fraud',
    type: 'conference',
    year: 2026,
    title: 'Signal-Aware Fraud Detection: A Taxonomy for Sustainable and Lifecycle-Oriented Detection Architectures',
    authors: ['Sara Santedicola Ribeiro', 'Fabio Lucio Lopes de Mendonça', 'Laerte Peotta'],
    venue: '53º Seminário Integrado de Software e Hardware (SEMISH 2026), CSBC 2026',
    pdf: `${PDF}2026-signal-aware-fraud-detection.pdf`,
  },
  {
    id: 'cotb-2026-pu-learning',
    type: 'conference',
    year: 2026,
    title: 'Detecção de URLs de Phishing com PU Learning e Métricas de Divergência de Distribuições',
    authors: ['Davi C. Ribeiro', 'Bernardo Tomasi', 'Ruibin Mei', 'Pedro Henrique Friedrich Ramos', 'Yago Yudi Furuta', 'João Pincovscy', 'Laerte Peotta', 'André R. A. Grégio'],
    venue: 'XVII Computer on the Beach (2026)',
    pdf: `${PDF}2026-phishing-urls-pu-learning.pdf`,
  },
  {
    id: 'access-2025-parked-domains',
    type: 'journal',
    year: 2025,
    title: 'Machine Learning for Early Detection of Phishing URLs in Parked Domains: An Approach Applied to a Financial Institution',
    authors: ['Jaqueline D. Duarte', 'Pedro Chagas Junior', 'João Paulo Javidi da Costa', 'Elena J. da Costa', 'Laerte Peotta de Melo', 'Rafael Rabelo Nunes', 'Carlos Gabriel V. N. Soares', 'Thiago Erivan da Cunha Silva'],
    venue: 'IEEE Access',
    details: 'v. 13',
    doi: '10.1109/ACCESS.2025.3599454',
    pdf: `${PDF}2025-ml-phishing-urls-parked-domains.pdf`,
  },
  {
    id: 'jisa-2025-privacy',
    type: 'journal',
    year: 2025,
    title: 'A Comprehensive Review of Techniques, Methods, Processes, Frameworks, and Tools for Privacy Requirements',
    authors: ['Stefano Luppi Spósito', 'João Francisco Gomes Targino', 'Geovana Ramos Sousa Silva', 'Laerte Peotta', 'Daniel de Paula Porto', 'Fábio Lúcio Lopes Mendonça', 'Edna Dias Canedo'],
    venue: 'Journal of Internet Services and Applications',
    details: 'v. 16, n. 1',
    doi: '10.5753/jisa.2025.5252',
    pdf: `${PDF}2025-review-privacy-requirements.pdf`,
  },
  {
    id: 'applsci-2025-audit',
    type: 'journal',
    year: 2025,
    title: 'Internal Audit Strategies for Assessing Cybersecurity Controls in the Brazilian Financial Institutions',
    authors: ['Lucas Vinicius Andrade Ferreira', 'Carlos André de Melo Alves', 'Laerte Peotta de Melo', 'Rafael Rabelo Nunes'],
    venue: 'Applied Sciences (MDPI)',
    details: 'v. 15, n. 10, art. 5715',
    doi: '10.3390/app15105715',
    pdf: `${PDF}2025-internal-audit-cybersecurity-controls-financial-institutions.pdf`,
  },
  {
    id: 'ijcip-2025-critical-infrastructure',
    type: 'journal',
    year: 2025,
    title: 'International perspectives on critical infrastructure: Evaluation criteria and definitions',
    authors: ['Edvan Gomes da Silva', 'Marcus Aurélio Carvalho Georg', 'Luiz Antônio Ribeiro Júnior', 'Leonardo Rodrigo Ferreira', 'Laerte Peotta de Melo', 'Rafael Rabelo Nunes'],
    venue: 'International Journal of Critical Infrastructure Protection',
    details: 'v. 49, art. 100761',
    doi: '10.1016/j.ijcip.2025.100761',
    pdf: `${PDF}2025-international-perspectives-critical-infrastructure.pdf`,
  },
  {
    id: 'risti-2025-pgfn',
    type: 'journal',
    year: 2025,
    title: 'Automatização da Classificação de Textos Jurídicos: Desenvolvimento de um Sistema Baseado em Modelos de Inteligência Artificial para a PGFN',
    // Autores pendentes: o PDF e uma imagem digitalizada, sem camada de texto.
    authors: [],
    venue: 'RISTI: Revista Ibérica de Sistemas e Tecnologias de Informação',
    details: 'n. E77',
    pdf: `${PDF}2025-classificacao-textos-juridicos-ia-pgfn.pdf`,
  },
  {
    id: 'cryptography-2024-ebank',
    type: 'journal',
    year: 2024,
    title: 'A Secure Approach Out-of-Band for e-Bank with Visual Two-Factor Authorization Protocol',
    authors: ['Laerte Peotta de Melo', 'Dino Macedo Amaral', 'Robson de Oliveira Albuquerque', 'Rafael Timóteo de Sousa Júnior', 'Ana Lucila Sandoval Orozco', 'Luis Javier García Villalba'],
    venue: 'Cryptography (MDPI)',
    details: 'v. 8, n. 4, art. 51',
    doi: '10.3390/cryptography8040051',
    pdf: `${PDF}2024-secure-out-of-band-e-bank-visual-two-factor.pdf`,
  },
  {
    id: 'iceb-2021-apt-iot',
    type: 'conference',
    year: 2021,
    title: 'A Study on APT in IoT Networks',
    authors: ['Bruno Carneiro da Rocha', 'Laerte Peotta de Melo', 'Rafael Timóteo de Sousa Jr.'],
    venue: '18th International Conference on e-Business (ICE-B 2021)',
    details: 'SCITEPRESS',
    doi: '10.5220/0010615201600164',
    pdf: `${PDF}2021-study-apt-iot-networks.pdf`,
  },
  {
    id: 'wcnps-2021-zero-trust',
    type: 'conference',
    year: 2021,
    title: 'Preventing APT attacks on LAN networks with connected IoT devices using a zero trust based security model',
    authors: ['Bruno Carneiro da Rocha', 'Laerte Peotta de Melo', 'Rafael Timóteo de Sousa Jr.'],
    venue: '6th Workshop on Communication Networks and Power Systems (WCNPS 2021)',
    details: 'IEEE',
    doi: '10.1109/WCNPS53648.2021.9626270',
    pdf: `${PDF}2021-preventing-apt-zero-trust-iot.pdf`,
  },
];

export const awards = [
  {
    id: 'sbseg-2026-cta',
    year: 2026,
    title: {
      pt: 'Melhor Revisor de Artefatos',
      en: 'Best Artifact Reviewer',
      es: 'Mejor Revisor de Artefactos',
    },
    event: {
      pt: 'Comitê Técnico de Artefatos (CTA) do XXVI Simpósio Brasileiro de Cibersegurança (SBSeg 2026)',
      en: 'Artifact Evaluation Committee (CTA), XXVI Brazilian Symposium on Cybersecurity (SBSeg 2026)',
      es: 'Comité Técnico de Artefactos (CTA) del XXVI Simposio Brasileño de Ciberseguridad (SBSeg 2026)',
    },
    pdf: '/arquivos/premios/2026-sbseg-melhor-revisor-artefatos.pdf',
    link: 'https://doc-artefatos.github.io/sbseg2026/results.html',
  },
  {
    id: 'sbseg-2025-reviewer',
    year: 2025,
    title: {
      pt: 'Melhor Revisor',
      en: 'Best Reviewer',
      es: 'Mejor Revisor',
    },
    event: {
      pt: 'XXV Simpósio Brasileiro de Cibersegurança (SBSeg 2025), Sociedade Brasileira de Computação',
      en: 'XXV Brazilian Symposium on Cybersecurity (SBSeg 2025), Brazilian Computer Society',
      es: 'XXV Simposio Brasileño de Ciberseguridad (SBSeg 2025), Sociedad Brasileña de Computación',
    },
    pdf: '/arquivos/premios/2025-sbseg-melhor-revisor.pdf',
  },
];

export const registrations = [
  {
    id: 'inpi-bbcode',
    year: 2012,
    process: 'BR512024003415-3',
    name: 'BBCode',
    title: 'Autenticador e autorizador de transações bancárias utilizando métodos criptográficos e códigos 2D como segundo fator',
    pdf: '/arquivos/registros/inpi-bbcode.pdf',
  },
  {
    id: 'inpi-ml-phishing',
    year: 2024,
    process: 'BR512024003536-2',
    name: 'ML Phishing',
    title: 'Sistema de inteligência artificial para detecção de phishing em domínios estacionados',
    pdf: '/arquivos/registros/inpi-ml-phishing.pdf',
  },
];

// Gera uma referencia BibTeX simples para o botao "Citar".
export function toBibtex(p) {
  const key = `${(p.authors[0] || 'peotta').split(' ').pop().normalize('NFD').replace(/[^A-Za-z]/g, '').toLowerCase()}${p.year}${p.id.split('-').pop()}`;
  const fields = [
    ['title', p.title],
    ['author', p.authors.join(' and ')],
    [p.type === 'journal' ? 'journal' : 'booktitle', p.venue],
    ['year', String(p.year)],
    p.doi && ['doi', p.doi],
  ].filter(Boolean);
  const body = fields.map(([k, v]) => `  ${k} = {${v}}`).join(',\n');
  return `@${p.type === 'journal' ? 'article' : 'inproceedings'}{${key},\n${body}\n}`;
}
