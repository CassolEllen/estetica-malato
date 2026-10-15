import Icone from '../componentes/Icone'
import Revelar from '../componentes/Revelar'
import { fotos, linkWhatsApp } from '../dados/site'

export default function ChamadaFinal() {
  return (
    <section id="agendar" className="pb-12">
      <div className="conteiner">
        <Revelar className="relative overflow-hidden rounded-[36px] bg-rosa-vivo text-tinta">
          <div className="relative z-10 max-w-[640px] px-7 pt-16 pb-10 md:px-14 md:py-[88px]">
            <p className="mb-4 font-assinatura text-[40px] leading-none">Seu bem-estar em boas mãos.</p>
            <h2 className="m-0 font-titulo text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[0.95] font-medium tracking-[-0.035em]">
              Um cuidado que começa em você.
            </h2>
            <a
              href={linkWhatsApp('Olá, Rose! Vim pelo site e gostaria de agendar um horário.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-claro mt-10 min-h-14 px-[30px] font-semibold"
            >
              <Icone nome="whatsapp" tamanho={20} />
              Chamar no WhatsApp
            </a>
          </div>

          <div aria-hidden="true" className="relative h-60 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[58%]">
            <img src={fotos.lirio} alt="" loading="lazy" className="size-full object-cover object-[75%_50%]" />
            <div className="absolute inset-0 bg-linear-to-b from-rosa-vivo via-rosa-vivo/40 to-transparent md:bg-linear-to-r md:via-rosa-vivo/50" />
          </div>
        </Revelar>
      </div>
    </section>
  )
}