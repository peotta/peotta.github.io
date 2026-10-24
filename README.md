# 🌐 Prof. Dr. Laerte Peotta de Melo - Portal Acadêmico & Profissional

Repositório da página institucional e acadêmica do **Prof. Dr. Laerte Peotta de Melo**, hospedada no GitHub Pages.

🔗 **Acesse online:** [https://peotta.github.io/](https://peotta.github.io/)

---

## 📌 Sobre o Projeto

Este site reúne materiais acadêmicos, tutoriais práticos, guias para certificações, laboratórios de segurança ofensiva/defensiva e simuladores de redes interativos voltados para estudantes, pesquisadores e profissionais de TI e Cibersegurança.

### Principais Seções e Conteúdos

- **⚡ Simuladores Interativos de Redes:**
  - [Simul-Net](https://peotta.github.io/Simul-Net/): projeto com os simuladores visuais de redes e protocolos seguros
  - [Roteamento (OSPF e RIPv2)](https://peotta.github.io/Simul-Net/#/sim/roteamento)
  - [DHCP (DORA)](https://peotta.github.io/Simul-Net/#/sim/dhcp)
  - [ICMP (ping, traceroute e PMTUD)](https://peotta.github.io/Simul-Net/#/sim/icmp)
  - [BGP (sessões, seleção de caminho e defesas)](https://peotta.github.io/Simul-Net/#/sim/bgp)
  - [MPLS (LDP e L3VPN)](https://peotta.github.io/Simul-Net/#/sim/mpls)
  - [TCP e UDP](https://peotta.github.io/Simul-Net/#/sim/tcp-udp)
  - [Ataques e Defesas TCP/UDP](https://peotta.github.io/Simul-Net/#/sim/ataques-tcp-udp)
  - [SSH](https://peotta.github.io/Simul-Net/#/sim/ssh)
  - [HTTPS e TLS](https://peotta.github.io/Simul-Net/#/sim/https)
  - [FTP, FTPS e SFTP](https://peotta.github.io/Simul-Net/#/sim/ftp)
  - [DNS e DNSSEC (resolução, cadeia de confiança, ataques, DoT e DoH)](https://peotta.github.io/Simul-Net/#/sim/dns)
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
  - [Orientação de Mestrado Profissional (PPEE/UnB)](orientacao/mestrado-ppee.html)
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
├── simuladores/                   # ⚡ Redirecionamentos das páginas antigas dos simuladores para o Simul-Net
│   └── (router, dhcp, icmp, bgp, mpls, tcp-udp, tcp-udp-security e protocolos-seguros)
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
├── orientacao/                    # 🎓 Orientação de Pós-Graduação
│   └── mestrado-ppee.html
├── assets/                        # 🎨 Recursos Estáticos Compartilhados
│   ├── style.css, app.js, m3m4.js # Estilo e scripts do curso de Linux (guias/index-linux.html)
│   ├── react/                     # Build de produção do portal (gerado por site-react, não editar)
│   └── img/                       # Imagens e banners (kebab-case)
│       ├── foto-perfil-unb.webp, foto-perfil-og.jpg
│       ├── latencia-zero-podcast.webp
│       └── ravens-1.webp, ravens-logo.webp, ravens-logo-og.png
├── arquivos/                      # 📁 Materiais para download (PDFs e anexos)
├── site-react/                    # ⚛️ Código-fonte do portal (React + Vite), gerador de index.html e páginas de guias
└── README.md                      # Documentação técnica do repositório
```

---

## 🚀 Como Executar e Testar Localmente

Por se tratar de um site estático publicado no GitHub Pages, não há dependência de servidor em produção. As páginas de guias, laboratórios e certificações são HTML puro; o portal (`index.html`, `guias/dicas.html` e `orientacao/mestrado-ppee.html`) é gerado a partir de `site-react/` (React + Vite) e o resultado fica em `assets/react/`.

### Alterar o portal React

```bash
cd site-react
npm install
npm run build   # gera o bundle e atualiza index.html, guias/dicas.html e orientacao/mestrado-ppee.html
```

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

## Uso de Inteligência Artificial

Em conformidade com a Política de Uso Responsável da IA da FT/UnB, declara-se que este material foi elaborado com apoio de ferramentas de inteligência artificial generativa (Claude, ChatGPT e Gemini), sob revisão e responsabilidade do professor.
