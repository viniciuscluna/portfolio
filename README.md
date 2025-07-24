# 💼 Vinícius Luna - Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.6-38B2AC?style=for-the-badge&logo=tailwind-css)

**Um portfólio moderno e responsivo construído com Next.js, TypeScript e Tailwind CSS**

[🌐 Ver Portfolio](https://portfolio-viniciuscluna.vercel.app) • [📧 Contato](mailto:viniciuscluna@example.com) • [💼 LinkedIn](https://linkedin.com/in/viniciuscluna)

</div>

---

## ✨ **Sobre o Projeto**

Este é meu portfólio pessoal, desenvolvido para apresentar minha jornada como **Software Engineer** e **Software Architect**. O site foi construído com foco em **performance**, **acessibilidade** e **experiência do usuário**.

### 🎯 **Principais Features**

- 🌍 **Multilíngue** - Suporte completo para Português e Inglês
- 📱 **Responsivo** - Design adaptativo para todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e bundle otimizado
- 🎨 **Animações Suaves** - Micro-interações e transições elegantes
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica
- ♿ **Acessível** - Seguindo as melhores práticas de acessibilidade

---

## 🛠️ **Tech Stack**

### **Frontend**
- **Framework:** Next.js 14.2.5 (App Router)
- **Linguagem:** TypeScript 5.5.3
- **Styling:** Tailwind CSS 3.4.6
- **Ícones:** Font Awesome 6.6.0
- **Animações:** CSS Animations + Tailwind

### **Desenvolvimento**
- **Linting:** ESLint + Next.js Config
- **Formatação:** Prettier (configuração personalizada)
- **Build Tool:** Next.js Build System
- **Package Manager:** Yarn

### **Deploy & Infraestrutura**
- **Hospedagem:** Vercel
- **CI/CD:** GitHub Actions + Vercel Integration
- **Runtime:** Node.js 22.x

---

## 🚀 **Começando**

### **Pré-requisitos**
- Node.js 22.x ou superior
- Yarn 1.22.x ou superior

### **Instalação**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/viniciuscluna/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   yarn dev
   ```

4. **Abra no navegador**
   - Acesse [http://localhost:3000](http://localhost:3000)

### **Scripts Disponíveis**

```bash
# Desenvolvimento
yarn dev          # Inicia o servidor de desenvolvimento

# Build
yarn build        # Cria build de produção
yarn start        # Inicia servidor de produção

# Qualidade de Código
yarn lint         # Executa o linter
```

---

## 📁 **Estrutura do Projeto**

```
portfolio/
├── 📄 README.md
├── 📄 package.json
├── 📄 next.config.js
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
├── 📄 vercel.json
├── 📄 .nvmrc
├── 🗂️ components/           # Componentes React reutilizáveis
│   ├── About.tsx           # Seção hero/apresentação
│   ├── AboutSection.tsx    # Sobre mim detalhado
│   ├── Career.tsx          # Experiência profissional
│   ├── Contact.tsx         # Links de contato
│   ├── Projects.tsx        # Projetos destacados
│   ├── Skills.tsx          # Habilidades técnicas
│   └── ...
├── 🗂️ contexts/            # Contextos React
│   └── LanguageContext.tsx # Gerenciamento de idioma
├── 🗂️ pages/               # Rotas Next.js
│   ├── _app.tsx           # App wrapper
│   ├── _document.tsx      # Document customizado
│   └── index.tsx          # Página principal
├── 🗂️ public/             # Assets estáticos
│   └── assets/images/     # Imagens do projeto
└── 🗂️ styles/             # Estilos globais
    └── globals.css        # CSS global + Tailwind
```

---

## 🎨 **Design System**

### **Paleta de Cores**
- **Primária:** Blue to Cyan Gradient (`from-blue-600 to-cyan-600`)
- **Secundária:** Teal accents (`text-teal-500`)
- **Background:** Slate variants (`bg-slate-900`)
- **Texto:** White to Gray scale

### **Tipografia**
- **Headings:** Font weights 700-900
- **Body:** Font weights 400-600
- **Responsive:** Escalas sm/md/lg

### **Componentes**
- **Buttons:** Gradient backgrounds com hover effects
- **Cards:** Backdrop blur com bordas sutis
- **Pills:** Tech stack badges com hover animations

---

## 🌍 **Internacionalização**

O projeto suporta dois idiomas através de contexto React:

- 🇧🇷 **Português (pt)** - Idioma padrão
- 🇺🇸 **English (en)** - Idioma alternativo

### **Estrutura de Tradução**
```typescript
const translations = {
  pt: {
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Vinícius Luna',
    // ...
  },
  en: {
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Vinícius Luna',
    // ...
  }
}
```

---

## ⚡ **Otimizações de Performance**

### **Bundle Otimizations**
- ✅ Remoção de dependências pesadas (`react-text-transition`)
- ✅ Tree-shaking automático
- ✅ Code splitting por páginas
- ✅ Otimização de imagens Next.js

### **Runtime Optimizations**
- ✅ Eliminação de re-renders desnecessários
- ✅ Uso de CSS puro para animações
- ✅ Lazy loading de componentes
- ✅ Preload de recursos críticos

### **Build Stats**
```
Route (pages)                Size     First Load JS
┌ ○ /                       19.7 kB      119 kB
├   /_app                    0 B        99.6 kB
└ ○ /404                     180 B      99.7 kB
+ First Load JS shared       108 kB
```

---

## 📱 **Responsividade**

O design é mobile-first com breakpoints Tailwind:

- **sm:** ≥ 640px (Tablets)
- **md:** ≥ 768px (Desktop pequeno)
- **lg:** ≥ 1024px (Desktop médio)
- **xl:** ≥ 1280px (Desktop grande)

---

## 🤝 **Contribuindo**

Embora este seja um projeto pessoal, sugestões e melhorias são sempre bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📞 **Contato**

**Vinícius Luna** - Software Engineer & Architect

- 💼 [LinkedIn](https://linkedin.com/in/viniciuscluna)
- 🐙 [GitHub](https://github.com/viniciuscluna)
- 📧 [Email](mailto:viniciuscluna@example.com)
- 🌐 [Portfolio](https://portfolio-viniciuscluna.vercel.app)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=viniciuscluna.portfolio)
![GitHub stars](https://img.shields.io/github/stars/viniciuscluna/portfolio?style=social)

</div>
