import Foto from '../componentes/Foto'
import { outrosServicos, tratamentos } from '../dados/site'

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="bg-papel-escuro py-24 md:py-28">
      <div className="conteiner">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <p className="sobretitulo">Tratamentos</p>
            <h2 className="titulo-secao">Cuidados para rosto, corpo e pausa.</h2>
          </div>
          <p className="m-0 max-w-[380px] text-base leading-relaxed text-suave">
            Os detalhes de cada atendimento são alinhados na conversa inicial, de acordo com o seu momento.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tratamentos.map((t) => (
            <article key={t.titulo} className="group overflow-hidden rounded-3xl border border-tinta/10 bg-cartao">
              <div className="overflow-hidden">
                <Foto
                  src={t.foto}
                  alt={t.titulo}
                  legenda={t.legendaFoto}
                  className="aspect-[16/11] w-full border-0 transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-[26px] pt-[26px] pb-[30px]">
                <span className="text-xs font-semibold tracking-[0.14em] text-rosa uppercase">{t.categoria}</span>
                <h3 className="mt-2.5 mb-2 font-titulo text-[30px] font-medium">{t.titulo}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-suave">{t.texto}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-tinta/10 bg-papel p-6 md:p-8">
          <p className="mb-[18px] text-xs font-semibold tracking-[0.18em] text-suave">TAMBÉM ATENDO</p>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {outrosServicos.map((s) => (
              <li key={s} className="rounded-full border border-tinta/10 bg-creme px-4 py-2.5 text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}