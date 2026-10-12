const caminhos = {
  folha: (
    <path d="M12 21V11M12 13c-4-1-6.5-3.5-6.5-7 3.5 0 6.5 2 6.5 7ZM12 13c4-1 6.5-3.5 6.5-7-3.5 0-6.5 2-6.5 7Z" />
  ),
  coracao: <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19l-4 1Z" />
      <path d="M9.2 8.6c.2-.4.5-.4.8-.4h.4c.2 0 .4 0 .5.4l.6 1.4c.1.3 0 .5-.2.7l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.4-.3.7-.2l1.4.6c.4.1.4.3.4.5v.4c0 .3 0 .6-.4.8-.6.4-1.6.5-2.6 0a8 8 0 0 1-3.9-3.9c-.5-1-.4-2 0-2.6Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </>
  ),
  endereco: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  seta: <path d="M7 17 17 7M8 7h9v9" />,
  navegar: <path d="M3 11 21 3l-8 18-2-8-8-2Z" />,
  fechar: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="m5 12 5 5L19 7" />,
  voltar: <path d="M15 18l-6-6 6-6" />,
  avancar: <path d="M9 18l6-6-6-6" />,
  calendario: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </>
  ),
}

export default function Icone({ nome, tamanho = 20, espessura = 1.7, className = '' }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={espessura}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {caminhos[nome]}
    </svg>
  )
}

export function Marca({ className = '' }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 42V20M24 24C16 22 11 17 11 10c7 0 13 4 13 14ZM24 24c8-2 13-7 13-14-7 0-13 4-13 14ZM24 34c-6-1-10-5-10-10 6 0 10 3 10 10ZM24 34c6-1 10-5 10-10-6 0-10 3-10 10Z" />
    </svg>
  )
}
