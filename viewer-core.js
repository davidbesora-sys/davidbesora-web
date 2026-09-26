const countLabel=document.querySelector('.intro-bottom span:last-child');if(countLabel)countLabel.textContent='';
const { photos, title, year } = window.project;
const imageBase = window.project.folder ? `${window.project.folder}/images/` : 'images/';
const grid = document.querySelector('.dynamic-grid');
const viewer = document.querySelector('.viewer');
const image = document.querySelector('.viewer-image');
const counter = document.querySelector('.counter');
const toggle = document.querySelector('.toggle');
const columns = photos.length <= 5 ? photos.length : photos.length <= 10 ? 5 : 6;
grid.style.setProperty('--columns', columns);
grid.style.setProperty('--rows', Math.ceil(photos.length / columns));
grid.innerHTML = photos.map((src, index) => `<button class="tile" data-index="${index}"><img src="${imageBase}${src}" alt="Abrir fotografía ${index + 1} de ${title}"></button>`).join('');
let current = 0, playing = false, timer;
function render() { image.src = `${imageBase}${photos[current]}`; image.alt = `${title}, fotografía ${current + 1} de ${photos.length}`; counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`; }
function stop() { playing = false; clearInterval(timer); toggle.textContent = '▶'; }
function step(delta) { current = (current + delta + photos.length) % photos.length; render(); }
function open(index) { current = index; render(); viewer.classList.add('open'); document.body.classList.add('viewer-open'); }
function close() { stop(); viewer.classList.remove('open'); document.body.classList.remove('viewer-open'); }
grid.querySelectorAll('.tile').forEach(tile => tile.addEventListener('click', () => open(Number(tile.dataset.index))));
document.querySelector('.previous').addEventListener('click', () => step(-1)); document.querySelector('.next').addEventListener('click', () => step(1)); document.querySelector('.close').addEventListener('click', close);
toggle.addEventListener('click', () => { if (playing) return stop(); playing = true; toggle.textContent = 'Ⅱ'; timer = setInterval(() => step(1), 3000); });
document.addEventListener('keydown', event => { if (!viewer.classList.contains('open')) return; if (event.key === 'ArrowLeft') step(-1); if (event.key === 'ArrowRight') step(1); if (event.key === 'Escape') close(); if (event.key === ' ') { event.preventDefault(); toggle.click(); } });
