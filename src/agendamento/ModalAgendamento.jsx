import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Icone from '../componentes/Icone'
import { horarios, linkWhatsApp, servicosAgendamento } from '../dados/site'
import Calendario from './Calendario'
import { deId, emailValido, formatarCompleto, mascaraTelefone, montarMensagem } from './utilidades'

const NOMES_ETAPAS = ['Serviço', 'Data e horário', 'Seus dados', 'Confirmação']

const ESTADO_INICIAL = {
  etapa: 1,
  servico: null,
  data: null,
  horario: null,
  nome: '',
  telefone: '',
  email: '',
  erro: '',
}

const tituloEtapa = 'm-0 font-titulo text-[30px] md:text-[34px] leading-[1.05] font-medium'
const subtituloEtapa = 'mt-1.5 mb-5 md:mb-6 text-[15px] leading-normal text-suave'
const rotuloGrupo = 'mb-2.5 text-xs font-semibold tracking-[0.14em] text-suave'
const rotuloCampo = 'flex flex-col gap-[7px] text-[13px] font-medium'
const campo =
  'h-[50px] w-full rounded-xl border border-tinta/20 bg-creme px-4 text-[15px] text-tinta placeholder:text-[#9b8583] focus:border-rosa focus:outline-3 focus:outline-rosa/20'

