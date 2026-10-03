---
name: publish-page
description: >-
  Use esta skill quando o usuário solicitar a criação, publicação ou padronização de uma nova página HTML no site peotta.github.io (por exemplo, novos laboratórios, artigos, páginas de cursos ou guias).
---

# Fluxo de Publicação de Nova Página — peotta.github.io

Este guia detalha o passo a passo para criar e disponibilizar uma nova página mantendo a identidade visual, padrões semânticos e SEO do site.

---

## 📋 Passo a Passo

### 1. Nomenclatura e Localização
- Defina o nome do arquivo em **kebab-case** sem acentos ou espaços (exemplo: `lab06-criptografia.html` ou `guia-wireshark.html`).
- Posicione o arquivo no diretório apropriado conforme a estrutura do projeto.

### 2. Template Base com Identidade Visual
Ao criar o arquivo HTML, assegure a inclusão das variáveis CSS globais e meta tags essenciais:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Título da Página | Prof. Dr. Laerte Peotta</title>
  <meta name="description" content="Descrição clara e objetiva do conteúdo para busca." />
  <!-- Inclusão dos estilos compartilhados ou variáveis do design system -->
  <link rel="stylesheet" href="assets/style.css" />
</head>
<body>
  <header>
    <!-- Barra de navegação com link de retorno para o index.html -->
    <nav class="navbar">
      <a href="index.html" class="nav-brand">← Voltar ao Início</a>
    </nav>
  </header>

  <main class="container">
    <article class="content-card">
      <h1>Título Principal do Conteúdo</h1>
      <p class="lead">Resumo introdutório do laboratório ou material.</p>
      
      <!-- Conteúdo formatado -->
    </article>
  </main>

  <footer>
    <p>© Prof. Dr. Laerte Peotta de Melo — Todos os direitos reservados.</p>
  </footer>
</body>
</html>
```

### 3. Atualizar o Menu e Links no `index.html`
- Abra `index.html` e adicione o card ou link correspondente na seção temática relevante (Cursos, Laboratórios, Guias ou Simuladores).

### 4. Atualizar o `sitemap.xml`
- Abra `sitemap.xml` e adicione a nova URL com prioridade apropriada (0.7 ou 0.8):
```xml
<url>
  <loc>https://peotta.github.io/nova-pagina.html</loc>
  <priority>0.8</priority>
  <changefreq>monthly</changefreq>
</url>
```

### 5. Validar Localmente
- Teste a página abrindo localmente ou via servidor HTTP local (`python -m http.server 8000`).
- Verifique se os links relativos de CSS, imagens e retorno funcionam corretamente.
