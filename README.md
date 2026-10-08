# 🌐 Prof. Dr. Laerte Peotta de Melo - Portal Acadêmico & Profissional

Repositório da página institucional e acadêmica do **Prof. Dr. Laerte Peotta de Melo**, hospedada no GitHub Pages.

🔗 **Acesse online:** [https://peotta.github.io/](https://peotta.github.io/)

---

## 📌 Sobre o Projeto

Este site reúne materiais acadêmicos, tutoriais práticos, guias para certificações, laboratórios de segurança ofensiva/defensiva e simuladores de redes interativos voltados para estudantes, pesquisadores e profissionais de TI e Cibersegurança.

### Principais Seções e Conteúdos

- **⚡ Simuladores Interativos de Redes:**
  - [Simulador Visual de OSPF Multi-Área](simuladores/ospf_simulator.html)
  - [Simulador de Roteador e Tabelas IP (LPM/TTL)](simuladores/router_simulator.html)
- **🧪 Laboratórios Práticos de Cibersegurança:**
  - [Índice Geral de Laboratórios](labs/index.html)
  - `Lab 01` - [Reconhecimento Passivo com Kismet](labs/lab01-reconhecimento.html)
  - `Lab 02` - [Captura e Análise de Tráfego com Wireshark](labs/lab02-captura.html)
  - `Lab 03` - [Protocolos e Handshakes WPA2 / WPA3](labs/lab03-protocolos.html)
  - `Lab 04` - [Simulação de Ataques e Defesas PMF](labs/lab04-ataques.html)
  - `Lab 05` - [Arsenal de Ferramentas e Pentest](labs/lab05-ferramentas.html)
- **🎓 Certificações Profissionais:**
  - [Cisco CCNA 200-301](certificacoes/ccna.html)
  - [Cisco CCNA Cybersecurity 200-201](certificacoes/ccna-cybersecurity.html)
  - [Cisco CCST Cybersecurity 100-160](certificacoes/ccst.html)
  - [Fortinet NSE Training (NSE 1 a NSE 3)](certificacoes/fortinet.html)
- **📖 Guias, Manuais & Projetos:**
  - [Guia Linux & Comandos](guias/linux.html) | [Curso Linux](guias/index-linux.html)
  - [Windows & Redes](guias/windows-redes.html)
  - [Segurança em Redes Wi-Fi](guias/wifi.html)
  - [Monitoramento IoT (DHT22)](guias/dht22.html)
  - [Projeto Final de Graduação 1 e 2 (ENE0358 / ENE0360 / ENE0458)](guias/dicas.html)
  - [Grupo de Pesquisa RAVENS](guias/ravens.html)

---

## 📂 Arquitetura do Repositório

```text
peotta.github.io/
├── index.html                     # Portal principal unificado
├── labs/                          # 🧪 Laboratórios Práticos
│   ├── index.html                 # Hub visual dos laboratórios
│   ├── lab01-reconhecimento.html
│   ├── lab02-captura.html
│   ├── lab03-protocolos.html
│   ├── lab04-ataques.html
│   └── lab05-ferramentas.html
├── simuladores/                   # ⚡ Simuladores Interativos (OSPF e Router)
│   ├── ospf_simulator.html
│   └── router_simulator.html
├── certificacoes/                 # 🎓 Planos de Estudo e Certificações
│   ├── ccna.html
│   ├── ccna-cybersecurity.html
│   ├── ccst.html
│   └── fortinet.html
├── guias/                         # 📖 Manuais, Cursos e Projetos
│   ├── linux.html
│   ├── index-linux.html
│   ├── windows-redes.html
│   ├── wifi.html
│   ├── dht22.html
│   ├── dicas.html
│   └── ravens.html
├── assets/                        # 🎨 Recursos Estáticos Compartilhados
│   ├── css/                       # Estilos globais
│   ├── js/                        # Scripts e interações
│   └── img/                       # Imagens e banners (kebab-case)
│       ├── foto-perfil-unb.png
│       ├── latencia-zero-podcast.png
│       └── ravens-1.webp
├── arquivos/                      # 📁 Materiais para download (PDFs e anexos)
└── README.md                      # Documentação técnica do repositório
```

---

## 🚀 Como Executar e Testar Localmente

Por se tratar de um site estático (HTML5, CSS3 e JavaScript puro), não há dependência de servidores pesados.

### Opção 1: Live Server (VS Code)
1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Python HTTP Server
Execute no terminal dentro da pasta raiz:

```bash
python -m http.server 8000
```
Acesse em seu navegador: `http://localhost:8000`.

---