export default function ModalAgendamento({ aberto, onFechar }) {
  const dialogo = useRef(null)
  const [estado, setEstado] = useState(ESTADO_INICIAL)
  const reduzir = useReducedMotion()

  const { etapa } = estado
  const servico = servicosAgendamento.find((s) => s.id === estado.servico)
  const dataCompleta = estado.data ? formatarCompleto(deId(estado.data)) : null
  const quando = dataCompleta && estado.horario ? `${dataCompleta} às ${estado.horario}` : null

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
    setEstado((atual) => (atual.etapa === 5 ? ESTADO_INICIAL : { ...atual, erro: '' }))
    onFechar()
  }

  function fechar() {
    dialogo.current.close()
  }

  function validar() {
    if (etapa === 1 && !estado.servico) return 'Escolha um serviço para continuar.'
    if (etapa === 2 && (!estado.data || !estado.horario)) return 'Escolha um dia e um horário.'
    if (etapa === 3) {
      if (!estado.nome.trim()) return 'Informe seu nome.'
      if (estado.telefone.replace(/\D/g, '').length < 10) return 'Informe um WhatsApp com DDD.'
      if (!emailValido(estado.email)) return 'Confira o e-mail digitado.'
    }
    return ''
  }

  function enviarPeloWhatsApp() {
    const mensagem = montarMensagem({
      servico: servico.nome,
      quando,
      nome: estado.nome.trim(),
      telefone: estado.telefone,
      email: estado.email.trim(),
    })
    window.open(linkWhatsApp(mensagem), '_blank', 'noopener,noreferrer')
  }

  function avancar() {
    const erro = validar()
    if (erro) {
      atualizar({ erro })
      return
    }
    if (etapa === 4) enviarPeloWhatsApp()
    atualizar({ etapa: etapa + 1 })
  }

  function voltar() {
    atualizar({ etapa: etapa - 1 })
  }

  const resumo = [
    ['SERVIÇO', servico?.nome],
    ['DATA', dataCompleta],
    ['HORÁRIO', estado.horario],
  ]

  const periodos = [
    ['MANHÃ', 'Horários da manhã', horarios.manha],
    ['TARDE', 'Horários da tarde', horarios.tarde],
  ]

  const confirmacao = [
    { rotulo: 'SERVIÇO', valor: servico?.nome, extra: servico?.detalhe, etapa: 1 },
    { rotulo: 'QUANDO', valor: quando, etapa: 2 },
    {
      rotulo: 'CONTATO',
      valor: [estado.nome.trim(), estado.telefone, estado.email.trim()].filter(Boolean).join(' · '),
      etapa: 3,
    },
  ]

  const animacao = reduzir
    ? {}
    : {
        initial: { opacity: 0, x: 16 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }

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

        <section className="relative flex min-w-0 flex-1 flex-col px-5 pt-5 pb-5 md:px-11 md:pt-10 md:pb-8">
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar agendamento"
            className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-full text-tinta transition-colors hover:bg-tinta/5 md:top-5 md:right-5"
          >
            <Icone nome="fechar" tamanho={20} espessura={1.8} />
          </button>

          {etapa <= 4 && (
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
          )}

          <div className="-mx-1 mt-6 min-h-0 flex-1 overflow-y-auto px-1 pb-2 md:mt-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={etapa} {...animacao} className={etapa === 5 ? 'h-full' : ''}>
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
                    <p className={subtituloEtapa}>Escolha um dia no calendário e um horário de preferência.</p>

                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_168px] md:gap-8">
                      <Calendario valor={estado.data} onEscolher={(id) => atualizar({ data: id })} />

                      <div className="flex flex-col gap-5">
                        {periodos.map(([rotulo, descricao, lista]) => (
                          <div key={rotulo} role="group" aria-label={descricao}>
                            <p className={rotuloGrupo}>{rotulo}</p>
                            <div className="grid grid-cols-3 gap-2 md:grid-cols-2">
                              {lista.map((h) => {
                                const ativo = estado.horario === h
                                return (
                                  <button
                                    key={h}
                                    type="button"
                                    aria-pressed={ativo}
                                    onClick={() => atualizar({ horario: h })}
                                    className={`min-h-11 w-full rounded-full border text-sm transition-colors ${
                                      ativo
                                        ? 'border-rosa bg-rosa text-creme'
                                        : 'border-tinta/15 bg-creme text-tinta hover:border-rosa/50'
                                    }`}
                                  >
                                    {h}
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                        <p className="m-0 text-[13px] leading-snug text-suave">Horários sujeitos à confirmação da Rose.</p>
                      </div>
                    </div>
                  </div>
                )}

                {etapa === 3 && (
                  <div>
                    <h3 className={tituloEtapa}>Como falamos com você?</h3>
                    <p className={subtituloEtapa}>A confirmação chega pelo WhatsApp.</p>

                    <div className="flex flex-col gap-4">
                      <label className={rotuloCampo}>
                        Nome
                        <input
                          className={campo}
                          type="text"
                          autoComplete="name"
                          placeholder="Como você gostaria de ser chamada"
                          value={estado.nome}
                          onChange={(e) => atualizar({ nome: e.target.value })}
                        />
                      </label>

                      <label className={rotuloCampo}>
                        WhatsApp
                        <input
                          className={campo}
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel-national"
                          placeholder="(00) 00000-0000"
                          value={estado.telefone}
                          onChange={(e) => atualizar({ telefone: mascaraTelefone(e.target.value) })}
                        />
                      </label>

                      <label className={rotuloCampo}>
                        <span>
                          E-mail <span className="font-normal text-suave">(opcional)</span>
                        </span>
                        <input
                          className={campo}
                          type="email"
                          autoComplete="email"
                          placeholder="voce@email.com"
                          value={estado.email}
                          onChange={(e) => atualizar({ email: e.target.value })}
                        />
                      </label>
                    </div>

                    <p className="mt-4 mb-0 text-[13px] text-suave">Seus dados são usados apenas para confirmar o atendimento.</p>
                  </div>
                )}

                {etapa === 4 && (
                  <div>
                    <h3 className={tituloEtapa}>Tudo certo?</h3>
                    <p className={subtituloEtapa}>Confira antes de enviar o pedido.</p>

                    <dl className="m-0 rounded-[18px] border border-tinta/15 bg-creme">
                      {confirmacao.map((linha, i) => (
                        <div
                          key={linha.rotulo}
                          className={`flex items-center justify-between gap-4 px-5 py-4 ${
                            i < confirmacao.length - 1 ? 'border-b border-tinta/10' : ''
                          }`}
                        >
                          <div className="min-w-0">
                            <dt className="text-[11px] tracking-[0.14em] text-suave">{linha.rotulo}</dt>
                            <dd className="m-0 text-[15px] font-semibold break-words">{linha.valor}</dd>
                            {linha.extra && <dd className="m-0 text-[13px] text-suave">{linha.extra}</dd>}
                          </div>
                          <button
                            type="button"
                            onClick={() => atualizar({ etapa: linha.etapa })}
                            aria-label={`Alterar ${linha.rotulo.toLowerCase()}`}
                            className="min-h-11 shrink-0 px-2 text-[13px] font-medium text-rosa hover:underline"
                          >
                            Alterar
                          </button>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-4 mb-0 text-[13px] text-suave">
                      Ao confirmar, o WhatsApp abre com o seu pedido já escrito. É só enviar.
                    </p>
                  </div>
                )}

                {etapa === 5 && (
                  <div className="flex h-full flex-col items-center justify-center px-2 py-10 text-center md:px-6">
                    <span className="flex size-[72px] items-center justify-center rounded-full bg-rosa-fundo text-rosa">
                      <Icone nome="check" tamanho={32} espessura={2} />
                    </span>
                    <h3 className="mt-6 mb-2 font-titulo text-[40px] leading-none font-medium">Quase lá!</h3>
                    <p className="m-0 max-w-[400px] text-base leading-relaxed text-suave">
                      Abrimos o WhatsApp com o seu pedido. Envie a mensagem e a Rose confirma o seu horário por lá.
                    </p>
                    <p className="mt-[18px] mb-0 font-assinatura text-[32px] text-rosa">Seu tempo. Seu cuidado.</p>
                    <div className="mt-7 flex flex-wrap justify-center gap-2.5">
                      <button type="button" onClick={fechar} className="btn btn-contorno">
                        Fechar
                      </button>
                      <button type="button" onClick={enviarPeloWhatsApp} className="btn btn-rosa">
                        <Icone nome="whatsapp" tamanho={18} />
                        Abrir o WhatsApp de novo
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {etapa <= 4 && (
            <>
              <p role="alert" className="mt-2.5 mb-0 min-h-[18px] text-[13px] text-erro">
                {estado.erro}
              </p>
              <div
                className={`flex items-center gap-3 border-t border-tinta/10 pt-4 ${etapa > 1 ? 'justify-between' : 'justify-end'}`}
              >
                {etapa > 1 && (
                  <button type="button" onClick={voltar} className="btn btn-contorno px-5">
                    <Icone nome="voltar" tamanho={16} espessura={1.8} />
                    Voltar
                  </button>
                )}
                <button type="button" onClick={avancar} className="btn btn-rosa">
                  {etapa === 4 ? 'Confirmar pedido' : 'Continuar'}
                  <Icone nome={etapa === 4 ? 'whatsapp' : 'avancar'} tamanho={16} espessura={1.8} />
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </dialog>
  )
}