import { useState } from 'react'
import Icone from '../componentes/Icone'
import { deId, diaDisponivel, formatarCompleto, limitesAgendamento, paraId } from './utilidades'

const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function Calendario({ valor, onEscolher }) {
  const { primeiro, ultimo } = limitesAgendamento()

  
  const inicial = valor ? deId(valor) : primeiro
  const [mes, setMes] = useState(new Date(inicial.getFullYear(), inicial.getMonth(), 1))

  const ano = mes.getFullYear()
  const numeroMes = mes.getMonth()
  const diasNoMes = new Date(ano, numeroMes + 1, 0).getDate()
  const espacosAntes = mes.getDay()

  const podeVoltar = mes > new Date(primeiro.getFullYear(), primeiro.getMonth(), 1)
  const podeAvancar = mes < new Date(ultimo.getFullYear(), ultimo.getMonth(), 1)

  const nomeMes = mes.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

  const celulas = []
  for (let i = 0; i < espacosAntes; i++) celulas.push(null)
  for (let d = 1; d <= diasNoMes; d++) celulas.push(new Date(ano, numeroMes, d))

  const botaoMes =
    'flex size-9 items-center justify-center rounded-full text-tinta transition-colors hover:bg-tinta/5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent'

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMes(new Date(ano, numeroMes - 1, 1))}
          disabled={!podeVoltar}
          aria-label="Mês anterior"
          className={botaoMes}
        >
          <Icone nome="voltar" tamanho={18} espessura={1.8} />
        </button>

        <p aria-live="polite" className="m-0 font-titulo text-xl font-semibold first-letter:uppercase">
          {nomeMes}
        </p>

        <button
          type="button"
          onClick={() => setMes(new Date(ano, numeroMes + 1, 1))}
          disabled={!podeAvancar}
          aria-label="Próximo mês"
          className={botaoMes}
        >
          <Icone nome="avancar" tamanho={18} espessura={1.8} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center" aria-hidden="true">
        {SEMANA.map((letra, i) => (
          <span key={i} className="py-1 text-[11px] font-semibold text-suave">
            {letra}
          </span>
        ))}
      </div>

      <div role="group" aria-label="Dia" className="grid grid-cols-7 gap-y-1">
        {celulas.map((data, i) => {
          if (!data) return <span key={`vazio-${i}`} />

          const id = paraId(data)
          const disponivel = diaDisponivel(data)
          const ativo = valor === id

          return (
            <div key={id} className="flex justify-center">
              <button
                type="button"
                disabled={!disponivel}
                aria-pressed={ativo}
                aria-label={formatarCompleto(data)}
                onClick={() => onEscolher(id)}
                className={`flex size-9 items-center justify-center rounded-full text-sm transition-colors ${
                  ativo
                    ? 'bg-tinta font-semibold text-creme'
                    : disponivel
                      ? 'text-tinta hover:bg-rosa-fundo'
                      : 'cursor-not-allowed text-tinta/25'
                }`}
              >
                {data.getDate()}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}