const countLabel=document.querySelector('.intro-bottom span:last-child');if(countLabel)countLabel.textContent=countLabel.textContent.replace(/\s*(?:photos|fotografías|fotografias)\s*$/i,'');
const photos=["images/002.jpg","images/008.jpg","images/011.jpg","images/014.jpg","images/017.jpg","images/020.jpg","images/026.jpg","images/029.jpg","images/032.jpg","images/p.g.final_.jpg"];
const viewer=document.querySelector('.viewer'), image=document.querySelector('.viewer-image'), counter=document.querySelector('.counter'), toggle=document.querySelector('.toggle'); let current=0,playing=false,timer;
function render(){image.src=photos[current];image.alt=`Industries, fotografía ${current+1} de ${photos.length}`;counter.textContent=`${String(current+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`}
function stop(){playing=false;clearInterval(timer);toggle.textContent='▶';toggle.setAttribute('aria-label','Iniciar reproducción')}
function step(n){current=(current+n+photos.length)%photos.length;render()}
function open(n){current=n;render();viewer.classList.add('open');viewer.setAttribute('aria-hidden','false');document.body.classList.add('viewer-open')}
function close(){stop();viewer.classList.remove('open');viewer.setAttribute('aria-hidden','true');document.body.classList.remove('viewer-open')}
document.querySelectorAll('.tile').forEach(tile=>tile.addEventListener('click',()=>open(Number(tile.dataset.index))));document.querySelector('.previous').addEventListener('click',()=>step(-1));document.querySelector('.next').addEventListener('click',()=>step(1));document.querySelector('.close').addEventListener('click',close);
toggle.addEventListener('click',()=>{if(playing)return stop();playing=true;toggle.textContent='Ⅱ';toggle.setAttribute('aria-label','Pausar reproducción');timer=setInterval(()=>step(1),3000)});
document.addEventListener('keydown',event=>{if(!viewer.classList.contains('open'))return;if(event.key==='ArrowLeft')step(-1);if(event.key==='ArrowRight')step(1);if(event.key==='Escape')close();if(event.key===' '){event.preventDefault();toggle.click()}});
