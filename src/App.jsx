import Cabecalho from './secoes/Cabecalho'
import Destaque from './secoes/Destaque'

export default function App() {
  return (
    <>
      <Cabecalho onAgendar={() => alert('Aqui vai abrir o agendamento')} />
      <main>
        <Destaque />
      </main>
    </>
  )
}