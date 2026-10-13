import { motion, useReducedMotion } from 'motion/react'
import Foto from '../componentes/Foto'
import Icone from '../componentes/Icone'
import Revelar from '../componentes/Revelar'
import { fotos, linkWhatsApp, numeros } from '../dados/site'

export default function Destaque() {
  const reduzir = useReducedMotion()

  const flutuar = reduzir
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }

  return (
    <section id="inicio" className="pt-12 pb-24 md:pt-[72px] md:pb-28">
      <div className="conteiner flex flex-wrap items-center gap-16">
        <Revelar className="min-w-0 flex-[1_1_480px]">
          <p className="mb-6 inline-flex rounded-full border border-rosa/30 px-4 py-2 text-xs font-medium tracking-[0.14em] text-rosa">
            ESTETICISTA E MASSOTERAPEUTA
          </p>

          <h1 className="m-0 font-titulo text-[clamp(3.2rem,6.4vw,6.4rem)] leading-[0.92] font-medium tracking-[-0.035em]">
            Cuidado que se reconhece <em className="text-rosa">em cada detalhe.</em>
          </h1>

          <p className="mt-8 max-w-[500px] text-lg leading-relaxed text-suave">
            Mais do que procedimentos, uma experiência de bem-estar com técnica, escuta e um olhar humano para o que
            realmente importa: você.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={linkWhatsApp('Olá, Rose! Gostaria de agendar um horário.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-rosa min-h-[52px] px-7"
            >
              <Icone nome="whatsapp" tamanho={18} />
              Agendar pelo WhatsApp
            </a>
            <a href="#tratamentos" className="btn btn-contorno min-h-[52px] px-7">
              Ver tratamentos
            </a>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-7 gap-y-6 border-t border-tinta/15 pt-7 md:gap-10">
            {numeros.map((n) => (
              <div key={n.rotulo} className="flex flex-col-reverse">
                <dt className="mt-1.5 text-[13px] text-suave">{n.rotulo}</dt>
                <dd className="m-0 font-titulo text-[40px] leading-none">{n.valor}</dd>
              </div>
            ))}
          </dl>
        </Revelar>

        <Revelar atraso={0.15} className="flex min-w-0 flex-[1_1_420px] justify-center">
          <div className="relative w-full max-w-[480px]">
            <Foto
              src={fotos.rose}
              alt="Rose Malato, esteticista e massoterapeuta, com a frase: Acredito que o cuidado transforma não só a estética, mas também a forma como você se sente no mundo."
              legenda="Aqui vamos colocar a foto da Rose"
              prioridade
              className="aspect-[4/5] w-full rounded-t-[240px] rounded-b-[28px]"
            />

            <motion.div
              {...flutuar}
              className="absolute -bottom-14 -left-2 flex items-center gap-3.5 rounded-[18px] bg-creme px-5 py-4 shadow-[0_20px_50px_rgba(75,45,45,0.18)] sm:-left-7"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-rosa-fundo text-rosa">
                <Icone nome="coracao" tamanho={20} espessura={1.6} />
              </span>
              <span>
                <strong className="block text-sm font-semibold">Rose Malato</strong>
                <span className="text-xs text-suave">Atendimento com hora marcada</span>
              </span>
            </motion.div>

            <p className="absolute -top-2 right-0 m-0 rotate-[-6deg] text-right font-assinatura text-[40px] leading-[0.85] text-rosa sm:-right-2">
              Seu tempo.
              <br />
              Seu cuidado.
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  )
}