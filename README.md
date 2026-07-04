# Dashboard Next.js - Projeto Educativo

Um projeto de dashboard moderno desenvolvido com **Next.js 15+**, **TypeScript** e **Tailwind CSS**. Este é um starter template para aprender os conceitos fundamentais do Next.js App Router.

## 📋 Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18+)
- **npm**

## 🚀 Como Começar

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Acesso ao projeto

- Projeto: [http://localhost:3000](http://localhost:3000)
- Usuário: `user@nextmail.com`
- Senha: `123456`

### 3. Compilar para produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx              # Layout raiz da aplicação
├── page.tsx                # Página inicial (login)
├── dashboard/
│   ├── layout.tsx         # Layout do dashboard
│   ├── page.tsx           # Página principal do dashboard
│   ├── customers/         # Seção de clientes
│   └── invoices/          # Seção de faturas
├── lib/                   # Funções utilitárias
│   ├── data.ts            # Dados mockados
│   ├── definitions.ts     # Tipos TypeScript
│   └── utils.ts           # Funções auxiliares
├── ui/                    # Componentes reutilizáveis
│   ├── global.css         # Estilos globais
│   ├── dashboard/         # Componentes específicos do dashboard
│   ├── invoices/          # Componentes de faturas
│   └── customers/         # Componentes de clientes
└── query/                 # Rota de API (exemplo)
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.0.0-canary.127** - Framework React com Server Components
- **React 19.0.0-rc-1eaccd82-20240816** - Biblioteca de UI
- **TypeScript 5.7.3** - Tipagem estática
- **Tailwind CSS 3.4.17** - Framework de CSS utilitário
- **npm** - Gerenciador de pacotes

## 💡 Funcionalidades Principais

✅ Dashboard responsivo com gráficos e cards  
✅ Tabela de clientes e faturas  
✅ Paginação de dados  
✅ Formulários para criar/editar faturas  
✅ Componentes reutilizáveis com Tailwind CSS  
✅ Integração com Server Components do Next.js

## 📚 Próximos Passos

1. **Explorar os componentes** - Abra os arquivos em `app/ui/` para entender como os componentes são estruturados
2. **Conectar a um banco de dados** - Integre Prisma ou outra solução de ORM com seu banco preferido
3. **Implementar autenticação** - Adicione NextAuth.js ou outra biblioteca de autenticação
4. **Criar testes** - Configure Jest ou Vitest para testes unitários
5. **Otimizar performance** - Use Next.js Image, Code Splitting e outras técnicas

## 🔗 Recursos Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Curso oficial Next.js App Router](https://nextjs.org/learn)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Repositório Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

## 🤝 Contribuindo

Para sugestões ou melhorias, sinta-se livre para criar um pull request ou abrir uma issue.
**Desenvolvido a partir de parceria entre Impacta e Avanade**

---

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
