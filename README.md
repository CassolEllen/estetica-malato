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
