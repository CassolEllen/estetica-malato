import Cabecalho from './secoes/Cabecalho'

export default function App() {
  return (
    <>
      <Cabecalho onAgendar={() => alert('Aqui vai abrir o agendamento')} />
      <main className="conteiner py-16">
        <h1 className="font-titulo text-5xl">Conteúdo de teste</h1>
        <div className="mt-8 h-[2000px] rounded-3xl bg-rosa-fundo"></div>
      </main>
    </>
  )
}