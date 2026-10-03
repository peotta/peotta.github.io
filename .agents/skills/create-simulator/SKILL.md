---
name: create-simulator
description: >-
  Use esta skill quando o usuário solicitar o desenvolvimento, melhoria ou refatoração de simuladores interativos de redes, protocolos ou segurança (como OSPF, roteamento, criptografia, subnetting, etc.) na pasta simuladores/.
---

# Desenvolvimento de Simuladores Interativos — peotta.github.io

Este guia orienta a criação de ferramentas educacionais e simuladores interativos na pasta `simuladores/`.

---

## 🎯 Diretrizes do Simulador

1. **Auto-suficiência e Portabilidade:**
   - O simulador deve rodar inteiramente no cliente (browser) sem necessidade de servidor back-end.
   - Use HTML5 Canvas, SVG interativo ou componentes DOM manipulados com Vanilla JavaScript.
2. **Experiência Didática:**
   - Apresente feedbacks visuais claros (pacotes se movendo, tabelas de roteamento sendo preenchidas dinamicamente, gráficos de convergência).
   - Inclua painéis de controle intuitivos (botões de play, pause, reset, step-by-step).
   - Adicione painel de status ou log de eventos com visual de terminal (`monospace`, cores verde/âmbar).
3. **Responsividade:**
   - Assegure que o canvas ou área gráfica redimensione proporcionalmente ou utilize scroll horizontal contido em telas menores.
   - Forneça controles clicáveis e compatíveis com toque (`pointerdown` ou `click`).

---

## 🛠️ Estrutura Recomendada

```text
simuladores/
├── nome_simulador.html    # Interface com Canvas/DOM e estilos específicos
└── (scripts/estilos auxiliares se necessário)
```

### Checklist de Implementação:
- [ ] Botão de retorno para o portal principal (`../index.html`).
- [ ] Explicação teórica sucinta dos conceitos demonstrados no simulador.
- [ ] Controles de simulação (Iniciar, Pausar, Reiniciar, Alterar Parâmetros).
- [ ] Tratamento de eventos e validação de parâmetros informados pelo usuário.
- [ ] Registro do simulador em `index.html` e em `sitemap.xml`.
