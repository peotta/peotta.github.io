---
name: site-audit
description: >-
  Use esta skill quando o usuário solicitar uma auditoria, verificação de consistência, conferência de links quebrados ou validação de SEO e mídias no repositório peotta.github.io.
---

# Auditoria e Verificação de Integridade — peotta.github.io

Este guia detalha o procedimento para auditar a saúde técnica e a consistência do site.

---

## 🔍 Checklist de Auditoria

### 1. Verificação de Arquivos e Mídias
- [ ] Nenhum arquivo na raiz ou em subpastas possui espaços ou caracteres acentuados no nome físico.
- [ ] Imagens referenciadas no HTML de fato existem no disco.
- [ ] Todas as tags `<img>` possuem atributo `alt` preenchido.
- [ ] Imagens pesadas (> 1MB) foram identificadas para compressão em formato WebP.

### 2. Validação de Links Internos
- [ ] Todos os links `<a href="...">` apontam para páginas existentes no repositório.
- [ ] As páginas secundárias possuem link de navegação de volta para a Home (`index.html`).
- [ ] O simulador de redes e páginas internas não contêm caminhos absolutos locais quebrados (como `file:///C:/...`).

### 3. SEO e Metadados
- [ ] Todas as páginas possuem tag `<title>` única e descritiva.
- [ ] Todas as páginas possuem `<meta name="description">` com resumo coerente.
- [ ] `sitemap.xml` reflete todas as páginas HTML ativas do site.
- [ ] `robots.txt` está presente na raiz apontando para o sitemap.

### 4. Git e Versionamento
- [ ] `.gitignore` está ativo e arquivos indesejados (`Thumbs.db`, `.DS_Store`, temporários) não estão commitados.
- [ ] O branch de trabalho está sincronizado com `main`.
