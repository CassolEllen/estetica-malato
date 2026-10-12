export default function App() {
  return (
    <main className="p-10">
      <h1 className="font-titulo text-6xl text-tinta">
        Cuidado que se reconhece <em className="text-rosa">em cada detalhe.</em>
      </h1>
      <p className="mt-4 text-lg text-suave">Mais do que procedimentos, uma experiência de bem-estar.</p>
      <p className="mt-6 font-assinatura text-4xl text-rosa">Seu tempo. Seu cuidado.</p>
      <div className="mt-8 flex gap-3">
        <span className="size-16 rounded-full bg-tinta"></span>
        <span className="size-16 rounded-full bg-rosa"></span>
        <span className="size-16 rounded-full bg-rosa-claro"></span>
        <span className="size-16 rounded-full bg-rosa-fundo"></span>
        <span className="size-16 rounded-full bg-foto"></span>
      </div>
    </main>
  )
}