// Documentos e páginas oficiais do PPEE/UnB usados nesta página.
const PPEE = 'https://ppee.unb.br';
const UP = `${PPEE}/wp-content/uploads`;

export const LINKS = {
  regulamento: { href: `${UP}/2024/10/2o-Regulamento-do-PPEE-vigencia-2021.1-atual-1.pdf`, label: 'Regulamento do PPEE (2021)' },
  res006: { href: `${UP}/2026/05/SEI_14087722_Resolucao_006-2.pdf`, label: 'Resolução 006/2026 (produção para a defesa)' },
  res007: { href: `${UP}/2026/04/SEI_14087994_Resolucao_007-2.pdf`, label: 'Resolução 007/2026 (normas de redação)' },
  res008: { href: `${UP}/2026/04/Resolucao-008-14088147.pdf`, label: 'Resolução 008/2026 (registro de software)' },
  resolucoes: { href: `${PPEE}/?page_id=8202`, label: 'Todas as resoluções' },
  paginaBanca: { href: `${PPEE}/?page_id=4907`, label: 'Página de banca de dissertação' },
  formBanca: {
    href: `${UP}/2025/10/Formulario-para-montagem-da-banca-de-defesa-de-dissertacao.docx`,
    label: 'Formulário de montagem da banca',
  },
  formAposDefesa: { href: `${UP}/2026/04/Formulario-apos-defesa.docx`, label: 'Formulário após-defesa' },
  cartaImpacto: { href: `${UP}/2026/06/Modelo-de-Carta-de-impacto-da-dissertacao.docx`, label: 'Modelo de carta de impacto' },
  seiOrientacoes: { href: `${UP}/2026/01/SEI_9086907_Despacho.pdf`, label: 'Orientações para usuário externo do SEI' },
  formProrrogacao: { href: `${UP}/2025/09/Prorrogacao-de-prazo-final.docx`, label: 'Formulário de prorrogação de prazo' },
  formTrancamento: { href: `${UP}/2025/09/Trancamento-de-disciplina-1.docx`, label: 'Formulário de trancamento de disciplina' },
  ofertaDisciplinas: { href: `${PPEE}/?page_id=4900`, label: 'Oferta de disciplinas' },
  calendarioPos: { href: 'https://saa.unb.br/pos-graduacao/calendario-academico-pos', label: 'Calendário da pós-graduação' },
  diretrizesPub: {
    href: `${UP}/2025/02/Diretrizes-do-PPEE-para-publicacoes-em-periodicos-e-conferencias.pdf`,
    label: 'Diretrizes do PPEE para publicações',
  },
  periodicosAderentes: { href: `${UP}/2026/10/Periodicos-aderentes-2021-2024.pdf`, label: 'Periódicos aderentes (2021-2024)' },
  produtosTecnicos: { href: `${UP}/2025/02/Produtos-tecnicos-para-Engenharias-IV-1.pdf`, label: 'Produtos técnicos para Engenharias IV' },
  fichaBce: { href: 'https://bce.unb.br/elaboracao-de-fichas-catalograficas/', label: 'Ficha catalográfica (BCE)' },
  overleafPt: { href: 'https://www.overleaf.com/latex/templates/template-ppee-unb/drmfmchtjcjp', label: 'Template em português' },
  overleafEn: {
    href: 'https://www.overleaf.com/latex/templates/template-ppee-unb-dissertacao-unb-ingles/cwkqnstcyhfv',
    label: 'Template em inglês',
  },
  overleafEs: { href: 'https://www.overleaf.com/read/mpncymjhzmdw#6ea0ab', label: 'Template em espanhol' },
  overleafSlides: {
    href: 'https://www.overleaf.com/latex/templates/modelo-de-dissertacao-apresentacao/whbdsxbnshrv',
    label: 'Modelo de apresentação',
  },
};

export const SECRETARIA = { email: 'sec@ppee.unb.br', telefone: '(61) 3107-5597' };
