# Dashboard Next.js

Este projeto é uma aplicação de painel administrativo construída com Next.js, TypeScript, Tailwind CSS e NextAuth. Ele inclui uma área protegida de dashboard com páginas para clientes, faturas e visão geral, além de rotas de API e dados mockados para demonstração.

## 📋 Requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm

## 🚀 Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000)

Aplicação está disponível também através do link [https://nextjs-dashboard-lime-zeta-45.vercel.app/](https://nextjs-dashboard-lime-zeta-45.vercel.app/)

### 3. Popular dados de exemplo (opcional)

```bash
npm run seed
```

### 4. Build para produção

```bash
npm run build
npm start
```

## 🔐 Acesso inicial

Para entrar na aplicação, use as credenciais de demonstração abaixo:

- E-mail: user@nextmail.com
- Senha: 123456

Essas credenciais são utilizadas pelo fluxo de autenticação do NextAuth e também têm fallback para dados placeholder caso o banco não esteja configurado.

## 🧭 Rotas principais

- / - página inicial com opção de login
- /login - tela de autenticação
- /dashboard - visão geral do dashboard
- /dashboard/customers - lista de clientes
- /dashboard/invoices - lista de faturas
- /api/auth/[...nextauth] - endpoints de autenticação do NextAuth
- /query - rota de exemplo para consulta
- /seed - rota usada para popular dados iniciais

## 📁 Estrutura do projeto

```text
app/
  api/                # rotas de API
  dashboard/          # páginas protegidas do painel
  lib/                # dados, definições e utilidades
  ui/                 # componentes de interface
  page.tsx            # página inicial
  layout.tsx          # layout raiz
auth.ts               # configuração do NextAuth
auth.config.ts       # configurações de autenticação
middleware.ts         # proteção de rotas do dashboard
scripts/              # scripts auxiliares, como seed
public/               # arquivos estáticos
```

## 🛠️ Stack utilizada

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- NextAuth
- Vercel Postgres
- Utilitários do projeto para dados e formulários

## ✨ Funcionalidades presentes

- Página inicial e fluxo de login
- Dashboard com cards, gráfico de receita e lista de faturas recentes
- Páginas para clientes e faturas
- Formulários para criar e editar faturas
- Autenticação protegendo rotas do painel
- Dados mockados e seed para demonstração

## ⚙️ Variáveis de ambiente

Para uso com persistência de dados e autenticação mais real, considere configurar variáveis como:

- NEXTAUTH_SECRET
- POSTGRES_URL (ou as variáveis de conexão do provedor usado)
## 🔗 Recursos Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Curso oficial Next.js App Router](https://nextjs.org/learn)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Repositório Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

## 🤝 Contribuição

Sugestões e melhorias são bem-vindas. Para contribuir, abra uma issue ou envie um pull request.

Desenvolvido a partir de treinamento em parceria da Impacta com a Avanade.

---

## 👨🏻‍💻 Contato

<p style="padding-top:5px">
	<img src="https://avatars.githubusercontent.com/u/52001930?s=400&u=fb999c966c5c652a8357cbede4b1112e79cbfe18&v=4" alt="avatar" style="width:96px;height:96px;border-radius:50%;object-fit:cover;">

<p>&nbsp&nbsp&nbsp Wagner Andrade<br>
    &nbsp&nbsp&nbsp
    <a href="https://github.com/wsawebmaster">
    GitHub</a>&nbsp;|&nbsp;
    <a href="https://www.linkedin.com/in/
wsawebmaster">LinkedIn</a>
&nbsp;|&nbsp;
<a href="mailto:wsawebmaster@yahoo.com.br">
    Email</a>
  &nbsp;|&nbsp;
</p>
