# RETRO//STACK — Catálogo Técnico de Hardware

Site estático (sem servidor, sem banco de dados) para publicar o catálogo da coleção.
Os dados vêm da planilha `catalogo.xlsx` e são convertidos para `assets/data.js` pelo
script `build.py`.

## Estrutura

```
hardware-catalog/
├── index.html          página única do site
├── assets/
│   ├── style.css        visual retro-moderno
│   ├── app.js            lógica (busca, filtros, modal de detalhes)
│   └── data.js           gerado automaticamente por build.py — não editar à mão
├── build.py              planilha → data.js
├── catalogo.xlsx          sua planilha (substitua pela atualizada quando editar)
├── images/                fotos dos itens (opcional, veja abaixo)
└── manuals/                manuais em PDF (opcional, veja abaixo)
```

## Ver o site no seu computador

Não dá para abrir `index.html` direto no navegador com duplo clique (o navegador
bloqueia o carregamento de `data.js` por segurança). Rode um servidor local simples:

```
cd hardware-catalog
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `hardware-catalog`) ou use um já existente
   do tipo `seu-usuario.github.io`.
2. Copie todo o conteúdo desta pasta para dentro do repositório.
3. Faça commit e push:
   ```
   git add .
   git commit -m "Publica catálogo de hardware"
   git push
   ```
4. Em **Settings → Pages** do repositório, selecione a branch (geralmente `main`)
   e a pasta raiz (`/`). O GitHub gera a URL pública em alguns minutos.
   - Se o repositório já for `seu-usuario.github.io`, o site fica em
     `https://seu-usuario.github.io/` direto.
   - Se for outro nome, fica em `https://seu-usuario.github.io/nome-do-repo/`.

Não precisa de Jekyll, build step no GitHub, nem configuração extra — é HTML/CSS/JS puro.

## Como atualizar o catálogo no futuro

1. Edite `catalogo.xlsx` normalmente (adicione linhas, novas colunas, novos itens).
2. Rode:
   ```
   python3 build.py
   ```
   Isso regenera `assets/data.js` com os dados novos.
3. Confira localmente (`python3 -m http.server 8000`).
4. `git add . && git commit -m "Atualiza catálogo" && git push`.

O site sempre recalcula os contadores e status automaticamente — não é preciso
mexer no HTML/CSS/JS para adicionar itens, só na planilha.

### Adicionar fotos

1. Coloque a imagem em `images/`, por exemplo `images/MB-001.jpg`.
2. Na planilha, na aba do item (Placas-mãe, Placas de vídeo, Processadores ou
   Memórias), adicione uma coluna chamada exatamente **`Imagem`** e escreva o
   nome do arquivo (`MB-001.jpg`) na linha correspondente.
3. Rode `python3 build.py` novamente.

### Adicionar manuais em PDF

1. Coloque o PDF em `manuals/`, por exemplo `manuals/MB-001.pdf`.
2. Na planilha, adicione uma coluna chamada exatamente **`Manual (URL)`** e
   escreva o nome do arquivo (`MB-001.pdf`) — ou uma URL completa
   (`https://...`) se o manual estiver hospedado em outro lugar.
3. Rode `python3 build.py` novamente.

Itens sem foto ou manual cadastrado aparecem com um aviso discreto no lugar,
sem quebrar o layout.

## Sobre o design

Tema "PCB & Phosphor": preto/verde inspirado em placa de circuito e terminal
CRT (scanlines sutis, verde fósforo, detalhes em cobre/âmbar), com layout em
grade moderno, responsivo e com busca/filtros instantâneos. Tudo em CSS puro,
sem dependências externas além de duas fontes do Google Fonts.
