import { contato, enderecoCompleto, faixaServicos, linkInstagram, linkWhatsApp } from './dados/site'

export default function App() {
  return (
    <main className="p-10">
      <h1 className="font-titulo text-5xl">Teste dos dados</h1>

      <p className="mt-6 text-suave">{enderecoCompleto}</p>
      <p className="text-suave">{contato.horario}</p>

      <div className="mt-6 flex gap-3">
        <a href={linkWhatsApp('Olá, Rose! Gostaria de agendar um horário.')} target="_blank" className="rounded-full bg-rosa px-6 py-3 text-creme">
          WhatsApp: {contato.whatsappExibicao}
        </a>
        <a href={linkInstagram} target="_blank" className="rounded-full border border-tinta/25 px-6 py-3">
          @{contato.instagram}
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {faixaServicos.map((servico) => (
          <li key={servico} className="rounded-full bg-rosa-fundo px-4 py-2 text-sm">
            {servico}
          </li>
        ))}
      </ul>
    </main>
  )
}