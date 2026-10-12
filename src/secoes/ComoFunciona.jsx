import Revelar from '../componentes/Revelar'
import { etapas } from '../dados/site'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-tinta py-24 text-creme md:py-[120px]">
      <div className="conteiner">
        <Revelar className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <h2 className="m-0 max-w-[620px] font-titulo text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[0.98] font-medium tracking-[-0.03em]">
            Leveza em cada etapa.
          </h2>
          <p className="m-0 max-w-[380px] text-base leading-relaxed text-creme/75">
            Um caminho simples, do primeiro contato até a sua pausa de cuidado.
          </p>
        </Revelar>
        <ol className="m-0 grid list-none gap-10 p-0 md:grid-cols-3 md:gap-6">
          {etapas.map((e, i) => (
            <Revelar key={e.numero} como="li" atraso={i * 0.12} className="border-t border-white/30 pt-8">
              <span className="font-titulo text-[56px] leading-none text-rosa-claro">{e.numero}</span>
              <h3 className="mt-6 mb-2.5 text-[22px] font-medium">{e.titulo}</h3>
              <p className="m-0 max-w-[320px] leading-relaxed text-creme/75">{e.texto}</p>
            </Revelar>
          ))}
        </ol>
      </div>
    </section>
  )
}
