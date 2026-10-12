import { useState } from 'react'
import Cabecalho from './secoes/Cabecalho'
import Destaque from './secoes/Destaque'
import FaixaServicos from './secoes/FaixaServicos'
import Sobre from './secoes/Sobre'
import Tratamentos from './secoes/Tratamentos'
import ComoFunciona from './secoes/ComoFunciona'
import Depoimentos from './secoes/Depoimentos'
import Duvidas from './secoes/Duvidas'
import OndeFica from './secoes/OndeFica'
import ChamadaFinal from './secoes/ChamadaFinal'
import Rodape from './secoes/Rodape'
import ModalAgendamento from './agendamento/ModalAgendamento'

export default function App() {
  const [agendamentoAberto, setAgendamentoAberto] = useState(false)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-tinta px-5 py-3 text-creme focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho onAgendar={() => setAgendamentoAberto(true)} />
      <main id="conteudo" className="overflow-x-clip">
        <Destaque />
        <FaixaServicos />
        <Sobre />
        <Tratamentos />
        <ComoFunciona />
        <Depoimentos />
        <Duvidas />
        <OndeFica />
        <ChamadaFinal />
      </main>
      <Rodape />
      <ModalAgendamento aberto={agendamentoAberto} onFechar={() => setAgendamentoAberto(false)} />
    </>
  )
}
