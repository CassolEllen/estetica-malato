import Revelar from '../componentes/Revelar'
import { duvidas } from '../dados/site'

export default function Duvidas() {
  return (
    <section id="duvidas" className="py-20">
      <div className="conteiner flex flex-wrap gap-10 md:gap-16">
        <Revelar className="min-w-0 flex-[1_1_320px]">
          <p className="sobretitulo">Dúvidas</p>
          <h2 className="m-0 font-titulo text-[clamp(2.4rem,4vw,3.6rem)] leading-none font-medium tracking-[-0.03em]">
            Suas dúvidas também fazem parte da conversa.
          </h2>
        </Revelar>
        <Revelar atraso={0.1} className="min-w-0 flex-[2_1_520px] border-t border-tinta/18">
          {duvidas.map((d) => (
            <details key={d.pergunta} className="group border-b border-tinta/18">
              <summary className="flex items-center justify-between gap-5 py-[26px] text-lg md:text-xl">
                {d.pergunta}
                <span className="text-[28px] leading-none text-rosa transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-0 mb-[26px] max-w-[620px] leading-[1.65] text-suave">{d.resposta}</p>
            </details>
          ))}
        </Revelar>
      </div>
    </section>
  )
}
