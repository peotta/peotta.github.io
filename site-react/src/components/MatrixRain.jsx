import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks.js';

const ALPHABET =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789CCNACYBEROSPFVLANSTPACLNATSSHTCPIPWIFI80211';

// Chuva Matrix em canvas: ~30 fps, pausa com aba oculta e respeita prefers-reduced-motion.
export default function MatrixRain({ enabled }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    let drops = [];
    let fontSize = 15;
    let raf = 0;
    let last = 0;
    const reduced = prefersReducedMotion();

    const resize = () => {
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fontSize = window.innerWidth < 700 ? 13 : 15;
      const columns = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: columns }, () => (Math.random() * -window.innerHeight) / fontSize);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = 'rgba(1, 3, 1, 0.16)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, Consolas, monospace`;
      ctx.textAlign = 'center';
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(72,255,139,0.5)';
      for (let i = 0; i < drops.length; i++) {
        const ch = ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
        const y = drops[i] * fontSize;
        const r = Math.random();
        ctx.fillStyle = r > 0.985 ? '#d8ffe7' : r > 0.8 ? '#58d684' : '#1fae58';
        ctx.fillText(ch, i * fontSize + fontSize / 2, y);
        if (y > h && Math.random() > 0.972) drops[i] = Math.random() * -18;
        drops[i] += 0.82 + Math.random() * 0.52;
      }
    };

    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden || t - last < 33) return;
      last = t;
      draw();
    };

    resize();
    window.addEventListener('resize', resize);
    if (enabled && !reduced) {
      raf = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (enabled) for (let i = 0; i < 40; i++) draw();
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [enabled]);

  return (
    <div className={`matrix-rain${enabled ? '' : ' is-off'}`} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
