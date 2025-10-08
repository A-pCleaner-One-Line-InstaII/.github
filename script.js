function toggleMenu(){ document.getElementById('nav').classList.toggle('open'); }
function fakeSend(e){ e.preventDefault(); const m=document.getElementById('form-msg'); if(m){m.textContent='Message sent (demo).';} return false; }
(function initChecklist(){
  const list=document.getElementById('checklist'); if(!list) return;
  const boxes=list.querySelectorAll('input[type="checkbox"]');
  boxes.forEach(b=>{ const k='checklist:'+b.dataset.key; const s=localStorage.getItem(k); if(s==='1') b.checked=true;
    b.addEventListener('change',()=>{localStorage.setItem(k,b.checked?'1':'0'); updateProgress();});
  });
  updateProgress();
})();
function updateProgress(){
  const list=document.getElementById('checklist'); if(!list) return;
  const boxes=list.querySelectorAll('input[type="checkbox"]');
  const done=[...boxes].filter(b=>b.checked).length; const total=boxes.length;
  const el=document.getElementById('progress'); if(el) el.textContent = `${done}/${total}`;
}
