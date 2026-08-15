const root=document.documentElement;
const themeButton=document.querySelector('[data-theme-toggle]');
try{root.dataset.theme=localStorage.getItem('nqt-case-theme')||'light'}catch(e){}
themeButton?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;try{localStorage.setItem('nqt-case-theme',next)}catch(e){}});
const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox?.querySelector('img');
document.querySelectorAll('.dashboard-card').forEach(card=>card.addEventListener('click',()=>{if(!lightbox||!lightboxImage)return;lightboxImage.src=card.dataset.full||card.querySelector('img').src;lightboxImage.alt=card.querySelector('img').alt;lightbox.classList.add('open');document.body.style.overflow='hidden'}));
function closeLightbox(){lightbox?.classList.remove('open');document.body.style.overflow='';if(lightboxImage)lightboxImage.src=''}
lightbox?.querySelector('button')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
