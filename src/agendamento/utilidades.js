import { diasSemAtendimento } from '../dados/site'

// Próximos dias com atendimento, a partir de amanhã.
export function proximosDias(quantidade = 7) {
  const dias = []
  const hoje = new Date()
  for (let i = 1; dias.length < quantidade && i < 30; i++) {
    const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i)
    if (diasSemAtendimento.includes(d.getDay())) continue
    dias.push({
      id: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`,
      semana: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '').slice(0, 3),
      dia: String(d.getDate()).padStart(2, '0'),
      mes: d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''),
      completo: d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }),
    })
  }
  return dias
}

// (49) 98811-3948 enquanto a pessoa digita
export function mascaraTelefone(valor) {
  const n = valor.replace(/\D/g, '').slice(0, 11)
  if (n.length === 0) return ''
  if (n.length <= 2) return `(${n}`
  if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`
  if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`
}

export function emailValido(email) {
  return email.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function montarMensagem({ servico, dia, horario, nome, telefone, email }) {
  const linhas = [
    'Olá, Rose! Vim pelo site e gostaria de agendar um horário:',
    '',
    `• Serviço: ${servico.nome}`,
    `• Quando: ${dia.completo} às ${horario}`,
    `• Nome: ${nome.trim()}`,
    `• WhatsApp: ${telefone}`,
  ]
  if (email.trim()) linhas.push(`• E-mail: ${email.trim()}`)
  return linhas.join('\n')
}
