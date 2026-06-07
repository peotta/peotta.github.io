(function(){
var html = `
<!-- ══════════ MÓDULO 3 ══════════ -->
<section class="module module-block" id="m3">
<div class="module-title"><span class="num">Módulo 3</span><h2>Linux para Redes</h2></div>
<p class="lead">Interfaces, TCP/IP, portas, DNS, rotas, diagnóstico e captura de tráfego — tudo com método e evidência técnica.</p>
<div class="module-map">
  <a class="mini-card" href="#m3-a1"><strong>Aula 3.1 — Interfaces, endereços e modelo TCP/IP</strong><span>Relacionar comandos Linux com camadas e estado real das interfaces.</span></a>
  <a class="mini-card" href="#m3-a2"><strong>Aula 3.2 — Portas, sockets e serviços de rede</strong><span>Identificar processos ouvindo portas e a superfície de ataque exposta.</span></a>
  <a class="mini-card" href="#m3-a3"><strong>Aula 3.3 — DNS e resolução de nomes</strong><span>Diagnosticar falhas separando IP, DNS e aplicação.</span></a>
  <a class="mini-card" href="#m3-a4"><strong>Aula 3.4 — Rotas, troubleshooting e captura</strong><span>Método completo: interface → IP → rota → DNS → porta → aplicação.</span></a>
</div>

<!-- M3-A1 -->
<article class="lesson" id="m3-a1">
<div class="lesson-head"><span class="lesson-code">M3-A1</span><h3>Aula 3.1 — Interfaces, endereços e modelo TCP/IP</h3></div>
<p class="objective"><strong>Objetivo:</strong> Relacionar comandos Linux com camadas do modelo TCP/IP e verificar o estado real das interfaces de rede.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>Interface de rede:</strong> ponto de conexão lógica ou física com a rede. Cada interface tem nome, endereço MAC (L2), endereço IP (L3) e estado (UP/DOWN).</li>
<li><strong>Nomenclatura moderna (Predictable Network Interface Names):</strong> <code>enp3s0</code> = Ethernet, bus PCI 3, slot 0. <code>wlp2s0</code> = Wireless, PCI 2, slot 0. <code>lo</code> = loopback. Evita renomeação ao trocar hardware.</li>
<li><strong>iproute2:</strong> pacote moderno (<code>ip</code>, <code>ss</code>, <code>tc</code>) que substituiu net-tools (<code>ifconfig</code>, <code>netstat</code>, <code>route</code>). Mais preciso e mantido ativamente.</li>
<li><strong>NetworkManager vs systemd-networkd:</strong> em desktops/laptops, NetworkManager gerencia conexões dinamicamente. Em servidores, systemd-networkd ou arquivos estáticos (<code>/etc/network/</code>, <code>/etc/netplan/</code>) são preferíveis por previsibilidade.</li>
</ul></div>

<h4>Diagrama: Modelo TCP/IP com comandos Linux por camada</h4>
<div class="svg-wrap">
<svg viewBox="0 0 720 370" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="370" fill="#010403" rx="10"/>
  <text x="360" y="22" text-anchor="middle" font-family="Courier New" font-size="10" font-weight="900" fill="#d4f7e0" letter-spacing="1">MODELO TCP/IP — CAMADAS E COMANDOS LINUX</text>
  <!-- Layer boxes (left) and command boxes (right) -->
  <!-- L4 Application -->
  <rect x="8"   y="32"  width="200" height="80" fill="rgba(199,146,234,.08)" rx="7" stroke="rgba(199,146,234,.4)" stroke-width="1.5"/>
  <text x="108" y="50"  text-anchor="middle" font-family="Courier New" font-size="10" font-weight="900" fill="#c792ea">4. APLICAÇÃO</text>
  <text x="108" y="64"  text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">HTTP/S · DNS · SSH · SMTP</text>
  <text x="108" y="77"  text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">FTP · SNMP · NTP · BGP</text>
  <text x="108" y="90"  text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">Dados / Mensagens</text>
  <rect x="215"  y="32"  width="498" height="80" fill="rgba(199,146,234,.04)" rx="7" stroke="rgba(199,146,234,.2)" stroke-width="1"/>
  <text x="225" y="50"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">curl -I https://host</text>
  <text x="225" y="63"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">dig / host / nslookup</text>
  <text x="225" y="76"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">ssh user@host</text>
  <text x="225" y="89"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">openssl s_client -connect host:443</text>
  <text x="430" y="50"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">wget -q -O- URL</text>
  <text x="430" y="63"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">nmap -sV host</text>
  <text x="430" y="76"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">nc -zv host port</text>
  <text x="430" y="89"  text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">snmpwalk / ntpdate</text>
  <!-- L3 Transport -->
  <rect x="8"   y="122" width="200" height="65" fill="rgba(100,210,255,.08)" rx="7" stroke="rgba(100,210,255,.4)" stroke-width="1.5"/>
  <text x="108" y="140" text-anchor="middle" font-family="Courier New" font-size="10" font-weight="900" fill="#64d2ff">3. TRANSPORTE</text>
  <text x="108" y="154" text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">TCP · UDP · SCTP</text>
  <text x="108" y="167" text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">Portas · Segmentos · Fluxo</text>
  <rect x="215"  y="122" width="498" height="65" fill="rgba(100,210,255,.04)" rx="7" stroke="rgba(100,210,255,.2)" stroke-width="1"/>
  <text x="225" y="140" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#94e3ff">ss -tulpen</text>
  <text x="225" y="153" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#94e3ff">ss -tan state established</text>
  <text x="225" y="166" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#94e3ff">lsof -i :80</text>
  <text x="430" y="140" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#94e3ff">tcpdump port 443</text>
  <text x="430" y="153" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#94e3ff">nc -l -p 8080</text>
  <text x="430" y="166" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#94e3ff">cat /proc/net/tcp</text>
  <!-- L2 Internet -->
  <rect x="8"   y="197" width="200" height="65" fill="rgba(255,209,102,.07)" rx="7" stroke="rgba(255,209,102,.38)" stroke-width="1.5"/>
  <text x="108" y="215" text-anchor="middle" font-family="Courier New" font-size="10" font-weight="900" fill="#ffd166">2. INTERNET</text>
  <text x="108" y="229" text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">IP · ICMP · ARP</text>
  <text x="108" y="242" text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">Endereço lógico · Roteamento</text>
  <rect x="215"  y="197" width="498" height="65" fill="rgba(255,209,102,.03)" rx="7" stroke="rgba(255,209,102,.18)" stroke-width="1"/>
  <text x="225" y="215" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">ip addr show</text>
  <text x="225" y="228" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">ip route show</text>
  <text x="225" y="241" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">ping -c4 8.8.8.8</text>
  <text x="430" y="215" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">ip route get X.X.X.X</text>
  <text x="430" y="228" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">traceroute host</text>
  <text x="430" y="241" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">mtr host</text>
  <!-- L1 Link -->
  <rect x="8"   y="272" width="200" height="65" fill="rgba(57,255,122,.08)" rx="7" stroke="rgba(57,255,122,.38)" stroke-width="1.5"/>
  <text x="108" y="290" text-anchor="middle" font-family="Courier New" font-size="10" font-weight="900" fill="#39ff7a">1. ACESSO À REDE</text>
  <text x="108" y="304" text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">Ethernet · Wi-Fi · Fibra</text>
  <text x="108" y="317" text-anchor="middle" font-family="Courier New" font-size="8"  fill="#8ec9a4">MAC · Frame · Bits</text>
  <rect x="215"  y="272" width="498" height="65" fill="rgba(57,255,122,.03)" rx="7" stroke="rgba(57,255,122,.15)" stroke-width="1"/>
  <text x="225" y="290" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">ip link show</text>
  <text x="225" y="303" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">ethtool eth0</text>
  <text x="225" y="316" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">tcpdump -i eth0 -c 20</text>
  <text x="430" y="290" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">ip neigh show</text>
  <text x="430" y="303" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">cat /sys/class/net/eth0/address</text>
  <text x="430" y="316" text-anchor="start" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">arp -n</text>
  <!-- Vertical connector line -->
  <line x1="108" y1="112" x2="108" y2="122" stroke="#5a8f6e" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="108" y1="187" x2="108" y2="197" stroke="#5a8f6e" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="108" y1="262" x2="108" y2="272" stroke="#5a8f6e" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Legend -->
  <text x="8" y="355" text-anchor="start" font-family="Courier New" font-size="7" fill="#5a8f6e">Esquerda: camada e protocolos. Direita: comandos Linux por camada.</text>
</svg>
<figcaption>Fig. 4 — Modelo TCP/IP de 4 camadas com ferramentas Linux correspondentes. Diagnóstico eficiente começa na camada mais baixa (L1) e sobe até a aplicação.</figcaption>
</div>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">ip</span> addr show                        <span class="tok-comment"># Endereços de todas as interfaces</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ip</span> <span class="tok-opt">-brief</span> addr                      <span class="tok-comment"># Resumo compacto: interface | estado | IPs</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ip</span> link show                        <span class="tok-comment"># Estado de enlace (UP/DOWN/LOWER_UP)</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ip</span> link show dev eth0               <span class="tok-comment"># Detalhes de interface específica</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ethtool</span> eth0                        <span class="tok-comment"># Velocidade, duplex, autoneg da interface</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">cat</span> <span class="tok-path">/sys/class/net/eth0/operstate</span>   <span class="tok-comment"># Estado operacional via sysfs</span></code></pre>
<pre class="output"><code>eth0             UP   192.168.1.100/24 fe80::a00:27ff:fe12:3456/64
lo               UNKNOWN 127.0.0.1/8 ::1/128

2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP
    link/ether 08:00:27:12:34:56 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
    inet6 fe80::a00:27ff:fe12:3456/64 scope link</code></pre>
<div class="callout callout-info">
<strong>Conceito-chave: LOWER_UP vs UP</strong>
<code>UP</code> indica que a interface está habilitada por software. <code>LOWER_UP</code> indica que o link físico está detectado (cabo conectado, sinal de rádio presente). Um servidor pode estar UP sem LOWER_UP — cabo desconectado ou porta do switch desligada.
</div>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Identifique interface principal, IP, máscara CIDR, MAC e estado UP/DOWN/LOWER_UP.</li>
<li>Explique a diferença entre a interface <code>lo</code> e uma interface física/virtual.</li>
<li>Relacione cada comando usado com a camada do modelo TCP/IP que ele opera.</li>
<li>Verifique velocidade e modo duplex da interface com <code>ethtool</code> e explique o impacto de half-duplex.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com comando, saída, interpretação e conclusão.</p></div>
</article>

<!-- M3-A2 -->
<article class="lesson" id="m3-a2">
<div class="lesson-head"><span class="lesson-code">M3-A2</span><h3>Aula 3.2 — Portas, sockets e serviços de rede</h3></div>
<p class="objective"><strong>Objetivo:</strong> Identificar processos que escutam portas, entender a superfície de ataque exposta e correlacionar socket com serviço.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>Socket:</strong> endpoint de comunicação identificado pela quíntupla: <em>protocolo + IP local + porta local + IP remoto + porta remota</em>. Um socket em estado LISTEN tem IP/porta remota indefinidos.</li>
<li><strong>Porta bem conhecida (well-known, 0–1023):</strong> reservada para serviços padrão, requer privilégios de root para binding.</li>
<li><strong>Porta registrada (1024–49151):</strong> aplicações de usuário. <strong>Porta efêmera (49152–65535):</strong> atribuída automaticamente pelo kernel para o lado cliente da conexão.</li>
<li><strong>ss substituiu netstat:</strong> <code>ss</code> do pacote iproute2 acessa <code>/proc/net/tcp</code> diretamente, é mais rápido e mostra mais informações. <code>netstat</code> é legado e pode não estar instalado.</li>
</ul></div>

<h4>Portas de rede mais importantes para engenheiros</h4>
<table class="table">
<thead><tr><th>Porta</th><th>Protocolo</th><th>Serviço</th><th>Relevância para redes</th></tr></thead>
<tbody>
<tr><td><span class="port-badge">22</span></td><td>TCP</td><td>SSH</td><td>Administração remota segura — sempre monitorar tentativas de acesso</td></tr>
<tr><td><span class="port-badge">23</span></td><td>TCP</td><td>Telnet</td><td>Legado e inseguro — jamais usar em produção</td></tr>
<tr><td><span class="port-badge">25</span></td><td>TCP</td><td>SMTP</td><td>Transferência de e-mail entre servidores</td></tr>
<tr><td><span class="port-badge">53</span></td><td>TCP/UDP</td><td>DNS</td><td>Resolução de nomes — crítico para toda comunicação</td></tr>
<tr><td><span class="port-badge">67/68</span></td><td>UDP</td><td>DHCP</td><td>Atribuição dinâmica de endereços IP</td></tr>
<tr><td><span class="port-badge">80</span></td><td>TCP</td><td>HTTP</td><td>Web sem criptografia — evitar para dados sensíveis</td></tr>
<tr><td><span class="port-badge">123</span></td><td>UDP</td><td>NTP</td><td>Sincronização de tempo — crítico para logs e certificados</td></tr>
<tr><td><span class="port-badge">161/162</span></td><td>UDP</td><td>SNMP</td><td>Monitoramento de dispositivos de rede</td></tr>
<tr><td><span class="port-badge">443</span></td><td>TCP</td><td>HTTPS</td><td>Web com TLS — padrão para produção</td></tr>
<tr><td><span class="port-badge">514</span></td><td>UDP/TCP</td><td>Syslog</td><td>Log centralizado de dispositivos de rede</td></tr>
<tr><td><span class="port-badge">3306</span></td><td>TCP</td><td>MySQL</td><td>Banco de dados — nunca expor à internet</td></tr>
<tr><td><span class="port-badge">179</span></td><td>TCP</td><td>BGP</td><td>Roteamento entre sistemas autônomos (ASN)</td></tr>
</tbody>
</table>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">ss</span> <span class="tok-opt">-tulpen</span>                          <span class="tok-comment"># TCP+UDP em escuta, processos, usuário, socket</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ss</span> <span class="tok-opt">-tan</span> state established            <span class="tok-comment"># Conexões TCP ativas estabelecidas</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ss</span> <span class="tok-opt">-s</span>                                <span class="tok-comment"># Resumo estatístico de todos os sockets</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">lsof</span> <span class="tok-opt">-i</span> :22                          <span class="tok-comment"># Processos usando porta 22</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">systemctl</span> <span class="tok-opt">--type=service</span> <span class="tok-opt">--state=running</span> <span class="tok-comment"># Serviços ativos</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">grep</span> <span class="tok-opt">-w</span> "ssh" <span class="tok-path">/etc/services</span>        <span class="tok-comment"># Confirma porta padrão do SSH</span></code></pre>
<pre class="output"><code>Netid  State   Recv-Q  Send-Q  Local Address:Port   Peer Address:Port  Process
tcp    LISTEN  0       128     0.0.0.0:22            0.0.0.0:*         users:(("sshd",pid=892,fd=3))
tcp    LISTEN  0       511     0.0.0.0:80            0.0.0.0:*         users:(("nginx",pid=1024,fd=6))
udp    UNCONN  0       0       127.0.0.53:53         0.0.0.0:*         users:(("systemd-r",pid=512,fd=12))</code></pre>
<div class="callout callout-warn">
<strong>Atenção — superfície de ataque</strong>
Cada porta em LISTEN é um ponto de entrada potencial. Servidores mínimos devem expor apenas as portas necessárias. Verifique periodicamente com <code>ss -tulpen</code> se há novos serviços que não deveriam estar ouvindo — isso pode indicar comprometimento.
</div>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Identifique todas as portas em escuta e associe cada uma a um serviço/processo.</li>
<li>Defina quais portas são aceitáveis em servidor mínimo (só SSH) e quais devem ser removidas.</li>
<li>Verifique se algum serviço está ouvindo em 0.0.0.0 quando deveria ouvir só em 127.0.0.1.</li>
<li>Explique a diferença entre um serviço ouvindo em 0.0.0.0 vs 127.0.0.1.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com comando, saída, interpretação e conclusão.</p></div>
</article>

<!-- M3-A3 -->
<article class="lesson" id="m3-a3">
<div class="lesson-head"><span class="lesson-code">M3-A3</span><h3>Aula 3.3 — DNS e resolução de nomes</h3></div>
<p class="objective"><strong>Objetivo:</strong> Diagnosticar problemas de resolução separando conectividade IP, DNS e aplicação. Entender o fluxo completo da resolução recursiva.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>DNS (Domain Name System):</strong> sistema hierárquico distribuído que traduz nomes legíveis (www.unb.br) em endereços IP e outros registros.</li>
<li><strong>Fluxo de resolução:</strong> cache local → <code>/etc/hosts</code> → stub resolver (127.0.0.53) → resolver recursivo (ISP/8.8.8.8) → servidores autoritativos (root → TLD → domínio).</li>
<li><strong>/etc/nsswitch.conf:</strong> define a ordem de consulta para resolução de nomes. Linha típica: <code>hosts: files dns</code> — verifica <code>/etc/hosts</code> antes do DNS.</li>
<li><strong>Falha de DNS ≠ falha de rede:</strong> <code>ping 8.8.8.8</code> pode funcionar (IP ok) enquanto <code>ping google.com</code> falha (DNS com problema) — diagnóstico deve separar as duas camadas.</li>
</ul></div>

<h4>Diagrama: Fluxo de resolução DNS recursiva</h4>
<div class="svg-wrap">
<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <defs>
    <marker id="da" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#39ff7a"/></marker>
    <marker id="dr" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#ffd166"/></marker>
  </defs>
  <rect width="720" height="260" fill="#010403" rx="10"/>
  <!-- Nodes -->
  <rect x="8"   y="100" width="80" height="44" fill="rgba(57,255,122,.12)"  rx="6" stroke="rgba(57,255,122,.5)"  stroke-width="1.5"/>
  <text x="48"  y="118" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">CLIENTE</text>
  <text x="48"  y="132" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">aplicação</text>
  <rect x="103" y="100" width="80" height="44" fill="rgba(100,210,255,.1)"  rx="6" stroke="rgba(100,210,255,.4)" stroke-width="1"/>
  <text x="143" y="116" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#64d2ff">/etc/hosts</text>
  <text x="143" y="128" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">cache local</text>
  <text x="143" y="139" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">127.0.0.53</text>
  <rect x="198" y="100" width="80" height="44" fill="rgba(100,210,255,.1)"  rx="6" stroke="rgba(100,210,255,.4)" stroke-width="1"/>
  <text x="238" y="116" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#64d2ff">RESOLVER</text>
  <text x="238" y="128" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">recursivo</text>
  <text x="238" y="139" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">8.8.8.8</text>
  <rect x="293" y="70"  width="80" height="44" fill="rgba(255,209,102,.1)"  rx="6" stroke="rgba(255,209,102,.4)" stroke-width="1"/>
  <text x="333" y="88"  text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">ROOT NS</text>
  <text x="333" y="100" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">13 clusters</text>
  <text x="333" y="111" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">a.root-ns.br</text>
  <rect x="388" y="100" width="80" height="44" fill="rgba(255,209,102,.1)"  rx="6" stroke="rgba(255,209,102,.4)" stroke-width="1"/>
  <text x="428" y="116" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">TLD NS</text>
  <text x="428" y="128" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">ns.br / .com</text>
  <text x="428" y="139" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">ns1.nic.br</text>
  <rect x="483" y="100" width="90" height="44" fill="rgba(199,146,234,.12)" rx="6" stroke="rgba(199,146,234,.45)" stroke-width="1.5"/>
  <text x="528" y="116" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">AUTH NS</text>
  <text x="528" y="128" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">autoritativo</text>
  <text x="528" y="139" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">ns.unb.br</text>
  <rect x="583" y="100" width="90" height="44" fill="rgba(57,255,122,.15)"  rx="6" stroke="rgba(57,255,122,.5)"  stroke-width="2"/>
  <text x="628" y="116" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">RESPOSTA</text>
  <text x="628" y="128" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">164.41.0.1</text>
  <text x="628" y="139" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">TTL 300s</text>
  <!-- Forward arrows (query) -->
  <line x1="88"  y1="118" x2="101" y2="118" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#da)"/>
  <line x1="183" y1="118" x2="196" y2="118" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#da)"/>
  <line x1="278" y1="108" x2="291" y2="96"  stroke="#39ff7a" stroke-width="1.5" marker-end="url(#da)"/>
  <line x1="373" y1="96"  x2="386" y2="108" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#da)"/>
  <line x1="468" y1="118" x2="481" y2="118" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#da)"/>
  <line x1="573" y1="118" x2="581" y2="118" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#da)"/>
  <!-- Return arrow (response) -->
  <line x1="628" y1="144" x2="628" y2="175" stroke="#ffd166" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="628" y1="175" x2="48"  y2="175" stroke="#ffd166" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="48"  y1="175" x2="48"  y2="145" stroke="#ffd166" stroke-width="1" stroke-dasharray="4,2" marker-end="url(#dr)"/>
  <text x="338" y="190" text-anchor="middle" font-family="Courier New" font-size="7" fill="#ffd166">◄── resposta com cache (TTL) retornada ao cliente</text>
  <!-- Labels -->
  <text x="48"  y="80" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">1. consulta</text>
  <text x="143" y="80" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">2. /etc/hosts</text>
  <text x="238" y="80" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">3. recurse</text>
  <text x="333" y="55" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">4. root</text>
  <text x="428" y="80" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">5. TLD</text>
  <text x="528" y="80" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">6. auth</text>
  <text x="628" y="80" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">7. A/AAAA</text>
  <!-- Bottom note -->
  <text x="360" y="225" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">Cada resposta é cacheada pelo TTL. Após o TTL expirar o processo recomeça. dig +trace mostra cada salto.</text>
</svg>
<figcaption>Fig. 5 — Fluxo de resolução DNS recursiva. O cliente nunca consulta os servidores autoritativos diretamente — o resolver recursivo faz o trabalho e entrega a resposta com cache.</figcaption>
</div>

<h4>Tipos de registros DNS</h4>
<table class="table">
<thead><tr><th>Tipo</th><th>Função</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td><code>A</code></td><td>Nome → IPv4</td><td><code>www.unb.br → 164.41.0.1</code></td></tr>
<tr><td><code>AAAA</code></td><td>Nome → IPv6</td><td><code>www.unb.br → 2001:db8::1</code></td></tr>
<tr><td><code>CNAME</code></td><td>Alias → nome canônico</td><td><code>mail.unb.br → ghs.google.com</code></td></tr>
<tr><td><code>MX</code></td><td>Servidor de e-mail do domínio</td><td><code>unb.br → aspmx.l.google.com (prioridade 1)</code></td></tr>
<tr><td><code>PTR</code></td><td>IP → nome (DNS reverso)</td><td><code>1.0.41.164.in-addr.arpa → www.unb.br</code></td></tr>
<tr><td><code>NS</code></td><td>Servidores autoritativos do domínio</td><td><code>unb.br → ns1.unb.br, ns2.unb.br</code></td></tr>
<tr><td><code>TXT</code></td><td>Texto livre (SPF, DKIM, verificação)</td><td><code>unb.br → "v=spf1 include:..."</code></td></tr>
<tr><td><code>SOA</code></td><td>Informações de autoridade da zona</td><td>Serial, refresh, retry, expire, TTL mínimo</td></tr>
</tbody>
</table>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">cat</span> <span class="tok-path">/etc/resolv.conf</span>                <span class="tok-comment"># Resolvers configurados</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">cat</span> <span class="tok-path">/etc/nsswitch.conf</span> <span class="tok-op">|</span> <span class="tok-cmd">grep</span> hosts  <span class="tok-comment"># Ordem de resolução de nomes</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">dig</span> www.unb.br                       <span class="tok-comment"># Consulta DNS detalhada com TTL</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">dig</span> <span class="tok-opt">-t</span> MX unb.br                     <span class="tok-comment"># Servidores de e-mail do domínio</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">dig</span> <span class="tok-opt">+trace</span> www.unb.br               <span class="tok-comment"># Rastreia cada passo da resolução recursiva</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">dig</span> <span class="tok-opt">+short</span> www.unb.br @8.8.8.8      <span class="tok-comment"># Consulta no resolver do Google, saída curta</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">dig</span> <span class="tok-opt">-x</span> 164.41.0.1                    <span class="tok-comment"># DNS reverso: IP -> nome</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ping</span> <span class="tok-opt">-c</span> 4 8.8.8.8 <span class="tok-op">&amp;&amp;</span> <span class="tok-cmd">ping</span> <span class="tok-opt">-c</span> 4 www.unb.br <span class="tok-comment"># Testa IP e DNS separados</span></code></pre>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Use <code>dig +trace</code> em um domínio e identifique cada nível hierárquico consultado.</li>
<li>Consulte registros A, MX, NS e TXT de um domínio acadêmico e explique cada resultado.</li>
<li>Simule falha de DNS adicionando entrada errada em <code>/etc/hosts</code> e verifique o comportamento.</li>
<li>Explique como o TTL impacta a propagação de mudanças de DNS em produção.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com comando, saída, interpretação e conclusão.</p></div>
</article>

<!-- M3-A4 -->
<article class="lesson" id="m3-a4">
<div class="lesson-head"><span class="lesson-code">M3-A4</span><h3>Aula 3.4 — Rotas, troubleshooting e captura de pacotes</h3></div>
<p class="objective"><strong>Objetivo:</strong> Aplicar método sistemático de diagnóstico: interface → IP → rota → DNS → porta → aplicação, com evidências reprodutíveis.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>Tabela de roteamento:</strong> lista de regras que o kernel consulta para decidir por qual interface e gateway enviar cada pacote. Rota mais específica tem prioridade (longest prefix match).</li>
<li><strong>Gateway padrão:</strong> rota <code>0.0.0.0/0</code> usada quando nenhuma rota mais específica existe. Sem gateway padrão, o host só alcança redes locais diretamente conectadas.</li>
<li><strong>tcpdump:</strong> captura pacotes em qualquer interface, em tempo real ou para arquivo pcap (análise em Wireshark). Exige privilégios de root. Use filtros BPF para focar no tráfego relevante.</li>
<li><strong>Método de diagnóstico em camadas:</strong> nunca pule etapas. Um problema de aplicação pode ter causa em camadas inferiores; diagnosticar a camada errada desperdiça tempo.</li>
</ul></div>

<h4>Método sistemático de troubleshooting de rede</h4>
<div class="diagram">
Passo 1 — Interface física (L1)
  ip link show → estado UP? LOWER_UP? MTU correto?

Passo 2 — Endereçamento IP (L2/L3)
  ip addr show → IP atribuído? Máscara correta? Conflito?

Passo 3 — Roteamento (L3)
  ip route show → gateway padrão existe?
  ip route get DEST → qual rota seria usada para o destino?

Passo 4 — Conectividade IP básica (L3)
  ping -c4 GATEWAY → alcança o gateway local?
  ping -c4 8.8.8.8   → alcança a internet por IP?

Passo 5 — Resolução de nomes (L7 auxiliar)
  dig www.destino.com → DNS responde? TTL razoável?
  ping -c4 www.destino.com → o nome resolve?

Passo 6 — Porta e serviço (L4)
  nc -zv HOST PORTA → a porta está alcançável?
  curl -I https://HOST → a aplicação responde?

Passo 7 — Evidência (captura)
  tcpdump -i eth0 host DEST → o tráfego está saindo?
  tcpdump -i eth0 port 443  → há resposta?</div>

<h4>Filtros BPF para tcpdump</h4>
<pre class="cmd"><code><span class="tok-prompt">#</span> <span class="tok-comment">Captura básica</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">tcpdump</span> <span class="tok-opt">-i</span> eth0 <span class="tok-opt">-c</span> 20           <span class="tok-comment"># 20 pacotes na interface eth0</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">tcpdump</span> <span class="tok-opt">-i</span> any <span class="tok-opt">-nn</span> port 53      <span class="tok-comment"># DNS em todas as interfaces, sem resolução</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">tcpdump</span> <span class="tok-opt">-i</span> eth0 host 8.8.8.8    <span class="tok-comment"># Tráfego para/de IP específico</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">tcpdump</span> <span class="tok-opt">-i</span> eth0 tcp and port 443 <span class="tok-comment"># Apenas HTTPS TCP</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">tcpdump</span> <span class="tok-opt">-i</span> eth0 <span class="tok-opt">-w</span> captura.pcap <span class="tok-comment"># Salva pcap para Wireshark</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ip</span> route show                         <span class="tok-comment"># Tabela de roteamento completa</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ip</span> route get 8.8.8.8                  <span class="tok-comment"># Interface e gateway escolhidos para destino</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">traceroute</span> <span class="tok-opt">-n</span> www.unb.br              <span class="tok-comment"># Caminho sem resolver nomes (-n mais rápido)</span></code></pre>
<div class="callout callout-danger">
<strong>Ética e legalidade em captura de tráfego</strong>
tcpdump captura TODO o tráfego da interface, incluindo dados de outros usuários na rede. Use apenas em redes e dispositivos sob sua administração autorizada. Em redes corporativas, políticas de segurança e legislação (LGPD, Marco Civil) regulam captura de tráfego. Documente sempre a autorização recebida.
</div>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Execute o diagnóstico completo em 7 passos para um destino web e documente cada resultado.</li>
<li>Capture pacotes DNS com tcpdump e explique o que cada campo do pacote significa.</li>
<li>Salve uma captura em pcap e abra no Wireshark para analisar o handshake TCP.</li>
<li>Simule um problema (desative o gateway) e aplique o método para identificar a causa.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com evidência de cada passo do diagnóstico.</p></div>
</article>

<div class="quiz" id="quiz-m3">
<h3>Avaliação do módulo — Linux para Redes</h3>
<p>10 questões objetivas. Aprovação: 70 % (7/10).</p>
<div class="quiz-body" data-module="m3"></div>
<button onclick="gradeQuiz('m3')">Corrigir avaliação</button>
<div class="result" id="result-m3"></div>
</div>
</section>

<!-- ══════════ MÓDULO 4 ══════════ -->
<section class="module module-block" id="m4">
<div class="module-title"><span class="num">Módulo 4</span><h2>Segurança Linux</h2></div>
<p class="lead">Hardening, autenticação, logs, firewall, SSH seguro, fail2ban e auditoria defensiva — base para operar servidores em ambientes adversariais.</p>
<div class="module-map">
  <a class="mini-card" href="#m4-a1"><strong>Aula 4.1 — Princípios de hardening</strong><span>Reduzir superfície de ataque com menor privilégio e configuração segura.</span></a>
  <a class="mini-card" href="#m4-a2"><strong>Aula 4.2 — Logs e investigação de autenticação</strong><span>Correlacionar eventos de login, sudo e SSH para análise defensiva.</span></a>
  <a class="mini-card" href="#m4-a3"><strong>Aula 4.3 — Firewall de host</strong><span>Netfilter, chains INPUT/OUTPUT/FORWARD e ferramentas de administração.</span></a>
  <a class="mini-card" href="#m4-a4"><strong>Aula 4.4 — SSH seguro e auditoria defensiva</strong><span>Chaves, configuração sshd, fail2ban e checklist de acesso remoto.</span></a>
</div>

<!-- M4-A1 -->
<article class="lesson" id="m4-a1">
<div class="lesson-head"><span class="lesson-code">M4-A1</span><h3>Aula 4.1 — Princípios de hardening</h3></div>
<p class="objective"><strong>Objetivo:</strong> Reduzir superfície de ataque por configuração segura, remoção do desnecessário e menor privilégio — sem comprometer funcionalidade.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>Superfície de ataque:</strong> conjunto de todos os pontos onde um adversário pode tentar comprometer o sistema: portas abertas, serviços em execução, contas ativas, binários SUID, pacotes instalados.</li>
<li><strong>Princípio do menor privilégio:</strong> cada conta, processo e serviço opera com o mínimo de permissões necessário. Limitação do impacto de comprometimento.</li>
<li><strong>Instalação mínima:</strong> remover pacotes, serviços e usuários desnecessários. O que não existe não pode ser explorado.</li>
<li><strong>CIS Benchmarks:</strong> guias de configuração segura do Center for Internet Security — referência para hardening de Linux, disponíveis gratuitamente em cisecurity.org.</li>
<li><strong>Defesa em profundidade:</strong> múltiplas camadas de controle; nenhuma camada é suficiente sozinha — firewall + autenticação + permissões + logs + atualizações.</li>
</ul></div>

<h4>Categorias de superfície de ataque</h4>
<table class="table">
<thead><tr><th>Categoria</th><th>Exemplo de risco</th><th>Mitigação</th></tr></thead>
<tbody>
<tr><td>Serviços de rede</td><td>Porta 23 (Telnet) aberta</td><td>Desinstalar ou desabilitar com systemctl disable</td></tr>
<tr><td>Contas de usuário</td><td>Conta padrão com senha fraca</td><td>Desabilitar contas não usadas; forçar senha forte</td></tr>
<tr><td>Permissões excessivas</td><td>Diretório /tmp com 777 sem sticky bit</td><td>chmod 1777 /tmp; revisar SUID/SGID</td></tr>
<tr><td>Pacotes desnecessários</td><td>Compiler (gcc) instalado em servidor web</td><td>apt purge build-essential em produção</td></tr>
<tr><td>Configurações padrão</td><td>PermitRootLogin yes no sshd</td><td>Revisar e endurecer arquivos em /etc</td></tr>
<tr><td>Software desatualizado</td><td>OpenSSL com CVE crítico</td><td>apt upgrade; monitorar CVEs</td></tr>
</tbody>
</table>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">ss</span> <span class="tok-opt">-tulpen</span>                             <span class="tok-comment"># Mapeia todas as portas em escuta</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">systemctl</span> <span class="tok-opt">--type=service</span> <span class="tok-opt">--state=running</span> <span class="tok-comment"># Serviços ativos</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">find</span> <span class="tok-path">/</span> <span class="tok-opt">-perm</span> <span class="tok-opt">-4000</span> <span class="tok-opt">-type</span> f 2<span class="tok-op">&gt;</span><span class="tok-path">/dev/null</span> <span class="tok-comment"># Binários SUID</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">find</span> <span class="tok-path">/</span> <span class="tok-opt">-perm</span> <span class="tok-opt">-2000</span> <span class="tok-opt">-type</span> f 2<span class="tok-op">&gt;</span><span class="tok-path">/dev/null</span> <span class="tok-comment"># Binários SGID</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">awk</span> <span class="tok-opt">-F:</span> '($3==0){print}' <span class="tok-path">/etc/passwd</span>  <span class="tok-comment"># Contas com UID 0 (root) — deve ser só root</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">grep</span> <span class="tok-opt">-v</span> "nologin\|false" <span class="tok-path">/etc/passwd</span>   <span class="tok-comment"># Contas com shell interativo</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">dpkg</span> <span class="tok-opt">-l</span> <span class="tok-op">|</span> <span class="tok-cmd">grep</span> <span class="tok-opt">-E</span> "telnet|ftp|rsh"    <span class="tok-comment"># Protocolos legados inseguros</span></code></pre>
<div class="callout callout-tip">
<strong>Dica — hardening pós-instalação</strong>
Execute os seguintes passos em qualquer servidor novo: (1) <code>apt update &amp;&amp; apt upgrade</code>, (2) revisar <code>ss -tulpen</code> e desabilitar o desnecessário, (3) verificar contas em <code>/etc/passwd</code>, (4) checar binários SUID, (5) configurar firewall básico, (6) desabilitar autenticação de root via SSH.
</div>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Audite a VM de laboratório contra as 6 categorias de superfície de ataque da tabela.</li>
<li>Proponha e aplique pelo menos 3 medidas de redução de risco documentadas.</li>
<li>Verifique se existe alguma conta com UID 0 além de root e explique o risco.</li>
<li>Pesquise o CIS Benchmark para Ubuntu e identifique 5 recomendações aplicáveis ao laboratório.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com evidência antes e depois de cada medida.</p></div>
</article>

<!-- M4-A2 -->
<article class="lesson" id="m4-a2">
<div class="lesson-head"><span class="lesson-code">M4-A2</span><h3>Aula 4.2 — Logs e investigação de autenticação</h3></div>
<p class="objective"><strong>Objetivo:</strong> Correlacionar eventos de login, sudo e SSH para reconstruir hipóteses defensivas e identificar padrões de ataque.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>Logs como evidência:</strong> logs são a memória do sistema. Preservá-los íntegros é requisito legal (LGPD, frameworks de segurança) e técnico.</li>
<li><strong>journald vs syslog:</strong> em sistemas com systemd, journald centraliza logs estruturados de kernel, serviços e usuários. Pode coexistir com rsyslog para encaminhamento a servidores de log centralizados.</li>
<li><strong>Investigação por linha do tempo:</strong> correlacione: quando (timestamp), quem (usuário), de onde (IP de origem), o quê (ação) e resultado (sucesso/falha).</li>
<li><strong>Padrão de ataque de força bruta:</strong> dezenas/centenas de falhas de autenticação do mesmo IP em curto intervalo. Isolado vs padrão é a diferença entre erro de digitação e ataque em andamento.</li>
</ul></div>

<h4>Fontes de log de autenticação</h4>
<table class="table">
<thead><tr><th>Fonte</th><th>Conteúdo</th><th>Comando</th></tr></thead>
<tbody>
<tr><td><code>journalctl -u ssh</code></td><td>Eventos do serviço SSH via systemd</td><td><code>journalctl -u ssh --since today</code></td></tr>
<tr><td><code>/var/log/auth.log</code></td><td>Autenticações, sudo, SSH (Debian/Ubuntu)</td><td><code>grep "Failed\|Accepted" /var/log/auth.log</code></td></tr>
<tr><td><code>/var/log/secure</code></td><td>Equivalente em RHEL/CentOS</td><td><code>grep "Failed\|Accepted" /var/log/secure</code></td></tr>
<tr><td><code>last</code> / <code>lastb</code></td><td>Logins bem-sucedidos / falhos (binário wtmp/btmp)</td><td><code>last -20</code> / <code>sudo lastb -20</code></td></tr>
<tr><td><code>lastlog</code></td><td>Último login por usuário</td><td><code>lastlog | grep -v "Never"</code></td></tr>
</tbody>
</table>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">journalctl</span> <span class="tok-opt">--since</span> today <span class="tok-opt">--no-pager</span> <span class="tok-op">|</span> <span class="tok-cmd">head</span> <span class="tok-comment"># Eventos do dia</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">journalctl</span> _COMM=sudo <span class="tok-opt">--since</span> today          <span class="tok-comment"># Uso de sudo hoje</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">journalctl</span> <span class="tok-opt">-u</span> ssh <span class="tok-opt">-p</span> warning <span class="tok-opt">--since</span> "1 hour ago" <span class="tok-comment"># Avisos SSH na última hora</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">grep</span> <span class="tok-opt">-i</span> "failed" <span class="tok-path">/var/log/auth.log</span> <span class="tok-op">|</span> <span class="tok-cmd">awk</span> '{print $11}' <span class="tok-op">|</span> <span class="tok-cmd">sort</span> <span class="tok-op">|</span> <span class="tok-cmd">uniq</span> <span class="tok-opt">-c</span> <span class="tok-op">|</span> <span class="tok-cmd">sort</span> <span class="tok-opt">-rn</span> <span class="tok-op">|</span> <span class="tok-cmd">head</span> <span class="tok-comment"># Top IPs de falha</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">last</span> <span class="tok-opt">-20</span>                                      <span class="tok-comment"># 20 últimos logins</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">lastb</span> <span class="tok-opt">-20</span>                               <span class="tok-comment"># 20 últimas tentativas de login com falha</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">lastlog</span> <span class="tok-op">|</span> <span class="tok-cmd">grep</span> <span class="tok-opt">-v</span> "Never logged"              <span class="tok-comment"># Usuários que já fizeram login</span></code></pre>
<pre class="output"><code>Linha do tempo de ataque de força bruta (exemplo):
Jan 15 03:21:44 sshd[4521]: Failed password for root from 185.234.x.x port 48201
Jan 15 03:21:46 sshd[4522]: Failed password for root from 185.234.x.x port 48234
Jan 15 03:21:48 sshd[4523]: Failed password for admin from 185.234.x.x port 48267
... (centenas de linhas em minutos = ataque de força bruta confirmado)

Top IPs com falha:
    847 from=185.234.x.x   ← ataque em andamento
      3 from=10.0.0.5       ← provável erro de digitação local</code></pre>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Construa linha do tempo de autenticação do dia: quem, quando, de onde, resultado.</li>
<li>Crie um script shell que extrai top-10 IPs com falha de autenticação nas últimas 24h.</li>
<li>Diferencie uma falha isolada de um padrão de força bruta usando critérios objetivos (volume, intervalo, variação de usuário).</li>
<li>Explique como centralizar logs de múltiplos servidores Linux em um servidor syslog central.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com evidências e análise defensiva.</p></div>
</article>

<!-- M4-A3 -->
<article class="lesson" id="m4-a3">
<div class="lesson-head"><span class="lesson-code">M4-A3</span><h3>Aula 4.3 — Firewall de host</h3></div>
<p class="objective"><strong>Objetivo:</strong> Compreender as chains Netfilter INPUT/OUTPUT/FORWARD antes de criar qualquer regra, e aplicar configuração mínima e segura.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>Netfilter:</strong> framework no kernel Linux que intercepta pacotes em pontos específicos da pilha de rede. <code>iptables</code>, <code>nftables</code> e <code>ufw</code> são interfaces de configuração do Netfilter.</li>
<li><strong>Chains principais:</strong> PREROUTING (antes do roteamento), INPUT (para processos locais), FORWARD (roteado entre interfaces), OUTPUT (gerado localmente), POSTROUTING (após roteamento).</li>
<li><strong>Stateful filtering:</strong> rastrear estado de conexão (NEW, ESTABLISHED, RELATED, INVALID) permite aceitar respostas a conexões iniciadas localmente sem abrir portas adicionais.</li>
<li><strong>Política padrão:</strong> ACCEPT é permissivo (libera tudo que não tem regra); DROP é restritivo (bloqueia tudo que não tem regra — recomendado para INPUT).</li>
</ul></div>

<h4>Diagrama: Chains Netfilter e fluxo de pacotes</h4>
<div class="svg-wrap">
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <defs>
    <marker id="fa" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#39ff7a"/></marker>
    <marker id="fb" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#64d2ff"/></marker>
    <marker id="fc" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#ffd166"/></marker>
  </defs>
  <rect width="720" height="280" fill="#010403" rx="10"/>
  <!-- Internet left -->
  <rect x="8"  y="105" width="68" height="40" fill="rgba(90,143,110,.18)" rx="6" stroke="rgba(90,143,110,.5)" stroke-width="1.5"/>
  <text x="42" y="121" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#5a8f6e">REDE</text>
  <text x="42" y="135" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">entrada</text>
  <!-- PREROUTING -->
  <rect x="88"  y="105" width="96" height="40" fill="rgba(199,146,234,.1)" rx="6" stroke="rgba(199,146,234,.4)" stroke-width="1"/>
  <text x="136" y="121" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">PREROUTING</text>
  <text x="136" y="134" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">DNAT/redir</text>
  <!-- Routing decision -->
  <rect x="196" y="105" width="80" height="40" fill="rgba(255,209,102,.1)" rx="6" stroke="rgba(255,209,102,.4)" stroke-width="1.5"/>
  <text x="236" y="118" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">ROTEAMENTO</text>
  <text x="236" y="131" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">local/fwd?</text>
  <!-- INPUT -->
  <rect x="290" y="60"  width="90" height="40" fill="rgba(57,255,122,.15)" rx="6" stroke="rgba(57,255,122,.5)" stroke-width="2"/>
  <text x="335" y="77"  text-anchor="middle" font-family="Courier New" font-size="9" font-weight="900" fill="#39ff7a">INPUT</text>
  <text x="335" y="91"  text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">proc. locais</text>
  <!-- Local process -->
  <rect x="395" y="60"  width="90" height="40" fill="rgba(57,255,122,.08)" rx="6" stroke="rgba(57,255,122,.3)" stroke-width="1"/>
  <text x="440" y="77"  text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">PROCESSO</text>
  <text x="440" y="91"  text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">sshd, nginx...</text>
  <!-- OUTPUT -->
  <rect x="495" y="60"  width="90" height="40" fill="rgba(100,210,255,.12)" rx="6" stroke="rgba(100,210,255,.4)" stroke-width="1.5"/>
  <text x="540" y="77"  text-anchor="middle" font-family="Courier New" font-size="9" font-weight="900" fill="#64d2ff">OUTPUT</text>
  <text x="540" y="91"  text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">gen. local</text>
  <!-- FORWARD -->
  <rect x="290" y="160" width="90" height="40" fill="rgba(255,209,102,.12)" rx="6" stroke="rgba(255,209,102,.4)" stroke-width="1.5"/>
  <text x="335" y="177" text-anchor="middle" font-family="Courier New" font-size="9" font-weight="900" fill="#ffd166">FORWARD</text>
  <text x="335" y="191" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">roteado/NAT</text>
  <!-- POSTROUTING -->
  <rect x="600" y="105" width="96" height="40" fill="rgba(199,146,234,.1)" rx="6" stroke="rgba(199,146,234,.4)" stroke-width="1"/>
  <text x="648" y="121" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">POSTROUTING</text>
  <text x="648" y="134" text-anchor="middle" font-family="Courier New" font-size="7" fill="#8ec9a4">SNAT/masq</text>
  <!-- Internet right -->
  <rect x="706" y="105" width="8"  height="40" fill="rgba(90,143,110,.18)" rx="2" stroke="rgba(90,143,110,.4)" stroke-width="1"/>
  <!-- Arrows -->
  <line x1="76"  y1="125" x2="86"  y2="125" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#fa)"/>
  <line x1="184" y1="125" x2="194" y2="125" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#fa)"/>
  <!-- To INPUT -->
  <line x1="236" y1="105" x2="236" y2="85" stroke="#39ff7a" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="236" y1="85"  x2="288" y2="82"  stroke="#39ff7a" stroke-width="1" marker-end="url(#fa)"/>
  <!-- INPUT to process -->
  <line x1="380" y1="80"  x2="393" y2="80"  stroke="#39ff7a" stroke-width="1.5" marker-end="url(#fa)"/>
  <!-- Process to OUTPUT -->
  <line x1="485" y1="80"  x2="493" y2="80"  stroke="#64d2ff" stroke-width="1.5" marker-end="url(#fb)"/>
  <!-- OUTPUT to POSTROUTING -->
  <line x1="585" y1="80"  x2="620" y2="110" stroke="#64d2ff" stroke-width="1" marker-end="url(#fb)"/>
  <!-- To FORWARD -->
  <line x1="236" y1="145" x2="236" y2="178" stroke="#ffd166" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="236" y1="178" x2="288" y2="178" stroke="#ffd166" stroke-width="1" marker-end="url(#fc)"/>
  <!-- FORWARD to POSTROUTING -->
  <line x1="380" y1="178" x2="630" y2="140" stroke="#ffd166" stroke-width="1" marker-end="url(#fc)"/>
  <!-- POSTROUTING out -->
  <line x1="696" y1="125" x2="704" y2="125" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#fa)"/>
  <!-- Labels -->
  <text x="360" y="240" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#39ff7a">Fluxo local (SSH, HTTP...)</text>
  <line x1="250" y1="245" x2="360" y2="245" stroke="#39ff7a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="360" y="260" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#ffd166">Fluxo roteado (firewall/gateway)</text>
  <line x1="250" y1="265" x2="360" y2="265" stroke="#ffd166" stroke-width="1" stroke-dasharray="3,2"/>
</svg>
<figcaption>Fig. 6 — Chains Netfilter. Tráfego destinado ao próprio host passa por INPUT. Tráfego roteado entre interfaces passa por FORWARD. Todo tráfego de saída passa por OUTPUT.</figcaption>
</div>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">nft</span> list ruleset                   <span class="tok-comment"># Regras nftables (moderno)</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">iptables</span> <span class="tok-opt">-L</span> <span class="tok-opt">-n</span> <span class="tok-opt">-v</span> <span class="tok-opt">--line-numbers</span>  <span class="tok-comment"># Regras iptables com contadores</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">ufw</span> status verbose                 <span class="tok-comment"># Estado do UFW (Ubuntu)</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">ufw</span> enable                          <span class="tok-comment"># Ativa UFW (política padrão: deny incoming)</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">ufw</span> allow 22/tcp                    <span class="tok-comment"># Libera SSH</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">ufw</span> limit 22/tcp                    <span class="tok-comment"># Libera SSH com rate-limiting (anti brute-force)</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">ufw</span> allow from 192.168.0.0/24       <span class="tok-comment"># Libera sub-rede interna</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">ufw</span> deny 23/tcp                     <span class="tok-comment"># Bloqueia Telnet explicitamente</span></code></pre>
<div class="callout callout-warn">
<strong>Atenção — ordem das regras e política padrão</strong>
Em iptables/nftables, regras são avaliadas em ordem. A primeira que corresponde é aplicada. Com política padrão DROP no INPUT, você precisa explicitamente liberar o SSH <em>antes</em> de ativar o firewall — caso contrário perde acesso remoto. Sempre teste em console local antes de mudar política padrão de INPUT.
</div>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Verifique qual ferramenta de firewall existe na VM (ufw, iptables, nftables, firewalld).</li>
<li>Configure política mínima: liberar SSH (porta 22), bloquear todo o resto no INPUT.</li>
<li>Desenhe o fluxo de um pacote SSH entrante pelas chains Netfilter da Fig. 6.</li>
<li>Explique a diferença entre DROP e REJECT como política padrão (impacto em diagnóstico).</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com regras aplicadas, testes e evidências.</p></div>
</article>

<!-- M4-A4 -->
<article class="lesson" id="m4-a4">
<div class="lesson-head"><span class="lesson-code">M4-A4</span><h3>Aula 4.4 — SSH seguro e auditoria defensiva</h3></div>
<p class="objective"><strong>Objetivo:</strong> Aplicar boas práticas de acesso remoto: chaves criptográficas, configuração sshd, fail2ban e checklist de auditoria.</p>
<div class="theory"><h4>Teoria essencial</h4><ul>
<li><strong>SSH (Secure Shell, RFC 4251):</strong> protocolo criptográfico para acesso remoto seguro. Usa criptografia assimétrica para troca de chaves e autenticação, e simétrica para o canal de dados.</li>
<li><strong>Autenticação por chave pública:</strong> cliente tem par privada/pública. A pública fica no servidor em <code>~/.ssh/authorized_keys</code>. O servidor desafia o cliente a provar posse da privada sem transmiti-la.</li>
<li><strong>Tipos de chave:</strong> Ed25519 (recomendado — menor, rápido, seguro), ECDSA P-256 (bom), RSA 4096 (legado, ainda seguro se 4096 bits), RSA 1024/2048 (insuficiente hoje).</li>
<li><strong>fail2ban:</strong> daemon que monitora logs, detecta padrões de ataque (ex: &gt;5 falhas em 10 min de mesmo IP) e injeta regras de bloqueio no firewall automaticamente.</li>
</ul></div>

<h4>Diagrama: Fluxo de autenticação SSH com chave pública</h4>
<div class="svg-wrap">
<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;display:block;margin:0 auto;">
  <defs>
    <marker id="sa" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#39ff7a"/></marker>
    <marker id="sb" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64d2ff"/></marker>
  </defs>
  <rect width="680" height="340" fill="#010403" rx="10"/>
  <!-- Columns -->
  <rect x="30"  y="20" width="120" height="300" fill="rgba(57,255,122,.04)"  rx="6" stroke="rgba(57,255,122,.25)"  stroke-width="1"/>
  <rect x="530" y="20" width="120" height="300" fill="rgba(100,210,255,.04)" rx="6" stroke="rgba(100,210,255,.25)" stroke-width="1"/>
  <text x="90"  y="40" text-anchor="middle" font-family="Courier New" font-size="9" font-weight="900" fill="#39ff7a">CLIENTE</text>
  <text x="590" y="40" text-anchor="middle" font-family="Courier New" font-size="9" font-weight="900" fill="#64d2ff">SERVIDOR</text>
  <text x="90"  y="54" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">chave privada</text>
  <text x="590" y="54" text-anchor="middle" font-family="Courier New" font-size="7" fill="#5a8f6e">authorized_keys</text>
  <!-- Steps -->
  <!-- 1 TCP -->
  <line x1="150" y1="80" x2="528" y2="80" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#sa)"/>
  <text x="340" y="74" text-anchor="middle" font-family="Courier New" font-size="8" fill="#39ff7a">1. TCP SYN / SYN-ACK (porta 22)</text>
  <!-- 2 Version -->
  <line x1="528" y1="100" x2="152" y2="100" stroke="#64d2ff" stroke-width="1.5" marker-end="url(#sb)"/>
  <text x="340" y="114" text-anchor="middle" font-family="Courier New" font-size="8" fill="#64d2ff">2. SSH-2.0 (troca de versão de protocolo)</text>
  <!-- 3 KEX -->
  <line x1="150" y1="130" x2="528" y2="130" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#sa)"/>
  <line x1="528" y1="148" x2="152" y2="148" stroke="#64d2ff" stroke-width="1.5" marker-end="url(#sb)"/>
  <text x="340" y="143" text-anchor="middle" font-family="Courier New" font-size="8" fill="#8ec9a4">3. Negociação de algoritmos (KEX, cifra, MAC)</text>
  <text x="340" y="162" text-anchor="middle" font-family="Courier New" font-size="8" fill="#8ec9a4">4. Diffie-Hellman → chave de sessão compartilhada</text>
  <!-- 5 Host key -->
  <line x1="528" y1="178" x2="152" y2="178" stroke="#64d2ff" stroke-width="1.5" marker-end="url(#sb)"/>
  <text x="340" y="192" text-anchor="middle" font-family="Courier New" font-size="8" fill="#ffd166">5. Host key do servidor → cliente verifica (~/.ssh/known_hosts)</text>
  <!-- 6 Auth request -->
  <line x1="150" y1="208" x2="528" y2="208" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#sa)"/>
  <text x="340" y="222" text-anchor="middle" font-family="Courier New" font-size="8" fill="#39ff7a">6. Solicitação de autenticação (usuário + chave pública)</text>
  <!-- 7 Challenge -->
  <line x1="528" y1="238" x2="152" y2="238" stroke="#64d2ff" stroke-width="1.5" marker-end="url(#sb)"/>
  <text x="340" y="252" text-anchor="middle" font-family="Courier New" font-size="8" fill="#64d2ff">7. Desafio cifrado com a chave pública do cliente</text>
  <!-- 8 Response -->
  <line x1="150" y1="268" x2="528" y2="268" stroke="#39ff7a" stroke-width="1.5" marker-end="url(#sa)"/>
  <text x="340" y="282" text-anchor="middle" font-family="Courier New" font-size="8" fill="#39ff7a">8. Resposta assinada com chave privada</text>
  <!-- 9 Session -->
  <line x1="528" y1="300" x2="152" y2="300" stroke="#64d2ff" stroke-width="1.5" marker-end="url(#sb)"/>
  <text x="340" y="314" text-anchor="middle" font-family="Courier New" font-size="8" font-weight="700" fill="#c792ea">9. Sessão estabelecida ✓ (canal AES-256 cifrado)</text>
</svg>
<figcaption>Fig. 7 — Fluxo de autenticação SSH com chave pública. A chave privada nunca sai do cliente — apenas uma prova criptográfica de posse é transmitida.</figcaption>
</div>

<h4>Diretivas críticas do sshd_config</h4>
<table class="table">
<thead><tr><th>Diretiva</th><th>Valor seguro</th><th>Motivo</th></tr></thead>
<tbody>
<tr><td><code>PermitRootLogin</code></td><td><code>no</code></td><td>Força uso de conta com nome + sudo, dificulta brute-force</td></tr>
<tr><td><code>PasswordAuthentication</code></td><td><code>no</code></td><td>Elimina ataques de senha online; exige chave pública</td></tr>
<tr><td><code>PubkeyAuthentication</code></td><td><code>yes</code></td><td>Habilita autenticação por chave pública</td></tr>
<tr><td><code>AllowUsers</code></td><td><code>aluno@192.168.0.0/24</code></td><td>Lista branca de usuários e IPs permitidos</td></tr>
<tr><td><code>MaxAuthTries</code></td><td><code>3</code></td><td>Limita tentativas por conexão</td></tr>
<tr><td><code>LoginGraceTime</code></td><td><code>30</code></td><td>Fecha conexão não autenticada em 30 segundos</td></tr>
<tr><td><code>ClientAliveInterval</code></td><td><code>300</code></td><td>Detecta clientes inativos e fecha sessões ociosas</td></tr>
<tr><td><code>Protocol</code></td><td><code>2</code></td><td>SSH v1 é inseguro — usar apenas v2</td></tr>
</tbody>
</table>

<h4>Comandos explicados</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">ssh-keygen</span> <span class="tok-opt">-t</span> ed25519 <span class="tok-opt">-C</span> "aluno@lab"   <span class="tok-comment"># Gera par de chaves Ed25519</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">ssh-copy-id</span> <span class="tok-opt">-i</span> ~/.ssh/id_ed25519.pub user@servidor <span class="tok-comment"># Copia chave pública para servidor</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">sshd</span> <span class="tok-opt">-T</span> <span class="tok-op">|</span> <span class="tok-cmd">grep</span> <span class="tok-opt">-E</span> "permitrootlogin|passwordauth|pubkey" <span class="tok-comment"># Config efetiva do sshd</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">journalctl</span> <span class="tok-opt">-u</span> ssh <span class="tok-opt">--since</span> today <span class="tok-opt">-p</span> info <span class="tok-comment"># Eventos SSH de hoje</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">fail2ban-client</span> status sshd      <span class="tok-comment"># IPs bloqueados pelo fail2ban para SSH</span>
<span class="tok-prompt">$</span> <span class="tok-cmd">sudo</span> <span class="tok-cmd">fail2ban-client</span> set sshd unbanip 1.2.3.4 <span class="tok-comment"># Desbloqueia IP específico</span></code></pre>
<div class="activity"><h4>Atividade prática exigida</h4><ol>
<li>Gere par de chaves Ed25519, copie para o servidor e verifique login sem senha.</li>
<li>Audite o sshd com <code>sshd -T</code> e aplique pelo menos 4 diretivas da tabela acima.</li>
<li>Instale fail2ban, configure jail para SSH e simule ataque de força bruta para verificar bloqueio.</li>
<li>Crie checklist de SSH seguro com 10 itens verificáveis para uso em produção.</li>
</ol><p><strong>Entrega:</strong> relatório Markdown com configurações, evidências e checklist.</p></div>
</article>

<div class="quiz" id="quiz-m4">
<h3>Avaliação do módulo — Segurança Linux</h3>
<p>10 questões objetivas. Aprovação: 70 % (7/10).</p>
<div class="quiz-body" data-module="m4"></div>
<button onclick="gradeQuiz('m4')">Corrigir avaliação</button>
<div class="result" id="result-m4"></div>
</div>
</section>

<!-- ══════════ REF: DIRETÓRIOS ══════════ -->
<section class="reference" id="diretorios">
<div class="module-title"><span class="num">Referência</span><h2>Diretórios Linux — função e conteúdo</h2></div>
<p class="lead">Esta referência apoia as aulas 1.3, 2.4, 3.1 e 4.2. Distinga arquivos reais, pontos de montagem e sistemas de arquivos virtuais.</p>
<div class="diagram">/
├── bin    → comandos essenciais (ls, cp, cat)
├── boot   → kernel, initramfs, grub
├── dev    → dispositivos (virtual, udev)
├── etc    → configurações do sistema ★
├── home   → diretórios dos usuários
├── lib    → bibliotecas essenciais
├── media  → montagem automática (USB, CD)
├── mnt    → montagem manual
├── opt    → aplicações opcionais de terceiros
├── proc   → kernel/processos (virtual) ★
├── root   → home do root (separado de /home)
├── run    → estado volátil desde o boot
├── srv    → dados servidos (web, ftp)
├── sys    → hardware/drivers (virtual) ★
├── tmp    → temporários (limpos no boot)
├── usr    → programas, libs, documentação
└── var    → logs, cache, spool ★</div>
<table class="table">
<thead><tr><th>Diretório</th><th>Função</th><th>Conteúdo relevante para redes</th><th>Exploração</th></tr></thead>
<tbody>
<tr><td><strong>/etc</strong></td><td>Configuração do sistema</td><td>hosts, resolv.conf, network/, netplan/, ssh/, fstab, passwd, shadow</td><td><code>find /etc -maxdepth 1 -type f | head</code></td></tr>
<tr><td><strong>/proc/net</strong></td><td>Estado de rede virtual</td><td>tcp, udp, if_inet6, dev (estatísticas), arp</td><td><code>cat /proc/net/dev</code></td></tr>
<tr><td><strong>/sys/class/net</strong></td><td>Interfaces de rede sysfs</td><td>eth0/address (MAC), eth0/operstate, eth0/speed</td><td><code>ls /sys/class/net/eth0/</code></td></tr>
<tr><td><strong>/var/log</strong></td><td>Logs do sistema</td><td>auth.log, syslog, kern.log, apt/history.log</td><td><code>ls -lh /var/log | head -20</code></td></tr>
<tr><td><strong>/run</strong></td><td>Estado volátil desde boot</td><td>PID files de serviços, sockets temporários</td><td><code>ls -lah /run | head</code></td></tr>
<tr><td><strong>/boot</strong></td><td>Inicialização</td><td>vmlinuz (kernel), initrd.img, grub/</td><td><code>ls -lh /boot</code></td></tr>
<tr><td><strong>/dev</strong></td><td>Dispositivos</td><td>null, zero, random, urandom, tty*, net/tun</td><td><code>ls -lah /dev | head</code></td></tr>
</tbody>
</table>
</section>

<!-- ══════════ REF: PERMISSÕES ══════════ -->
<section class="reference" id="permissoes">
<div class="module-title"><span class="num">Referência</span><h2>Permissões de arquivos e diretórios</h2></div>
<p class="lead">Permissões são avaliadas por dono → grupo → outros. A semântica muda entre arquivo e diretório.</p>
<div class="perm"><span class="type">-</span><span class="user">r</span><span class="user">w</span><span class="user">x</span><span class="group">r</span><span class="group">-</span><span class="group">x</span><span class="other">r</span><span class="other">-</span><span class="other">-</span></div>
<div class="diagram">- rwx r-x r--
│ │   │   └── outros: r (leitura apenas)
│ │   └────── grupo: r-x (leitura + traversar)
│ └────────── dono: rwx (leitura, escrita, execução)
└──────────── tipo: - arquivo | d diretório | l link | c char dev | b block dev

Notação octal:  rwx = 7 | rw- = 6 | r-x = 5 | r-- = 4 | -wx = 3 | -w- = 2 | --x = 1 | --- = 0
Exemplo:  chmod 750 dir  →  dono=rwx(7)  grupo=r-x(5)  outros=---(0)

Bits especiais (prefixo):
  4 = SUID   chmod u+s arquivo  (executa com UID do dono)
  2 = SGID   chmod g+s dir      (novos arquivos herdam grupo)
  1 = Sticky chmod +t  /tmp     (só dono remove seus arquivos)</div>
<table class="table">
<thead><tr><th>Permissão</th><th>Em arquivo</th><th>Em diretório</th><th>Observação crítica</th></tr></thead>
<tbody>
<tr><td><strong>r</strong></td><td>Ler conteúdo</td><td>Listar nomes (ls)</td><td>Sem x no dir, listar pode não bastar</td></tr>
<tr><td><strong>w</strong></td><td>Modificar conteúdo</td><td>Criar/remover entradas</td><td>w em dir é mais crítico que w em arquivo</td></tr>
<tr><td><strong>x</strong></td><td>Executar como programa</td><td>Traversar / acessar caminho</td><td>Essencial para entrar em diretórios</td></tr>
<tr><td><strong>SUID</strong></td><td>Roda com UID do dono</td><td>Não aplicável</td><td>Auditoria de segurança obrigatória</td></tr>
<tr><td><strong>SGID</strong></td><td>Roda com GID do grupo</td><td>Herança de grupo em novos arquivos</td><td>Útil para diretórios colaborativos</td></tr>
<tr><td><strong>Sticky</strong></td><td>Sem efeito moderno</td><td>Só o dono remove seus arquivos</td><td>Padrão em /tmp (chmod 1777)</td></tr>
</tbody>
</table>
</section>

<!-- ══════════ LAB ENVIRONMENT ══════════ -->
<section class="reference" id="lab">
<div class="module-title"><span class="num">Laboratório</span><h2>Ambiente de laboratório recomendado</h2></div>
<p class="lead">Para praticar todos os módulos você precisa de um ambiente Linux funcional com acesso a rede. Abaixo as opções em ordem de recomendação para Engenharia de Redes.</p>

<div class="callout callout-tip">
<strong>Recomendação: VirtualBox + Ubuntu Server 24.04 LTS</strong>
Gratuito, amplamente documentado, suporte até 2029. Permite criar múltiplas VMs para simular redes completas (cliente + servidor + roteador).
</div>

<h4>Opção 1 — VirtualBox com Ubuntu Server (recomendado)</h4>
<div class="lab-step"><div class="lab-num">1</div><div class="lab-text"><strong>Instalar VirtualBox</strong> — virtualbox.org (gratuito, Windows/macOS/Linux)</div></div>
<div class="lab-step"><div class="lab-num">2</div><div class="lab-text"><strong>Baixar ISO Ubuntu Server 24.04 LTS</strong> — ubuntu.com/download/server</div></div>
<div class="lab-step"><div class="lab-num">3</div><div class="lab-text"><strong>Criar VM</strong>: 2 vCPU, 2 GB RAM, 20 GB disco, 2 adaptadores de rede: Adaptador 1 = NAT (internet), Adaptador 2 = Rede Interna "labnet"</div></div>
<div class="lab-step"><div class="lab-num">4</div><div class="lab-text"><strong>Criar 2ª VM idêntica</strong> como cliente — simula par cliente/servidor na mesma rede interna</div></div>
<div class="lab-step"><div class="lab-num">5</div><div class="lab-text"><strong>Instalar ferramentas</strong>: <code>sudo apt install -y net-tools iproute2 tcpdump nmap curl wget vim openssh-server fail2ban ufw</code></div></div>

<h4>Opção 2 — Docker (acesso rápido, sem isolamento de rede completo)</h4>
<pre class="cmd"><code><span class="tok-prompt">$</span> <span class="tok-cmd">docker</span> run <span class="tok-opt">-it</span> <span class="tok-opt">--name</span> lab-linux ubuntu:24.04 /bin/bash
<span class="tok-prompt">$</span> <span class="tok-cmd">docker</span> run <span class="tok-opt">-it</span> <span class="tok-opt">--cap-add</span> NET_ADMIN <span class="tok-opt">--name</span> lab-net ubuntu:24.04 /bin/bash  <span class="tok-comment"># com privilégios de rede</span></code></pre>

<h4>Opção 3 — WSL2 (Windows Subsystem for Linux)</h4>
<pre class="cmd"><code><span class="tok-prompt">PS&gt;</span> <span class="tok-cmd">wsl</span> <span class="tok-opt">--install</span> <span class="tok-opt">-d</span> Ubuntu-24.04    <span class="tok-comment"># Instala Ubuntu no WSL2</span>
<span class="tok-prompt">PS&gt;</span> <span class="tok-cmd">wsl</span> <span class="tok-opt">--set-default-version</span> 2         <span class="tok-comment"># Garante WSL2 (melhor isolamento)</span></code></pre>
<div class="callout callout-warn">
<strong>Limitação WSL2 para redes</strong>
WSL2 usa NAT e não expõe a interface de rede diretamente. Comandos como tcpdump capturando tráfego real, configuração de interfaces ou simulação de redes entre VMs requerem VirtualBox/VMware ou hardware real. WSL2 é adequado apenas para os módulos 1 e 2.
</div>

<h4>Topologia recomendada para laboratório de redes</h4>
<div class="svg-wrap">
<svg viewBox="0 0 740 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:740px;display:block;margin:0 auto;">
  <defs>
    <marker id="tna" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#5a8f6e"/></marker>
    <marker id="tga" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#39ff7a"/></marker>
  </defs>
  <rect width="740" height="400" fill="#010403" rx="10"/>

  <!-- ── INTERNET ── -->
  <ellipse cx="370" cy="32" rx="135" ry="26" fill="rgba(90,143,110,.07)" stroke="rgba(90,143,110,.35)" stroke-width="1" stroke-dasharray="5,3"/>
  <text x="370" y="27" text-anchor="middle" font-family="Courier New" font-size="11" font-weight="900" fill="#5a8f6e">INTERNET</text>
  <text x="370" y="42" text-anchor="middle" font-family="Courier New" font-size="10" fill="#5a8f6e">8.8.8.8 · github.com · www.unb.br</text>

  <!-- NAT connector line -->
  <line x1="220" y1="58" x2="220" y2="100" stroke="#5a8f6e" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#tna)"/>
  <text x="228" y="74" text-anchor="start" font-family="Courier New" font-size="10" fill="#5a8f6e">NAT — Adaptador 1</text>
  <text x="228" y="88" text-anchor="start" font-family="Courier New" font-size="10" fill="#5a8f6e">enp0s3 · 10.0.2.x/24</text>

  <!-- ── HOST OS container ── -->
  <rect x="10" y="100" width="720" height="285" fill="rgba(57,255,122,.015)" rx="8" stroke="rgba(57,255,122,.18)" stroke-width="1.5"/>
  <text x="22" y="118" text-anchor="start" font-family="Courier New" font-size="10" font-weight="700" fill="rgba(57,255,122,.5)">HOST OS — VirtualBox instalado (Windows / macOS / Linux)</text>

  <!-- ── LABNET internal network ── -->
  <rect x="28" y="128" width="684" height="240" fill="rgba(100,210,255,.025)" rx="7" stroke="rgba(100,210,255,.28)" stroke-width="1" stroke-dasharray="6,3"/>
  <text x="370" y="147" text-anchor="middle" font-family="Courier New" font-size="11" font-weight="900" fill="#64d2ff">REDE INTERNA: labnet — 192.168.100.0/24 — Adaptador 2 (enp0s8)</text>

  <!-- ── VM-SERVIDOR ── -->
  <rect x="48" y="160" width="278" height="188" fill="rgba(57,255,122,.06)" rx="7" stroke="rgba(57,255,122,.45)" stroke-width="1.5"/>
  <!-- Header bar -->
  <rect x="48" y="160" width="278" height="28" fill="rgba(57,255,122,.18)" rx="7"/>
  <rect x="48" y="174" width="278" height="14" fill="rgba(57,255,122,.18)"/>
  <text x="187" y="179" text-anchor="middle" font-family="Courier New" font-size="12" font-weight="900" fill="#39ff7a">VM-SERVIDOR</text>
  <text x="187" y="204" text-anchor="middle" font-family="Courier New" font-size="10" fill="#8ec9a4">Ubuntu Server 24.04 LTS</text>
  <text x="187" y="220" text-anchor="middle" font-family="Courier New" font-size="11" font-weight="700" fill="#39ff7a">192.168.100.1 / 24</text>
  <!-- Divider -->
  <line x1="62" y1="232" x2="312" y2="232" stroke="rgba(57,255,122,.2)" stroke-width="1"/>
  <text x="70"  y="248" text-anchor="start" font-family="Courier New" font-size="10" font-weight="700" fill="#ffd166">Serviços:</text>
  <text x="70"  y="264" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">sshd (22) · nginx (80/443)</text>
  <text x="70"  y="279" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">ufw · fail2ban</text>
  <text x="70"  y="294" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">systemd · journald</text>
  <text x="70"  y="310" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">2 vCPU · 2 GB RAM · 20 GB</text>
  <!-- NAT adapter badge -->
  <rect x="60" y="330" width="170" height="16" fill="rgba(90,143,110,.18)" rx="4"/>
  <text x="145" y="342" text-anchor="middle" font-family="Courier New" font-size="9" fill="#5a8f6e">enp0s3: NAT → internet</text>

  <!-- ── VM-CLIENTE ── -->
  <rect x="414" y="160" width="278" height="188" fill="rgba(100,210,255,.05)" rx="7" stroke="rgba(100,210,255,.4)" stroke-width="1.5"/>
  <!-- Header bar -->
  <rect x="414" y="160" width="278" height="28" fill="rgba(100,210,255,.14)" rx="7"/>
  <rect x="414" y="174" width="278" height="14" fill="rgba(100,210,255,.14)"/>
  <text x="553" y="179" text-anchor="middle" font-family="Courier New" font-size="12" font-weight="900" fill="#64d2ff">VM-CLIENTE</text>
  <text x="553" y="204" text-anchor="middle" font-family="Courier New" font-size="10" fill="#8ec9a4">Ubuntu Server 24.04 LTS</text>
  <text x="553" y="220" text-anchor="middle" font-family="Courier New" font-size="11" font-weight="700" fill="#64d2ff">192.168.100.2 / 24</text>
  <!-- Divider -->
  <line x1="428" y1="232" x2="678" y2="232" stroke="rgba(100,210,255,.2)" stroke-width="1"/>
  <text x="428" y="248" text-anchor="start" font-family="Courier New" font-size="10" font-weight="700" fill="#ffd166">Ferramentas:</text>
  <text x="428" y="264" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">ssh · curl · wget · nc</text>
  <text x="428" y="279" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">dig · nslookup · host</text>
  <text x="428" y="294" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">ss · nmap · tcpdump</text>
  <text x="428" y="310" text-anchor="start" font-family="Courier New" font-size="10" fill="#8ec9a4">2 vCPU · 2 GB RAM · 20 GB</text>

  <!-- ── VIRTUAL SWITCH ── -->
  <rect x="316" y="250" width="82" height="30" fill="rgba(255,209,102,.1)" rx="5" stroke="rgba(255,209,102,.38)" stroke-width="1"/>
  <text x="357" y="263" text-anchor="middle" font-family="Courier New" font-size="10" font-weight="700" fill="#ffd166">sw-labnet</text>
  <text x="357" y="275" text-anchor="middle" font-family="Courier New" font-size="9" fill="#ffd166">virtual</text>

  <!-- Connections VM-SERVIDOR ↔ switch ↔ VM-CLIENTE -->
  <line x1="326" y1="265" x2="316" y2="265" stroke="#39ff7a" stroke-width="2" marker-end="url(#tga)"/>
  <line x1="398" y1="265" x2="414" y2="265" stroke="#64d2ff" stroke-width="2" marker-end="url(#tga)"/>

  <!-- Figcaption-style note -->
  <text x="370" y="392" text-anchor="middle" font-family="Courier New" font-size="10" fill="#5a8f6e">VM-SERVIDOR tem 2 adaptadores: enp0s3 (NAT→internet) + enp0s8 (rede interna labnet)</text>
</svg>
<figcaption>Fig. Lab — Topologia VirtualBox recomendada. Dois adaptadores por VM: NAT para acesso à internet e Rede Interna para comunicação entre VMs.</figcaption>
</div>
</section>

<!-- ══════════ GLOSSÁRIO ══════════ -->
<section class="reference" id="glossario">
<div class="module-title"><span class="num">Glossário</span><h2>Glossário técnico do curso</h2></div>
<p class="lead">Termos essenciais que aparecem ao longo do curso, explicados no contexto de Linux e Engenharia de Redes.</p>
<div class="terms-grid">
<dl class="term"><dt>Kernel</dt><dd>Núcleo do SO. Gerencia CPU, memória, dispositivos, rede e filesystem. Roda em Ring 0 (modo privilegiado).</dd></dl>
<dl class="term"><dt>Shell</dt><dd>Interpretador de comandos entre usuário e kernel. Faz expansão de variáveis, globs e cria processos (fork/exec).</dd></dl>
<dl class="term"><dt>Syscall</dt><dd>Chamada de sistema — solicitação controlada de user space ao kernel para acessar recursos (I/O, rede, processo).</dd></dl>
<dl class="term"><dt>Daemon</dt><dd>Processo de serviço em background, sem terminal associado. Exemplos: sshd, nginx, systemd-networkd, cron.</dd></dl>
<dl class="term"><dt>Inode</dt><dd>Estrutura interna que armazena metadados de arquivo: permissões, dono, timestamps, tamanho e ponteiros de blocos. O nome do arquivo é separado do inode.</dd></dl>
<dl class="term"><dt>FHS</dt><dd>Filesystem Hierarchy Standard — padrão que define onde cada tipo de arquivo deve estar no Linux (/etc, /var, /usr, etc.).</dd></dl>
<dl class="term"><dt>PID / PPID</dt><dd>Process ID / Parent Process ID. Números inteiros únicos que identificam cada processo e seu processo pai.</dd></dl>
<dl class="term"><dt>UID / GID</dt><dd>User ID / Group ID. Inteiros usados pelo kernel para controle de acesso. UID 0 = root (superusuário).</dd></dl>
<dl class="term"><dt>Namespace</dt><dd>Mecanismo de isolamento do kernel para processos: rede, PID, mount, UTS, IPC, user. Base para containers (Docker/LXC).</dd></dl>
<dl class="term"><dt>cgroup</dt><dd>Control Group — agrupa processos para limitar uso de CPU, memória e I/O. systemd usa cgroups para cada unidade.</dd></dl>
<dl class="term"><dt>POSIX</dt><dd>Portable Operating System Interface — conjunto de padrões IEEE para compatibilidade entre sistemas Unix-like.</dd></dl>
<dl class="term"><dt>systemd</dt><dd>Init system moderno (PID 1 no Linux). Gerencia unidades (.service, .socket, .timer), paraleliza boot e integra journald.</dd></dl>
<dl class="term"><dt>journald</dt><dd>Daemon do systemd para coleta estruturada de logs. Acessado via journalctl com filtros poderosos por serviço, prioridade e tempo.</dd></dl>
<dl class="term"><dt>Mount point</dt><dd>Diretório onde um sistema de arquivos (disco, rede, virtual) é anexado à árvore única do Linux. Ex: /mnt/dados.</dd></dl>
<dl class="term"><dt>SUID / SGID</dt><dd>Set User ID / Set Group ID — bits especiais que fazem um executável rodar com privilégios do dono/grupo, não do usuário chamador.</dd></dl>
<dl class="term"><dt>PAM</dt><dd>Pluggable Authentication Modules — framework que permite configurar políticas de autenticação (senhas, limites, 2FA) de forma modular em /etc/pam.d/.</dd></dl>
<dl class="term"><dt>Socket</dt><dd>Endpoint de comunicação identificado por protocolo + IP + porta. Tipos: STREAM (TCP), DGRAM (UDP), UNIX (IPC local).</dd></dl>
<dl class="term"><dt>Netfilter</dt><dd>Framework do kernel Linux para filtrar e modificar pacotes de rede. iptables, nftables e ufw são interfaces de configuração.</dd></dl>
<dl class="term"><dt>ARP</dt><dd>Address Resolution Protocol — resolve endereço IP em MAC na mesma sub-rede. Comando: ip neigh show.</dd></dl>
<dl class="term"><dt>CIDR</dt><dd>Classless Inter-Domain Routing — notação de sub-rede com prefixo. Ex: 192.168.1.0/24 indica 256 endereços.</dd></dl>
<dl class="term"><dt>TTL (DNS)</dt><dd>Time To Live — tempo em segundos que um registro DNS pode ser cacheado. TTL baixo = propagação rápida mas mais consultas.</dd></dl>
<dl class="term"><dt>Hardening</dt><dd>Processo de reduzir a superfície de ataque de um sistema por configuração segura, remoção do desnecessário e menor privilégio.</dd></dl>
<dl class="term"><dt>fail2ban</dt><dd>Daemon que monitora logs, detecta padrões de ataque (força bruta) e injeta regras de bloqueio no firewall automaticamente.</dd></dl>
<dl class="term"><dt>TLS/SSL</dt><dd>Transport Layer Security — protocolo criptográfico para canal seguro. Usado em HTTPS, SMTPS, IMAPS. SSL está obsoleto; use TLS 1.2+.</dd></dl>
<dl class="term"><dt>Ed25519</dt><dd>Algoritmo de assinatura digital baseado em curva elíptica Edwards-25519. Recomendado para chaves SSH: rápido, pequeno e seguro.</dd></dl>
<dl class="term"><dt>BGP</dt><dd>Border Gateway Protocol (porta 179/TCP) — protocolo de roteamento entre sistemas autônomos (ASN) na internet. Roda no Linux com FRRouting.</dd></dl>
<dl class="term"><dt>tcpdump</dt><dd>Analisador de pacotes de linha de comando. Usa filtros BPF e salva capturas em formato pcap para análise no Wireshark.</dd></dl>
<dl class="term"><dt>SELinux / AppArmor</dt><dd>Módulos de segurança do kernel (LSM) que implementam Mandatory Access Control (MAC) — políticas além das permissões DAC tradicionais.</dd></dl>
<dl class="term"><dt>rsyslog</dt><dd>Daemon de logging avançado compatível com syslog. Permite filtros, templates e encaminhamento de logs a servidores remotos (SIEM).</dd></dl>
<dl class="term"><dt>MTU</dt><dd>Maximum Transmission Unit — tamanho máximo de frame/pacote em uma interface. Padrão Ethernet: 1500 bytes. MTU mismatch causa problemas silenciosos.</dd></dl>
</div>
</section>

<!-- ══════════ CHEATSHEET ══════════ -->
<section class="reference" id="cheatsheet">
<div class="module-title"><span class="num">Referência Rápida</span><h2>Comandos essenciais — cheatsheet</h2></div>
<p class="lead">Referência rápida organizada por tema. Use junto com <code>man COMANDO</code> para detalhes de opções.</p>
<div class="cheat-group"><h4>Navegação e arquivos</h4>
<div class="cheat-row"><span class="cheat-cmd">ls -lah</span><span class="cheat-desc">Lista detalhada com ocultos e tamanhos legíveis</span></div>
<div class="cheat-row"><span class="cheat-cmd">find /etc -name "*.conf"</span><span class="cheat-desc">Localiza arquivos por nome recursivamente</span></div>
<div class="cheat-row"><span class="cheat-cmd">grep -rn "palavra" /var/log</span><span class="cheat-desc">Busca recursiva com número de linha</span></div>
<div class="cheat-row"><span class="cheat-cmd">tail -f /var/log/syslog</span><span class="cheat-desc">Monitora log em tempo real</span></div>
<div class="cheat-row"><span class="cheat-cmd">wc -l arquivo</span><span class="cheat-desc">Conta linhas (útil para log)</span></div>
</div>
<div class="cheat-group"><h4>Usuários e permissões</h4>
<div class="cheat-row"><span class="cheat-cmd">id ; groups</span><span class="cheat-desc">UID, GID e grupos do usuário atual</span></div>
<div class="cheat-row"><span class="cheat-cmd">chmod 750 arquivo</span><span class="cheat-desc">Define permissão em octal</span></div>
<div class="cheat-row"><span class="cheat-cmd">chown user:grupo arquivo</span><span class="cheat-desc">Altera dono e grupo</span></div>
<div class="cheat-row"><span class="cheat-cmd">find / -perm -4000 -type f 2>/dev/null</span><span class="cheat-desc">Lista binários SUID</span></div>
<div class="cheat-row"><span class="cheat-cmd">sudo -l</span><span class="cheat-desc">Permissões sudo do usuário atual</span></div>
</div>
<div class="cheat-group"><h4>Processos e serviços</h4>
<div class="cheat-row"><span class="cheat-cmd">ps aux | grep NOME</span><span class="cheat-desc">Procura processo por nome</span></div>
<div class="cheat-row"><span class="cheat-cmd">systemctl status SERVIÇO</span><span class="cheat-desc">Estado, PID e logs recentes do serviço</span></div>
<div class="cheat-row"><span class="cheat-cmd">journalctl -u SERVIÇO -f</span><span class="cheat-desc">Logs do serviço em tempo real</span></div>
<div class="cheat-row"><span class="cheat-cmd">kill -TERM PID</span><span class="cheat-desc">Encerramento controlado de processo</span></div>
<div class="cheat-row"><span class="cheat-cmd">systemctl list-units --failed</span><span class="cheat-desc">Serviços com falha</span></div>
</div>
<div class="cheat-group"><h4>Diagnóstico de rede</h4>
<div class="cheat-row"><span class="cheat-cmd">ip -brief addr</span><span class="cheat-desc">Resumo de interfaces e IPs</span></div>
<div class="cheat-row"><span class="cheat-cmd">ss -tulpen</span><span class="cheat-desc">Sockets em escuta com processo</span></div>
<div class="cheat-row"><span class="cheat-cmd">ip route get 8.8.8.8</span><span class="cheat-desc">Rota escolhida para destino</span></div>
<div class="cheat-row"><span class="cheat-cmd">dig +short DOMINIO @8.8.8.8</span><span class="cheat-desc">Resolução DNS no resolver do Google</span></div>
<div class="cheat-row"><span class="cheat-cmd">sudo tcpdump -i eth0 port 80</span><span class="cheat-desc">Captura HTTP em eth0</span></div>
<div class="cheat-row"><span class="cheat-cmd">nc -zv HOST PORTA</span><span class="cheat-desc">Testa conectividade TCP para porta</span></div>
</div>
<div class="cheat-group"><h4>Segurança e auditoria</h4>
<div class="cheat-row"><span class="cheat-cmd">sudo sshd -T | grep permitroot</span><span class="cheat-desc">Configuração efetiva do sshd</span></div>
<div class="cheat-row"><span class="cheat-cmd">grep -i "failed" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn</span><span class="cheat-desc">Top IPs com falha SSH</span></div>
<div class="cheat-row"><span class="cheat-cmd">sudo ufw status verbose</span><span class="cheat-desc">Estado do firewall UFW</span></div>
<div class="cheat-row"><span class="cheat-cmd">sudo fail2ban-client status sshd</span><span class="cheat-desc">IPs bloqueados por brute-force</span></div>
<div class="cheat-row"><span class="cheat-cmd">awk -F: '($3==0){print}' /etc/passwd</span><span class="cheat-desc">Contas com UID 0 (deve ser só root)</span></div>
</div>
</section>

<!-- ══════════ RUBRICA ══════════ -->
<section id="rubrica">
<div class="module-title"><span class="num">Avaliação</span><h2>Rubrica das atividades práticas</h2></div>
<table class="table">
<thead><tr><th>Critério</th><th>Peso</th><th>Excelente (100%)</th><th>Suficiente (70%)</th><th>Insuficiente (&lt;50%)</th></tr></thead>
<tbody>
<tr><td>Compreensão conceitual</td><td>30%</td><td>Explica o recurso, relaciona com camada do modelo TCP/IP, kernel, permissões ou segurança.</td><td>Explica com pequenas imprecisões.</td><td>Apenas copia comandos sem explicar.</td></tr>
<tr><td>Execução técnica</td><td>30%</td><td>Executa corretamente, registra saída real, evita ações destrutivas.</td><td>Executa com ajuda externa documentada.</td><td>Executa sem validar ou documenta saída falsa.</td></tr>
<tr><td>Análise crítica</td><td>25%</td><td>Interpreta saída, identifica riscos e propõe melhoria.</td><td>Interpreta saída sem aprofundamento.</td><td>Não diferencia saída esperada de erro.</td></tr>
<tr><td>Organização e reprodutibilidade</td><td>15%</td><td>Relatório claro, com evidências reais e passos reprodutíveis.</td><td>Relatório completo mas pouco estruturado.</td><td>Entrega sem estrutura ou evidências.</td></tr>
</tbody>
</table>
<p class="footer-note">Curso Linux Essentials &amp; Security — Prof. Dr. Laerte Peotta de Melo — v3.0</p>
</section>
`;
document.querySelector('main').insertAdjacentHTML('beforeend', html);
})();
