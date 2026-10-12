import Icone from '../componentes/Icone'
import { contato, linkInstagram, linkWhatsApp } from '../dados/site'

export default function Rodape() {
  const redes = [
    { href: linkWhatsApp(), icone: 'whatsapp', rotulo: 'WhatsApp da Estética Malato' },
    { href: linkInstagram, icone: 'instagram', rotulo: 'Instagram da Estética Malato' },
  ]

  return (
    <footer className="pt-10 pb-14">
      <div className="conteiner flex flex-wrap items-center justify-between gap-6 text-sm text-suave">
        <span className="font-titulo text-[22px] text-tinta">Estética Malato</span>
        <span>
          {contato.rua} · {contato.bairro} · {contato.cidade} – {contato.uf}
        </span>
        <div className="flex gap-2.5">
          {redes.map((r) => (
            <a
              key={r.icone}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.rotulo}
              className="flex size-11 items-center justify-center rounded-full border border-tinta/18 text-tinta transition-colors hover:border-rosa hover:text-rosa"
            >
              <Icone nome={r.icone} tamanho={20} espessura={1.6} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
