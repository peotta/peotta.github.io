# Git Workflow & GitHub Pages Rules — peotta.github.io

Estas regras orientam o versionamento, publicação e integridade do repositório.

## 1. Convenção de Commits
Utilizar mensagens no padrão **Conventional Commits**:
- `feat:` Inclusão de novas páginas, simuladores, seções ou funcionalidades.
- `fix:` Correção de links quebrados, erros de script, bugs visuais ou de digitação.
- `docs:` Atualizações em README.md, AGENTS.md, sitemap.xml ou comentários de código.
- `style:` Ajustes puramente estéticos (CSS, espaçamento, alinhamento).
- `refactor:` Reorganização de arquivos, limpeza de código sem alteração no comportamento.
- `chore:` Manutenção de ferramentas, `.gitignore`, `.editorconfig` ou tarefas rotineiras.

Exemplo:
```bash
git commit -m "feat(simuladores): adicionar suporte a roteamento dinamico RIP"
git commit -m "fix(links): corrigir url do laboratorio 03 no index.html"
```

## 2. GitHub Pages e Hospedagem Estática
- O branch principal de produção é o `main`.
- Toda alteração enviada para o `main` é implantada diretamente em [https://peotta.github.io/](https://peotta.github.io/).
- NUNCA realize commit de arquivos temporários do sistema operacional (`Thumbs.db`, `.DS_Store`), nem arquivos com senhas, tokens ou dados sensíveis.
- Verifique se os arquivos criados estão com o nome exatamente igual nas referências (`case-sensitive`), pois o servidor do GitHub Pages roda em Linux e diferencia maiúsculas de minúsculas.

## 3. Integridade de Assets e Mídias
- Arquivos de imagem grandes (> 1 MB) devem ser otimizados (convertidos para `.webp` ou comprimidos) antes de serem comitados para preservar a velocidade de carregamento da página.
- Nomes de arquivo não devem conter caracteres acentuados ou espaços.
