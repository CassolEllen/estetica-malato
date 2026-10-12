import Cabecalho from './secoes/Cabecalho'
import Destaque from './secoes/Destaque'
import FaixaServicos from './secoes/FaixaServicos'
import Sobre from './secoes/Sobre'
import Tratamentos from './secoes/Tratamentos'

export default function App() {
  return (
    <>
      <Cabecalho onAgendar={() => alert('Aqui vai abrir o agendamento')} />
      <main>
        <Destaque />
        <FaixaServicos />
        <Sobre />
        <Tratamentos />
      </main>
    </>
  )
}