
export const contato = {
  whatsapp: '554988113948',
  whatsappExibicao: '+55 49 8811-3948',
  instagram: 'rosemalatoesteticista',
  rua: 'Rua Marechal Deodoro, 514D',
  bairro: 'Centro',
  cidade: 'Chapecó',
  uf: 'SC',
  cep: '89801-060',
  horario: 'Com hora marcada, de segunda a sexta-feira, das 9h às 18h',
}

export const enderecoCompleto = `${contato.rua}, ${contato.bairro}, ${contato.cidade} - ${contato.uf}, ${contato.cep}`

export const linkInstagram = `https://instagram.com/${contato.instagram}`

export const linkComoChegar = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoCompleto)}`

export const mapaIncorporado = `https://www.google.com/maps?q=${encodeURIComponent(enderecoCompleto)}&output=embed`

export function linkWhatsApp(mensagem) {
  const base = `https://wa.me/${contato.whatsapp}`
  if (!mensagem) return base
  return `${base}?text=${encodeURIComponent(mensagem)}`
}

export const fotos = {
  rose: '/imagens/rose-malato.png',
  sobreAtendimento: '/imagens/cuidado-acolhedor.png',
  sobreEspaco: '/imagens/limpeza-de-pele.jpg',
  facial: '/imagens/cuidados-faciais.png',
  drenagem: '/imagens/drenagem-linfatica.png',
  posOperatorio: '/imagens/pos-operatorio.png',
  lirio: '/imagens/toalha-lirio.png',
}

export const faixaServicos = [
  'Massagem relaxante',
  'Limpeza de pele',
  'Drenagem linfática',
  'Microagulhamento',
  'Peeling',
  'Hydra Gloss',
]

export const numeros = [
  { valor: '8', rotulo: 'anos de experiência' },
  { valor: '18+', rotulo: 'tipos de atendimento' },
  { valor: '1:1', rotulo: 'atendimento individual' },
]

export const valores = [
  { titulo: 'Personalizado', texto: 'Você no centro do cuidado.' },
  { titulo: 'Técnica e segurança', texto: 'Procedimentos com responsabilidade.' },
  { titulo: 'Bem-estar', texto: 'Corpo e mente em equilíbrio.' },
]

export const tratamentos = [
  {
    categoria: '01 · Facial',
    titulo: 'Limpeza de pele',
    texto: 'Protocolos faciais pensados para a sua pele e a sua rotina.',
    foto: fotos.facial,
    legendaFoto: 'Foto da Rose realizando tratamento facial',
  },
  {
    categoria: '02 · Corporal',
    titulo: 'Drenagem linfática',
    texto: 'Cuidado corporal com toque atento e acompanhamento próximo.',
    foto: fotos.drenagem,
    legendaFoto: 'Foto da Rose realizando drenagem',
  },
  {
    categoria: '03 · Acompanhamento',
    titulo: 'Pré e pós-operatório',
    texto: 'Acompanhamento cuidadoso, respeitando cada fase da recuperação.',
    foto: fotos.posOperatorio,
    legendaFoto: 'Foto do pré/pós-operatório',
  },
]

export const outrosServicos = [
  'Massagem relaxante',
  'Massagem terapêutica',
  'Aplicação de taping',
  'Depilação',
  'Microagulhamento',
  'Peeling',
  'Jato de plasma',
  'Lobuloplastia',
  'Ventosaterapia',
  'Botox',
  'Preenchimento labial',
  'Clareamento íntimo',
  'Plástica dos pés',
  'Hydra Gloss',
]

export const etapas = [
  {
    numero: '01',
    titulo: 'Você conta o que procura',
    texto: 'Uma conversa inicial para entender seu momento, preferências e disponibilidade.',
  },
  {
    numero: '02',
    titulo: 'Encontramos o seu ritmo',
    texto: 'As possibilidades de atendimento são apresentadas com clareza e sem pressa.',
  },
  {
    numero: '03',
    titulo: 'Seu tempo começa',
    texto: 'Um encontro acolhedor, para você sair mais leve e presente em si.',
  },
]


export const depoimentos = [
  { texto: '[DEPOIMENTO REAL DE UMA CLIENTE]', nome: '[NOME]', tratamento: '[TRATAMENTO]' },
  { texto: '[DEPOIMENTO REAL DE UMA CLIENTE]', nome: '[NOME]', tratamento: '[TRATAMENTO]' },
  { texto: '[DEPOIMENTO REAL DE UMA CLIENTE]', nome: '[NOME]', tratamento: '[TRATAMENTO]' },
]

export const duvidas = [
  {
    pergunta: 'Como funciona o primeiro contato?',
    resposta:
      'Você conta pelo WhatsApp o que procura e sua disponibilidade. A Rose apresenta as possibilidades e combina os próximos passos com você.',
  },
  {
    pergunta: 'Posso tirar dúvidas antes de escolher um serviço?',
    resposta: 'Sim. A conversa inicial existe justamente para você entender cada opção e escolher com tranquilidade.',
  },
  {
    pergunta: 'Onde fica o espaço e qual o horário?',
    resposta: 'O endereço e o mapa estão logo abaixo. O atendimento é com hora marcada.',
  },
]

export const servicosAgendamento = [
  { id: 'limpeza', nome: 'Limpeza de pele', detalhe: '60 min · R$ 180,00' },
  { id: 'drenagem', nome: 'Drenagem linfática', detalhe: '50 min · R$ 160,00' },
  { id: 'pos', nome: 'Pré e pós-operatório', detalhe: '75 min · R$ 220,00' },
  { id: 'conversar', nome: 'Ainda não sei', detalhe: 'Quero conversar antes' },
]

export const horarios = {
  manha: ['09:00', '10:30'],
  tarde: ['13:00', '14:30', '16:00', '17:30'],
}

export const diasSemAtendimento = [0]

export const limiteAgendamentoDias = 60

export const datasBloqueadas = ['2026-11-02', '2026-11-15', '2026-12-25']