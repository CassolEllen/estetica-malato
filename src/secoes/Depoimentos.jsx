import Revelar from '../componentes/Revelar'
import { depoimentos } from '../dados/site'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="pt-24 pb-10 md:pt-[120px]">
      <div className="conteiner">
        <Revelar className="text-center">
          <blockquote className="mx-auto max-w-[960px] font-titulo text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1.05] font-medium tracking-[-0.02em] italic">
            “Quando o cuidado deixa de ser tarefa, ele vira encontro.”
          </blockquote>
          <p className="mt-5 font-assinatura text-4xl text-rosa">Rose Malato</p>
        </Revelar>

        {depoimentos.length > 0 && (
          <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <Revelar key={i} como="figure" atraso={i * 0.1} className="m-0 rounded-3xl border border-tinta/10 bg-cartao p-8">
                <blockquote className="m-0 text-base leading-[1.65] text-suave">{d.texto}</blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {d.nome} · <span className="font-normal text-suave">{d.tratamento}</span>
                </figcaption>
              </Revelar>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
