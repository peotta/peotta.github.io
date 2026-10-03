# Instruções e Diretrizes para Agentes de IA — peotta.github.io

Este documento estabelece as diretrizes de desenvolvimento, arquitetura, design e fluxo de trabalho para agentes de inteligência artificial atuando no repositório da página acadêmica e profissional do **Prof. Dr. Laerte Peotta de Melo** (GitHub Pages).

---

## 🎯 Contexto do Projeto

- **Propósito:** Portal acadêmico, técnico e profissional com foco em **Cibersegurança**, **Redes de Computadores**, **Forense Digital**, **Certificações (Cisco CCNA/CCST, Fortinet NSE)** e **Simuladores Interativos**.
- **Público-alvo:** Alunos de graduação/pós-graduação, pesquisadores, profissionais de segurança da informação e estudantes de certificações.
- **Ambiente de Hospedagem:** GitHub Pages (ambiente estático puro — HTML5, CSS3, JavaScript Vanilla).
- **URL de Produção:** [https://peotta.github.io/](https://peotta.github.io/)

---

## 🧱 Princípios de Arquitetura e Código

### 1. Stack Tecnológica
- **HTML5:** Estrutura estritamente semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3 Puro:** Sem dependência de bibliotecas ou frameworks pesados (como Bootstrap ou Tailwind), a menos que explicitamente solicitado. Utilizar CSS custom properties (variáveis CSS), flexbox e grid moderno.
- **JavaScript Vanilla:** Focado em performance, interatividade leve, manipulação direta de DOM e simuladores baseados em Canvas/SVG/DOM.
- **Compatibilidade Estática:** Nenhuma dependência de servidor dinâmico (sem Node em runtime, PHP ou bancos de dados relacionais server-side).

### 2. Identidade Visual e Estética
- **Paleta de Cores (Cyberpunk / Terminal Verde):**
  - Fundo principal: `#010301` / `#020b05` / `#031008`
  - Painéis / Cards translúcidos: `rgba(4, 18, 9, 0.76)` com bordas `rgba(72, 255, 139, 0.22)`
  - Destaques e acentos: `#48ff8b` (verde primário neon), `#00d26a` (verde secundário), `#d8ffe7` (texto legível de alto contraste)
  - Efeitos: Glassmorphism suave, bordas arredondadas (`border-radius: 16px` a `24px`), glow sutil em estados de foco e hover.
- **Tipografia:** Tipos monospace elegantes para comandos/código (`SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`) combinados com fontes legíveis para leitura longa (`Inter`, `sans-serif`).

### 3. Nomenclatura e Organização de Arquivos
- **Kebab-case obrigatório:** Nomes de pastas e arquivos devem estar em minúsculas com hifens (exemplo: `redes-roteamento.html`, `foto-perfil.png`).
- **Zero caracteres especiais:** **NUNCA** utilizar espaços em branco, acentuações (`ç`, `ã`, `é`) ou símbolos nos nomes de arquivos físicos no repositório para evitar quebra de URL em servidores Linux do GitHub Pages.
- **Localização de mídias:** Imagens devem residir em `assets/img/` ou em pastas dedicadas dentro de `assets/`, nunca soltas na raiz do repositório.

---

## 🛡️ Regras e Procedimentos para Agentes

1. **Integridade de Links:** Antes de renomear ou mover qualquer arquivo HTML existente, verificar todas as referências no `index.html`, nas demais páginas, em `sitemap.xml` e no `README.md`.
2. **Atualização do Sitemap:** Toda nova página pública criada DEVE ser adicionada ao [sitemap.xml](file:///e:/Downloads/OneDrive%20-%20unb.br/peotta.github.io/sitemap.xml).
3. **SEO e Acessibilidade:**
   - Toda página deve possuir `<title>`, `<meta name="description">` e tag canônica ou open-graph básica.
   - Toda tag `<img>` deve possuir atributo `alt` descritivo.
4. **Simuladores de Rede:**
   - Devem ser auto-contidos ou utilizar os scripts compartilhados em `assets/`.
   - Devem ter interface responsiva, com suporte a mouse e toque (dispositivos móveis/tablets).

---

## 🗂️ Habilidades (Skills) e Regras (Rules) Locais

As configurações e automações especializadas do Antigravity para este repositório residem na pasta `.agents/`:
- **Regras:**
  - [`.agents/rules/web-standards.md`](file:///e:/Downloads/OneDrive%20-%20unb.br/peotta.github.io/.agents/rules/web-standards.md) — Padrões de código Web, semântica, responsividade e estilo visual.
  - [`.agents/rules/git-workflow.md`](file:///e:/Downloads/OneDrive%20-%20unb.br/peotta.github.io/.agents/rules/git-workflow.md) — Fluxo Git, mensagens de commit semântico e integridade do GitHub Pages.
- **Skills:**
  - [`.agents/skills/publish-page/SKILL.md`](file:///e:/Downloads/OneDrive%20-%20unb.br/peotta.github.io/.agents/skills/publish-page/SKILL.md) — Fluxo de criação e publicação de novas páginas de laboratórios/cursos.
  - [`.agents/skills/create-simulator/SKILL.md`](file:///e:/Downloads/OneDrive%20-%20unb.br/peotta.github.io/.agents/skills/create-simulator/SKILL.md) — Guia de criação de simuladores e ferramentas interativas.
  - [`.agents/skills/site-audit/SKILL.md`](file:///e:/Downloads/OneDrive%20-%20unb.br/peotta.github.io/.agents/skills/site-audit/SKILL.md) — Auditoria de links, SEO, imagens e integridade geral do site.
