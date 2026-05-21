const countries = [
  {
    region: "Africa",
    items: [
      { name: "Kenya", landmark: "Maasai Mara", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80" },
      { name: "Egypt", landmark: "Pyramids of Giza", image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f2f?auto=format&fit=crop&w=800&q=80" },
      { name: "South Africa", landmark: "Table Mountain", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80" },
      { name: "Morocco", landmark: "Marrakech Medina", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80" },
      { name: "Nigeria", landmark: "Zuma Rock", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80" },
      { name: "Ethiopia", landmark: "Lalibela Churches", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80" },
      { name: "Tanzania", landmark: "Mount Kilimanjaro", image: "https://images.unsplash.com/photo-1580865839939-bb5cb1f90a04?auto=format&fit=crop&w=800&q=80" },
      { name: "Ghana", landmark: "Cape Coast Castle", image: "https://images.unsplash.com/photo-1601665596378-c5a1e74f2d26?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Asia",
    items: [
      { name: "Japan", landmark: "Mount Fuji", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80" },
      { name: "China", landmark: "Great Wall", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80" },
      { name: "India", landmark: "Taj Mahal", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" },
      { name: "Thailand", landmark: "Wat Phra Kaew", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80" },
      { name: "Indonesia", landmark: "Borobudur Temple", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80" },
      { name: "Turkey", landmark: "Hagia Sophia", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80" },
      { name: "Vietnam", landmark: "Ha Long Bay", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
      { name: "Nepal", landmark: "Himalaya Mountains", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Europe",
    items: [
      { name: "France", landmark: "Eiffel Tower", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
      { name: "Italy", landmark: "Colosseum", image: "https://images.unsplash.com/photo-1552832230-c0197DD311b5?auto=format&fit=crop&w=800&q=80" },
      { name: "Greece", landmark: "Acropolis", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80" },
      { name: "Spain", landmark: "Sagrada Familia", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80" },
      { name: "United Kingdom", landmark: "Big Ben", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" },
      { name: "Germany", landmark: "Brandenburg Gate", image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80" },
      { name: "Netherlands", landmark: "Anne Frank House", image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80" },
      { name: "Russia", landmark: "Saint Basil Cathedral", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Americas",
    items: [
      { name: "Brazil", landmark: "Christ the Redeemer", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80" },
      { name: "Mexico", landmark: "Chichen Itza", image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80" },
      { name: "United States", landmark: "Statue of Liberty", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80" },
      { name: "Peru", landmark: "Machu Picchu", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80" },
      { name: "Argentina", landmark: "Iguazu Falls", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=800&q=80" },
      { name: "Colombia", landmark: "Cartagena Old City", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80" },
      { name: "Canada", landmark: "Niagara Falls", image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?auto=format&fit=crop&w=800&q=80" },
      { name: "Cuba", landmark: "Havana Old City", image: "https://images.unsplash.com/photo-1500209182897-196d20f80b37?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    region: "Oceania",
    items: [
      { name: "Australia", landmark: "Sydney Opera House", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" },
      { name: "New Zealand", landmark: "Milford Sound", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80" },
      { name: "Fiji", landmark: "Coral Coast", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80" },
      { name: "Papua New Guinea", landmark: "Kokoda Trail", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" },
    ]
  }
];

export default countries;
