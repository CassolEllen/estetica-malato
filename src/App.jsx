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
      <Cabecalho onAgendar={() => setAgendamentoAberto(true)} />
      <main>
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