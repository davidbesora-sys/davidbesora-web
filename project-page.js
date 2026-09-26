const id = new URLSearchParams(location.search).get('project');
window.project = window.projects[id];
if (!window.project) location.href = 'archive.html';
window.project.folder = id;
document.title = `${window.project.title} — David Besora`;
const displayTitle = window.project.title.replace(/iPhone/g, '<span class="iphone-word">iPhone</span>');
document.querySelector('[data-title]').innerHTML = displayTitle;
document.querySelector('[data-series]').textContent = '';
document.querySelector('[data-order]').textContent = '';
document.querySelector('[data-year]').textContent = window.project.year;
document.querySelector('[data-count]').textContent = '';
document.querySelector('[data-viewer-title]').textContent = `${window.project.title} / ${window.project.year}`;

const order = [
  { id:'1997-kenia', title:'Kenia', year:'1997' },
  { id:'industries', title:'Industries', year:'2003' },
  { id:'2004-paris', title:'Paris', year:'2004' },
  { id:'2006-city-lights-i', title:'City Lights I', year:'2006' },
  { id:'2007-la-havana', title:'La Havana', year:'2007' },
  { id:'2007-ny-16-9', title:'NY 16:9', year:'2007' },
  { id:'2007-ny-86th-floor', title:'NY 86th floor', year:'2007' },
  { id:'2007-ny-arq-fiction', title:'NY Arq. Fiction', year:'2007' },
  { id:'2007-ny-city-lights-ii', title:'NY City Lights II', year:'2007' },
  { id:'2007-ny-pan', title:'NY Pan', year:'2007' },
  { id:'2007-ny-perspectives', title:'NY Perspectives', year:'2007' },
  { id:'2007-ny-report', title:'NY Report', year:'2007' },
  { id:'2007-ny-textures', title:'NY Textures', year:'2007' },
  { id:'2009-berlin', title:'Berlin', year:'2009' },
  { id:'2009-iphone-athens', title:'Athens iPhone', year:'2009' },
  { id:'2009-london', title:'London', year:'2009' },
  { id:'2009-outsiders-berlin', title:'Outsiders Berlin', year:'2009' },
  { id:'2009-outsiders-london', title:'Outsiders London', year:'2009' },
  { id:'2009-outsiders-new-york', title:'Outsiders NY', year:'2009' },
  { id:'2009-outsiders-paris', title:'Outsiders Paris', year:'2009' },
  { id:'2009-paris', title:'Paris', year:'2009' },
  { id:'2010-iphone-espais-quotidians', title:'Espais Quotidians iPhone', year:'2010' },
  { id:'2010-iphone-luchon', title:'Luchon iPhone', year:'2010' },
  { id:'2013-hanoi', title:'Hanoi', year:'2013' },
  { id:'2013-ho-chi-minh-city', title:'Ho Chi Minh City', year:'2013' },
  { id:'2015-so-far-so-close', title:'So far, so close', year:'2015' }
];
const currentIndex = order.findIndex(item => item.id === id);
const nav = document.querySelector('[data-project-nav]');
if (nav && currentIndex >= 0) {
  const previous = order[currentIndex - 1];
  const next = order[currentIndex + 1];
  if (previous) nav.textContent = `Anterior: ${previous.year} / ${previous.title} ←`;
  else if (next) nav.textContent = `Próximo: ${next.year} / ${next.title} →`;
}
