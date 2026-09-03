document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.navlinks');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menuBtn.contains(e.target)){nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}});}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
