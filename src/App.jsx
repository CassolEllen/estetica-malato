import Cabecalho from './secoes/Cabecalho'
import Destaque from './secoes/Destaque'
import FaixaServicos from './secoes/FaixaServicos'
import Sobre from './secoes/Sobre'
import Tratamentos from './secoes/Tratamentos'
import ComoFunciona from './secoes/ComoFunciona'
import Depoimentos from './secoes/Depoimentos'
import Duvidas from './secoes/Duvidas'

export default function App() {
  return (
    <>
      <Cabecalho onAgendar={() => alert('Aqui vai abrir o agendamento')} />
      <main>
        <Destaque />
        <FaixaServicos />
        <Sobre />
        <Tratamentos />
        <ComoFunciona />
        <Depoimentos />
        <Duvidas />
      </main>
    </>
  )
}