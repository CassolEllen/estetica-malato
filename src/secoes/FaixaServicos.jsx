import { faixaServicos } from '../dados/site'

function Grupo({ escondido = false }) {
  return (
    <div className="flex shrink-0 items-center gap-9 pr-9" aria-hidden={escondido || undefined}>
      {faixaServicos.map((servico) => (
        <span key={servico} className="flex items-center gap-9">
          <span>{servico}</span>
          <span className="size-1.5 rounded-full bg-rosa" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export default function FaixaServicos() {
  return (
    <section aria-label="Alguns atendimentos" className="faixa overflow-hidden bg-rosa-medio py-[22px] text-tinta">
      <div className="faixa-trilho flex w-max font-titulo text-[26px] whitespace-nowrap italic">
        <Grupo />
        <Grupo escondido />
        <Grupo escondido />
        <Grupo escondido />
      </div>
    </section>
  )
}