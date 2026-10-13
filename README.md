# Estética Malato

Landing page da Estética Malato (Rose Malato) com agendamento pelo WhatsApp.

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

## Como funciona o agendamento

1. A cliente escolhe o serviço, o dia, o horário e preenche nome e WhatsApp.
2. Ao confirmar, o WhatsApp abre com a mensagem pronta para a Rose, com todos os dados.
3. A cliente envia, e a Rose confirma o horário por lá.

Não há banco de dados nem servidor: nada fica salvo no site.

## Tecnologias

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev)
