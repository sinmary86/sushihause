const dataDishes = [

    {
      id: 1,
      price: "12.00",
      img: 'alaska',
      name: 'Alaska',
      description: 'Lachs und Gurke mit Sesam',
      category: 'INSIDE OUT ROLL'
  },
  
  {
    id: 2,
    price: parseFloat("11.90"),
    img: 'drakon',
    name: 'Crunchy Ebi',
    description: 'Knuspriger Teigmantel mit Garnelen, Gurke und eingelegter Rettich',
    category: 'TEMPURA'
  },
  
  {
    id: 3,
    price: '5.20',
    img: 'edamame',
    name: 'Edamame',
    description: 'Grüne junge Sojabohnen im gekochtem Salzwasser',
    category: 'VORSPEISE'
  },
  
  {
      id: 4,
      price: '18.90',
      img: 'filadelfia',
      name: 'Filadelfia',
      description: 'mit Avocado, frische Käse, Gurke und Lachs.',
      category: 'INSIDE OUT ROLL'
  },
  
  {
    id: 5,
    price: '3.10',
    img: 'gunkan-tuna',
    name: 'Maguro Gunkan',
    description: 'mit pikanter, hausgemachter Thunfischcreme',
    category: 'GUNKAN'
  },
  
  {
    id: 6,
    price: '4.30',
    img: 'gunkan-eel',
    name: 'Sake Gunkan',
    description: 'mit hausgemachter Lachscreme',
    category: 'GUNKAN'
  },
  
  {
    id: 7,
    price: "5.10",
    img: 'kaiso-salat',
    name: 'Wakame',
    description: 'Seetangsalat mit Sesam',
    category: 'VORSPEISE'
  },
  
  {
    id: 8,
    price: '17.10',
    img: 'kalifornia',
    name: 'Kalifornia',
    description: 'mit Lachs, Avocado, Frischkäse und Masago',
    category: 'INSIDE OUT ROLL'
  },
  
  {
    id: 9,
    price: '5.50',
    img: 'kappa',
    name: 'Kappa maki',
    description: 'mit Gurke',
    category: 'MAKI'
  },
  
  {
    id: 10,
    price: '3.10',
    img: 'gunkan',
    name: 'Ikura',
    description: 'mit Lachskaviar',
    category: 'GUNKAN'
  },
  
  {
    id: 11,
    price: '8.10',
    img: 'maki-salmon',
    name: 'Sake maki',
    description: 'mit Lachs',
    category: 'MAKI'
  },

  {
    id: 12,
    price: '6.30',
    img: 'maki-tuna',
    name: 'Tekka maki',
    description: 'mit Thunfisch',
    category: 'MAKI'
  },

 {
    id: 13,
    price: '7.10',
    img: 'miso-soup',
    name: 'Miso Suppe',
    description: 'mit Tofu',
    category: 'VORSPEISE'
  },

  {
    id: 14,
    price: '15.90',
    img: 'sakramento',
    name: 'Spicy Sakramento',
    description: 'gefüllt mit Avocado, Lachs und Frischkäse, außen mit japanischer scharfer Mayonnaise',
    category: 'TEMPURA'
  },
 
  {
    id: 15,
    price: '27.99',
    img: 'set-klassik',
    name: 'Sushi set KLASSIK',
    description: '4 Sake Maki, 4 Miami Roll, 4 Power Roll, 2 Sake Nigiri',
    category: 'SUSHI SET'
  },

  {
    id: 16,
    price: '67.99',
    img: 'set-hit',
    name: 'Sushi set PARTY',
    description: '8 Toronto Maki, 8 Kappa Maki, 8 Tuna Rolls Inside Out, 8 Grilled Salmon Roll, 5 Sake Gunkan, 5 Tuna Nigiri',
    category: 'SUSHI SET'
  },

  {
    id: 17,
    price: '4.40',
    img: 'sussi-salmon',
    name: 'Sake Nigiri',
    description: 'mit Lachs',
    category: 'NIGIRI'
  },

  {
    id: 18,
    price: '4.50',
    img: 'sussi-schrimp',
    name: 'Ebi Nigiri',
    description: 'mit Riesengarnelen',
    category: 'NIGIRI'
  },

  {
    id: 19,
    price: '17.10',
    img: 'unagi',
    name: 'Unagi roll',
    description: 'mit Avocado, Frischkäse, Aal',
    category: 'INSIDE OUT ROLL'
  },

  {
    id: 20,
    price: '10.10',
    img: 'avocado-salat',
    name: 'Avocado Salфе',
    description: 'mit Garnelen, Avocado, Champignons, roter Kaviar',
    category: 'VORSPEISE'
  },

  {
    id: 21,
    price: '5.70',
    img: 'avocado-maki',
    name: 'Abogado',
    description: 'mit Avocado',
    category: 'MAKI'
  },

  {
    id: 22,
    price: '3.30',
    img: 'tamago',
    name: 'Tamago',
    description: 'mit Japanisches Omelett',
    category: 'NIGIRI'
  },

  {
    id: 23,
    price: '4.80',
    img: 'hotate',
    name: 'Hotate',
    description: 'mit Jakobsmuschel',
    category: 'NIGIRI'
  },

  {
    id: 24,
    price: '3.10',
    img: 'chuka',
    name: 'Chuka',
    description: 'mit Algen',
    category: 'GUNKAN'
  },

  {
    id: 25,
    price: '10.00',
    img: 'grata',
    name: 'Nongrata',
    description: 'mit geräucherter Aal, Käse, Avocado, Masago',
    category: 'TEMPURA'
  },

  {
    id: 26,
    price: 12.20,
    img: 'hawai',
    name: 'Hawaii',
    description: 'Knusprige Roll mit Ananas und Tigergarnele',
    category: 'TEMPURA'
  },

  {
    id: 27,
    price: '37.50',
    img: 'tempura-set',
    name: 'Sushi set TEMPURA',
    description: '8 Hawaii, 8 Spicy Sakramento, 2 Nongrata',
    category: 'SUSHI SET'
  },

  {
    id: 28,
    price: '47.19',
    img: 'set-lachs',
    name: 'Sushi set HIT',
    description: '8 Filadelfia, 8 Kappa Maki, 2 Sake Nigiri, 2 Maguro Nigiri, 8 Kalifornia',
    category: 'SUSHI SET'
  }
  ] 
  
  export default dataDishes;
  
  
  

