import Icone from '../componentes/Icone'
import { linkWhatsApp } from '../dados/site'

export default function ChamadaFinal() {
  return (
    <section id="agendar" className="pb-12">
      <div className="conteiner">
        <div className="flex flex-wrap items-end justify-between gap-10 rounded-[36px] bg-rosa px-7 py-16 text-creme md:px-14 md:py-[88px]">
          <div className="max-w-[700px]">
            <p className="mb-4 font-assinatura text-[40px] leading-none">Seu bem-estar em boas mãos.</p>
            <h2 className="m-0 font-titulo text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[0.95] font-medium tracking-[-0.035em]">
              Um cuidado que começa em você.
            </h2>
          </div>
          <a
            href={linkWhatsApp('Olá, Rose! Vim pelo site e gostaria de agendar um horário.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-claro min-h-14 px-[30px] font-semibold"
          >
            <Icone nome="whatsapp" tamanho={20} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}