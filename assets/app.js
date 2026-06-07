/* ── Quiz ── */
function renderQuizzes(){Object.entries(QUIZZES).forEach(([m,qs])=>{const el=document.querySelector(`.quiz-body[data-module="${m}"]`);if(!el)return;el.innerHTML=qs.map((q,i)=>`<div class="question"><strong>${i+1}. ${q[0]}</strong>${q[1].map((a,j)=>`<label><input type="radio" name="${m}-${i}" value="${j}"> ${a}</label>`).join('')}</div>`).join('')})}
function gradeQuiz(m){const qs=QUIZZES[m];let ok=0;qs.forEach((q,i)=>{const ans=document.querySelector(`input[name="${m}-${i}"]:checked`);if(ans && Number(ans.value)===q[2])ok++});const pct=Math.round(ok/qs.length*100);localStorage.setItem('linux-course-'+m,pct);const res=document.getElementById('result-'+m);res.textContent=`Resultado: ${ok}/${qs.length} (${pct}%). ${pct>=70?'Aprovado.':'Revisar o módulo antes de avançar.'}`;res.style.color=pct>=70?'var(--green)':'var(--red)';updateProgress()}
function updateProgress(){['m1','m2','m3','m4'].forEach(m=>{const v=Number(localStorage.getItem('linux-course-'+m)||0);const el=document.getElementById('p-'+m);if(el)el.style.width=Math.min(v,100)+'%'})}
function setupSidebarAccordion(){document.querySelectorAll('.sb-section').forEach(section=>{const main=section.querySelector('.sb-main');if(!main)return;main.setAttribute('role','button');main.setAttribute('aria-expanded','false');main.addEventListener('click',e=>{e.preventDefault();const isOpen=section.classList.toggle('open');main.setAttribute('aria-expanded',String(isOpen));const target=main.getAttribute('href');if(target){document.querySelector(target)?.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'',target)}})});document.querySelectorAll('.sb-subitem').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.sb-section').forEach(s=>s.classList.remove('open'));const parent=item.closest('.sb-section');parent?.classList.add('open');parent?.querySelector('.sb-main')?.setAttribute('aria-expanded','true')}))}

/* ── GitHub Auth ── */
function openGHModal(){
  document.getElementById('gh-modal').style.display='flex';
  setTimeout(()=>document.getElementById('gh-input').focus(),80);
  document.getElementById('gh-error').textContent='';
}

function closeGHModal(){
  document.getElementById('gh-modal').style.display='none';
}

async function doGHLogin(){
  const input=document.getElementById('gh-input');
  const user=input.value.trim().replace(/^@/,'');
  const errEl=document.getElementById('gh-error');
  const btn=document.getElementById('gh-login-btn');
  if(!user){errEl.textContent='Digite seu username do GitHub.';return;}
  errEl.textContent='';
  btn.textContent='Verificando...';
  btn.disabled=true;
  try{
    const res=await fetch(`https://api.github.com/users/${encodeURIComponent(user)}`);
    if(res.status===404){throw new Error('Usuário não encontrado no GitHub.');}
    if(!res.ok){throw new Error('Erro ao consultar a API do GitHub. Tente novamente.');}
    const data=await res.json();
    const session={login:data.login,name:data.name||data.login,avatar:data.avatar_url,bio:data.bio||'',since:Date.now()};
    localStorage.setItem('linux-course-user',JSON.stringify(session));
    closeGHModal();
    renderGHSession();
  }catch(e){
    errEl.textContent=e.message;
  }finally{
    btn.textContent='Verificar e entrar';
    btn.disabled=false;
  }
}

function renderGHSession(){
  const card=document.getElementById('login-card');
  if(!card)return;
  const raw=localStorage.getItem('linux-course-user');
  if(!raw)return; /* sem sessão: HTML padrão já exibe o botão de login */
  const u=JSON.parse(raw);
  const since=new Date(u.since).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});
  card.innerHTML=`
    <h3>Sessão do aluno</h3>
    <div style="display:flex;align-items:center;gap:.9rem;margin:.7rem 0 1rem;">
      <img src="${u.avatar}" width="56" height="56"
           style="border-radius:50%;border:2px solid var(--green);box-shadow:0 0 14px rgba(57,255,122,.25);"
           alt="Avatar @${u.login}">
      <div style="flex:1;min-width:0;">
        <div style="color:#eafff0;font-weight:900;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.name}</div>
        <div style="color:var(--dim);font-size:.75rem;margin-top:.15rem;">@${u.login}</div>
        ${u.bio?`<div style="color:var(--muted);font-size:.72rem;margin-top:.1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.bio}</div>`:''}
      </div>
    </div>
    <div style="border:1px solid rgba(57,255,122,.18);border-radius:8px;padding:.55rem .75rem;background:rgba(57,255,122,.04);margin-bottom:.75rem;">
      <span style="color:var(--green);font-weight:900;font-size:.8rem;">&#10003; Sess&#227;o ativa</span>
      <span style="color:var(--dim);font-size:.75rem;margin-left:.5rem;">desde ${since}</span>
    </div>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
      <a href="https://github.com/${u.login}" target="_blank" rel="noopener"
         style="display:inline-flex;align-items:center;gap:.35rem;background:#24292f;border:1px solid rgba(255,255,255,.12);color:#eafff0;border-radius:7px;padding:.38rem .75rem;font-size:.75rem;font-weight:700;text-decoration:none;font-family:'Courier New',monospace;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#eafff0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
        Ver perfil
      </a>
      <button onclick="ghLogout()"
        style="background:transparent;border:1px solid rgba(255,107,107,.3);color:var(--red);border-radius:7px;padding:.38rem .75rem;font-size:.75rem;font-weight:700;cursor:pointer;font-family:'Courier New',monospace;">
        Encerrar sess&#227;o
      </button>
    </div>`;
}

function ghLogout(){
  localStorage.removeItem('linux-course-user');
  location.reload();
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderQuizzes();
  updateProgress();
  setupSidebarAccordion();
  renderGHSession();
  /* fecha modal com Escape ou clique no overlay */
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGHModal();});
  const modal=document.getElementById('gh-modal');
  if(modal)modal.addEventListener('click',e=>{if(e.target===modal)closeGHModal();});
});
