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
  ],
  "Spain":[
    {"name":"Museo Nacional del Prado","city":"Madrid"},
    {"name":"Museo Reina Sofia","city":"Madrid"},
    {"name":"Guggenheim Museum Bilbao","city":"Bilbao"}
  ],
  "Germany":[
    {"name":"Pergamon Museum","city":"Berlin"},
    {"name":"Alte Pinakothek","city":"Munich"},
    {"name":"Stadel Museum","city":"Frankfurt"}
  ],
  "Netherlands":[
    {"name":"Rijksmuseum","city":"Amsterdam"},
    {"name":"Van Gogh Museum","city":"Amsterdam"},
    {"name":"Mauritshuis","city":"The Hague"}
  ],
  "Greece":[
    {"name":"Acropolis Museum","city":"Athens"},
    {"name":"National Archaeological Museum","city":"Athens"},
    {"name":"Museum of Byzantine Culture","city":"Thessaloniki"}
  ],
  "China":[
    {"name":"Palace Museum","city":"Beijing"},
    {"name":"Shanghai Museum","city":"Shanghai"},
    {"name":"National Museum of China","city":"Beijing"}
  ],
  "India":[
    {"name":"Indian Museum","city":"Kolkata"},
    {"name":"National Museum","city":"New Delhi"},
    {"name":"Chhatrapati Shivaji Maharaj Vastu Sangrahalaya","city":"Mumbai"}
  ],
  "Brazil":[
    {"name":"Sao Paulo Museum of Art","city":"Sao Paulo"},
    {"name":"Museum of Tomorrow","city":"Rio de Janeiro"},
    {"name":"Oscar Niemeyer Museum","city":"Curitiba"}
  ],
  "Canada":[
    {"name":"Royal Ontario Museum","city":"Toronto"},
    {"name":"National Gallery of Canada","city":"Ottawa"},
    {"name":"Montreal Museum of Fine Arts","city":"Montreal"}
  ],
  "Australia":[
    {"name":"National Gallery of Victoria","city":"Melbourne"},
    {"name":"Australian Museum","city":"Sydney"},
    {"name":"National Museum of Australia","city":"Canberra"}
  ],
  "South Africa":[
    {"name":"Zeitz Museum of Contemporary Art Africa","city":"Cape Town"},
    {"name":"Iziko South African Museum","city":"Cape Town"},
    {"name":"Apartheid Museum","city":"Johannesburg"}
  ]
};
const select=document.getElementById('countrySelect');
const container=document.getElementById('museumContainer');
Object.keys(museums).forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;select.appendChild(o)});
function render(){container.innerHTML='';museums[select.value].forEach(m=>{const d=document.createElement('div');d.className='museum-card';d.innerHTML=`<h3>${m.name}</h3><div class="city">${m.city}</div>`;container.appendChild(d)})}
select.onchange=render;select.selectedIndex=0;render();
