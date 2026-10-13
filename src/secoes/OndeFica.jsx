import Icone from '../componentes/Icone'
import Revelar from '../componentes/Revelar'
import { contato, linkComoChegar, linkInstagram, linkWhatsApp, mapaIncorporado } from '../dados/site'

function Item({ icone, rotulo, href, children }) {
  const conteudo = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rosa-fundo text-rosa">
        <Icone nome={icone} tamanho={20} espessura={1.6} />
      </span>
      <span className="flex-1">
        <span className="block text-xs tracking-[0.14em] text-suave">{rotulo}</span>
        <span className="mt-0.5 block text-base leading-[1.45]">{children}</span>
      </span>
      {href && <Icone nome="seta" tamanho={18} espessura={1.8} className="text-rosa" />}
    </>
  )

  return (
    <li className="border-b border-tinta/15">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-[18px] text-tinta no-underline hover:text-rosa">
          {conteudo}
        </a>
      ) : (
        <div className="flex items-center gap-4 py-[18px]">{conteudo}</div>
      )}
    </li>
  )
}

export default function OndeFica() {
  return (
    <section id="onde-fica" className="pb-24 md:pb-[120px]">
      <div className="conteiner flex flex-wrap items-stretch gap-14">
        <Revelar className="flex min-w-0 flex-[1_1_400px] flex-col">
          <p className="sobretitulo">Onde fica</p>
          <h2 className="m-0 font-titulo text-[clamp(2.4rem,4vw,3.6rem)] leading-none font-medium tracking-[-0.03em]">
            Um espaço pensado para você desacelerar.
          </h2>

          <ul className="mt-9 flex list-none flex-col border-t border-tinta/15 p-0">
            <Item icone="endereco" rotulo="ENDEREÇO">
              {contato.rua} · {contato.bairro}
              <br />
              {contato.cidade} – {contato.uf} · CEP {contato.cep}
            </Item>
            <Item icone="relogio" rotulo="HORÁRIO">
              {contato.horario}
            </Item>
            <Item icone="whatsapp" rotulo="WHATSAPP" href={linkWhatsApp()}>
              {contato.whatsappExibicao}
            </Item>
            <Item icone="instagram" rotulo="INSTAGRAM" href={linkInstagram}>
              @{contato.instagram}
            </Item>
          </ul>
        </Revelar>

        <Revelar
          atraso={0.1}
          className="relative min-h-[420px] min-w-0 flex-[1.3_1_520px] overflow-hidden rounded-[28px] border border-tinta/10 bg-[#efe3df]"
        >
          <iframe
            src={mapaIncorporado}
            title="Mapa com a localização da Estética Malato"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-x-0 bottom-0 h-[calc(100%+140px)] w-full border-0"
          />
          <a
            href={linkComoChegar}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-escuro absolute bottom-5 left-5 text-sm shadow-lg"
          >
            <Icone nome="navegar" tamanho={16} espessura={1.8} />
            Como chegar
          </a>
        </Revelar>
      </div>
    </section>
  )
}