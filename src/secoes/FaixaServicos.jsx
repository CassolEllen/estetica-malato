import { faixaServicos } from '../dados/site'

function Grupo({ escondido = false }) {
  return (
    <div className="flex shrink-0 items-center gap-9 pr-9" aria-hidden={escondido || undefined}>
      {faixaServicos.map((servico) => (
        <span key={servico} className="flex items-center gap-9">
          <span>{servico}</span>
          <span className="size-1.5 rounded-full bg-rosa-claro" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

// Faixa em movimento contínuo. O conteúdo é repetido para o laço não ter emenda.
export default function FaixaServicos() {
  return (
    <section aria-label="Alguns atendimentos" className="faixa overflow-hidden bg-tinta py-[22px] text-[#fbe9e6]">
      <div className="faixa-trilho flex w-max font-titulo text-[26px] whitespace-nowrap italic">
        <Grupo />
        <Grupo escondido />
        <Grupo escondido />
        <Grupo escondido />
      </div>
    </section>
  )
}
