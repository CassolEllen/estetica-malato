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