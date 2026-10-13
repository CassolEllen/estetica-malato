import { diasSemAtendimento } from '../dados/site'

export function proximosDias(quantidade = 7) {
  const dias = []
  const hoje = new Date()

  for (let i = 1; dias.length < quantidade && i < 30; i++) {
    const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i)

    if (diasSemAtendimento.includes(d.getDay())) continue

    const ano = d.getFullYear()
    const mes = String(d.getMonth() + 1).padStart(2, '0')
    const dia = String(d.getDate()).padStart(2, '0')

    dias.push({
      id: `${ano}-${mes}-${dia}`,
      semana: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '').slice(0, 3),
      dia: dia,
      mes: d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''),
      completo: d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }),
    })
  }

  return dias
}