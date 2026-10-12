
export const contato = {
  whatsapp: '554988113948',
  whatsappExibicao: '+55 49 8811-3948',
  instagram: 'rosemalatoesteticista',
  rua: 'Rua Marechal Deodoro, 514D',
  bairro: 'Centro',
  cidade: 'Chapecó',
  uf: 'SC',
  cep: '89801-060',
  horario: 'Com hora marcada · [DIAS E HORÁRIOS]',
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
  rose: '/imagens/rose.jpg',
  sobreAtendimento: '/imagens/sobre-atendimento.jpg',
  sobreEspaco: '/imagens/sobre-espaco.jpg',
  facial: '/imagens/tratamento-facial.jpg',
  drenagem: '/imagens/tratamento-drenagem.jpg',
  posOperatorio: '/imagens/tratamento-pos-operatorio.jpg',
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
  { valor: '[ANOS]', rotulo: 'anos de experiência' },
  { valor: '18+', rotulo: 'tipos de atendimento' },
  { valor: '1:1', rotulo: 'atendimento individual' },
]

export const valores = [
  { titulo: 'Personalizado', texto: 'Você no centro do cuidado.' },
  { titulo: 'Técnica e segurança', texto: 'Procedimentos com responsabilidade.' },
  { titulo: 'Bem-estar', texto: 'Corpo e mente em equilíbrio.' },
]