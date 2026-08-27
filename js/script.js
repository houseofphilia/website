window.addEventListener('scroll',()=>{
 const nav=document.querySelector('.navbar');
 if(window.scrollY>80){nav.style.boxShadow='0 8px 30px rgba(0,0,0,.08)';}
 else{nav.style.boxShadow='none';}
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.onclick=e=>{
  const t=document.querySelector(a.getAttribute('href'));
  if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
 };
});
