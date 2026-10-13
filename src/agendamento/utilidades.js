import { datasBloqueadas, diasSemAtendimento, limiteAgendamentoDias } from '../dados/site'

export function paraId(data) {
  const ano = data.getFullYear()
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const dia = String(data.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}

export function deId(id) {
  const [ano, mes, dia] = id.split('-').map(Number)
  return new Date(ano, mes - 1, dia)
}

export function formatarCompleto(data) {
  return data.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })
}

export function limitesAgendamento() {
  const hoje = new Date()
  const primeiro = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1)
  const ultimo = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + limiteAgendamentoDias)
  return { primeiro, ultimo }
}

export function diaDisponivel(data) {
  const { primeiro, ultimo } = limitesAgendamento()
  if (data < primeiro || data > ultimo) return false
  if (diasSemAtendimento.includes(data.getDay())) return false
  if (datasBloqueadas.includes(paraId(data))) return false
  return true
}

export function mascaraTelefone(valor) {
  const n = valor.replace(/\D/g, '').slice(0, 11)
  if (n.length === 0) return ''
  if (n.length <= 2) return `(${n}`
  if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`
  if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`
}

export function emailValido(email) {
  const e = email.trim()
  return e === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}

export function montarMensagem({ servico, quando, nome, telefone, email }) {
  const linhas = [
    'Olá, Rose! Vim pelo site e gostaria de agendar um horário:',
    '',
    `• Serviço: ${servico}`,
    `• Quando: ${quando}`,
    `• Nome: ${nome}`,
    `• WhatsApp: ${telefone}`,
  ]
  if (email) linhas.push(`• E-mail: ${email}`)
  return linhas.join('\n')
}