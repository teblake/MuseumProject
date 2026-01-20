const museums={
  "France":[
    {"name":"Louvre Museum","city":"Paris"},
    {"name":"Musée d'Orsay","city":"Paris"},
    {"name":"Centre Pompidou","city":"Paris"}
  ],
  "United States":[
    {"name":"Metropolitan Museum of Art","city":"New York"},
    {"name":"Art Institute of Chicago","city":"Chicago"},
    {"name":"Los Angeles County Museum of Art","city":"Los Angeles"}
  ],
  "United Kingdom":[
    {"name":"British Museum","city":"London"},
    {"name":"Tate Modern","city":"London"},
    {"name":"Ashmolean Museum","city":"Oxford"}
  ],
  "Italy":[
    {"name":"Uffizi Gallery","city":"Florence"},
    {"name":"Vatican Museums","city":"Vatican City"},
    {"name":"Galleria Borghese","city":"Rome"}
  ],
  "Egypt":[
    {"name":"Egyptian Museum","city":"Cairo"},
    {"name":"Grand Egyptian Museum","city":"Giza"},
    {"name":"National Museum of Egyptian Civilization","city":"Cairo"},
    {"name":"Coptic Museum","city":"Cairo"}
  ],
  "Mexico":[
    {"name":"National Museum of Anthropology","city":"Mexico City"},
    {"name":"Museo Frida Kahlo","city":"Mexico City"},
    {"name":"Museo Soumaya","city":"Mexico City"}
  ],
  "Japan":[
    {"name":"Tokyo National Museum","city":"Tokyo"},
    {"name":"National Museum of Modern Art","city":"Tokyo"},
    {"name":"Kyoto National Museum","city":"Kyoto"}
  ]
};
const select=document.getElementById('countrySelect');
const container=document.getElementById('museumContainer');
Object.keys(museums).forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;select.appendChild(o)});
function render(){container.innerHTML='';museums[select.value].forEach(m=>{const d=document.createElement('div');d.className='museum-card';d.innerHTML=`<h3>${m.name}</h3><div class="city">${m.city}</div>`;container.appendChild(d)})}
select.onchange=render;select.selectedIndex=0;render();