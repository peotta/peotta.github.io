// Entrevistas, mesas redondas, programas e comentarios na midia (dados do Curriculo Lattes).
// Para incluir um item novo, acrescente uma entrada. Campos:
//   kind: 'video' (YouTube, abre o player sob demanda), 'audio' (podcast em plataforma de audio),
//         'news' (materia em portal ou jornal) ou 'panel' (mesa redonda sem registro online).
//   youtube: ID do video (so para kind 'video'); url: link da materia ou do episodio.
//   topics: chaves de TOPICS, usadas na busca e nas etiquetas.

export const CHANNEL_URL = 'https://www.youtube.com/@peotta';

export const interviews = [
  { id: 'deepfakes-rnp', year: 2026, kind: 'video', youtube: 'w8RBb0IYr2U', title: 'Como os deepfakes estão roubando identidades e dinheiro?', outlet: 'RNP em Rede', topics: ['ai', 'fraud'] },
  { id: 'algoritmo-do-odio', year: 2026, kind: 'video', youtube: 'fyfPJ7NZqJs', title: 'Documentário O Algoritmo do Ódio', outlet: 'Metrópoles', topics: ['algorithms', 'ai'] },
  { id: 'cnn-autenticacao', year: 2026, kind: 'news', url: 'https://www.cnnbrasil.com.br/economia/negocios/como-funciona-a-autenticacao-em-duas-etapas-nas-instituicoes-financeiras/', title: 'Como funciona a autenticação em duas etapas nas instituições financeiras?', outlet: 'CNN Brasil', topics: ['fraud', 'auth'] },
  { id: 'wifi-agua', year: 2026, kind: 'news', url: 'https://www.metropoles.com/ciencia/quantidade-agua-corpo-impactar-wi-fi', title: 'Até a quantidade de água no seu corpo pode impactar o sinal de Wi-Fi', outlet: 'Metrópoles', topics: ['networks'] },
  { id: 'recomendacao-radicalismo', year: 2026, kind: 'news', url: 'https://www.metropoles.com/colunas/mirelle-pinheiro/da-recomendacao-ao-radicalismo-o-algoritmos-no-caminho-ao-extremismo', title: 'Da recomendação ao radicalismo: o algoritmo no caminho ao extremismo', outlet: 'Metrópoles', topics: ['algorithms'] },
  { id: 'discord', year: 2026, kind: 'news', url: 'https://noticias.r7.com/brasilia/restricoes-no-discord-sao-medida-acertada-mas-nao-resolvem-violencia-dizem-especialistas-24082026/', title: 'Restrições ao Discord são medida acertada, mas não resolvem violência, dizem especialistas', outlet: 'R7', topics: ['algorithms'] },
  { id: 'reconhecimento-facial', year: 2026, kind: 'news', url: 'https://www.metropoles.com/ciencia/reconhecimento-facial-transforma-dados-do-rosto-em-modelo-matematico', title: 'Reconhecimento facial transforma dados do rosto em modelo matemático', outlet: 'Metrópoles', topics: ['privacy', 'ai'] },
  { id: 'ia-dados-pessoais', year: 2026, kind: 'news', url: 'https://www.metropoles.com/ciencia/especialistas-alertam-para-risco-de-alimentar-ia-com-informacoes-pessoais', title: 'Especialistas alertam para risco de alimentar IA com informações pessoais', outlet: 'Metrópoles', topics: ['ai', 'privacy'] },
  { id: 'ia-vida-autonoma', year: 2026, kind: 'news', url: 'https://www.metropoles.com/ciencia/especialistas-apontam-que-ia-ainda-nao-consegue-criar-uma-vida-autonoma', title: "Especialistas apontam que IA ainda não consegue criar uma 'vida autônoma'", outlet: 'Metrópoles', topics: ['ai'] },
  { id: 'openai-riscos-2030', year: 2026, kind: 'news', url: 'https://br.paipee.com/2026/09/27/ex-pesquisador-da-openai-alerta-sobre-riscos-da-ia-para-a-humanidade-ate-2030/', title: 'Ex-pesquisador da OpenAI alerta sobre riscos da IA para a humanidade até 2030', outlet: 'Paipee', topics: ['ai'] },
  { id: 'primeiro-jornal-extremistas', year: 2026, kind: 'news', url: 'https://primeirojornal.com.br/2026/06/investigacao-como-o-algoritmo-opera-na-mente-de-extremistas/', title: 'Investigação: como o algoritmo opera na mente de extremistas', outlet: 'Primeiro Jornal', topics: ['algorithms'] },
  { id: 'contabb', year: 2025, kind: 'audio', url: 'https://open.spotify.com/episode/4uQDiaP5PQojsQqUuQXquE', title: 'PodCast ContaBB: Segurança Digital', outlet: 'ContaBB (Spotify)', topics: ['fraud'] },
  { id: 'podcode-ep03', year: 2025, kind: 'video', youtube: 'Oab-R7BLgno', title: 'PODCODE PODCAST EP 03: Cibersegurança', outlet: 'UniCEUB', topics: ['culture'] },
  { id: 'papo-de-risco-03', year: 2025, kind: 'video', youtube: 'dynifqtqkFM', title: 'Papo de Risco, Ep. 03: Laerte Peotta, Gestão de Fraudes', outlet: 'Papo de Risco', topics: ['fraud'] },
  { id: 'tentaculos-pf', year: 2025, kind: 'panel', title: 'Formação de equipes em Cyber Segurança e anti Fraude: Habilidades Especiais', outlet: 'Workshop Tentáculos, Polícia Federal', topics: ['culture', 'fraud'] },
  { id: 'cybber-mulheres', year: 2024, kind: 'video', youtube: '9fgh8d-_i8U', title: 'IA e ameaças cibernéticas emergentes: Jornada da Segurança Digital, Ep. 4', outlet: 'CyBBer Mulheres', topics: ['ai'] },
  { id: 'universo-protecao-digital', year: 2024, kind: 'video', youtube: 'o_QEcEY6QyQ', title: 'Segurança Cibernética com Laerte Peotta: Explorando o Universo da Proteção Digital', outlet: 'YouTube', topics: ['culture'] },
  { id: 'futuro-malware', year: 2023, kind: 'panel', title: 'O Futuro do Malware no Brasil', topics: ['malware'] },
  { id: 'falsa-central', year: 2023, kind: 'video', youtube: 'C6-RGQZae90', title: 'Como funciona o Golpe da Falsa Central de Atendimento', outlet: 'Banco do Brasil', topics: ['fraud'] },
  { id: 'techtalks-bb', year: 2023, kind: 'video', youtube: '7h4oz4uGlHA', title: 'Tech Talks: Segurança Digital', outlet: 'Banco do Brasil', topics: ['fraud', 'culture'] },
  { id: 'workshop-pf-febraban', year: 2022, kind: 'panel', title: 'Workshop Polícia Federal e Febraban (mediação)', outlet: 'Febraban e Polícia Federal', role: 'Moderador', topics: ['fraud'] },
  { id: 'seguranca-em-rede-11', year: 2022, kind: 'audio', url: 'https://open.spotify.com/episode/0T6BhMSDClZSlFykqKEKwx', title: 'Podcast Segurança em Rede, Episódio 11: Fuja da mão fantasma', outlet: 'Segurança em Rede (Spotify)', topics: ['fraud', 'malware'] },
  { id: 'deu-match', year: 2017, kind: 'news', url: 'https://agenciadenoticias.uniceub.br/brasilia/deu-match-aumenta-busca-por-relacionamentos-amorosos-via-web-observa-psicologa/', title: "'Deu match?': aumenta busca por relacionamentos amorosos via web, observa psicóloga", outlet: 'Agência CEUB', topics: ['fraud'] },
  { id: 'correio-golpistas', year: 2016, kind: 'news', url: 'https://www.correiobraziliense.com.br/app/noticia/cidades/2016/03/23/interna_cidadesdf,523654/golpistas-da-internet-iludem-mulheres-do-df-com-promessas-de-casamento.shtml', title: 'Golpistas da internet iludem mulheres do DF com promessas de casamento', outlet: 'Correio Braziliense', topics: ['fraud'] },
  { id: 'artigo-5', year: 2012, kind: 'video', youtube: 'FNGGBs57Glc', title: 'Programa Artigo 5º: Crimes Virtuais', outlet: 'Programa Artigo 5º', topics: ['cybercrime'] },
];
