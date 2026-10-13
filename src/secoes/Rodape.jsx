import Icone from '../componentes/Icone'
import { contato, linkInstagram, linkWhatsApp } from '../dados/site'

const redes = [
  { href: linkWhatsApp(), icone: 'whatsapp', rotulo: 'WhatsApp da Estética Malato' },
  { href: linkInstagram, icone: 'instagram', rotulo: 'Instagram da Estética Malato' },
]

export default function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="pt-10 pb-8">
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
              className="flex size-11 items-center justify-center rounded-full border border-tinta/20 text-tinta transition-colors hover:border-rosa hover:text-rosa"
            >
              <Icone nome={r.icone} tamanho={20} espessura={1.6} />
            </a>
          ))}
        </div>
      </div>

      <div className="conteiner mt-8">
        <p className="m-0 border-t border-tinta/10 pt-6 text-center text-xs leading-relaxed text-suave">
          © {ano} Estética Malato. Desenvolvido por{' '}
          <a
            href="https://darkcatstudio.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-tinta underline decoration-tinta/30 underline-offset-2 transition-colors hover:text-rosa hover:decoration-rosa"
          >
            DarkCat Studio
          </a>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}