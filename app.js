function museum(name, city, type, highlight, description) {
  return { name, city, type, highlight, description };
}

const museums = {
  "France": [
    museum("Louvre Museum", "Paris", "Art and history", "Mona Lisa", "A landmark collection spanning ancient civilizations, European painting, sculpture, and decorative arts."),
    museum("Musée d'Orsay", "Paris", "Impressionist art", "Van Gogh and Monet galleries", "A former railway station filled with nineteenth-century art and major Impressionist works."),
    museum("Centre Pompidou", "Paris", "Modern art", "Inside-out architecture", "A bold modern art museum known for contemporary collections, design, and experimental exhibitions.")
  ],
  "United States": [
    museum("Metropolitan Museum of Art", "New York", "Art and culture", "Temple of Dendur", "One of the world's largest art museums, with collections from ancient history through modern design."),
    museum("Art Institute of Chicago", "Chicago", "Fine art", "A Sunday on La Grande Jatte", "A major museum known for Impressionist painting, American art, architecture, and design."),
    museum("Los Angeles County Museum of Art", "Los Angeles", "Global art", "Urban Light", "A wide-ranging museum with ancient, modern, contemporary, and film-connected art collections.")
  ],
  "United Kingdom": [
    museum("British Museum", "London", "World history", "Rosetta Stone", "A global history museum with objects from ancient civilizations and cultures around the world."),
    museum("Tate Modern", "London", "Modern art", "Turbine Hall installations", "A large modern and contemporary art museum housed in a former power station."),
    museum("Ashmolean Museum", "Oxford", "Art and archaeology", "Ancient Egyptian galleries", "A university museum with deep collections in art, archaeology, coins, and cultural history.")
  ],
  "Italy": [
    museum("Uffizi Gallery", "Florence", "Renaissance art", "The Birth of Venus", "A celebrated Renaissance museum with masterpieces by Botticelli, Leonardo, Raphael, and Michelangelo."),
    museum("Vatican Museums", "Vatican City", "Art and religion", "Sistine Chapel", "A vast collection of papal art, classical sculpture, maps, tapestries, and sacred spaces."),
    museum("Galleria Borghese", "Rome", "Painting and sculpture", "Bernini sculptures", "An intimate villa museum known for Baroque sculpture and paintings by Caravaggio, Raphael, and Titian.")
  ],
  "Egypt": [
    museum("Egyptian Museum", "Cairo", "Ancient history", "Royal mummies", "A classic collection of ancient Egyptian artifacts, sculpture, jewelry, and funerary objects."),
    museum("Grand Egyptian Museum", "Giza", "Ancient history", "Tutankhamun collection", "A major museum near the pyramids focused on ancient Egyptian heritage and monumental displays."),
    museum("National Museum of Egyptian Civilization", "Cairo", "Civilization history", "Royal Mummies Hall", "A museum telling Egypt's story across prehistoric, pharaonic, Coptic, Islamic, and modern periods."),
    museum("Coptic Museum", "Cairo", "Religious history", "Coptic textiles and icons", "A museum dedicated to Egypt's Coptic Christian art, manuscripts, architecture, and daily life.")
  ],
  "Mexico": [
    museum("National Museum of Anthropology", "Mexico City", "Anthropology", "Aztec Sun Stone", "A major museum exploring Indigenous cultures, archaeology, and the civilizations of Mexico."),
    museum("Museo Frida Kahlo", "Mexico City", "Artist house museum", "The Blue House", "Frida Kahlo's former home, preserving personal objects, artworks, studio spaces, and family history."),
    museum("Museo Soumaya", "Mexico City", "Art collection", "Rodin sculpture collection", "A striking museum with European masters, Mexican art, decorative objects, and sculpture.")
  ],
  "Japan": [
    museum("Tokyo National Museum", "Tokyo", "Japanese art and history", "Samurai armor", "Japan's oldest national museum, with art, archaeology, textiles, swords, and Buddhist sculpture."),
    museum("National Museum of Modern Art", "Tokyo", "Modern art", "Modern Japanese painting", "A focused collection of Japanese modern art, craft, photography, and design."),
    museum("Kyoto National Museum", "Kyoto", "Traditional art", "Buddhist sculpture", "A museum preserving Kyoto's artistic heritage, including ceramics, calligraphy, painting, and sacred objects.")
  ],
  "Spain": [
    museum("Museo Nacional del Prado", "Madrid", "European painting", "Las Meninas", "Spain's great painting museum, especially strong in Velazquez, Goya, El Greco, and European masters."),
    museum("Museo Reina Sofia", "Madrid", "Modern art", "Guernica", "A modern and contemporary art museum best known for Picasso, Dali, Miro, and Spanish avant-garde work."),
    museum("Guggenheim Museum Bilbao", "Bilbao", "Contemporary art", "Titanium building design", "A contemporary art museum famous for its Frank Gehry architecture and large-scale installations.")
  ],
  "Germany": [
    museum("Pergamon Museum", "Berlin", "Archaeology", "Ishtar Gate", "A museum known for monumental ancient architecture, classical antiquities, and Islamic art."),
    museum("Alte Pinakothek", "Munich", "Old master paintings", "Rubens collection", "A major European painting collection with works from the Middle Ages through the eighteenth century."),
    museum("Stadel Museum", "Frankfurt", "Fine art", "Old masters to modern art", "A broad art museum with painting, sculpture, prints, photography, and contemporary works.")
  ],
  "Netherlands": [
    museum("Rijksmuseum", "Amsterdam", "Dutch art and history", "The Night Watch", "A national museum centered on Dutch art, decorative arts, and the Golden Age."),
    museum("Van Gogh Museum", "Amsterdam", "Artist museum", "Sunflowers", "A museum dedicated to Van Gogh's paintings, drawings, letters, and artistic development."),
    museum("Mauritshuis", "The Hague", "Dutch painting", "Girl with a Pearl Earring", "A compact museum with Dutch and Flemish masterpieces in a historic city palace.")
  ],
  "Greece": [
    museum("Acropolis Museum", "Athens", "Ancient history", "Parthenon sculptures", "A museum focused on the archaeology and sculpture of the Acropolis and ancient Athens."),
    museum("National Archaeological Museum", "Athens", "Archaeology", "Mask of Agamemnon", "A major collection of Greek antiquities, sculpture, bronze work, pottery, and jewelry."),
    museum("Museum of Byzantine Culture", "Thessaloniki", "Byzantine history", "Mosaics and icons", "A museum exploring Byzantine and post-Byzantine culture through art, faith, and daily life.")
  ],
  "China": [
    museum("Palace Museum", "Beijing", "Imperial history", "Forbidden City", "A vast imperial palace museum with architecture, ceramics, painting, bronzes, clocks, and court objects."),
    museum("Shanghai Museum", "Shanghai", "Chinese art", "Ancient bronzes", "A major collection of Chinese bronzes, ceramics, calligraphy, painting, jade, and furniture."),
    museum("National Museum of China", "Beijing", "National history", "Road to Rejuvenation exhibitions", "A large museum presenting Chinese history, culture, archaeology, and modern national narratives.")
  ],
  "India": [
    museum("Indian Museum", "Kolkata", "Natural and cultural history", "Bharhut sculptures", "One of India's oldest museums, with archaeology, art, geology, fossils, and natural history collections."),
    museum("National Museum", "New Delhi", "Indian history", "Harappan artifacts", "A major museum covering Indian civilization through sculpture, manuscripts, textiles, jewelry, and painting."),
    museum("Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", "Mumbai", "Art and history", "Miniature paintings", "A historic museum with Indian art, archaeology, decorative arts, and natural history galleries.")
  ],
  "Brazil": [
    museum("Sao Paulo Museum of Art", "Sao Paulo", "Art museum", "Glass easel displays", "A leading art museum known for European, Brazilian, African, and Asian works in a bold modern building."),
    museum("Museum of Tomorrow", "Rio de Janeiro", "Science museum", "Future-focused exhibits", "An interactive science museum exploring sustainability, climate, technology, and human choices."),
    museum("Oscar Niemeyer Museum", "Curitiba", "Art and architecture", "Eye-shaped annex", "A museum for visual arts, design, and architecture named for architect Oscar Niemeyer.")
  ],
  "Canada": [
    museum("Royal Ontario Museum", "Toronto", "World culture and natural history", "Dinosaur galleries", "A large museum with natural history, world cultures, fossils, minerals, textiles, and art."),
    museum("National Gallery of Canada", "Ottawa", "Fine art", "Canadian and Indigenous art", "A national art museum with Canadian, Indigenous, European, American, and contemporary collections."),
    museum("Montreal Museum of Fine Arts", "Montreal", "Fine art", "Decorative arts pavilion", "A wide-ranging museum with Canadian, international, decorative, design, and contemporary art.")
  ],
  "Australia": [
    museum("National Gallery of Victoria", "Melbourne", "Art museum", "Great Hall stained glass ceiling", "Australia's oldest public art museum, with international, Australian, design, and decorative art."),
    museum("Australian Museum", "Sydney", "Natural history", "First Nations collections", "A natural history and culture museum with science, biodiversity, minerals, fossils, and Indigenous heritage."),
    museum("National Museum of Australia", "Canberra", "National history", "Australian journeys galleries", "A museum focused on Australian stories, First Nations history, environment, and national identity.")
  ],
  "South Africa": [
    museum("Zeitz Museum of Contemporary Art Africa", "Cape Town", "Contemporary art", "Silo architecture", "A major contemporary art museum focused on artists from Africa and the African diaspora."),
    museum("Iziko South African Museum", "Cape Town", "Natural and cultural history", "Whale Well", "A museum with natural history, archaeology, marine life, fossils, and cultural collections."),
    museum("Apartheid Museum", "Johannesburg", "History museum", "Apartheid-era exhibits", "A powerful museum documenting apartheid, resistance, democracy, and South Africa's modern history.")
  ]
};

const select = document.getElementById("countrySelect");
const container = document.getElementById("museumContainer");

const countryList = Object.keys(museums).sort();

const placeholderOption = document.createElement("option");
placeholderOption.value = "";
placeholderOption.textContent = "Choose a country";
placeholderOption.disabled = true;
placeholderOption.selected = true;
select.appendChild(placeholderOption);

countryList.forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  select.appendChild(option);
});

function render() {
  container.innerHTML = "";
  const items = museums[select.value] || [];

  if (items.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-state";
    message.textContent = select.value
      ? "No museums available for this selection."
      : "Please choose a country from the dropdown.";
    container.appendChild(message);
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const location = document.createElement("div");
    const type = document.createElement("div");
    const highlight = document.createElement("p");
    const description = document.createElement("p");

    card.className = "museum-card";
    location.className = "city";
    type.className = "museum-type";
    highlight.className = "highlight";
    description.className = "description";

    title.textContent = item.name;
    location.textContent = item.city;
    type.textContent = item.type;
    highlight.textContent = `Must-see: ${item.highlight}`;
    description.textContent = item.description;

    card.append(title, location, type, highlight, description);
    container.appendChild(card);
  });
}

select.addEventListener("change", render);
render();
