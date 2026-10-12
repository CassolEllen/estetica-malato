import Foto from '../componentes/Foto'
import Revelar from '../componentes/Revelar'
import { fotos, valores } from '../dados/site'

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-[120px]">
      <div className="conteiner flex flex-wrap items-center gap-[72px]">
        <Revelar className="grid min-w-0 flex-[1_1_380px] grid-cols-2 gap-4">
          <Foto
            src={fotos.sobreAtendimento}
            alt="Atendimento facial na Estética Malato"
            legenda="Foto do atendimento facial"
            className="aspect-[3/4] w-full rounded-3xl"
          />
          <Foto
            src={fotos.sobreEspaco}
            alt="Ambiente do espaço da Estética Malato"
            legenda="Foto do espaço (ambiente)"
            className="mt-14 aspect-[3/4] w-full rounded-3xl"
          />
        </Revelar>

        <Revelar atraso={0.1} className="min-w-0 flex-[1_1_480px]">
          <p className="sobretitulo">Sobre a Rose</p>
          <h2 className="titulo-secao">Beleza também pode ser uma forma de presença.</h2>
          <p className="mt-7 max-w-[540px] text-[17px] leading-[1.7] text-suave">
            A experiência Malato nasce do encontro entre técnica, sensibilidade e um olhar individual para cada pessoa.
            Cada atendimento começa com uma conversa para entender seu momento, sua rotina e o que você espera do
            cuidado.
          </p>
          <ul className="mt-11 grid list-none gap-5 p-0 sm:grid-cols-3">
            {valores.map((v) => (
              <li key={v.titulo} className="border-t border-tinta/20 pt-[18px]">
                <strong className="block text-[15px] font-semibold">{v.titulo}</strong>
                <span className="mt-1.5 block text-sm leading-normal text-suave">{v.texto}</span>
              </li>
            ))}
          </ul>
        </Revelar>
      </div>
    </section>
  )
}
