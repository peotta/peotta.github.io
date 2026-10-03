# Web Standards & Design Guidelines — peotta.github.io

Estas regras orientam o desenvolvimento de interface, estruturação de código e estilo para o site.

## 1. Estrutura HTML
- **Doctype & Idioma:** Sempre utilize `<!DOCTYPE html>` e `<html lang="pt-BR">`.
- **Meta Tags Essenciais:**
  - `<meta charset="UTF-8" />`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
  - `<meta name="description" content="..." />`
- **Semântica:** Use tags semânticas estruturais: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Hierarquia de Títulos:** Exatamente um `<h1>` por página, seguido de `<h2>`, `<h3>` sem pular níveis hierárquicos.
- **Acessibilidade:**
  - Imagens com atributo `alt` descritivo.
  - Botões com textos claros ou atributos `aria-label`.
  - Contraste de cores em conformidade com WCAG AA.

## 2. Design System & CSS
- **Variáveis de Cores (Paleta Verde Terminal / Cyberpunk):**
  - `--bg: #010301;`
  - `--bg-soft: #020b05;`
  - `--panel: rgba(3, 17, 8, 0.82);`
  - `--panel-strong: rgba(6, 28, 13, 0.92);`
  - `--card: rgba(4, 18, 9, 0.76);`
  - `--card-border: rgba(72, 255, 139, 0.22);`
  - `--text: #d8ffe7;`
  - `--muted: #91caa4;`
  - `--primary: #48ff8b;`
  - `--secondary: #00d26a;`
  - `--accent: #b8ffd0;`
  - `--terminal: #09160d;`
- **Responsividade:**
  - O layout deve se adaptar fluidamente a smartphones (< 768px), tablets (768px - 1024px) e desktops (> 1024px).
  - Use `box-sizing: border-box;` universalmente.
  - Evite larguras fixas em pixels para containers principais; prefira `max-width: 1180px; width: 100%; margin: 0 auto;`.
- **Transições e Animações:**
  - Microinterações suaves em `:hover` e `:focus` (`transition: all 0.25s ease;`).
  - Glow controlado com `box-shadow` esverdeado sutil.

## 3. JavaScript
- **Padrão:** Vanilla JavaScript moderno (ES6+).
- **Sem Dependências Pesadas:** Não incluir jQuery, React ou bibliotecas gigantes para tarefas que JavaScript nativo resolve com poucas linhas.
- **Performance:** Scripts devem ser carregados no final do `<body>` ou com atributo `defer`.
- **Tratamento de Erros:** Proteger funções interativas com validações de entrada e `try/catch` onde aplicável.
