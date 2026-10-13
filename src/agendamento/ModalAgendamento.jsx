import { useEffect, useMemo, useRef, useState } from 'react'
import Icone from '../componentes/Icone'
import { horarios, servicosAgendamento } from '../dados/site'
import { proximosDias } from './utilidades'

const NOMES_ETAPAS = ['Serviço', 'Data e horário', 'Seus dados', 'Confirmação']

const ESTADO_INICIAL = {
  etapa: 1,
  servico: null,
  data: null,
  horario: null,
  erro: '',
}

const tituloEtapa = 'm-0 font-titulo text-[30px] md:text-[34px] leading-[1.05] font-medium'
const subtituloEtapa = 'mt-1.5 mb-5 md:mb-6 text-[15px] leading-normal text-suave'
const rotuloGrupo = 'mt-6 mb-2.5 text-xs font-semibold tracking-[0.14em] text-suave'

export default function ModalAgendamento({ aberto, onFechar }) {
  const dialogo = useRef(null)
  const [estado, setEstado] = useState(ESTADO_INICIAL)

  
  const dias = useMemo(() => proximosDias(7), [aberto])

  const { etapa } = estado
  const servico = servicosAgendamento.find((s) => s.id === estado.servico)
  const dia = dias.find((d) => d.id === estado.data)

  function atualizar(mudancas) {
    setEstado((atual) => ({ ...atual, erro: '', ...mudancas }))
  }

  
  useEffect(() => {
    const d = dialogo.current
    if (aberto && !d.open) {
      d.showModal()
      document.body.style.overflow = 'hidden'
    }
    if (!aberto && d.open) {
      d.close()
    }
  }, [aberto])

  function aoFechar() {
    document.body.style.overflow = ''
    atualizar({ erro: '' })
    onFechar()
  }

  function fechar() {
    dialogo.current.close()
  }

  function validar() {
    if (etapa === 1 && !estado.servico) return 'Escolha um serviço para continuar.'
    if (etapa === 2 && (!estado.data || !estado.horario)) return 'Escolha um dia e um horário.'
    return ''
  }

  function avancar() {
    const erro = validar()
    if (erro) {
      atualizar({ erro })
      return
    }
    atualizar({ etapa: etapa + 1 })
  }

  function voltar() {
    atualizar({ etapa: etapa - 1 })
  }

  const resumo = [
    ['SERVIÇO', servico?.nome],
    ['DATA', dia?.completo],
    ['HORÁRIO', estado.horario],
  ]

  const periodos = [
    ['MANHÃ', 'Horários da manhã', horarios.manha],
    ['TARDE', 'Horários da tarde', horarios.tarde],
  ]

  return (
    <dialog
      ref={dialogo}
      onClose={aoFechar}
      onClick={(evento) => {
        if (evento.target === dialogo.current) fechar()
      }}
      aria-labelledby="agendamento-titulo"
      className="m-auto h-dvh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 md:h-[min(640px,calc(100dvh-48px))] md:w-[min(960px,calc(100vw-48px))] md:rounded-[28px] md:shadow-[0_40px_100px_rgba(40,20,20,0.35)]"
    >
      <div className="flex h-full overflow-hidden bg-papel text-tinta md:rounded-[28px]">
        {}
        <aside className="hidden w-[340px] shrink-0 flex-col justify-between bg-tinta px-9 py-10 text-creme md:flex">
          <div>
            <p className="mb-[18px] text-[11px] font-semibold tracking-[0.2em] text-rosa-claro">AGENDAMENTO</p>
            <h2 id="agendamento-titulo" className="m-0 font-titulo text-[40px] leading-none font-medium tracking-[-0.02em]">
              Seu momento de cuidado.
            </h2>
          </div>

          <dl className="m-0 flex flex-col gap-[18px] border-y border-white/20 py-6">
            {resumo.map(([rotulo, valor]) => (
              <div key={rotulo}>
                <dt className="mb-1 text-[11px] tracking-[0.14em] text-creme/60">{rotulo}</dt>
                <dd className={`m-0 text-[15px] ${valor ? '' : 'text-creme/55 italic'}`}>{valor || 'a escolher'}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-[#edb6b2] text-sm font-semibold text-tinta">
              RM
            </span>
            <span>
              <strong className="block text-sm font-semibold">Rose Malato</strong>
              <span className="text-xs text-creme/70">Esteticista e massoterapeuta</span>
            </span>
          </div>
        </aside>

        {}
        <section className="relative flex min-w-0 flex-1 flex-col px-5 pt-5 pb-5 md:px-11 md:pt-10 md:pb-8">
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar agendamento"
            className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-full text-tinta transition-colors hover:bg-tinta/5 md:top-5 md:right-5"
          >
            <Icone nome="fechar" tamanho={20} espessura={1.8} />
          </button>

          {}
          <div className="pr-12">
            <p className="mb-1 text-[11px] font-semibold tracking-[0.2em] text-rosa md:hidden">AGENDAMENTO</p>
            <div className="mb-2.5 flex items-baseline justify-between gap-3">
              <span className="text-xs font-semibold tracking-[0.14em] text-rosa">ETAPA {etapa} DE 4</span>
              <span className="text-[13px] text-suave">{NOMES_ETAPAS[etapa - 1]}</span>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${n <= etapa ? 'bg-rosa' : 'bg-tinta/10'}`}
                />
              ))}
            </div>
          </div>

          {}
          <div className="-mx-1 mt-6 min-h-0 flex-1 overflow-y-auto px-1 pb-2 md:mt-7">
            {etapa === 1 && (
              <fieldset className="m-0 border-0 p-0">
                <legend className={tituloEtapa}>O que você procura?</legend>
                <p className={subtituloEtapa}>
                  Escolha um cuidado. Os detalhes são alinhados com a Rose antes da confirmação.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {servicosAgendamento.map((s) => {
                    const ativo = estado.servico === s.id
                    return (
                      <button
                        key={s.id}
                        type="button"
                        aria-pressed={ativo}
                        onClick={() => atualizar({ servico: s.id })}
                        className={`flex min-h-[88px] w-full items-start gap-3.5 rounded-2xl border bg-creme p-4 text-left transition-colors ${
                          ativo ? 'border-[1.5px] border-rosa bg-[#fff3f2]' : 'border-tinta/15 hover:border-rosa/50'
                        }`}
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rosa-fundo text-rosa">
                          <Icone nome="folha" tamanho={18} espessura={1.6} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <strong className="block text-[15px] font-semibold">{s.nome}</strong>
                          <span className="mt-1 block text-[13px] text-suave">{s.detalhe}</span>
                        </span>
                        {ativo && (
                          <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-rosa text-creme">
                            <Icone nome="check" tamanho={13} espessura={3} />
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            )}

            {etapa === 2 && (
              <div>
                <h3 className={tituloEtapa}>Quando fica melhor para você?</h3>
                <p className={subtituloEtapa}>Escolha um dia e um horário de preferência.</p>

                <div role="group" aria-label="Dia" className="flex flex-wrap gap-2">
                  {dias.map((d) => {
                    const ativo = estado.data === d.id
                    return (
                      <button
                        key={d.id}
                        type="button"
                        aria-pressed={ativo}
                        aria-label={d.completo}
                        onClick={() => atualizar({ data: d.id })}
                        className={`flex w-16 flex-col items-center gap-0.5 rounded-[14px] border py-3 transition-colors ${
                          ativo ? 'border-tinta bg-tinta text-creme' : 'border-tinta/15 bg-creme text-tinta hover:border-rosa/50'
                        }`}
                      >
                        <span className="text-xs tracking-[0.08em] uppercase opacity-75">{d.semana}</span>
                        <span className="font-titulo text-[26px] leading-none font-semibold">{d.dia}</span>
                        <span className="text-[11px] opacity-75">{d.mes}</span>
                      </button>
                    )
                  })}
                </div>

                {periodos.map(([rotulo, descricao, lista]) => (
                  <div key={rotulo} role="group" aria-label={descricao}>
                    <p className={rotuloGrupo}>{rotulo}</p>
                    <div className="flex flex-wrap gap-2">
                      {lista.map((h) => {
                        const ativo = estado.horario === h
                        return (
                          <button
                            key={h}
                            type="button"
                            aria-pressed={ativo}
                            onClick={() => atualizar({ horario: h })}
                            className={`min-h-11 rounded-full border px-[18px] text-sm transition-colors ${
                              ativo ? 'border-rosa bg-rosa text-creme' : 'border-tinta/15 bg-creme text-tinta hover:border-rosa/50'
                            }`}
                          >
                            {h}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}

                <p className="mt-5 mb-0 text-[13px] text-suave">Horários sujeitos à confirmação da Rose.</p>
              </div>
            )}

            {etapa >= 3 && (
              <div>
                <h3 className={tituloEtapa}>{NOMES_ETAPAS[etapa - 1]}</h3>
                <p className={subtituloEtapa}>Esta etapa vem na próxima parte.</p>
              </div>
            )}
          </div>

          {}
          <p role="alert" className="mt-2.5 mb-0 min-h-[18px] text-[13px] text-erro">
            {estado.erro}
          </p>
          <div className={`flex items-center gap-3 border-t border-tinta/10 pt-4 ${etapa > 1 ? 'justify-between' : 'justify-end'}`}>
            {etapa > 1 && (
              <button type="button" onClick={voltar} className="btn btn-contorno px-5">
                <Icone nome="voltar" tamanho={16} espessura={1.8} />
                Voltar
              </button>
            )}
            {etapa < 4 && (
              <button type="button" onClick={avancar} className="btn btn-rosa">
                Continuar
                <Icone nome="avancar" tamanho={16} espessura={1.8} />
              </button>
            )}
          </div>
        </section>
      </div>
    </dialog>
  )
}