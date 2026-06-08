const countries = [
  {
    region: "Africa",
    items: [
      { name: "Kenya", code: "ke", capital: "Nairobi", landmark: "Maasai Mara", funFact: "Kenya is home to the Great Rift Valley, one of the most significant geological features on Earth.", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80" },
      { name: "Egypt", code: "eg", capital: "Cairo", landmark: "Pyramids of Giza", funFact: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.", image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f2f?auto=format&fit=crop&w=800&q=80" },
      { name: "South Africa", code: "za", capital: "Pretoria", landmark: "Table Mountain", funFact: "South Africa has 11 official languages, the most of any country in the world.", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80" },
      { name: "Morocco", code: "ma", capital: "Rabat", landmark: "Marrakech Medina", funFact: "The University of al-Qarawiyyin in Fez, founded in 859 AD, is the oldest existing degree-granting university.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80" },
      { name: "Nigeria", code: "ng", capital: "Abuja", landmark: "Zuma Rock", funFact: "Nigeria is the most populous country in Africa with over 220 million people.", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80" },
      { name: "Ethiopia", code: "et", capital: "Addis Ababa", landmark: "Lalibela Churches", funFact: "Ethiopia is the birthplace of coffee and uses its own calendar system with 13 months.", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80" },
      { name: "Tanzania", code: "tz", capital: "Dodoma", landmark: "Mount Kilimanjaro", funFact: "Mount Kilimanjaro is Africa's highest peak at 5,895 meters and one of the Seven Summits.", image: "https://images.unsplash.com/photo-1580865839939-bb5cb1f90a04?auto=format&fit=crop&w=800&q=80" },
      { name: "Ghana", code: "gh", capital: "Accra", landmark: "Cape Coast Castle", funFact: "Ghana was the first sub-Saharan African country to gain independence from colonial rule in 1957.", image: "https://images.unsplash.com/photo-1601665596378-c5a1e74f2d26?auto=format&fit=crop&w=800&q=80" },
      { name: "Senegal", code: "sn", capital: "Dakar", landmark: "Lake Retba", funFact: "Lake Retba (Lac Rose) is a pink-colored lake caused by Dunaliella salina algae.", image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=800&q=80" },
      { name: "Rwanda", code: "rw", capital: "Kigali", landmark: "Volcanoes National Park", funFact: "Rwanda is known as the 'Land of a Thousand Hills' and has the highest female parliamentary representation.", image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&w=800&q=80" },
      { name: "Madagascar", code: "mg", capital: "Antananarivo", landmark: "Avenue of the Baobabs", funFact: "Over 90% of Madagascar's wildlife is found nowhere else on Earth.", image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80" },
      { name: "Algeria", code: "dz", capital: "Algiers", landmark: "Tassili n'Ajjer", funFact: "Algeria is the largest country in Africa by land area.", image: "https://images.unsplash.com/photo-1612722528155-fb1272665bb8?auto=format&fit=crop&w=800&q=80" },
      { name: "Botswana", code: "bw", capital: "Gaborone", landmark: "Okavango Delta", funFact: "The Okavango Delta is the world's largest inland delta and a UNESCO World Heritage site.", image: "https://images.unsplash.com/photo-1547976152-acdd19b0d51a?auto=format&fit=crop&w=800&q=80" },
      { name: "Côte d'Ivoire", code: "ci", capital: "Yamoussoukro", landmark: "Basilica of Our Lady of Peace", funFact: "The Basilica of Our Lady of Peace in Yamoussoukro is the largest church in the world.", image: "https://images.unsplash.com/photo-1612412659261-1b816f1efba2?auto=format&fit=crop&w=800&q=80" },
      { name: "Zimbabwe", code: "zw", capital: "Harare", landmark: "Victoria Falls", funFact: "Victoria Falls is one of the Seven Natural Wonders of the World and the largest waterfall by mass.", image: "https://images.unsplash.com/photo-1559066653-06bcfb55e6af?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Asia",
    items: [
      { name: "Japan", code: "jp", capital: "Tokyo", landmark: "Mount Fuji", funFact: "Japan has over 6,800 islands and the world's oldest monarchy dating back to 660 BC.", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80" },
      { name: "China", code: "cn", capital: "Beijing", landmark: "Great Wall", funFact: "The Great Wall of China is over 21,000 km long and was built over 2,000 years.", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80" },
      { name: "India", code: "in", capital: "New Delhi", landmark: "Taj Mahal", funFact: "India is the world's largest democracy and has 22 official languages.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" },
      { name: "Thailand", code: "th", capital: "Bangkok", landmark: "Wat Phra Kaew", funFact: "Thailand is the only Southeast Asian country never colonized by a European power.", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80" },
      { name: "Indonesia", code: "id", capital: "Jakarta", landmark: "Borobudur Temple", funFact: "Indonesia is the world's largest archipelagic state with over 17,000 islands.", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80" },
      { name: "Turkey", code: "tr", capital: "Ankara", landmark: "Hagia Sophia", funFact: "Turkey spans two continents — Europe and Asia — separated by the Bosphorus Strait.", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80" },
      { name: "Vietnam", code: "vn", capital: "Hanoi", landmark: "Ha Long Bay", funFact: "Ha Long Bay has over 1,600 limestone islands and islets in the Gulf of Tonkin.", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
      { name: "Nepal", code: "np", capital: "Kathmandu", landmark: "Mount Everest", funFact: "Nepal is home to Mount Everest, the world's highest peak at 8,848 meters.", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80" },
      { name: "South Korea", code: "kr", capital: "Seoul", landmark: "Gyeongbokgung Palace", funFact: "South Korea has the world's fastest internet speeds and highest smartphone penetration.", image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80" },
      { name: "United Arab Emirates", code: "ae", capital: "Abu Dhabi", landmark: "Burj Khalifa", funFact: "The Burj Khalifa is the world's tallest building at 828 meters (2,717 feet).", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
      { name: "Cambodia", code: "kh", capital: "Phnom Penh", landmark: "Angkor Wat", funFact: "Angkor Wat is the largest religious monument in the world, built in the 12th century.", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80" },
      { name: "Philippines", code: "ph", capital: "Manila", landmark: "Chocolate Hills", funFact: "The Philippines is an archipelago of 7,641 islands with the world's longest Christmas season.", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80" },
      { name: "Saudi Arabia", code: "sa", capital: "Riyadh", landmark: "Al-Masjid an-Nabawi", funFact: "Saudi Arabia is the birthplace of Islam and home to its two holiest cities — Mecca and Medina.", image: "https://images.unsplash.com/photo-1598945123321-0cf2be84e6b1?auto=format&fit=crop&w=800&q=80" },
      { name: "Singapore", code: "sg", capital: "Singapore", landmark: "Marina Bay Sands", funFact: "Singapore is a city-state and one of only three surviving city-states in the world.", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" },
      { name: "Malaysia", code: "my", capital: "Kuala Lumpur", landmark: "Petronas Towers", funFact: "The Petronas Towers were the tallest buildings in the world from 1998 to 2004.", image: "https://images.unsplash.com/photo-1577717903315-1691ae25abf8?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Europe",
    items: [
      { name: "France", code: "fr", capital: "Paris", landmark: "Eiffel Tower", funFact: "The Eiffel Tower was built for the 1889 World's Fair and was originally intended to be temporary.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
      { name: "Italy", code: "it", capital: "Rome", landmark: "Colosseum", funFact: "Italy has the most UNESCO World Heritage Sites of any country in the world.", image: "https://images.unsplash.com/photo-1552832230-c0197DD311b5?auto=format&fit=crop&w=800&q=80" },
      { name: "Greece", code: "gr", capital: "Athens", landmark: "Acropolis", funFact: "Greece has over 6,000 islands, of which only about 227 are inhabited.", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80" },
      { name: "Spain", code: "es", capital: "Madrid", landmark: "Sagrada Familia", funFact: "La Sagrada Familia has been under construction since 1882 and is expected to finish in 2026.", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80" },
      { name: "United Kingdom", code: "gb", capital: "London", landmark: "Big Ben", funFact: "Big Ben is actually the nickname of the great bell inside the Elizabeth Tower, not the clock itself.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" },
      { name: "Germany", code: "de", capital: "Berlin", landmark: "Brandenburg Gate", funFact: "Berlin has more bridges than Venice — over 1,700 bridges cross its waterways.", image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80" },
      { name: "Netherlands", code: "nl", capital: "Amsterdam", landmark: "Anne Frank House", funFact: "The Netherlands has over 1,000 windmills and more bicycles than people.", image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80" },
      { name: "Russia", code: "ru", capital: "Moscow", landmark: "Saint Basil's Cathedral", funFact: "Russia is the largest country in the world, spanning 11 time zones across two continents.", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80" },
      { name: "Switzerland", code: "ch", capital: "Bern", landmark: "Matterhorn", funFact: "Switzerland has 4 official languages and the world's longest railway tunnel at 57 km.", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80" },
      { name: "Portugal", code: "pt", capital: "Lisbon", landmark: "Tower of Belém", funFact: "Portugal has the world's oldest bookstore — Bertrand Bookshop, founded in 1732.", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80" },
      { name: "Sweden", code: "se", capital: "Stockholm", landmark: "Vasa Museum", funFact: "Sweden has the most McDonald's restaurants per capita in Europe and gives out Nobel Prizes.", image: "https://images.unsplash.com/photo-1529262724782-7ba9c3d4cc71?auto=format&fit=crop&w=800&q=80" },
      { name: "Iceland", code: "is", capital: "Reykjavik", landmark: "Northern Lights", funFact: "Iceland has no army and is one of the most volcanically active countries on Earth.", image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=800&q=80" },
      { name: "Ireland", code: "ie", capital: "Dublin", landmark: "Cliffs of Moher", funFact: "St. Patrick, Ireland's patron saint, was actually born in Britain, not Ireland.", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80" },
      { name: "Austria", code: "at", capital: "Vienna", landmark: "Schönbrunn Palace", funFact: "Vienna has been ranked the world's most livable city multiple times by the EIU.", image: "https://images.unsplash.com/photo-1558637845-2f0b9c2d5d9e?auto=format&fit=crop&w=800&q=80" },
      { name: "Poland", code: "pl", capital: "Warsaw", landmark: "Wawel Castle", funFact: "Poland is home to the world's largest castle by land area — the Malbork Castle.", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Americas",
    items: [
      { name: "Brazil", code: "br", capital: "Brasília", landmark: "Christ the Redeemer", funFact: "Brazil is home to the Amazon Rainforest, which produces 20% of the world's oxygen.", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80" },
      { name: "Mexico", code: "mx", capital: "Mexico City", landmark: "Chichen Itza", funFact: "Mexico introduced chocolate, chilies, and corn to the world and has 35 UNESCO World Heritage sites.", image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80" },
      { name: "United States", code: "us", capital: "Washington, D.C.", landmark: "Statue of Liberty", funFact: "The US has the world's largest economy and spans six time zones across 50 states.", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80" },
      { name: "Peru", code: "pe", capital: "Lima", landmark: "Machu Picchu", funFact: "Peru has 90% of the world's quinoa production and over 3,000 varieties of potato.", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80" },
      { name: "Argentina", code: "ar", capital: "Buenos Aires", landmark: "Iguazu Falls", funFact: "Argentina is the birthplace of tango and has the longest mountain range — the Andes on its border.", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=800&q=80" },
      { name: "Colombia", code: "co", capital: "Bogotá", landmark: "Cartagena Old City", funFact: "Colombia produces some of the world's finest coffee and is the most biodiverse country per square kilometer.", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80" },
      { name: "Canada", code: "ca", capital: "Ottawa", landmark: "Niagara Falls", funFact: "Canada has the longest coastline of any country at 202,080 km and more lakes than the rest of the world combined.", image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?auto=format&fit=crop&w=800&q=80" },
      { name: "Cuba", code: "cu", capital: "Havana", landmark: "Havana Old City", funFact: "Cuba has one of the world's highest literacy rates (99.8%) and is home to the smallest bird — the bee hummingbird.", image: "https://images.unsplash.com/photo-1500209182897-196d20f80b37?auto=format&fit=crop&w=800&q=80" },
      { name: "Chile", code: "cl", capital: "Santiago", landmark: "Easter Island", funFact: "Chile is the world's longest north-south country at 4,300 km and includes Easter Island in the Pacific.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
      { name: "Costa Rica", code: "cr", capital: "San José", landmark: "Arenal Volcano", funFact: "Costa Rica has no standing army and generates over 98% of its electricity from renewable sources.", image: "https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?auto=format&fit=crop&w=800&q=80" },
      { name: "Jamaica", code: "jm", capital: "Kingston", landmark: "Dunn's River Falls", funFact: "Jamaica has the most churches per square mile of any country and invented reggae music.", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80" },
      { name: "Dominican Republic", code: "do", capital: "Santo Domingo", landmark: "Pico Duarte", funFact: "Santo Domingo is the oldest European settlement in the Americas, founded in 1496.", image: "https://images.unsplash.com/photo-1518691340146-7e6325d480c2?auto=format&fit=crop&w=800&q=80" },
      { name: "Panama", code: "pa", capital: "Panama City", landmark: "Panama Canal", funFact: "The Panama Canal connects the Atlantic and Pacific Oceans, saving 13,000 km of travel around South America.", image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5e1?auto=format&fit=crop&w=800&q=80" },
      { name: "Ecuador", code: "ec", capital: "Quito", landmark: "Galápagos Islands", funFact: "The Galápagos Islands inspired Charles Darwin's theory of evolution by natural selection.", image: "https://images.unsplash.com/photo-1536708880921-9a9300a39e1a?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Oceania",
    items: [
      { name: "Australia", code: "au", capital: "Canberra", landmark: "Sydney Opera House", funFact: "Australia has over 10,000 beaches — you could visit a new beach every day for 27 years.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" },
      { name: "New Zealand", code: "nz", capital: "Wellington", landmark: "Milford Sound", funFact: "New Zealand was the first self-governing country to grant all women the right to vote in 1893.", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80" },
      { name: "Fiji", code: "fj", capital: "Suva", landmark: "Coral Coast", funFact: "Fiji is composed of over 330 islands, of which about 110 are permanently inhabited.", image: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?auto=format&fit=crop&w=800&q=80" },
      { name: "Papua New Guinea", code: "pg", capital: "Port Moresby", landmark: "Kokoda Trail", funFact: "Papua New Guinea is the most linguistically diverse country with over 850 indigenous languages.", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" },
      { name: "Samoa", code: "ws", capital: "Apia", landmark: "To Sua Ocean Trench", funFact: "Samoa was the first country to welcome the new millennium on January 1, 2000.", image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80" },
      { name: "Solomon Islands", code: "sb", capital: "Honiara", landmark: "Marovo Lagoon", funFact: "The Solomon Islands saw some of the fiercest naval battles of World War II, especially around Guadalcanal.", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Middle East",
    items: [
      { name: "Iran", code: "ir", capital: "Tehran", landmark: "Persepolis", funFact: "Iran is home to one of the world's oldest continuous civilizations, dating back over 5,000 years.", image: "https://images.unsplash.com/photo-1603021289472-2e67ba3168c2?auto=format&fit=crop&w=800&q=80" },
      { name: "Israel", code: "il", capital: "Jerusalem", landmark: "Western Wall", funFact: "Israel has more museums per capita than any other country and is a global leader in water recycling.", image: "https://images.unsplash.com/photo-1580836513693-57b3f7b7aa96?auto=format&fit=crop&w=800&q=80" },
      { name: "Jordan", code: "jo", capital: "Amman", landmark: "Petra", funFact: "Petra, carved into rose-red cliffs, was one of the New Seven Wonders of the World.", image: "https://images.unsplash.com/photo-1581548742271-12cf54dfd30b?auto=format&fit=crop&w=800&q=80" },
      { name: "Oman", code: "om", capital: "Muscat", landmark: "Sultan Qaboos Grand Mosque", funFact: "Oman is one of the oldest independent states in the Arab world and was never colonized by Britain.", image: "https://images.unsplash.com/photo-1599921843115-179a651c8501?auto=format&fit=crop&w=800&q=80" },
      { name: "Qatar", code: "qa", capital: "Doha", landmark: "Museum of Islamic Art", funFact: "Qatar has one of the highest GDP per capita in the world, driven by natural gas exports.", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "South Asia",
    items: [
      { name: "Pakistan", code: "pk", capital: "Islamabad", landmark: "Badshahi Mosque", funFact: "Pakistan is home to K2, the world's second-highest mountain, and the ancient Indus Valley Civilization.", image: "https://images.unsplash.com/photo-1585338453768-c04ea8b75cf7?auto=format&fit=crop&w=800&q=80" },
      { name: "Bangladesh", code: "bd", capital: "Dhaka", landmark: "Sundarbans Mangrove Forest", funFact: "Bangladesh is home to the Sundarbans, the world's largest mangrove forest and habitat of the Bengal tiger.", image: "https://images.unsplash.com/photo-1612506413467-ad4ba9cea7ff?auto=format&fit=crop&w=800&q=80" },
      { name: "Sri Lanka", code: "lk", capital: "Sri Jayawardenepura Kotte", landmark: "Sigiriya Rock Fortress", funFact: "Sri Lanka is one of the world's top tea producers and was the first country to have a female prime minister.", image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80" },
      { name: "Myanmar", code: "mm", capital: "Naypyidaw", landmark: "Shwedagon Pagoda", funFact: "Myanmar's Shwedagon Pagoda is covered in 60 tons of gold leaf and topped with 5,448 diamonds.", image: "https://images.unsplash.com/photo-1590591767493-0a6bb8d2931a?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Caribbean & Central America",
    items: [
      { name: "Bahamas", code: "bs", capital: "Nassau", landmark: "Dean's Blue Hole", funFact: "The Bahamas has the world's third-largest wine cellar and over 700 islands with the clearest water on Earth.", image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80" },
      { name: "Barbados", code: "bb", capital: "Bridgetown", landmark: "Harrison's Cave", funFact: "Barbados is the birthplace of rum and was the first Caribbean island with a UNESCO-listed capital.", image: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?auto=format&fit=crop&w=800&q=80" },
      { name: "Guatemala", code: "gt", capital: "Guatemala City", landmark: "Tikal", funFact: "Tikal was one of the most powerful cities of the ancient Maya civilization, reaching its peak around 700 AD.", image: "https://images.unsplash.com/photo-1560099689-c3e1b5acef58?auto=format&fit=crop&w=800&q=80" },
    ]
  }
];

const flatCountries = countries.flatMap(r => r.items);
const countryMap = Object.fromEntries(flatCountries.map(c => [c.name.toLowerCase(), c]));
const flagUrl = (code) => `https://flagcdn.com/w160/${code}.png`;

function getCountryByName(name) {
  return countryMap[name.toLowerCase()] || null;
}

export default countries;
export { flatCountries, countryMap, getCountryByName, flagUrl };
