const archive=[
['1997','Kenia','02','1997-kenia/index.html','1997-kenia/images/013-pan.jpg'],
['2003','Industries','10','industries/index.html','images/002.jpg'],
['2004','Paris','10','2004-paris/index.html','2004-paris/images/DSCF0219.jpg'],
['2006','City Lights I','10','2006-city-lights-i/index.html','2006-city-lights-i/images/city-lights-1.jpg'],

['2007','NY 16:9','05','2007-ny-16-9/index.html','2007-ny-16-9/images/DSC3652.jpg'],
['2007','NY 86th floor','05','2007-ny-86th-floor/index.html','2007-ny-86th-floor/images/DSC5273-copia-copia.jpg'],
['2007','NY Arq. Fiction','09','2007-ny-arq-fiction/index.html','2007-ny-arq-fiction/images/DSC0759.jpg'],
['2007','NY City Lights II','10','2007-ny-city-lights-ii/index.html','2007-ny-city-lights-ii/images/DSC0549.jpg'],
['2007','NY Pan','18','2007-ny-pan/index.html','2007-ny-pan/images/DSC3952-pan.jpg'],
['2007','NY Perspectives','09','2007-ny-perspectives/index.html','2007-ny-perspectives/images/DSC1090.jpg'],
['2007','NY Report','55','2007-ny-report/index.html','2007-ny-report/images/L1020510.jpg'],
['2007','NY Textures','10','2007-ny-textures/index.html','2007-ny-textures/images/DSC0773.jpg'],
['2007','NY Video','02','2007-ny-video/index.html','https://img.youtube.com/vi/P6lcrWvuKwE/hqdefault.jpg','video'],
['2007','La Havana','10','2007-la-havana/index.html','2007-la-havana/images/L1030249.jpg'],

['2009','Berlin','10','project.html?project=2009-berlin','2009-berlin/images/IMG_2928.jpg'],
['2009','Athens iPhone','10','project.html?project=2009-iphone-athens','2009-iphone-athens/images/IMG_0275.jpg'],
['2009','London','10','project.html?project=2009-london','2009-london/images/IMG_4689.jpg'],
['2009','Outsiders Berlin','10','project.html?project=2009-outsiders-berlin','2009-outsiders-berlin/images/IMG_3236.jpg'],
['2009','Outsiders London','10','project.html?project=2009-outsiders-london','2009-outsiders-london/images/IMG_4733.jpg'],
['2009','Outsiders NY','10','project.html?project=2009-outsiders-new-york','2009-outsiders-new-york/images/IMG_5690.jpg'],
['2009','Outsiders Paris','10','project.html?project=2009-outsiders-paris','2009-outsiders-paris/images/IMG_3828.jpg'],
['2009','Paris','10','project.html?project=2009-paris','2009-paris/images/IMG_4276.jpg'],

['2010','Espais Quotidians iPhone','10','project.html?project=2010-iphone-espais-quotidians','2010-iphone-espais-quotidians/images/IMG_1140.jpg'],
['2010','Luchon iPhone','10','2010-iphone-luchon/index.html','2010-iphone-luchon/images/IMG_0947.jpg'],

['2013','Hanoi','10','project.html?project=2013-hanoi','2013-hanoi/images/IMG_5637.jpg'],
['2013','Ho Chi Minh City','10','project.html?project=2013-ho-chi-minh-city','2013-ho-chi-minh-city/images/IMG_6418.jpg'],
['2015','So far, so close','08','project.html?project=2015-so-far-so-close','2015-so-far-so-close/images/1.jpg'],
['2016','Caixa Negra','05','project.html?project=2016-caixa-negra','2016-caixa-negra/images/IMG_5552_retocada.jpg']
];

const list=document.querySelector('#archive-list');

list.innerHTML=archive.map(([year,title,count,href,thumb,kind])=>`<a href="${href}"><span>${year}</span><strong class="archive-title">${title.replace(/iPhone/g,'<span class="iphone-word">iPhone</span>')}</strong><em aria-hidden="true"></em><img src="${thumb}" alt="${title}"></a>`).join('');

function fitMobileTitles(){
  const mobile = window.matchMedia('(max-width:650px)').matches;
  const titles = [...list.querySelectorAll('.archive-title')];

  titles.forEach(title=>{
    title.style.fontSize = '';
    if(!mobile) return;

    let size = 30;
    title.style.fontSize = size + 'px';

    while(title.scrollWidth > title.clientWidth && size > 19){
      size -= 0.5;
      title.style.fontSize = size + 'px';
    }
  });
}

requestAnimationFrame(fitMobileTitles);
window.addEventListener('resize', fitMobileTitles);
window.addEventListener('orientationchange', fitMobileTitles);
