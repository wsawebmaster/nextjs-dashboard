# Dashboard Next.js - Projeto Educativo

Um projeto de dashboard moderno desenvolvido com **Next.js 15+**, **TypeScript** e **Tailwind CSS**. Este é um starter template para aprender os conceitos fundamentais do Next.js App Router.

## 📋 Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18+)
- **pnpm** (gerenciador de pacotes recomendado)

Se você não tiver o pnpm instalado, execute:
```bash
npm install -g pnpm
```

## 🚀 Como Começar

### 1. Instalar dependências
```bash
pnpm install
```

### 2. Executar o servidor de desenvolvimento
```bash
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### 3. Compilar para produção
```bash
pnpm build
pnpm start
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

- **Next.js 15** - Framework React com Server Components
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS utilitário
- **pnpm** - Gerenciador de pacotes moderno

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

---

**Desenvolvido com ❤️ por [Avanade](https://www.avanade.com/pt-br)**
