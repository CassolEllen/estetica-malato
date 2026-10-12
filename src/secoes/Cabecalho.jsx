import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Icone, { Marca } from '../componentes/Icone'

const links = [
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#tratamentos', rotulo: 'Tratamentos' },
  { href: '#como-funciona', rotulo: 'Como funciona' },
  { href: '#duvidas', rotulo: 'Dúvidas' },
  { href: '#onde-fica', rotulo: 'Onde fica' },
]

export default function Cabecalho({ onAgendar }) {
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    if (!menuAberto) return
    const fecharComEsc = (e) => e.key === 'Escape' && setMenuAberto(false)
    window.addEventListener('keydown', fecharComEsc)
    return () => window.removeEventListener('keydown', fecharComEsc)
  }, [menuAberto])

  const agendar = () => {
    setMenuAberto(false)
    onAgendar()
  }

  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/90 backdrop-blur-md">
      <div className="conteiner flex items-center justify-between gap-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 text-tinta no-underline" aria-label="Estética Malato, início">
          <Marca className="text-rosa" />
          <span className="flex flex-col gap-0.5">
            <span className="font-titulo text-[26px] leading-none font-semibold">Estética Malato</span>
            <span className="text-[9px] font-medium tracking-[0.2em] text-rosa">BELEZA · SAÚDE · BEM-ESTAR</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-tinta no-underline transition-colors hover:text-rosa">
              {link.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={agendar} className="btn btn-escuro hidden min-h-11 px-[22px] text-sm sm:inline-flex">
            <Icone nome="calendario" tamanho={17} />
            Agendar horário
          </button>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full text-tinta lg:hidden"
            aria-expanded={menuAberto}
            aria-controls="menu-celular"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <Icone nome={menuAberto ? 'fechar' : 'menu'} tamanho={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuAberto && (
          <motion.nav
            id="menu-celular"
            aria-label="Navegação no celular"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-tinta/10 lg:hidden"
          >
            <div className="conteiner flex flex-col py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="border-b border-tinta/10 py-4 font-titulo text-2xl text-tinta no-underline"
                >
                  {link.rotulo}
                </a>
              ))}
              <button type="button" onClick={agendar} className="btn btn-rosa mt-5 mb-2 w-full">
                <Icone nome="calendario" tamanho={17} />
                Agendar horário
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
