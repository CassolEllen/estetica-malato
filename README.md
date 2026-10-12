# Estética Malato

Landing page da Estética Malato (Rose Malato) com agendamento pelo WhatsApp.
Feito com React, Vite, Tailwind CSS 4 e Motion (Framer Motion).

## Como rodar

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

Para gerar a versão final, que vai para a hospedagem:

```bash
npm run build
```

Os arquivos ficam na pasta `dist`.

## Onde mexer

| O que | Onde |
|---|---|
| Textos, telefone, endereço, serviços, preços, horários, dúvidas, depoimentos | `src/dados/site.js` |
| Fotos | `public/imagens` (veja o `LEIA-ME.txt` de lá) |
| Cores e fontes | `src/estilos.css` (bloco `@theme`) |
| Cada seção da página | `src/secoes/` |
| Modal de agendamento | `src/agendamento/` |

## Como funciona o agendamento

1. A cliente escolhe o serviço, o dia, o horário e preenche nome e WhatsApp.
2. Ao confirmar, o WhatsApp abre com a mensagem pronta para a Rose, com todos os dados.
3. A cliente envia, e a Rose confirma o horário por lá.

Não há banco de dados nem servidor: nada fica salvo no site.

## Antes de publicar

- [ ] Colocar as fotos em `public/imagens`
- [ ] Trocar `[ANOS]`, `[DIAS E HORÁRIOS]` e os depoimentos em `src/dados/site.js`
- [ ] Conferir o número do WhatsApp (celular tem 9 dígitos depois do DDD)
- [ ] Conferir preços e durações dos serviços do agendamento

## Publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel, clique em "Add New Project" e escolha o repositório.
3. A Vercel reconhece o Vite sozinha. Clique em "Deploy".
