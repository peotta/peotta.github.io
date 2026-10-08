import { useId, useMemo, useState } from 'react';

// Limites de extensão da NBR 6028:2021.
const TIPOS = {
  academico: { min: 150, max: 500, label: 'Trabalho acadêmico (TCC, dissertação, tese)' },
  artigo: { min: 100, max: 250, label: 'Artigo de periódico' },
  curto: { min: 50, max: 100, label: 'Documento curto (comunicação, evento)' },
};

const EXEMPLO = {
  tipo: 'artigo',
  resumo:
    'A crescente sofisticação de ataques de movimentação lateral em infraestruturas híbridas tem contornado firewalls tradicionais, expondo dados sensíveis de forma crítica. Este trabalho propõe um algoritmo de detecção de anomalias baseado em comportamento de rede para identificar exfiltração de dados em tempo real. A metodologia envolveu a simulação de ataques de Command and Control (C2) em um ambiente controlado utilizando Kali Linux e monitoramento via logs do Zeek. Os testes demonstraram uma taxa de detecção de 94% para tráfego criptografado, com uma redução de 15% no overhead de processamento em relação a assinaturas estáticas. Conclui-se que a abordagem fortalece a camada de detecção precoce, sendo essencial para a implementação de uma arquitetura Zero Trust.',
  palavras: 'exfiltração de dados; segurança em nuvem; detecção de anomalias; Command and Control (C2); arquitetura Zero Trust.',
};

function contarPalavras(texto) {
  return texto.trim() ? texto.trim().split(/\s+/).length : 0;
}

function verificar(tipo, resumo, palavras) {
  const { min, max } = TIPOS[tipo];
  const total = contarPalavras(resumo);
  const checks = [];

  if (total === 0) {
    checks.push({ status: 'pending', text: `Extensão: cole o resumo para contar as palavras (esperado: ${min} a ${max}).` });
  } else if (total < min) {
    checks.push({ status: 'warn', text: `Extensão: ${total} palavras. Faltam ${min - total} para o mínimo de ${min}.` });
  } else if (total > max) {
    checks.push({ status: 'warn', text: `Extensão: ${total} palavras. Excede em ${total - max} o máximo de ${max}.` });
  } else {
    checks.push({ status: 'ok', text: `Extensão: ${total} palavras, dentro do intervalo de ${min} a ${max}.` });
  }

  if (total > 0) {
    const paragrafos = resumo.trim().split(/\n\s*\n|\n/).filter((p) => p.trim()).length;
    checks.push(
      paragrafos > 1
        ? { status: 'warn', text: `Parágrafos: ${paragrafos} encontrados. O resumo deve ter parágrafo único.` }
        : { status: 'ok', text: 'Parágrafo único.' },
    );
  }

  const bruto = palavras.trim().replace(/^palavras-chave\s*:\s*/i, '');
  if (!bruto) {
    checks.push({ status: 'pending', text: 'Palavras-chave: informe os termos para verificar a pontuação.' });
    return { total, checks };
  }

  const termos = bruto.replace(/\.\s*$/, '').split(';').map((t) => t.trim()).filter(Boolean);

  if (!bruto.includes(';') && bruto.includes(',')) {
    checks.push({ status: 'warn', text: 'Separação: use ponto e vírgula (;) entre as palavras-chave, não vírgula.' });
  } else {
    checks.push({ status: 'ok', text: `Separação por ponto e vírgula: ${termos.length} ${termos.length === 1 ? 'termo' : 'termos'}.` });
  }

  checks.push(
    /\.\s*$/.test(bruto)
      ? { status: 'ok', text: 'Finalizadas por ponto.' }
      : { status: 'warn', text: 'Finalização: a lista de palavras-chave deve terminar com ponto.' },
  );

  const maiusculas = termos.filter((t) => /^\p{Lu}/u.test(t));
  checks.push(
    maiusculas.length
      ? {
          status: 'info',
          text: `Iniciais maiúsculas em: ${maiusculas.join(', ')}. Mantenha apenas se forem nomes próprios ou científicos.`,
        }
      : { status: 'ok', text: 'Iniciais em letra minúscula.' },
  );

  return { total, checks };
}

const ICONS = { ok: '✓', warn: '!', info: 'i', pending: '·' };

export default function VerificadorResumo() {
  const uid = useId();
  const [tipo, setTipo] = useState('academico');
  const [resumo, setResumo] = useState('');
  const [palavras, setPalavras] = useState('');
  const { total, checks } = useMemo(() => verificar(tipo, resumo, palavras), [tipo, resumo, palavras]);
  const { min, max } = TIPOS[tipo];
  const fill = Math.min(total / max, 1);
  const inRange = total >= min && total <= max;

  const carregarExemplo = () => {
    setTipo(EXEMPLO.tipo);
    setResumo(EXEMPLO.resumo);
    setPalavras(EXEMPLO.palavras);
  };

  const limpar = () => {
    setResumo('');
    setPalavras('');
  };

  return (
    <div className="card checker">
      <div className="checker-head">
        <div>
          <h3>Verificador de resumo (NBR 6028:2021)</h3>
          <p className="muted">O texto fica só no seu navegador. Nada é enviado.</p>
        </div>
        <div className="checker-actions">
          <button type="button" className="button button-ghost button-sm" onClick={carregarExemplo}>
            Carregar exemplo
          </button>
          <button type="button" className="button button-ghost button-sm" onClick={limpar}>
            Limpar
          </button>
        </div>
      </div>

      <fieldset className="tipo-group">
        <legend>Tipo de documento</legend>
        {Object.entries(TIPOS).map(([key, t]) => (
          <label key={key} className={tipo === key ? 'is-active' : undefined}>
            <input type="radio" name={`${uid}-tipo`} value={key} checked={tipo === key} onChange={() => setTipo(key)} />
            <span>{t.label}</span>
            <small>
              {t.min} a {t.max} palavras
            </small>
          </label>
        ))}
      </fieldset>

      <div className="checker-grid">
        <div className="field">
          <label htmlFor={`${uid}-resumo`}>Resumo</label>
          <textarea
            id={`${uid}-resumo`}
            rows={9}
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            placeholder="Cole aqui o texto do resumo..."
          />
          <div className="meter" aria-hidden="true">
            <span className={inRange ? 'is-ok' : undefined} style={{ transform: `scaleX(${fill})` }} />
            <i style={{ left: `${(min / max) * 100}%` }} />
          </div>
          <p className="meter-label">
            <strong>{total}</strong> / {min} a {max} palavras
          </p>

          <label htmlFor={`${uid}-palavras`}>Palavras-chave</label>
          <input
            id={`${uid}-palavras`}
            type="text"
            value={palavras}
            onChange={(e) => setPalavras(e.target.value)}
            placeholder="termo um; termo dois; termo três."
          />
        </div>

        <ul className="check-results" aria-live="polite">
          {checks.map((c, i) => (
            <li key={i} className={`is-${c.status}`}>
              <span className="check-icon" aria-hidden="true">
                {ICONS[c.status]}
              </span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
